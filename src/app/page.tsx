"use client";

import { useEffect, useState } from "react";
import Parallax from "parallax-js";
import MainNav from "@/components/MainNav";
import ParallaxSnakkeboble from "@/app/ParallaxSnakkeboble";
import Kontaktskjema from "./kontakt/Kontaktskjema";

export default function Home() {
  const [kontaktModal, setKontaktModal] = useState<boolean>(false);
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

    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <MainNav currentPage='home' setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
      {kontaktModal ? (
        <Kontaktskjema setKontaktModal={setKontaktModal} />
      ) : null}
      <div id="scene" className="overflow-hidden">
        <div
          className="parallaxBackgroundParticles overflow-hidden"
          data-depth="0.13"
        ></div>
        <ParallaxSnakkeboble />
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
        <div
          className="parallaxForgrunn1 overflow-hidden"
          data-depth="0.4"
        ></div>
        <div
          className="parallaxForgrunn3 overflow-hidden"
          data-depth="0.8"
        ></div>
      </div>
    </>
  );
}
