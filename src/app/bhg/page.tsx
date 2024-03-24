"use client";

import MainNav from "@/components/MainNav";
import Blogg from "./Blogg";
import BhgRessurser from "./BhgRessurser";
import { useSearchParams } from "next/navigation";
import BhgOmMeg from "./BhgOmMeg";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import { useState } from "react";
import Kontaktskjema from "../kontakt/Kontaktskjema";

type HomeProps = {};

const Bhg = ({}: HomeProps) => {
   const postParam = useSearchParams()?.get("post");
   const pageParam = useSearchParams()?.get("page");
   const [kontaktModal, setKontaktModal] = useState<boolean>(false);

   return (
      <>
         <MainNav currentPage='bhg' setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         {kontaktModal ? <Kontaktskjema setKontaktModal={setKontaktModal}/> : null}
         <div className="wrapper bhg-wrapper">
            <ErrorBoundary errorComponent={ErrorComponent}>
               <Blogg post={postParam} page={pageParam ? parseInt(pageParam) : 0} />
            </ErrorBoundary>
            <div className="bhgsidebarwrapper">
               <ErrorBoundary errorComponent={ErrorComponent}>
                  <BhgRessurser />
               </ErrorBoundary>
               <BhgOmMeg setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
            </div>
         </div>
      </>
   );
};

export default Bhg;
