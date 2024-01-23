

const Kontaktskjema = () => {
   return (
      <>
         <div className="wrapper">
               <form className="kontaktskjema" action="/api/kontakt" method="POST">
                  <label htmlFor="name">Fullt navn</label>
                  <input type="text" id="navn" name="navn" required minLength={5} />
                  <label htmlFor="epost">Epostadresse</label>
                  <input type="email" id="epost" name="epost" required minLength={5} />
                  <label htmlFor="melding">Melding</label>
                  <textarea id="melding" name="melding" required minLength={5} />
                  <button type='submit'>Send meldingen</button>
               </form>
         </div>
      </>
   );
};

export default Kontaktskjema;