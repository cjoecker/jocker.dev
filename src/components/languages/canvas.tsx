import { useEffect, useRef, useState } from 'react';
import colors from 'tailwindcss/colors';
import invariant from 'tiny-invariant';

import { useEffectUnsafe } from '../../unsafeHooks';

export type Props = {
  onLanguageDown: (languagePosition: number) => void;
  onLanguageUp: () => void;
  onLanguageHover: (languagePosition: number) => void;
  languagesNumber: number;
  isAnswerCorrect: boolean;
};
export const Canvas = ({
  onLanguageDown,
  onLanguageUp,
  languagesNumber,
  onLanguageHover,
  isAnswerCorrect,
}: Props) => {
  const ratio = window.devicePixelRatio;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect>();
  const lastImage = useRef<HTMLImageElement>(new Image());
  const linePoints = useRef<{ x: number; y: number }[]>([]);
  const languageHoverPosition = useRef<number | undefined>(undefined);
  const handleResize = () => {
    invariant(context.current, 'no context defined');
    setBoundingClientRect((context.current as any).getBoundingClientRect());
  };

  useEffectUnsafe(() => {
    window.addEventListener('resize', handleResize);
    invariant(canvasRef.current, 'no canvasRef defined');
    setBoundingClientRect(canvasRef.current.getBoundingClientRect());
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (boundingClientRect && canvasRef.current) {
      const { width, height } = boundingClientRect;
      canvasRef.current.width = width * ratio;
      canvasRef.current.height = height * ratio;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
      canvasRef.current.getContext('2d')?.scale(ratio, ratio);
    }
  }, [boundingClientRect, ratio, canvasRef]);

  useEffectUnsafe(() => {
    invariant(canvasRef.current, 'no canvasRef defined');
    context.current = canvasRef.current.getContext('2d');
    invariant(context.current, 'no context defined');
  }, []);

  const startDrawing = (event: React.TouchEvent | React.MouseEvent) => {
    invariant(canvasRef.current, 'no canvasRef defined');
    invariant(context.current, 'no context defined');
    event.stopPropagation();
    context.current.lineCap = LINE_CAP;
    context.current.lineWidth = LINE_WIDTH;
    document.body.style.overflow = 'hidden';
    context.current.strokeStyle = 'white';
    const { x, y } = getPoints(event);
    context.current.beginPath();
    context.current.moveTo(x, y);
    setIsDrawing(true);
    lastImage.current.src = canvasRef.current.toDataURL();
    linePoints.current = [];
    const { width } = canvasRef.current;
    const languagePos = Math.floor(
      (x * ratio) / ((width - 1) / languagesNumber)
    );
    onLanguageDown(languagePos);
    document.body.style.overflow = 'hidden';
  };

  const draw = (event: React.TouchEvent | React.MouseEvent) => {
    invariant(canvasRef.current, 'no canvasRef defined');
    invariant(context.current, 'no context defined');
    if (!isDrawing) {
      return;
    }
    event.stopPropagation();
    const { width } = canvasRef.current;
    const { x, y } = getPoints(event);
    context.current.lineTo(x, y);
    context.current.stroke();
    linePoints.current.push({ x: x, y: y });
    const languagePos = Math.floor(
      (x * ratio) / ((width - 1) / languagesNumber)
    );
    if (
      languagePos !== languageHoverPosition.current ||
      languagePos === undefined
    ) {
      languageHoverPosition.current = languagePos;
      onLanguageHover(languagePos);
    }
  };

  const finishDrawing = (event: React.TouchEvent | React.MouseEvent) => {
    invariant(canvasRef.current, 'no canvasRef defined');
    invariant(context.current, 'no context defined');
    event.stopPropagation();
    document.body.style.overflow = 'scroll';
    const { width, height } = canvasRef.current;
    clearCanvas();
    setIsDrawing(false);
    context.current.drawImage(
      lastImage.current,
      0,
      0,
      width * ratio,
      height * ratio,
      0,
      0,
      width,
      height
    );
    markRightAnswer(isAnswerCorrect);
    if (languageHoverPosition.current !== undefined) {
      onLanguageUp();
    }
    document.body.style.overflow = 'auto';
  };

  const markRightAnswer = (isAnswerRight: boolean) => {
    invariant(context.current, 'no context defined');
    context.current.strokeStyle = isAnswerRight
      ? colors.green[400]
      : colors.red[400];
    context.current.beginPath();
    linePoints.current.forEach(point => {
      invariant(context.current, 'no context defined');
      context.current.lineTo(point.x, point.y);
    });
    context.current.stroke();
    context.current.closePath();
  };

  const clearCanvas = () => {
    invariant(canvasRef.current, 'no canvasRef defined');
    invariant(context.current, 'no context defined');
    context.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onTouchStart={startDrawing}
      onTouchEnd={finishDrawing}
      onMouseMove={draw}
      onTouchMove={draw}
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

const LINE_WIDTH = 4;
const LINE_CAP = 'round';

function getPoints(event: any) {
  let { offsetX: x, offsetY: y } = event.nativeEvent;
  if (!x || !y) {
    const rect = event.target.getBoundingClientRect();
    const doc = document.documentElement;
    x = event.targetTouches[0].pageX - (rect.left + doc.scrollLeft);
    y = event.targetTouches[0].pageY - (rect.top + doc.scrollTop);
  }
  return { x, y };
}
