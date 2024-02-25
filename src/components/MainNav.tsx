import KontaktKonvolutt from "./KontaktKonvolutt";

type Props = {setKontaktModal: React.Dispatch<React.SetStateAction<boolean>>;
   kontaktModal: Boolean;};

export const MainNav = ({setKontaktModal, kontaktModal}: Props) => {
   return (
      <header id="header">
         <nav id="mainNav">
            <div id="mainNavContent">
               <a href="/">
                  <img src="/img/logoen.png" alt="logo med teksten 'fortelle'" id="logoen" />
               </a>
               <ul>
                  <li>☙</li>
                  <li>
                     <a href="/bhg">barnehagegreier</a>
                  </li>
                  <li>•</li>
                  <li>
                     <a href="/web">webutvikling</a>
                  </li>
                  <li className="hideonbigscreen">•</li>
                  <li className="mirror-x hideonsmallscreen">☙</li>
               </ul>
               <ul>
                  <li>
                     <KontaktKonvolutt
                        setKontaktModal={setKontaktModal}
                        kontaktModal={kontaktModal}
                     />
                  </li>
                  <li className="mirror-x hideonbigscreen">☙</li>
               </ul>
            </div>
         </nav>
      </header>
   );
};
export default MainNav;
