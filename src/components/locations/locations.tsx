import React, { useEffect, useMemo, useRef, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

import {
  bornYear,
  locationPinImages,
  LocationsType,
} from '../../constants/locations';
import { useWindowSize } from '../../hooks/useWindowSize';

import { Footer } from './footer';
import { Header } from './header';
import { getLastLocation, getMarks, getPinImagePath } from './locations.utils';

const queryClient = new QueryClient();

interface Props {
  locationEntries: LocationsType[];
}

const TRANSITION_DURATION = 2000;
const ZOOM = 10;

//TODO move map access token to env
export function Locations({ locationEntries }: Props) {
  const mapRef = useRef<any>();

  const lastLocation = useMemo(
    () => locationEntries[locationEntries.length - 1],
    [locationEntries]
  );
  const [location, setLocation] = useState(lastLocation);
  const { isMobile } = useWindowSize();

  const images = useMemo(() => require.context('./images/pin', false), []);
  const pinImgUrl = useMemo(
    () =>
      images(
        `./${getPinImagePath(location.year, bornYear, locationPinImages)}.svg`
      ),
    [images, location.year]
  );

  const [markerPos, setMarkerPos] = useState({
    latitude: lastLocation.latitude,
    longitude: lastLocation.longitude,
  });

  const handleYearChange = (year: number) => {
    setLocation(getLastLocation(year, locationEntries));
  };

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current?.flyTo({
      center: [location.longitude, location.latitude],
      duration: TRANSITION_DURATION,
      zoom: ZOOM,
    });
    setMarkerPos({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  }, [location]);

  return (
    <LocationBox isMobile={isMobile}>
      <Map
        initialViewState={{
          longitude: lastLocation.longitude,
          latitude: lastLocation.latitude,
          zoom: ZOOM
        }}
        ref={mapRef}
        mapStyle="mapbox://styles/cjoecker/ckmpee9hy024v17o553pu11hv"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        attributionControl={false}
      >
        <Marker
          latitude={markerPos.latitude}
          longitude={markerPos.longitude}
          anchor="center"
          offset={[0, -500]}
        >
          <img
            src={pinImgUrl}
            width={25}
            height={25}
            alt={"christian's face"}
          />
        </Marker>
      </Map>
      <StyledDiv position={'top'}>
        <Margins>
          <Header
            marks={getMarks(locationEntries)}
            onChangeYear={handleYearChange}
          />
        </Margins>
      </StyledDiv>
      <StyledDiv position={'bottom'}>
        <Margins>
          <QueryClientProvider client={queryClient}>
            <Footer location={location} />
          </QueryClientProvider>
        </Margins>
      </StyledDiv>
    </LocationBox>
  );
}

const LocationBox = styled.div<{ isMobile: boolean }>`
  flex: 1;
  width: ${p => (p.isMobile ? '500px' : '300px')};
  height: ${p => (p.isMobile ? '350px' : '500px')};
  position: relative;
`;

const StyledDiv = styled.div<{ position: 'top' | 'bottom' }>`
  position: absolute;
  ${p => (p.position === 'top' ? 'top:0' : 'bottom:0')};
  width: 100%;
  z-index: 5;
`;
const Margins = styled.div`
  margin: var(--margin-s);
`;
