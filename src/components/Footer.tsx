import { faBehance, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Kontaktskjema from "@/app/kontakt/Kontaktskjema";

interface KontaktKonvoluttTypes {
   setKontaktModal: React.Dispatch<React.SetStateAction<boolean>>;
   kontaktModal: Boolean;
}

export default function Footer({ setKontaktModal, kontaktModal }: KontaktKonvoluttTypes) {
   return (
      <footer>
         <div className="footerseksjon">
            <Image src="/img/christer2.png" alt="Bilde av Christer" width={400} height={266} />
            <div className="footerommegtekst">
               <h2>Hei!</h2>
               <p>
                  Jeg er en barnehagelærer som også driver med webutvikling på si. På denne
                  nettsiden har jeg samlet litt av det jeg har skrevet om utdanningspolitikk, noen
                  av webprosjektene mine, og noe av det jeg har laget av ressurser til
                  barnehagebruk. Hvis det er noe du lurer på, ikke nøl med å ta kontakt :)
               </p>
               <p>MVH • Christer M.L. Bendixen</p>
            </div>
         </div>
         <div className="footerseksjon">
            <ul className="socials">
               <li>
                  <a onClick={(e)=>{e.preventDefault(); setKontaktModal(!kontaktModal);}} href="/kontakt"><FontAwesomeIcon icon={faEnvelope} />
                  Kontaktskjema
                  </a>
               </li>
               <li>
                  <a href="https://github.com/ChristerMLB/">
                     <FontAwesomeIcon icon={faGithub} />{" "}
                  GitHub
                  </a>
               </li>
               <li>
                  <a href="https://www.behance.net/ChristerBendixen/">
                     <FontAwesomeIcon icon={faBehance} />{" "}
                  Behance
                  </a>
               </li>
               <li>
                  <a href="https://www.linkedin.com/in/christermlb/">
                     <FontAwesomeIcon icon={faLinkedin} />{" "}
                  LinkedIn
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
}
