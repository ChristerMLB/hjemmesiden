"use client";

import { useState, useRef } from "react";

const Kontaktskjema = () => {
   const navnRef = useRef<HTMLInputElement>(null);
   const epostRef = useRef<HTMLInputElement>(null);
   const meldingRef = useRef<HTMLTextAreaElement>(null);
   const TaCref = useRef<HTMLInputElement>(null);
   const botCheckRef = useRef<HTMLInputElement>(null);

   const [sending, setSending] = useState(false);
   const [error, setError] = useState<string | false>(false);
   const [success, setSuccess] = useState<string | false>(false);

   async function sendMelding(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setError(false);
      setSuccess(false);
      const navnRegex = /[A-Za-z \u00C0-\u017F\u0180-\u024F\u1E00-\u1EFFŠšŸÿ'\-\.]+/;
      const epostRegex = /^[æøåA-Z0-9_!#%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/gi;
      if (sending) {
         return;
      }
      if (!navnRef.current) {
         setError("Fyll inn navn");
         return;
      }
      if (!navnRef.current.value.match(navnRegex)) {
         setError(
            "Det ser ut som det er noe som ikke stemmer helt med navnet du har skrevet inn. Hvis det ikke er riktig, gi gjerne beskjed om det i eposten, så jeg kan få fikset regexen :)"
         );
         return;
      }
      if (!epostRef.current) {
         setError("Fyll inn epostadressen din");
         return;
      }
      if (!epostRef.current.value.match(epostRegex)) {
         setError(
            "Det ser ut som det er noe som ikke stemmer helt med epostadressen du har fylt inn. Hvis det ikke er riktig, gi gjerne beskjed om det i eposten, så jeg kan få fikset regexen :)"
         );
         return;
      }
      if (!meldingRef.current) {
         setError("Fyll inn melding");
         return;
      }
      if(!botCheckRef.current) {
         setError("Fyll ut det siste feltet som sjekker at du er menneske.");
         return;
      }
      try {
         setSending(true);

         const navn = navnRef.current.value;
         const epost = epostRef.current.value;
         const melding = meldingRef.current.value;
         const botCheck = botCheckRef.current.value;
         const honeypot = TaCref.current?.checked;

         console.log(TaCref.current?.checked);

         const res = await fetch("/api/kontakt", {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({
               navn: navn,
               epost: epost,
               melding: melding,
               honeypot: honeypot,
               botCheck: botCheck,
            }),
         });

         if (res.ok) {
            setSuccess("Melding sendt!");
            setSending(false);
         } else {
            const errorData = await res.json();
            setError(
               `Fikk ikke sendt melding på grunn av en feil på serveren. Detaljer: ${errorData.error}`
            );
            setSending(false);
         }
      } catch (e) {
         setError(`Fikk ikke sendt melding på grunn av en feil på serveren. Detaljer: ${e}`);
         setSending(false);
         return;
      }
   }

   return (
      <>
         <div className="wrapper">
            {!sending ? (
               <form className="kontaktskjema" onSubmit={sendMelding}>
                  <label htmlFor="name">Fullt navn</label>
                  <input type="text" id="navn" name="navn" ref={navnRef} required minLength={5} maxLength={200} />
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
                  <textarea id="melding" name="melding" ref={meldingRef} required minLength={5} maxLength={3000} />
                  <label htmlFor="botCheck">Enkel sjekk for om du er et menneske: hvis du har to epler og får tre til, hvor mange epler har du da?</label>
                  <input type="text" name="botCheck" ref={botCheckRef} required maxLength={20}></input>
                  <input type="checkbox" name="TaCcheck" className="TaC" ref={TaCref} />
                  <label htmlFor="TaCcheck" className="TaC">I accept the terms and conditions</label>
                  {error ? (
                     <div className="error">
                        <h3>Feil!</h3>
                        {error}
                     </div>
                  ) : null}
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
