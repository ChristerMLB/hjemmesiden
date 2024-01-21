'use client'

import { useEffect, useState } from "react";
import BarnehageRessursKort from "./BarnehageRessursKort";
import { RessursKort } from "@/types/Ressurser";

const BhgRessurser = () => {
   const [ressursListe, setRessursListe] = useState<RessursKort[] | null>(null);

   useEffect(() => {
      async function fetchRessurser() {
         try {
            const fetchedRessurser = await fetch("api/ressursliste").then((response) =>
               response.json()
            );
            setRessursListe(fetchedRessurser);
         } catch (e) {
            throw new Error(`Databasefeil: klarte ikke finne barnehageressursene: ${e}`);
         }
      }
      fetchRessurser();
   }, []);

   if (!ressursListe) {
      return (
<div className="ressurslistewrapper">
            <div className="barnehageressursliste">
               <BarnehageRessursKort
                  tittel="Laster ressurser..."
                  bilde="loading.gif"
                  altText=""
                  oppsummering="..."
                  id={0}
                  />
            </div>
</div>
      );
    }
    
    return (
      <div className="ressurslistewrapper">
        <h2>Ressurser du kan laste ned</h2>
        <div className="barnehageressursliste">
           {ressursListe?.map((ressurs) => (
              <BarnehageRessursKort
                 tittel={ressurs.tittel}
                 bilde={ressurs.hovedbilde_url}
                 altText={ressurs.hovedbilde_alttext}
                 oppsummering={ressurs.oppsummering}
                 key={`ressurs-${ressurs.id}`}
                 id={ressurs.id}
              />
           ))}
        </div>
      </div>
   );
};

export default BhgRessurser;
