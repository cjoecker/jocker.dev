import { easeSinInOut } from 'd3-ease';
import React, { useMemo, useState } from 'react';
import ReactMapGL, { FlyToInterpolator, Marker } from 'react-map-gl';
import { ViewportProps } from 'react-map-gl/dist/es5/utils/map-state';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

import {
  bornYear,
  locationPinImages,
  LocationsType,
} from '../../constants/locations';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useEffectUnsafe } from '../../unsafeHooks';

import { Footer } from './footer';
import { Header } from './header';
import { getLastLocation, getMarks, getPinImagePath } from './locations.utils';

const queryClient = new QueryClient();

interface Props {
  locationEntries: LocationsType[];
}

//TODO move map access token to env
export function Locations({ locationEntries }: Props) {
  const lastLocation = useMemo(() => locationEntries[0], [locationEntries]);
  const [location, setLocation] = useState(lastLocation);
  const { isMobile } = useWindowSize();

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: lastLocation.latitude,
    longitude: lastLocation.longitude,
    zoom: 15,
  });

  const images = useMemo(() => require.context('./images/pin', false), []);
  const pinImgUrl = useMemo(
    () =>
      images(
        `./${getPinImagePath(location.year, bornYear, locationPinImages)}.svg`
      ),
    [images]
  );

  const [markerPos, setMarkerPos] = useState({
    latitude: lastLocation.latitude,
    longitude: lastLocation.longitude,
  });

  const handleYearChange = (year: number) => {
    setLocation(getLastLocation(year, locationEntries));
  };

  useEffectUnsafe(() => {
    setViewport({
      ...viewport,
      latitude: location.latitude,
      longitude: location.longitude,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 2000,
      transitionEasing: easeSinInOut,
    });
    setMarkerPos({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  }, [location]);

  return (
    <LocationBox isMobile={isMobile}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/cjoecker/ckmpee9hy024v17o553pu11hv"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport: ViewportProps) => setViewport(viewport)}
      >
        <Marker
          latitude={markerPos.latitude}
          longitude={markerPos.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img
            src={pinImgUrl}
            width={25}
            height={25}
            alt={"christian's face"}
          />
        </Marker>
      </ReactMapGL>
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
