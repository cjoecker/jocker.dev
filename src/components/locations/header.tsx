import { Paper, Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useEffectUnsafe } from '../../unsafeHooks';

import { THIS_YEAR } from './locations.utils';

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

export function Header({
  marks,
  onChangeYear,
}: Props) {
  const [year, setYear] = useState<number | number[]>(THIS_YEAR)
  const handleChange = (event: any, newValue: number | number[]) => {
    setYear(newValue);
  };
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
    <Paper>
      <TitleWrapper>
        <StyledTypography variant="h4">Year</StyledTypography>
      </TitleWrapper>
      <SliderWrapper>
        <Slider
          track={false}
          value={year}
          onChange={handleChange}
          defaultValue={THIS_YEAR}
          min={marks[0].value}
          max={marks[marks.length - 1].value}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          valueLabelFormat={year => (year === THIS_YEAR ? 'Today' : year)}
        />
      </SliderWrapper>
    </Paper>
  );
}
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  padding-top: var(--margin-l);
`;

const SliderWrapper = styled.div`
  padding: 0 var(--margin-l) var(--margin-s);
`;
