import React from 'react';
import { magnifying_glass } from '../../assests';

const CircularChart = () => {
  const size = 400;
  const data = [
    {
      id: 1,
      color: 'green',
      title: 'ABC',
    },
    {
      id: 2,
      color: 'green',
      title: 'ZYZ',
    },
    {
      id: 3,
      color: 'green',
      title: 'PQR',
    },
    {
      id: 4,
      color: 'orange',
      title: 'DEF',
    },
  ];

  const renderCircularDot = (x, y, radius, zIndex, color, value = '') => {
    return <div 
      style={{
        ...styles.cirle,
        height: radius * 2,
        width: radius * 2,
        borderRadius: radius,
        top: x - radius,
        left: y - radius,
        zIndex: zIndex,
        backgroundColor: color,
      }} 
    >
      {value}
    </div>;
  };

  const renderCircles = (radius, color) => {
    const element = [];

    for(let d = 66; d <= 380; d += 2) {
      const x = radius * Math.sin((d % 360) * Math.PI / 180) + size / 2;
      const y = radius * Math.cos((d % 360) * Math.PI / 180) + size / 2;
      element.push(renderCircularDot(x, y, (d === 66 || d === 380) ? 3.5 : 1.5, 1, color));
    }

    return element;
  };

  const renderData = (radius) => {
    const deg = (380 - 66) / (data.length + 1);
    const element = [];

    for(let d = 66 + deg, index = 0; d < 380; d += deg, index++) {
      const x = radius * Math.sin((d % 360) * Math.PI / 180) + size / 2;
      const y = radius * Math.cos((d % 360) * Math.PI / 180) + size / 2;
      element.push(renderCircularDot(x, y, 12, 2, data[index].color, data[index].id));

      for(let r = radius; r < 2 * radius; r++) {
        const nextX = r * Math.sin((d % 360) * Math.PI / 180) + size / 2;
        const nextY = r * Math.cos((d % 360) * Math.PI / 180) + size / 2;
        element.push(renderCircularDot(nextX, nextY, 1, 1, 'black'));
      }

      let nextX = 2 * radius * Math.sin((d % 360) * Math.PI / 180) + size / 2;
      let nextY = 2 * radius * Math.cos((d % 360) * Math.PI / 180) + size / 2;

      if(nextY < size / 2) {
        while(nextY > -1 * size / 3) {
          element.push(renderCircularDot(nextX, nextY, 1, 1, 'black'));
          nextY--;
        }
      } else {
        while(nextY < size + size / 3) {
          element.push(renderCircularDot(nextX, nextY, 1, 1, 'black'));
          nextY++;
        }
      }

      element.push(renderCircularDot(nextX, nextY, 3.5, 1, 'black'));
    }

    return element;
  };

  return (
    <div style={{
      ...styles.main,
      height: size,
      width: size,
    }}>
      <img 
        style={{
          ...styles.image, 
          width: size * 0.8, 
          height: size * 0.8
        }} 
        alt='' 
        src={magnifying_glass} 
      />
      {renderCircles(size / 2 * 0.9, 'black')}
      {renderCircles(size / 2 * 0.75, 'black')}
      {renderData(size / 2 * 0.75)}
    </div>
  );
};

const styles = {
  main: {
    position: 'relative',
  },
  cirle: {
    position: 'absolute',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute', 
    bottom: 0, 
    right: 0,
  },
};

export default CircularChart;