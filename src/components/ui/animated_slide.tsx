'use client';

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

type AnimatedSlideProps = {
  direction: 'up' | 'down';
  items: string[];
  prefix: string;
};

export const AnimatedSlide: React.FC<AnimatedSlideProps> = ({ direction, items, prefix }) => {
  const fromY = direction === 'up' ? '0%' : '-100%';
  const toY = direction === 'up' ? '-100%' : '0%';

  const styles = useSpring({
    from: { transform: `translateY(${fromY})` },
    to: { transform: `translateY(${toY})` },
    loop: true,
    config: { duration: 40000 },
  });

  return (
    <animated.div style={styles} className="flex flex-col gap-3 lg:gap-8">
      {items.map((item, index) => (
        <React.Fragment key={`${prefix}-${item}-${index}`}>
          <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-sm opacity-70 rounded-lg text-center bg-[#10132E]">
            {item}
          </span>
          <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
        </React.Fragment>
      ))}
    </animated.div>
  );
};
