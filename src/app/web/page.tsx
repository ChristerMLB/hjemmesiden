"use client";

import { useEffect, useState } from "react";
import type { WebArray, WebProject } from "@/types/Web";
import MainNav from "@/components/MainNav";
import { useSearchParams } from "next/navigation";
import WebProsjekt from "./WebProsjekt";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import WebListe from "./WebListe";
import Kontaktskjema from "../kontakt/Kontaktskjema";
//import Footer from "@/components/Footer";

type WebProps = {};

const Web = ({}: WebProps) => {
   const [webArray, setWebArray] = useState<WebArray | null>(null);
   const [currentProject, setCurrentProject] = useState<WebProject | undefined>(undefined);
   const [showOld, setShowOld] = useState<boolean>(false);
   const prosjekt = useSearchParams()?.get("prosjekt");
   const [error, setError] = useState<Error | null>(null);
   const [kontaktModal, setKontaktModal] = useState<boolean>(false);

   useEffect(() => {
      async function getWebArray() {
         try {
            // throw new Error("TEST!");
            const fetchedWebArray = await fetch("api/web").then((response) => response.json());
            setWebArray(fetchedWebArray);
         } catch (e) {
            setError(Error(`Feil under oppslag i databasen. ${e}`));
         }
      }
      getWebArray();
   }, []);

   useEffect(() => {
      if (webArray && prosjekt) {
         setCurrentProject(webArray.find((p) => p.navn === prosjekt));
      }
   }, [prosjekt, webArray]);

   return currentProject ? (
      <>
         <MainNav currentPage={currentProject ? currentProject.navn : null} setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         {kontaktModal ? <Kontaktskjema setKontaktModal={setKontaktModal} /> : null}
         <div className="wrapper">
            <div className="enkeltProsjektWrapper">
               <ErrorBoundary errorComponent={ErrorComponent}>
                  <WebProsjekt prosjekt={currentProject} />
               </ErrorBoundary>
            </div>
         </div>
      </>
   ) : (
      <>
         <MainNav currentPage='web' setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         {kontaktModal ? <Kontaktskjema setKontaktModal={setKontaktModal} /> : null}
         <div className="wrapper">
            <div className="prosjektListeWrapper">
               {error ? (
                  <ErrorComponent error={error} reset={() => location.reload()} />
               ) : (
                  <ErrorBoundary errorComponent={ErrorComponent}>
                     <WebListe webArray={webArray} showOld={showOld} setShowOld={setShowOld} />
                  </ErrorBoundary>
               )}
            </div>
         </div>
         {/* <Footer /> */}
      </>
   );
};
export default Web;
