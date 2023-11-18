'use client';
import { WebProject } from "@/types/Web"


type WebProjectProps = {
    prosjekt: WebProject | null
  }
  const WebProsjekt = ({prosjekt}: WebProjectProps) => {
    return (
      <div className="webProsjekt">
        <div className="prosjektBeskrivelse">
          <h2>{prosjekt?.navn}</h2>
          <p>{prosjekt?.ingress}</p>
          <p>{prosjekt?.mertekst}</p>
          <div className="teknologier">{prosjekt?.teknologier}</div>
        </div>
        <div className="prosjektImg">
          <img src={`img/prosjektPreview/${prosjekt?.previewimg}`} alt={prosjekt?.previewimgalt} />
        </div>
      </div>
    )
  }

  export default WebProsjekt;