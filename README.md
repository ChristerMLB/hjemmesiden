# hjemmesiden min!

En enkel hjemmeside hvor jeg viser frem utviklerporteføljen min, og blogger om barndomspolitikk.

Nettsiden har to ulike seksjoner, med to ganske ulike målgrupper. Tanken er at forsiden bare skal være en visuelt leken side uten noe særlig innhold bortsett fra navigasjonen – på denne måten får jeg kommunisert denne strukturen tydelig til brukeren. Utfordringen er å gjøre forsiden relevant for begge målgruppene - og der tror jeg lekenhet og kreativitet er en viktig fellesnevner.

# Features:

- Responsivt design som funker på alle skjermstørrelser
- Konktaktskjema som er sikret mot XSS, SQL-injections og bots
- Masse bra innhold

# To do:

### Innhold

- Flere bloggposter, skriv om leserinnlegg jeg har hatt i BT og lignende
- få inn lenker i conorganizer-posten

### Backend

- Bedre logging av feil, kanskje de bare skal sendes på epost? ja, i alle fall de viktigste!
- implementer goatcounter og skru av vercel sine analytics

### Design og styling

- En gjennomgang av designet generelt sett for å gjøre det enklere og mer profesjonelt (og mer konsekvent) - gjøre en grundig jobb i figma?
- Finn steder å legge inn små animasjoner, for å gjøre uttrykket mer lekent
  - når jeg viser de gamle prosjektene
- tooltip som dukker opp når man klikker på teknologiene
- Stailing av ekstrabilder

### På sikt

- migrere til Supabase?
- bedre redigering for bloggen, bruk useOptimistic.
- bedre redigering for web-prosjektene og barnehageressursene
- blogg eller lignende på webutviklingssiden?
- gjør flere av komponentene til servercomponents med async await, sånn at jeg kan fjerne den ekle linjen fra next.config
