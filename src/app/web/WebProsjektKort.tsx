'use client';
import { WebProject } from "@/types/Web"

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
          <h2>{prosjekt?.navn}</h2>
            <p>{prosjekt?.ingress}</p>
            <p className="teknologier">{prosjekt?.teknologier}</p>
</div>
        </div>
          </>

        :

          <>
        <div className="prosjektBeskrivelseWrapper prosjektBeskrivelseWrapperH">
<div className="prosjektBeskrivelse">
          <h2>{prosjekt?.navn}</h2>
            <p>{prosjekt?.ingress}</p>
            <div className="teknologier">{prosjekt?.teknologier}</div>
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