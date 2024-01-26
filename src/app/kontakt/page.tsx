import MainNav from "@/components/MainNav";
import Kontaktskjema from "./Kontaktskjema";
import ToppOverskrift from "@/components/ToppOverskrift";

const Kontakt = () => {
   return (
      <>
         <MainNav />
         <div className="wrapper">
            <ToppOverskrift tekst="Kontakt Christer" />
            <Kontaktskjema />
         </div>
      </>
   );
};

export default Kontakt;