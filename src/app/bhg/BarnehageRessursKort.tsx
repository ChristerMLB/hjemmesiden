import Image from "next/image";

type RessursKortProps = {
   tittel: string;
   bilde: string;
   altText: string;
   oppsummering: string;
};

const BarnehageRessursKort = ({ tittel, bilde, altText, oppsummering }: RessursKortProps) => {
   return (
      <div className="barnehageressurskort">
         <Image
            className="ressurshovedbilde"
            src={`/img/bhgressurser/${bilde}`}
            alt={altText}
            height={40}
            width={120}
         />
         <p>
            <h3 className="ressurskorttittel">{tittel}</h3>
            {oppsummering}
         </p>
      </div>
   );
};

export default BarnehageRessursKort;
