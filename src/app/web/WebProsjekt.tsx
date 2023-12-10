'use client';
import { WebProject } from "@/types/Web"
import Image from "next/image";

type WebProjectProps = {
    prosjekt: WebProject | null
  }
  const WebProsjekt = ({prosjekt}: WebProjectProps) => {
    return (
      <div className="enkeltProsjektWrapper">
        <div className="webProsjekt">
          <div className="prosjektBeskrivelseWrapper">
            <div className="spacer"></div>
            <div className="prosjektBeskrivelse">
              <h2>{prosjekt?.navn}</h2>
              <p>{prosjekt?.ingress}</p>
              <p>{prosjekt?.mertekst}</p>
            </div>
                <div className="teknologier">
                  <p>
                    Teknologier: 
                    {prosjekt?.teknologier
                    .split(", ")
                    .map((teknologi)=>{
                      return <Image src={`/img/teknologier/${teknologi}.png`} alt={teknologi} height={20} width={20} key={`${teknologi}${prosjekt.index}`} />
                    })}
                  </p>
                  <p>
                    {prosjekt?.url ? <a href={prosjekt?.url}>Besøk nettsiden!</a> : null}
                    {prosjekt?.gitHubUrl ? <a href={prosjekt?.gitHubUrl}>Se prosjektet på Github</a> : null}
                  </p>
                </div>
          </div>
   
          { prosjekt?.extraimg && prosjekt?.extraimgalt ?  
              <div className="prosjektImg2">
                <img src={`img/prosjektPreview/${prosjekt?.extraimg}`} alt={prosjekt?.extraimgalt} />
              </div>
          : null }
          <div className="prosjektImg">
            <img src={`img/prosjektPreview/${prosjekt?.previewimg}`} alt={prosjekt?.previewimgalt} />
          </div>
        </div>
      </div>
    )
  }

  export default WebProsjekt;