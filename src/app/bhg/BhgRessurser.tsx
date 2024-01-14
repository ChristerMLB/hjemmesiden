import { useEffect, useState } from "react";
import BarnehageRessursKort from "./BarnehageRessursKort";
import { RessursKort } from "@/types/Ressurser";

const BhgRessurser = () => {
   const [ ressursListe, setRessursListe ] = useState<RessursKort[] | null>(null);

   useEffect(() => {
      async function fetchRessurser() {
         try {
            const fetchedRessurser = await fetch("api/ressursliste").then((response) => response.json());
            setRessursListe(fetchedRessurser);
         } catch (e) {
            throw new Error(`Databasefeil: klarte ikke finne barnehageressursene: ${e}`);
         }
      }
      fetchRessurser();
   }, []);

   if(!ressursListe){ return <div className="barnehageressursliste">
          <BarnehageRessursKort tittel='Laster ressurser...' bilde='' altText='' oppsummering='...' />
   </div>; }

   return (
      <div className="barnehageressursliste">
        {ressursListe?.map((ressurs) =>
          <BarnehageRessursKort tittel={ressurs.tittel} bilde={ressurs.hovedbilde_url} altText={ressurs.hovedbilde_alttext} oppsummering={ressurs.oppsummering} key={ressurs.ressursid} />
        )}
      </div>
   );
};

export default BhgRessurser;