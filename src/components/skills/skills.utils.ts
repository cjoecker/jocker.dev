import Matter from 'matter-js';

import { SkillsType } from '../../constants/skills';

const CIRCLES_SIZE = 3;
const BOUNCINESS = 0.6;

export function getBallsBody(
  constraints: unknown,
  skill: SkillsType,
  color: string,
  ratio: number
) {
  const { width } = constraints as { width: number; height: number };
  const size = skill.level * CIRCLES_SIZE + CIRCLES_SIZE * 6;
  const xPosOffset = skill.type === 'ux' ? width / 2 : 0;
  const xPos = Math.random() * (width / 2 - size * 2) + xPosOffset;

  return Matter.Bodies.circle(xPos, size, size, {
    restitution: BOUNCINESS,
    render: {
      sprite: {
        texture: getBallsImage(skill, size, color, ratio),
        xScale: 1 / ratio,
        yScale: 1 / ratio,
      },
    },
  });
}

export function getBallsImage(
  skill: SkillsType,
  size: number,
  color: string,
  scale: number
) {
  const newSize = size * scale;
  const drawing = document.createElement('canvas');
  drawing.width = newSize * 2;
  drawing.height = newSize * 2;
  const ctx = drawing.getContext('2d');
  const skillNameWords = skill.skillName.split(' ');

  if (ctx) {
    ctx.font = '12pt Yantramanav';
    ctx.beginPath();
    ctx.arc(newSize, newSize, newSize, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.font = ctx.font.replace(/\d+px/, `${14 * scale}px`);
    ctx.imageSmoothingQuality = 'high';
    if (skillNameWords.length === 1) {
      ctx.fillText(skill.skillName, newSize, newSize + 4 * scale);
    }
    if (skillNameWords.length === 2) {
      ctx.fillText(skillNameWords[0], newSize, newSize - 4 * scale);
      ctx.fillText(skillNameWords[1], newSize, newSize + 10 * scale);
    }
    if (skillNameWords.length > 2) {
      console.error(`${skill.skillName} has more then 2 words`);
    }
  }
  return drawing.toDataURL('image/png', 1.0);
}

export function getWorldWalls(constraints: unknown, wallsThickness: number) {
  const { width, height } = constraints as { width: number; height: number };

  const options = {
    isStatic: true,
    render: {
      fillStyle: 'blue',
    },
  };

  const topWall = Matter.Bodies.rectangle(
    width / 2,
    -wallsThickness / 2,
    width,
    wallsThickness,
    options
  );
  const rightWall = Matter.Bodies.rectangle(
    width + wallsThickness / 2,
    height / 2,
    wallsThickness,
    height,
    options
  );
  const bottomWall = Matter.Bodies.rectangle(
    width / 2,
    height + wallsThickness / 2,
    width,
    wallsThickness,
    options
  );
  const leftWall = Matter.Bodies.rectangle(
    -wallsThickness / 2,
    height / 2,
    wallsThickness,
    height,
    options
  );
  return [topWall, rightWall, bottomWall, leftWall];
}
