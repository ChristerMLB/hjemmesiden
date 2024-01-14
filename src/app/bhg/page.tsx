"use client";

import MainNav from "@/components/MainNav";
import Blogg from "./Blogg";
import BhgRessurser from "./BhgRessurser";
import { useSearchParams } from "next/navigation";

type HomeProps = {};

const Bhg = ({}: HomeProps) => {

   const postParam = useSearchParams()?.get("post");
   const pageParam = useSearchParams()?.get("page");

   return (
      <>
         <MainNav />
         <div className="wrapper bhg-wrapper">
           <BhgRessurser />
           <Blogg post={postParam} page={pageParam ? parseInt(pageParam) : 0} />
         </div>
      </>
   );

};

export default Bhg;