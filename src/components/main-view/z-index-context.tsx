import React, { createContext, useContext, useState } from 'react';
import invariant from 'tiny-invariant';

interface ZIndexContext {
  maxZIndex: number;
  updateMaxZIndex: () => void;
}

const ZIndexContext = createContext<ZIndexContext>({
  maxZIndex: 1,
  updateMaxZIndex: () => {},
});
ZIndexContext.displayName = 'ZIndexContext';

export function useZIndex() {
  const context = useContext(ZIndexContext);
  invariant(context, 'useToggle must be used within a <ZIndex />');
  return context;
}

export function ZIndex({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [maxZIndex, setMaxZIndex] = useState(1);
  const updateMaxZIndex = () => setMaxZIndex(z => z + 1);
  return (
    <ZIndexContext.Provider value={{ maxZIndex, updateMaxZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
}
