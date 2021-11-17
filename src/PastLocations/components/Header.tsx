import { Mark, Paper, Slider, Typography, useTheme } from "@mui/material";
import { getYear } from 'date-fns';
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import { useEffectUnsafe } from '../../unsafeHooks';
import { THIS_YEAR } from '../utils/locationUtils';

function valuetext(value: number) {
  return `Year ${value}`;
}

interface LocationSliderProps {
  marks: Mark[];
  onChangeYear: (year: number) => void;
}

export default function Header({
  marks,
  onChangeYear,
}: LocationSliderProps) {
  const [year, setYear] = useState<number | number[]>(getYear(new Date()) - 5);

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
  //TODO add slider min max automatically
  return (
    <Paper>
      <TitleWrapper>
        <StyledTypography variant="h3">Year</StyledTypography>
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
  padding-top: 15px;
`;

const SliderWrapper = styled.div`
  padding: 0 20px 5px;
`;