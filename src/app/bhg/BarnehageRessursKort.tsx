"use client";

import Image from "next/image";

type RessursKortProps = {
   tittel: string;
   bilde: string;
   altText: string;
   oppsummering: string;
   id: number;
};

const BarnehageRessursKort = ({ tittel, bilde, altText, oppsummering, id }: RessursKortProps) => {
   return (
      <a href={`bhg/ressurs?id=${id}`}>
         <div className="barnehageressurskort">
            <Image
               className="ressurshovedbilde"
               src={`/img/bhgressurser/${bilde}`}
               alt={altText}
               height={40}
               width={120}
            />
            <div>
               <h3 className="ressurskorttittel">{tittel}</h3>
               <p>{oppsummering}</p>
            </div>
         </div>
      </a>
   );
};

export default BarnehageRessursKort;
