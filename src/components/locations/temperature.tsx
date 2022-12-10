import React from 'react';

interface Props {
  temperature: number | null;
  isLoading: boolean;
}

export function Temperature({ temperature, isLoading }: Props) {
  if (isLoading || !temperature) {
    return <div>loading</div>;
  }
  return (
    <div className="flex flex-row justify-start">
      <div className="text-4xl leading-none">{temperature}</div>
      <div className="ml-1 -mt-0.5 text-lg">{'°C'}</div>
    </div>
  );
}
