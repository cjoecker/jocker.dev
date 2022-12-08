import { SliderUnstyled } from '@mui/base';
import React, { useState } from 'react';

import { useEffectUnsafe } from '../../unsafeHooks';

import { THIS_YEAR } from './locations.utils';
import { TransparentBox } from '../shared/TransparentBox';

export interface Mark {
  value: number;
  label?: React.ReactNode;
}

function valuetext(value: number) {
  return `Year ${value}`;
}

interface Props {
  marks: Mark[];
  onChangeYear: (year: number) => void;
}

export function Header({ marks, onChangeYear }: Props) {
  const [year, setYear] = useState<number | number[]>(THIS_YEAR);
  const handleChange = (event: any, newValue: number | number[]) => {
    setYear(newValue);
  };
  const [isHoveringThumb, setIsHoveringThumb] = useState(false);
  useEffectUnsafe(() => {
    const debounceTimer = setTimeout(() => {
      if (!Array.isArray(year)) {
        onChangeYear(year);
      }
    }, 100);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [year]);
  return (
    <TransparentBox>
      <div className="flex flex-col justify-center items-center">
        <h4 className="pt-1 m-0">Year</h4>
      </div>
      <div className="p-3">
        <SliderUnstyled
          valueLabelDisplay={'auto'}
          track={false}
          value={year}
          onChange={handleChange}
          defaultValue={THIS_YEAR}
          min={marks[0].value}
          max={marks[marks.length - 1].value}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={1}
          marks={marks}
          valueLabelFormat={year => (year === THIS_YEAR ? 'Today' : year)}
          slotProps={{
            thumb: {
              className:
                'w-4 h-4 -mt-1.5 bg-sky-400 rounded-full shadow absolute',
              onPointerEnter: () => setIsHoveringThumb(true),
              onPointerLeave: () => setIsHoveringThumb(false),
            },
            root: {
              className: 'w-full relative inline-block h-2 cursor-pointer',
            },
            rail: {
              className:
                'bg-sky-400 opacity-30 h-1 w-full rounded-full block absolute',
            },
            mark: {
              className: 'bg-sky-400 h-1 w-1 absolute top-0 rounded-full',
            },
            valueLabel: {
              className: 'relative -top-7 -left-full bg-gray-800 rounded px-2 py-1 backdrop-blur bg-opacity-90 hidden',
            },
            markLabel: {
              className: 'absolute top-2 -ml-2.5',
            },
          }}
        />
      </div>
    </TransparentBox>
  );
}
