'use client';

import { ReactNode } from "react";

export default function ErrorComponent({error, reset}: {error: Error; reset: ()=>void;}){
   return(
      <div className="errorcomponent">
         <h2>Det har skjedd noe feil!</h2>
         <p dangerouslySetInnerHTML={{__html: error.message}}></p>
      </div>
   )
}