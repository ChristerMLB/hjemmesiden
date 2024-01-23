import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

type Props = {};

export const MainNav = ({}: Props) => {
   
   // const [email, setEmail] = useState<null|string>(null);

   // useEffect(() =>{
   //    var encodedEmail = "ZnJhbmV0dHNpZGVuQGZvcnRlbGxlLm5v";
   //    setEmail(atob(encodedEmail));
   // },[])

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
                     {/* <a href={`mailto:${email}`} className="kontaktlink">
                        <FontAwesomeIcon icon={faEnvelope} />
                     </a> */}
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
};
export default MainNav;
