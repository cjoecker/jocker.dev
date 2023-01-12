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
  <div className="bg-fact flex flex-col min-w-[200px] p-4 rounded-lg">
    <div className="text-9xl text-primary">{number}+</div>
    <div className="text-2xl mt-2">{label}</div>
  </div>
);
