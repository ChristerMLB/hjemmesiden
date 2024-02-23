"use client";
import { WebProject } from "@/types/Web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import Image from "next/image";

type WebProjectProps = {
   prosjekt: WebProject | null;
};
const WebProsjekt = ({ prosjekt }: WebProjectProps) => {
   return (
      <div className="webProsjekt">
         <div className="prosjektBeskrivelseWrapper enkeltProsjektBeskrivelseWrapper">
            <div className="spacer"></div>
            <div className="prosjektBeskrivelse">
               <h2>{prosjekt?.navn}</h2>

               <p>{prosjekt?.ingress}</p>
               <p>
                  {prosjekt?.mertekst}
                  {prosjekt?.extraimg && prosjekt?.extraimgalt ? (
                     <div className="prosjektImg2">
                        <img
                           src={`img/prosjektPreview/${prosjekt?.extraimg}`}
                           alt={prosjekt?.extraimgalt}
                        />
                     </div>
                  ) : null}
               </p>
               <p>
                  {prosjekt?.url ? (
                     <a href={prosjekt?.url}>
                        <button className="besokeKnapp">
                           <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> besøk prosjektet
                        </button>
                     </a>
                  ) : null}
                  {prosjekt?.gitHubUrl ? (
                     <a href={prosjekt?.gitHubUrl}>
                        <button className="besokeKnapp">
                           <FontAwesomeIcon icon={faGithub} /> se kildekoden
                        </button>
                     </a>
                  ) : null}
                  <a href="/web">
                     <button className="besokeKnapp">
                        <FontAwesomeIcon icon={faArrowLeft} /> til prosjektlisten
                     </button>
                  </a>
               </p>
            </div>
            <div className="teknologier">
               <p>
                  Teknologier:
                  {prosjekt?.teknologier
                     ? prosjekt?.teknologier.split(", ").map((teknologi) => {
                          return (
                             <Image
                                src={`/img/teknologier/${teknologi}.png`}
                                className="teknologiIkon aspect-auto"
                                alt={teknologi}
                                height={20}
                                width={20}
                                key={`${teknologi}${prosjekt.id}`}
                             />
                          );
                       })
                     : null}
               </p>
            </div>
         </div>

         <div className="prosjektImg overflow-y-scroll">
            {prosjekt?.url && prosjekt?.mobilvisning ? (
               <>
                  <iframe
                     id="mobilepreview"
                     className="hideonsmallscreen"
                     title={`mobilvisning av ${prosjekt?.navn}`}
                     width="400"
                     height="800"
                     src={prosjekt?.url as string}
                  ></iframe>
                  <img
                     src={`img/prosjektPreview/${prosjekt?.previewimg}`}
                     alt={prosjekt?.previewimgalt}
                     className="hideonbigscreen"
                  />
               </>
            ) : (
               <img
                  src={`img/prosjektPreview/${prosjekt?.previewimg}`}
                  alt={prosjekt?.previewimgalt}
               />
            )}
         </div>
      </div>
   );
};

export default WebProsjekt;
