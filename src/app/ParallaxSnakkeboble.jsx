import Image from "next/image";

export default function ParallaxSnakkeboble() {
   return (
      <div className="parallaxsnakkeboble" data-depth="0.2">
         <h1>Hei!</h1>
         <p>Dette er hjemmesiden til Christer M.L. Bendixen. Den er for tiden</p>
         <h2 className="flex gap-2 items-center">
            <Image
               src="/img/construction.gif"
               alt="old-school under-construction gif"
               width={25}
               height={25}
               className="pixelatedImg"
            />
            <span>UNDER CONSTRUCTION</span>
         </h2>
         <div className="snakkebobletut"></div>
      </div>
   );
}
