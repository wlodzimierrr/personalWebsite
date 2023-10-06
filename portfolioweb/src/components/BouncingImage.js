import React, { useEffect, useRef, useState } from 'react';
import bouncingImageSource from '../aHJQwCFq_400x400 - Copy.jpg';

const BouncingImage = ({ animationSpeed, rotationSpeed }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const imageModel = {
      pos: [Math.random() * 950 + 25, Math.random() * 950 + 25],
      speed: [Math.random() * 2 - 1, Math.random() * 2 - 1],
      minX: 0,
      maxX: window.innerWidth - 100,
      minY: 0,
      maxY: window.innerHeight - 100,
      rotation: 0,
    };

    function moveBounce() {
      const [x, y] = imageModel.pos;
      const [vx, vy] = imageModel.speed;
      let newX = x + vx;
      let newY = y + vy;

      if (newX < imageModel.minX || newX > imageModel.maxX) {
        imageModel.speed[0] *= -1;
        newX = Math.min(imageModel.maxX, Math.max(imageModel.minX, newX));
      }
      if (newY < imageModel.minY || newY > imageModel.maxY) {
        imageModel.speed[1] *= -1;
        newY = Math.min(imageModel.maxY, Math.max(imageModel.minY, newY));
      }

      imageModel.rotation += rotationSpeed;
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${newX}px, ${newY}px) rotate(${imageModel.rotation}deg)`;
        imageModel.pos = [newX, newY];
      }
    }

    const animationFrame = requestAnimationFrame(function animate() {
      moveBounce();
      requestAnimationFrame(animate);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [animationSpeed, rotationSpeed]);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
      }}
      ref={imageRef}
    >
      <img src={bouncingImageSource} alt="Bouncing Image" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default BouncingImage;