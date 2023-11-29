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
  const prosjekt = useSearchParams()?.get('prosjekt');
  
  useEffect(()=>{
    async function getWebArray(){
      try{
        const fetchedWebArray = await fetch('api/web').then((response)=>response.json());
        console.log(fetchedWebArray);
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
        <div className="prosjektListeWrapper">
      <IntroBoks webArray={webArray} />
        {webArray?.map((prosjekt, i)=>{
          if(i > 0){
            return <WebProsjektKort prosjekt={prosjekt} key={prosjekt.index} />
          }
        })}
        </div>
      </div>
    </>
    );
};
export default Web;