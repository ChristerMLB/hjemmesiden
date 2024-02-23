"use client";
import { WebArray } from "@/types/Web";
import WebProsjektKort from "./WebProsjektKort";
import IntroBoks from "./IntroBoks";

type IntroProps = {
   webArray: WebArray | null;
   showOld: boolean;
   setShowOld: Function;
};

const WebListe = ({ webArray, showOld, setShowOld }: IntroProps) => {
   return (
      <>
         {webArray ?
            <>
               <IntroBoks intro={webArray[0]} />
               {webArray?.map((prosjekt, i) => {
                  if (i > 0 && !prosjekt.old) {
                     return <WebProsjektKort prosjekt={prosjekt} key={prosjekt.id} />;
                  }
               })}
            </>
         : null }
         
         {showOld ? (
         <>
            {webArray?.map((prosjekt, i) => {
               if (i > 0 && prosjekt.old) {
                  return <WebProsjektKort prosjekt={prosjekt} key={prosjekt.id} />;
               }
            })}
         </>
         ) : webArray ? (
         <>
            <button className="gamleProsjekterKnapp" onClick={() => setShowOld(true)}>
               Last inn eldre webprosjekter
            </button>
         </>
         ) : null}
      </>
   );
};
export default WebListe;
