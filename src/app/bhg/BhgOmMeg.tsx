import KontaktKonvolutt from "@/components/KontaktKonvolutt";

interface BhgOmMegTypes {
   setKontaktModal: React.Dispatch<React.SetStateAction<boolean>>;
   kontaktModal: Boolean;
}

const BhgOmMeg = ({setKontaktModal, kontaktModal}:BhgOmMegTypes) => {
   return (
      <aside className="ressurslistewrapper bhgommeg">
         <h3>Om meg</h3>
         <p>
            Hei, jeg er en barnehagelærer som også driver med webutvikling på si. På denne nettsiden
            har jeg samlet litt av det jeg har skrevet om utdanningspolitikk, noen av webprosjektene
            mine, og noe av det jeg har laget av ressurser til barnehagebruk. Hvis det er noe du
            lurer på, trykk på konvolutten for å ta kontakt:
            <KontaktKonvolutt setKontaktModal={setKontaktModal} kontaktModal={kontaktModal} />
         </p>
         <p>MVH • Christer M.L. Bendixen</p>
      </aside>
   );
};

export default BhgOmMeg;
