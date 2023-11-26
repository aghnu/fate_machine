import { getClassName } from '@/utilities/className';
import style from './style.module.scss';
import { useMemo } from 'react';

const RotatingCloud = ({ className = '' }: { className?: string }) => {
  const positionData = useMemo(() => {
    const positions: Array<[number, number, number, number, number]> = [];

    for (let i = 0; i < 1000; i++) {
      // const radius = 250;
      const latitude = Math.random() * Math.PI * 2;
      const longitude = Math.random() * Math.PI * 2;

      positions.push([
        Math.cos(latitude) * Math.sin(longitude),
        Math.cos(latitude) * Math.cos(longitude),
        Math.sin(latitude),
        Math.random() * 360,
        Math.random(),
      ]);
    }

    return positions;
  }, []);

  return (
    <div className={getClassName(style.cloud, className)}>
      {positionData.map((position, index) => (
        <span
          key={index}
          style={{
            color: 'white',
            opacity: position[4],
            fontWeight: '200',
            fontSize: `${position[4] * 2 + 0.5}rem`,
            transform: `rotateX(${position[0] * 360}deg) rotateY(${
              position[1] * 360
            }deg) rotateZ(${position[2] * 360}deg) translateZ(${
              Math.random() * 50 + 250
            }px)`,
          }}
        >
          {Math.random() > 0.95 ? '-' : '.'}
        </span>
      ))}
      {/* <span
        style={{
          background: 'red',
          fontSize: '5rem',
          transform: `rotateY(0deg) translate3d(0, 0, 10px) `,
        }}
      >
        .
      </span> */}
    </div>
  );
};

export default RotatingCloud;

// rotateX(${position[0]}rad) rotateY(${position[1]}rad) rotateZ(${position[2]}rad) translateZ(250px)
