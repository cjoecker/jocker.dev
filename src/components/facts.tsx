import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export const Facts = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="my-24 text-xl">
        <p>
          I’m passionate about creating{' '}
          <TextHighlight>great experiences</TextHighlight> with{' '}
          <TextHighlight>beautiful web applications</TextHighlight>.
        </p>
        <p className="mt-4">
          <TextHighlight>Happy customers</TextHighlight>,{' '}
          <TextHighlight>clean code</TextHighlight> and{' '}
          <TextHighlight>sustainable architectures</TextHighlight> are my
          priority.
        </p>
      </div>
      <div className="flex gap-32 justify-between mx-auto">
        <Fact number={8} label={'Years of experience'} />
        <Fact number={23} label={'Developed apps'} />
        <Fact number={13} label={'Happy customers'} />
      </div>
    </div>
  );
};

const TextHighlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary font-medium">{children}</span>
);

const Fact = ({ number, label }: { number: number; label: string }) => (
  <div className="bg-fact flex flex-col min-w-[220px] p-4 rounded-lg">
    <Counter number={number} />
    <div className="text-2xl mt-2">{label}</div>
  </div>
);

function Counter({ number }: { number: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const controls = animate(0, number + 1, {
      duration: number / 8,
      onUpdate(value) {
        if (!ref.current) {
          return;
        }
        if (value >= number) {
          ref.current.textContent = `${number}+`;
        } else {
          ref.current.textContent = value.toFixed(0);
        }
      },
    });
    return () => controls.stop();
  }, [number]);

  return <div ref={ref} className="text-9xl text-primary" />;
}
