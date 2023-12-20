'use client';

import { useEffect, useState } from "react";
import type { WebArray, WebProject } from "@/types/Web";
import MainNav from "@/components/MainNav";
import WebProsjektKort from "./WebProsjektKort";
import { useSearchParams } from "next/navigation";
import WebProsjekt from "./WebProsjekt";
import IntroBoks from "./IntroBoks";

type HomeProps = {

}

const Web = ({}: HomeProps) => {
  const [webArray, setWebArray] = useState<WebArray | null>(null);
  const [currentProject, setCurrentProject] = useState<WebProject | undefined>(undefined);
  const [showOld, setShowOld] = useState<boolean>(false);
  const prosjekt = useSearchParams()?.get('prosjekt');
  
  useEffect(()=>{
    async function getWebArray(){
      try{
        const fetchedWebArray = await fetch('api/web').then((response)=>response.json());
        setWebArray(fetchedWebArray);
      }catch(e){
        throw new Error(`Fant ikke introteksten i databasen: ${e}`)
      }
    }
    getWebArray();
  }, []);

  
  useEffect(()=>{
    if(webArray && prosjekt){
      setCurrentProject(webArray.find((p)=>p.navn === prosjekt));
    }
  }, [prosjekt, webArray]);
  
  return (
  currentProject ?

<>
        <MainNav />
      <div className="wrapper">
        <WebProsjekt prosjekt={currentProject} />
      </div>
  
</>
    :

    <>
      <MainNav />
      <div className="wrapper">
        { webArray ?  
          <div className="prosjektListeWrapper">
          <IntroBoks intro={webArray[0]} />
          {webArray?.map((prosjekt, i)=>{
            if(i > 0 && !prosjekt.old){
              return <WebProsjektKort prosjekt={prosjekt} key={prosjekt.index} />
            }
          })}
          </div>
        : null}

      {showOld ?

        <div className="prosjektListeWrapper">
          {webArray?.map((prosjekt, i)=>{
            if(i > 0 && prosjekt.old){
              return <WebProsjektKort prosjekt={prosjekt} key={prosjekt.index} />
            }
          })}
        </div>

        : webArray ? 
          
          <div className="gamleProsjekterKnappWrapper">
            <button className="gamleProsjekterKnapp" onClick={()=>setShowOld(true)}>Last inn eldre webprosjekter</button>
          </div>
          
        : null }
      </div>
    </>
    );
};
export default Web;