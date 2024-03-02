'use client';

import { ReactNode } from "react";

export default function ErrorComponent({error, reset}: {error: Error; reset: ()=>void;}){
   return(
      <div className="w-full p-5 bg-white">
         <h2>Det har skjedd noe feil!</h2>
         <p>{error.message}</p>
      </div>
   )
}