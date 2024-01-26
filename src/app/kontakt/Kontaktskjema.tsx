'use client'

import { useState, useRef } from "react";

const Kontaktskjema = () => {

   const navnRef = useRef<HTMLInputElement>(null);
   const epostRef = useRef<HTMLInputElement>(null);
   const meldingRef = useRef<HTMLTextAreaElement>(null);

   const [sending, setSending] = useState(false);
   const [error, setError] = useState<string|false>(false);
   const [success, setSuccess] = useState<string|false>(false);

   async function sendMelding (e: React.FormEvent<HTMLFormElement>) {

      e.preventDefault();
      setError(false);
      setSuccess(false);

      if(!navnRef.current){ setError('Fyll inn navn'); return; };
      if(!epostRef.current){ setError('Fyll inn epostadressen din'); return; };
      if(!meldingRef.current){ setError('Fyll inn melding'); return; };
      try{

         setSending(true);

         const navn = navnRef.current.value;
         const epost = epostRef.current.value;
         const melding = meldingRef.current.value;

         const res = await fetch('/api/kontakt', {
            method: 'POST',
            headers:{
               'content-type': 'application/json' 
            },
            body: JSON.stringify({
               navn: navn,
               epost: epost,
               melding: melding,
            })
         });
         
         if(res.ok){
            setSuccess('Melding sendt!')
            setSending(false);
         };

      }catch (e) {
         setError(`Fikk ikke sendt melding på grunn av en feil på serveren. Nerdete detaljer: ${e}`);
         return;
      }
   }


   return (
      <>
         <div className="wrapper">
               {!sending ? 
                  <form className="kontaktskjema" onSubmit={sendMelding}>
                  <label htmlFor="name">Fullt navn</label>
                  <input type="text" id="navn" name="navn" ref={navnRef} required minLength={5} />
                  <label htmlFor="epost">Epostadresse</label>
                  <input type="email" id="epost" name="epost" ref={epostRef} required minLength={5} />
                  <label htmlFor="melding">Melding</label>
                  <textarea id="melding" name="melding" ref={meldingRef} required minLength={5} />
                  <button type='submit'>Send meldingen</button>
               </form> 
               : <div className="sendeSnurr">Sender...</div> }
               { error ? <div className="error">{error}</div> : null }
               { success ? <div className="success">{success}</div> : null }
         </div>
      </>
   );
};

export default Kontaktskjema;