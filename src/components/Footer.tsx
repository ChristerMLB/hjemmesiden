import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
   return (
      <footer>
         <div className="footerseksjon">
            <Image src="/img/christer2.png" alt="Bilde av Christer" width={400} height={266} />
            <div className="footerommegtekst">
               <h2>Hei igjen!</h2>
               <p>
                  Hei, jeg er en barnehagelærer som også driver med webutvikling på si. På denne
                  nettsiden har jeg samlet litt av det jeg har skrevet om utdanningspolitikk, noen
                  av webprosjektene mine, og noe av det jeg har laget av ressurser til
                  barnehagebruk. Hvis det er noe du lurer på, ikke nøl med å ta kontakt :)
               </p>
               <p>MVH • Christer M.L. Bendixen</p>
            </div>
         </div>
         <div className="footerseksjon">
            <div className="socials">
                <a href="https://www.linkedin.com/in/christermlb/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            </div>
         </div>
      </footer>
   );
}
