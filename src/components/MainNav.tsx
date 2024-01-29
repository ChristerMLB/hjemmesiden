import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

export const MainNav = ({}: Props) => {

   return (
      <header id="header">
         <nav id="mainNav">
            <div id="mainNavContent">
               <a href="/">
                  <img src="/img/logoen.png" alt="logo med teksten 'fortelle'" id="logoen" />
               </a>
               <ul>
                  ☙
                  <li>
                     <a href="/bhg">barnehagegreier</a>
                  </li>
                  <li>•</li>
                  <li>
                     <a href="/web">webutvikling</a>
                  </li>
                  <li>❧</li>
               </ul>
               <ul>
                  <li>
                     <a href='/kontakt' className="kontaktlink">
                        <FontAwesomeIcon icon={faEnvelope} />
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
};
export default MainNav;
