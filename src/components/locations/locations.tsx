import React, { useEffect, useMemo, useRef, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { QueryClient, QueryClientProvider } from 'react-query';

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

export function Locations({ locationEntries }: Props) {
  const mapRef = useRef<any>();

  const lastLocation = useMemo(
    () => locationEntries[locationEntries.length - 1],
    [locationEntries]
  );
  const [location, setLocation] = useState(lastLocation);
  const { isMobile } = useWindowSize();
  console.log('isMobile', isMobile);
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
    if (!mapRef.current) {
      return;
    }
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
    <div
      className={`flex-1 relative w-[300px] h-[500px]`}
    >
      <div className="w-[300px] h-[500px]">
        <Map
          initialViewState={{
            longitude: lastLocation.longitude,
            latitude: lastLocation.latitude,
            zoom: ZOOM,
          }}
          ref={mapRef}
          mapStyle="mapbox://styles/cjoecker/ckmpee9hy024v17o553pu11hv"
          attributionControl={false}
          style={{
            borderRadius: '0.5rem',
            position: 'absolute',
          }}
        >
          <Marker
            latitude={markerPos.latitude}
            longitude={markerPos.longitude}
            anchor="center"
          >
            <img
              src={pinImgUrl}
              width={25}
              height={25}
              alt={"christian's face"}
            />
          </Marker>
        </Map>
      </div>
      <div className="w-full absolute z-10 top-0">
        <div className="m-2">
          <Header
            marks={getMarks(locationEntries)}
            onChangeYear={handleYearChange}
          />
        </div>
      </div>
        <div className="w-full absolute z-10 bottom-0">
          <QueryClientProvider client={queryClient}>
            <Footer location={location} />
          </QueryClientProvider>
        </div>
    </div>
  );
}
