import meditatingImage from '../images/meditating.png';
import { Section } from './section';
import { CoreValuesType } from '../constants/content.models';
import { CoreValuesData } from '../constants/content';

export const CoreValues = () => {
  return (
    <Section title="Core Values">
      <div className="flex relative">
        <CoreValue coreValue={CoreValuesData[0]} x={-130} y={10} />
        <CoreValue coreValue={CoreValuesData[2]} x={-180} y={150} />
        <CoreValue coreValue={CoreValuesData[1]} x={110} y={10} />
        <CoreValue coreValue={CoreValuesData[3]} x={170} y={150} />
        <div className="m-auto">
          <img
            className="mx-12"
            width="350"
            height="350"
            src={meditatingImage}
            alt="avatar of myself meditating"
          />
        </div>
      </div>
    </Section>
  );
};

export const CoreValue = ({
  coreValue,
  x,
  y,
}: {
  coreValue: CoreValuesType;
  x: number;
  y: number;
}) => {
  return (
    <div
      style={{ transform: `translate(${x}px,${y}px)` }}
      className="flex flex-col absolute max-w-[190px] m-auto left-0 right-0 top-0 left-0"
    >
      <h3>{coreValue.coreValue}</h3>
      <p>{coreValue.explanation}</p>
    </div>
  );
};
