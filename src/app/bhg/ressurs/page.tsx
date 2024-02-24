"use client";

import Kontaktskjema from "@/app/kontakt/Kontaktskjema";
import MainNav from "@/components/MainNav";
import { EnkeltRessurs, RessursKort } from "@/types/Ressurser";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type HomeProps = {};

const Bhg = ({}: HomeProps) => {
   const ressursId: number = parseInt(useSearchParams()?.get("id") as string);
   const [ressurs, setRessurs] = useState<EnkeltRessurs | null>(null);
   const [kontaktModal, setKontaktModal] = useState<boolean>(false);
   useEffect(() => {
      async function getRessurs() {
         try {
            const ressursListe = await fetch("/api/ressursliste").then((response) =>
               response.json()
            );
            const ressursKort = ressursListe.filter(
               (ressurs: RessursKort) => ressurs.id === ressursId
            );

            const restenressurs = await fetch(`/api/enkeltressurs?ressursId=${ressursId}`).then(
               (response) => response.json()
            );

            console.log("ressurskort:", ressursKort);
            console.log("restenressurs: ", restenressurs);

            const ressursObjekt: EnkeltRessurs = {
               id: ressursId,
               hovedbilde_url: ressursKort[0].hovedbilde_url,
               hovedbilde_alttext: ressursKort[0].hovedbilde_alttext,
               tittel: ressursKort[0].tittel,
               brodtekst: restenressurs[0].brodtekst,
               filurl: restenressurs[0].filurl,
               betalingsforslag: restenressurs[0].betalingsforslag,
               ekstraBilder: null,
            };
            console.log("ressursobjekt:", ressursObjekt);
            setRessurs(ressursObjekt);
         } catch (e) {
            throw new Error(`Fant ikke ressursen: ${e}`);
         }
      }
      getRessurs();
   }, [ressursId]);

   return (
      <>
         <MainNav setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         {kontaktModal ? <Kontaktskjema setKontaktModal={setKontaktModal} /> : null}
         <div className="wrapper">
            <div className="enkeltressurs">
               <div className="enkeltressursheader">
                  <Image
                     src={`/img/bhgressurser/${ressurs?.hovedbilde_url}`}
                     alt={ressurs ? ressurs?.hovedbilde_alttext : ""}
                     width={500}
                     height={500}
                  />
               </div>
               <div className="enkeltressurstekst">
                  <h1>{ressurs?.tittel}</h1>
                  <p>{ressurs?.brodtekst}</p>
                  <p>
                     <em>
                        Hvis du bruker denne ressursen, vipps meg gjerne noen slanter på 91117305
                     </em>
                  </p>
                  <p>
                     <a href={`/ressurser/${ressurs?.filurl}`}>Last ned {ressurs?.tittel}</a>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Bhg;
