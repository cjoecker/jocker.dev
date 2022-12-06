import React from 'react';

import { SkillsType } from '../../constants/skills';
import { useWindowSize } from '../../hooks/useWindowSize';

import { Balls } from './balls';

interface Props {
  skills: SkillsType[];
}

export function Skills({ skills }: Props) {
  const { isMobile } = useWindowSize();
  const HeaderItem = ({ children, isMiddle }: { children: string, isMiddle?:boolean }) => (
    <div className={`flex items-center justify-center h-full select-none ${isMiddle? 'flex-1' : 'flex-grow-0'}`}>
      {children}
    </div>
  );
  return (
    <div className={`relative w-full ${isMobile ? 'w-96' : 'w-72'}`}>
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <h4 className="m-2 flex h-24">
          <HeaderItem>Frontend</HeaderItem>
          <HeaderItem isMiddle>+</HeaderItem>
          <HeaderItem>UX/UI Design</HeaderItem>
        </h4>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Balls skills={skills} />
      </div>
    </div>
  );
}
