import { useTheme } from '@mui/material';
import Matter, { Constraint, Mouse, MouseConstraint } from 'matter-js';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { SkillsType } from '../../constants/skills';
import { useEffectUnsafe } from '../../unsafeHooks';

import { getBallsBody, getWorldWalls } from './skills.utils';
import invariant from 'tiny-invariant';

const WALLS_THICKNESS = 10;

interface Props {
  skills: SkillsType[];
}

export function Balls({ skills }: Props) {
  const pixelRatio = window.devicePixelRatio;
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [constraints, setConstraints] = useState<DOMRect>();
  const [render, setRender] = useState<Matter.Render>();
  const style = useTheme();

  const handleResize = () => {
    setConstraints((boxRef.current as any).getBoundingClientRect());
  };

  useEffectUnsafe(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const engine = Engine.create();
    invariant(boxRef.current, 'no boxRef defined')
    invariant(canvasRef.current, 'no canvasRef defined')
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    });

    World.add(
      engine.world,
      getWorldWalls((boxRef.current as any).getBoundingClientRect(), WALLS_THICKNESS)
    );

    const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            render: {
              visible: false
            }
          } as Constraint
        });

    mouse.pixelRatio = pixelRatio
    World.add(engine.world, mouseConstraint);

    Runner.run(engine);
    Render.run(render);
    setConstraints(boxRef.current.getBoundingClientRect());
    setRender(render);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffectUnsafe(() => {
    if (constraints && canvasRef.current && render) {
      const { width, height } = constraints;
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;

      canvasRef.current.width = width * pixelRatio;
      canvasRef.current.height = height * pixelRatio;
      canvasRef.current.style.width = `${width}px`
      canvasRef.current.style.height = `${height}px`;
      canvasRef.current.getContext("2d")?.scale(pixelRatio, pixelRatio);

      const topWall = (render as any).engine.world.bodies[0];
      Matter.Body.setPosition(topWall, {
        x: width / 2,
        y: -WALLS_THICKNESS / 2,
      });
      Matter.Body.setVertices(topWall, [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: WALLS_THICKNESS },
        { x: 0, y: WALLS_THICKNESS },
      ]);

      const rightWall = (render as any).engine.world.bodies[1];
      Matter.Body.setPosition(rightWall, {
        x: width + WALLS_THICKNESS / 2,
        y: height / 2,
      });
      Matter.Body.setVertices(rightWall, [
        { x: 0, y: 0 },
        { x: WALLS_THICKNESS, y: 0 },
        { x: WALLS_THICKNESS, y: height },
        { x: 0, y: height },
      ]);

      const bottomWall = (render as any).engine.world.bodies[2];
      Matter.Body.setPosition(bottomWall, {
        x: width / 2,
        y: height + WALLS_THICKNESS / 2,
      });
      Matter.Body.setVertices(bottomWall, [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: WALLS_THICKNESS },
        { x: 0, y: WALLS_THICKNESS },
      ]);

      const leftWall = (render as any).engine.world.bodies[3];
      Matter.Body.setPosition(leftWall, {
        x: -WALLS_THICKNESS / 2,
        y: height / 2,
      });
      Matter.Body.setVertices(leftWall, [
        { x: 0, y: 0 },
        { x: WALLS_THICKNESS, y: 0 },
        { x: WALLS_THICKNESS, y: height },
        { x: 0, y: height },
      ]);
    }

  }, [constraints]);
  useEffectUnsafe(() => {
    const timeouts: Array<NodeJS.Timeout> = [];
    if (render && skills) {
      skills.forEach(skill => {
        const color = skill.type === 'web' ? style.palette.primary.main : style.palette.secondary.main
        timeouts.push(
          setTimeout(() => {
            Matter.World.add(
              (render as any).engine.world,
              getBallsBody(constraints,skill, color,pixelRatio),
            );
          }, Math.random() * (500 - 50))
        );
      });
    }
    return () => {
      if (timeouts) {
        timeouts.forEach(t => clearTimeout(t));
      }
    };
  }, [skills, render]);

  return (
      <CanvasWrapper
        ref={boxRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <canvas ref={canvasRef}/>
      </CanvasWrapper>

  );
}

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
`
