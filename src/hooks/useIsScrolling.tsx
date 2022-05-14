import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

const CountContext = React.createContext(null);

export function useIsScrolling() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useIsScrolling must be used within a IsScrollingProvider')
  }
  return context
}

export function IsScrollingProvider(props:any){
  const startMouseYPos = useRef<number | undefined>(undefined);
  const startMouseXPos = useRef<number | undefined>(undefined);
  const [isVerticallyScrolling, setIsVerticallyScrolling] = useState(false);
  const [isCheckingIfScrolling, setIsCheckingIfScrolling] = useState(true);
  const [areTouchEventsAllowed, setAreTouchEventsAllowed] = useState(false);
  useEffect(() => {
    setAreTouchEventsAllowed(!(isVerticallyScrolling || isCheckingIfScrolling))
  }, [isVerticallyScrolling,isCheckingIfScrolling]);

  useEffect(() => {
    console.info("isVerticallyScrolling", isVerticallyScrolling);
    console.info("isCheckingIfScrolling", isCheckingIfScrolling);
    if(isVerticallyScrolling){
      document.documentElement.style.overflow = 'auto'
    }else{
      document.documentElement.style.overflow = 'hidden'
    }

  }, [isVerticallyScrolling, isCheckingIfScrolling]);


  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsCheckingIfScrolling(true);
    setIsVerticallyScrolling(false);
    startMouseYPos.current = e.targetTouches[0].pageY;
    startMouseXPos.current = e.targetTouches[0].pageX;
  };
  const onTouchMove = (e: any) => {
    if (
      startMouseYPos.current === undefined ||
      startMouseXPos.current === undefined ||
      !isCheckingIfScrolling
    ) {
      return;
    }
    const deltaY = e.targetTouches[0].pageY - startMouseYPos.current;
    const deltaX = e.targetTouches[0].pageX - startMouseXPos.current;

    if (Math.abs(deltaY) > 10 && Math.abs(deltaX) < 5 && !isVerticallyScrolling) {
      setIsCheckingIfScrolling(false);
      setIsVerticallyScrolling(true);
    }

    if (Math.abs(deltaX) > 5 && !isVerticallyScrolling) {
      setIsCheckingIfScrolling(false);
    }
  };
  const onTouchEnd = () => {
    setIsVerticallyScrolling(false);
    setIsCheckingIfScrolling(true);
    console.info("TouchEnd");
  };
  const value = {onTouchStart, onTouchMove, onTouchEnd, areTouchEventsAllowed};
  return <CountContext.Provider value={value} {...props} />
}
