'use client';

import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxTitle = () => {
  return (
    <Parallax translateY={['-200px', '400px']} className="section-title">
      Projects
    </Parallax>
  );
};

export default ParallaxTitle;
