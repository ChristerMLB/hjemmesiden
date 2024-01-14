import Image from "next/image";

type RessursKortProps = {
  tittel: string,
  bilde: string,
  altText: string,
  oppsummering: string,
}

const BarnehageRessursKort = ({tittel, bilde, altText, oppsummering}:RessursKortProps) => {

    return (
        <div className="barnehageressurskort">
          <div className="ressursheader">
            <Image src={`/img/bhgressurser/${bilde}`} alt={altText} height={40} width={100} />
            <h3>{tittel}</h3>
          </div>
          <p>{oppsummering}</p>
        </div>
    );
};

export default BarnehageRessursKort;