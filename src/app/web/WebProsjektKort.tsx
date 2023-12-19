'use client';
import { WebProject } from "@/types/Web"
import Image from "next/image";

type WebProjectKortProps = {
    prosjekt: WebProject,
  }
  const WebProsjektKort = ({prosjekt}: WebProjectKortProps) => {
    return (
      <div className="webProsjekt">

        {prosjekt.index % 2 ?

          <>
        <div className="prosjektImg">
          <img src={`img/prosjektPreview/${prosjekt?.previewimg}`} alt={prosjekt?.previewimgalt} />
        </div>
        <div className="prosjektBeskrivelseWrapper">
          <div className="spacer"></div>
          <div className="prosjektBeskrivelse">
            <a href={`?prosjekt=${prosjekt?.navn}`}><h2>{prosjekt?.navn}</h2></a>
            <p className="ingress">{prosjekt?.ingress} <a href={`?prosjekt=${prosjekt?.navn}`}>Les mer...</a></p>
            
          </div>
            <div className="teknologier">
              <p>
                Teknologier:
                {prosjekt?.teknologier ?
                prosjekt?.teknologier
                .split(", ")
                .map((teknologi)=>{
                  return <Image src={`/img/teknologier/${teknologi}.png`} alt={teknologi} height={20} width={20} key={`${teknologi}${prosjekt.index}`} />
                }) : null }
              </p>
            </div>
        </div> 
          </>

        :

          <>
        <div className="prosjektBeskrivelseWrapper prosjektBeskrivelseWrapperH">
          <div className="prosjektBeskrivelse">
            <a href={`?prosjekt=${prosjekt?.navn}`}><h2>{prosjekt?.navn}</h2></a>
            <p className="ingress">{prosjekt?.ingress} <a href={`?prosjekt=${prosjekt?.navn}`}>Les mer...</a></p>
          </div>
            <div className="teknologier">
              <p>
                Teknologier: 
                {prosjekt?.teknologier ?
                  prosjekt?.teknologier
                  .split(", ")
                  .map((teknologi)=>{
                    return <Image src={`/img/teknologier/${teknologi}.png`} alt={teknologi} height={20} width={20} key={`${teknologi}${prosjekt.index}`} />
                }) : null}
              </p>
            </div>
          <div className="spacer spacerH"></div>
        </div>
        <div className="prosjektImg prosjektImgH">
          <img src={`img/prosjektPreview/${prosjekt?.previewimg}`} alt={prosjekt?.previewimgalt} />
        </div>
          </>
       
        }
      </div>
    )
  }

  export default WebProsjektKort;