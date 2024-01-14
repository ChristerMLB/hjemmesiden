"use client";

import MainNav from "@/components/MainNav";
import Blogg from "./Blogg";
import BhgRessurser from "./BhgRessurser";
import { useSearchParams } from "next/navigation";

type HomeProps = {};

const Bhg = ({}: HomeProps) => {

   const postParam = useSearchParams()?.get("post");

   return (
      <>
         <MainNav />
         <div className="wrapper bhg-wrapper">
           <BhgRessurser />
           <Blogg post={postParam} />
         </div>
      </>
   );

};

export default Bhg;
