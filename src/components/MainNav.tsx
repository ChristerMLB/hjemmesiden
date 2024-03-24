import KontaktKonvolutt from "./KontaktKonvolutt";

type Props = {setKontaktModal: React.Dispatch<React.SetStateAction<boolean>>;
   kontaktModal: Boolean;currentPage: String | null;};

export const MainNav = ({setKontaktModal, kontaktModal, currentPage}: Props) => {
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
                     <a href="/bhg" className={currentPage == "bhg" ? 'disabledlink' : null} >barnehagegreier</a>
                  </li>
                  <li>•</li>
                  <li>
                     <a href="/web" className={currentPage == "web" ? 'disabledlink' : null} >webutvikling</a>
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
