import { Paper, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { fetchWeather } from '../../api';
import { LocationsType } from '../../constants/locations';
import { WEATHER_CODES } from '../../constants/weather-codes';

import { getWeatherImagePath } from './locations.utils';
import { Temperature } from './temperature';

interface Props {
  location: LocationsType;
}

export function Footer({ location }: Props) {
  const { data:weather, isLoading } = useQuery(['weather', location.city], () =>
    fetchWeather(location)
  );
  const weatherCode = useMemo(() =>  weather?.current?.condition?.code, [weather]);
  const images = useMemo(() =>  require.context('./images/weather', false), []);
  const imageUrl = useMemo(() =>  images(`./${getWeatherImagePath(weatherCode, weather?.current?.is_day)}`), [weather]);

  return (
    <Paper>
      <FlexBox>
        <LocationWrapper>
          <LocationTypography variant="h4">{location.city}</LocationTypography>
          <LocationTypography variant="h5">
            {location.country}
          </LocationTypography>
        </LocationWrapper>
        <TemperatureWrapper>
          <Temperature
            temperature={weather ? weather?.current?.temp_c : null}
            isLoading={isLoading}
          />
        </TemperatureWrapper>
        {!isLoading && weather && (
          <WeatherWrapper>
            <WeatherImageContainer>
              <img alt={WEATHER_CODES.get(weatherCode)} src={imageUrl} />
            </WeatherImageContainer>
          </WeatherWrapper>
        )}
      </FlexBox>
    </Paper>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
`;
const LocationWrapper = styled.div`
  flex: 1 1 100%;
  margin: var(--margin-m) 0 var(--margin-s) var(--margin-m);
`;

const LocationTypography = styled(Typography)``;

const TemperatureWrapper = styled.div`
  flex: 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WeatherWrapper = styled.div`
  flex: 0 0 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WeatherImageContainer = styled.div`
  margin: var(--margin-m);
`;
