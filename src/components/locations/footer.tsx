import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchWeather } from '../../api';
import { LocationsType } from '../../constants/locations';
import { WEATHER_CODES } from '../../constants/weather-codes';

import { getWeatherImagePath } from './locations.utils';
import { Temperature } from './temperature';

interface Props {
  location: LocationsType;
}

export function Footer({ location }: Props) {
  const { data: weather, isLoading } = useQuery(
    ['weather', location.city],
    () => fetchWeather(location)
  );
  const weatherCode = useMemo(
    () => weather?.current?.condition?.code,
    [weather]
  );
  const images = useMemo(() => require.context('./images/weather', false), []);
  const imageUrl = useMemo(
    () =>
      images(`./${getWeatherImagePath(weatherCode, weather?.current?.is_day)}`),
    [images, weather, weatherCode]
  );

  return (
    <div>
      <div className="flex flex-row flex-grow-0">
        <div className='flex-1 m-4'>
          <h4>{location.city}</h4>
          <h5>{location.country}</h5>
        </div>
        <div className="flex flex-col justify-center w-12">
          <Temperature
            temperature={weather ? weather?.current?.temp_c : null}
            isLoading={isLoading}
          />
        </div>
        {!isLoading && weather && (
          <div className="flex flex-col justify-center w-24">
            <div className="w-4">
              <img alt={WEATHER_CODES.get(weatherCode)} src={imageUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

