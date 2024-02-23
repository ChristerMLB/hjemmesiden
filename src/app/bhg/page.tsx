"use client";

import MainNav from "@/components/MainNav";
import Blogg from "./Blogg";
import BhgRessurser from "./BhgRessurser";
import { useSearchParams } from "next/navigation";
import BhgOmMeg from "./BhgOmMeg";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";

type HomeProps = {};

const Bhg = ({}: HomeProps) => {
   const postParam = useSearchParams()?.get("post");
   const pageParam = useSearchParams()?.get("page");

   return (
      <>
         <MainNav />
         <div className="wrapper bhg-wrapper">
            <ErrorBoundary errorComponent={ErrorComponent}>
               <Blogg post={postParam} page={pageParam ? parseInt(pageParam) : 0} />
            </ErrorBoundary>
            <div className="bhgsidebarwrapper">
               <BhgOmMeg />
            <ErrorBoundary errorComponent={ErrorComponent}>
               <BhgRessurser />
            </ErrorBoundary>
            </div>
         </div>
      </>
   );
};

export default Bhg;
