import React from 'react';

import { SkillsType } from '../../constants/skills';
import { TransparentBox } from '../shared/TransparentBox';

import { Balls } from './balls';

const HeaderItem = ({
  children,
  isMiddle,
  color,
}: {
  children: string;
  isMiddle?: boolean;
  color?: string;
}) => (
  <div
    className={`flex items-center justify-center h-full select-none ${
      isMiddle ? 'flex-grow-0' : 'flex-1'
    } ${color}`}
  >
    {children}
  </div>
);

interface Props {
  skills: SkillsType[];
}

export function Skills({ skills }: Props) {
  return (
    <TransparentBox className="relative w-[500px] h-[400px]">
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <h4 className="my-6 mx-2 flex text-xl font-light text-center">
          <HeaderItem color="text-sky-400">Frontend</HeaderItem>
          <HeaderItem isMiddle>+</HeaderItem>
          <HeaderItem color="text-yellow-400">UX/UI Design</HeaderItem>
        </h4>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <Balls skills={skills} />
      </div>
    </TransparentBox>
  );
}
