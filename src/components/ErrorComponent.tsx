'use client';

export default function ErrorComponent({error, reset,}: {error: Error; reset: ()=>void;}){
   return(
      <div className="w-full">
         <h2>OMG!</h2>
         <p>Noe gikk galt: {error.message}</p>
      </div>
   )
}