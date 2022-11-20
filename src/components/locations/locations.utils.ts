import { getYear } from 'date-fns';

import {
  LocationPinImagesType,
  LocationsType,
} from '../../constants/locations';
import { WEATHER_CODES } from '../../constants/weather-codes';

interface LocationMarkType {
  value: number;
  label: string;
}

export const THIS_YEAR = getYear(new Date());

export function getMarks(locations: LocationsType[]): LocationMarkType[] {
  const sortedLocations = sortLocationsByYear(locations);
  const locationsWithActualYear = addActualYearToLocations(sortedLocations);

  const MAX_LOCATION_DIFFERENCE =
    (sortedLocations[sortedLocations.length - 1].year -
      sortedLocations[0].year) *
    0.075;

  const formattedMarks: LocationMarkType[] = [];
  locationsWithActualYear.forEach(location => {
    const marksOfLastYears = formattedMarks.filter(
      mark => mark.value + MAX_LOCATION_DIFFERENCE >= location.year
    );

    if (marksOfLastYears.some(mark => mark.label !== '')) {
      formattedMarks.push({
        value: location.year,
        label: '',
      });
    } else {
      formattedMarks.push({
        value: location.year,
        label: abbreviateYear(location.year),
      });
    }
  });

  return formattedMarks;
}

export function sortLocationsByYear(
  locations: LocationsType[]
): LocationsType[] {
  return locations.sort((a, b) => a.year - b.year);
}

export function abbreviateYear(year: number) {
  return `'${year.toString().slice(-2)}`;
}

export function addActualYearToLocations(
  sortedLocations: LocationsType[]
): LocationsType[] {
  const lastLocation = sortedLocations[sortedLocations.length - 1];
  if (lastLocation.year === getYear(new Date())) {
    return sortedLocations;
  }
  return [...sortedLocations, { ...lastLocation, year: getYear(new Date()) }];
}

export function getLastLocation(
  year: number,
  locations: LocationsType[]
): LocationsType {
  const sortedLocations = sortLocationsByYear(locations).reverse();
  return (
    sortedLocations.find(location => location.year <= year) ?? locations[0]
  );
}

export function getWeatherImagePath(
  weatherCode: number | undefined,
  isDay: boolean
): string {
  if (!weatherCode) {
    return `${WEATHER_CODES.get(1000)}Day.svg`;
  }
  const dayOrNight = isDay ? 'Day' : 'Night';
  return `${WEATHER_CODES.get(weatherCode)}${dayOrNight}.svg`;
}

export function getPinImagePath(
  locationYear: number,
  bornYear: number,
  locationPinImages: LocationPinImagesType[]
): string | undefined {
  const age = locationYear - bornYear;
  const sortedPinImages = locationPinImages.sort((imgA, imgB) => {
    return imgB.fromAge - imgA.fromAge;
  });
  let pinImage: LocationPinImagesType | undefined;
  sortedPinImages.every(img => {
    if (img.fromAge <= age) {
      pinImage = img;
      return false;
    }
    return true;
  });
  return pinImage?.imageName;
}
