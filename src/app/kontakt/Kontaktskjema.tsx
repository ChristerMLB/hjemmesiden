"use client";

import { useState, useRef } from "react";

const Kontaktskjema = () => {
   const navnRef = useRef<HTMLInputElement>(null);
   const epostRef = useRef<HTMLInputElement>(null);
   const meldingRef = useRef<HTMLTextAreaElement>(null);

   const [sending, setSending] = useState(false);
   const [error, setError] = useState<string | false>(false);
   const [success, setSuccess] = useState<string | false>(false);

   async function sendMelding(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setError(false);
      setSuccess(false);
       const navnRegex = /[A-Za-z \u00C0-\u017F\u0180-\u024F\u1E00-\u1EFFŠšŸÿ'\-\.]+/;
       const epostRegex = /^[æøåA-Z0-9_!#%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/gi;
      if (sending){ return; };
      if (!navnRef.current) {
         setError("Fyll inn navn");
         return;
      }
       if(!navnRef.current.value.match(navnRegex)){
           setError("Det ser ut som det er noe som ikke stemmer helt med navnet du har skrevet inn. Hvis det ikke er riktig, gi gjerne beskjed om det i eposten, så jeg kan få fikset regexen :)");
           return;
       }
      if (!epostRef.current) {
         setError("Fyll inn epostadressen din");
         return;
      }
       if(!epostRef.current.value.match(epostRegex)){
           setError("Det ser ut som det er noe som ikke stemmer helt med epostadressen du har fylt inn. Hvis det ikke er riktig, gi gjerne beskjed om det i eposten, så jeg kan få fikset regexen :)");
           return;
       }
      if (!meldingRef.current) {
         setError("Fyll inn melding");
         return;
      }
      try {
         setSending(true);

         const navn = navnRef.current.value;
         const epost = epostRef.current.value;
         const melding = meldingRef.current.value;

         const res = await fetch("/api/kontakt", {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({
               navn: navn,
               epost: epost,
               melding: melding,
            }),
         });

         if (res.ok) {
            setSuccess("Melding sendt!");
            setSending(false);
         } else {
            const errorData = await res.json();
            setError(
               `Fikk ikke sendt melding på grunn av en feil på serveren. Detaljer: ${errorData.error}]]`
            );
         }
      } catch (e) {
         setError(
            `Fikk ikke sendt melding på grunn av en feil på serveren. Detaljer: ${e}`
         );
         return;
      }
   }

   return (
      <>
         <div className="wrapper">
            {!sending ? (
               <form className="kontaktskjema" onSubmit={sendMelding}>
                  <label htmlFor="name">Fullt navn</label>
                  <input type="text" id="navn" name="navn" ref={navnRef} required minLength={5} />
                  <label htmlFor="epost">Epostadresse</label>
                  <input
                     type="email"
                     id="epost"
                     name="epost"
                     ref={epostRef}
                     required
                     minLength={5}
                  />
                  <label htmlFor="melding">Melding</label>
                  <textarea id="melding" name="melding" ref={meldingRef} required minLength={5} />
                  {error ? <div className="error">{'<h3>Feil!</h3>'+error}</div> : null}
                  {success ? <div className="success">{success}</div> : null}
                  <button type="submit">Send meldingen</button>
               </form>
            ) : (
               <div className="kontaktskjema sendeSnurr">
                  <label>Fullt navn</label>
                  <div className="dummyInput"></div>
                  <label>Epostadresse</label>
                  <div className="dummyInput"></div>
                  <label>Melding</label>
                  <div className="dummyTextarea"></div>
                  <button disabled>Sender meldingen...</button>
               </div>
            )}
         </div>
      </>
   );
};

export default Kontaktskjema;
