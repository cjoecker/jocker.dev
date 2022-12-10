import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchWeather } from '../../api';
import { LocationsType } from '../../constants/locations';
import { WEATHER_CODES } from '../../constants/weather-codes';
import { TransparentBox } from '../shared/TransparentBox';

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
    <TransparentBox className="m-2 flex flex-row flex-grow-0">
      <div className="flex-1 my-auto">
        <h4 className="m-0 text-xl font-light -mb-1">{location.city}</h4>
        <h5 className="m-0 text-base font-light">{location.country}</h5>
      </div>
      <div className="flex flex-col justify-center mx-3">
        <Temperature
          temperature={weather ? weather?.current?.temp_c : null}
          isLoading={isLoading}
        />
      </div>
      {!isLoading && weather && (
        <div className="flex flex-col justify-center">
          <div className="w-12 my-auto">
            <img alt={WEATHER_CODES.get(weatherCode)} src={imageUrl} />
          </div>
        </div>
      )}
    </TransparentBox>
  );
}
