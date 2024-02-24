import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

interface KontaktKonvoluttTypes {
   setKontaktModal: React.Dispatch<React.SetStateAction<boolean>>;
   kontaktModal: Boolean;
}

const KontaktKonvolutt = ({ setKontaktModal, kontaktModal }: KontaktKonvoluttTypes) => {
   function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
      e.preventDefault();
      setKontaktModal(!kontaktModal);
   }

   return (
      <a onClick={handleClick} href="/kontakt" className="kontaktkonvolutt">
         <FontAwesomeIcon icon={kontaktModal ? faXmark : faEnvelope} />
      </a>
   );
};

export default KontaktKonvolutt;
