"use client";

import MainNav from "@/components/MainNav";
import Kontaktskjema from "./Kontaktskjema";
import ToppOverskrift from "@/components/ToppOverskrift";
import { useState } from "react";

const Kontakt = () => {
   const [kontaktModal, setKontaktModal] = useState<boolean>(false);
   return (
      <>
         <MainNav setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         <div className="wrapper">
            <ToppOverskrift tekst="Kontakt Christer" />
            <Kontaktskjema setKontaktModal={setKontaktModal} />
         </div>
      </>
   );
};

export default Kontakt;