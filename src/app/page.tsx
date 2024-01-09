"use client";

import { useEffect } from "react";
import Parallax from "parallax-js";
import MainNav from "@/components/MainNav";

export default function Home() {
   useEffect(() => {
      var scene = document.getElementById("scene") as HTMLElement;
      var leftEyeScene = document.getElementById("leftEyeScene") as HTMLElement;
      var rightEyeScene = document.getElementById("rightEyeScene") as HTMLElement;
      var parallaxInstance = new Parallax(scene, {
         relativeInput: true,
      });
      var parallaxInstance2 = new Parallax(leftEyeScene, {
         relativeInput: true,
         limitX: 7,
         limitY: 7,
      });
      var parallaxInstance3 = new Parallax(rightEyeScene, {
         relativeInput: true,
         limitX: 7,
         limitY: 7,
      });
   }, []);
   return (
      <>
         <MainNav />
         <div id="scene" className="overflow-clip">
            <div className="parallaxBackgroundParticles overflow-hidden" data-depth="0.1"></div>
            <div className="parallaxMeg overflow-hidden" data-depth="0.2">
               <div className="parallaxGooglyEyes">
                  <div id="leftEyeScene" className="parallaxLeye parallaxEye">
                     <div className="parallaxPupil" data-depth="-2"></div>
                  </div>
                  <div id="rightEyeScene" className="parallaxReye parallaxEye">
                     <div className="parallaxPupil" data-depth="-2"></div>
                  </div>
               </div>
            </div>
            <div className="parallaxForgrunn1 overflow-hidden" data-depth="0.4"></div>
            {/* <div className='parallaxForgrunn2 overflow-hidden' data-depth='0.4'>
          <div className='parallaxFrontPageLinks'>
            <button type='button' className='parallaxFrontPageLink'>
              barnehagegreier
            </button>
            <button type='button' className='parallaxFrontPageLink'>
              webutvikling
            </button>
          </div>
        </div> */}

            <div className="parallaxForgrunn3 overflow-hidden" data-depth="0.8"></div>
         </div>
      </>
   );
}
