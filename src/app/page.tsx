'use client';

import { useEffect } from 'react';
import Parallax from 'parallax-js';

export default function Home() {
  useEffect(() => {
    var scene = document.getElementById('scene') as HTMLElement;
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
    });
  }, []);
  return (
    <div id='scene' className='overflow-hidden'>
      <div
        className='parallaxBackgroundParticles overflow-hidden'
        data-depth='0.1'
      ></div>
      <div className='parallaxMeg overflow-hidden' data-depth='0.2'>
        <div className='parallaxGooglyEyes'></div>
      </div>
      <div className='parallaxForgrunn1 overflow-hidden' data-depth='0.4'></div>
      <div className='parallaxForgrunn2 overflow-hidden' data-depth='0.6'></div>
    </div>
  );
}
