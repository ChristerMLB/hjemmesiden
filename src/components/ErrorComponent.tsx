'use client';

export default function ErrorComponent({error, reset,}: {error: Error; reset: ()=>void;}){
   return(
      <div className="w-full p-5 bg-white">
         <h2>OMG!</h2>
         <p>{error.message}</p>
      </div>
   )
}