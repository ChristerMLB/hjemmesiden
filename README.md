# hjemmesiden min!

En enkel hjemmeside hvor jeg viser frem utviklerporteføljen min, og blogger om barndomspolitikk.

Nettsiden har to ulike seksjoner, med to ganske ulike målgrupper. Tanken er at forsiden bare skal være en visuelt leken side uten noe særlig innhold bortsett fra navigasjonen – på denne måten får jeg kommunisert denne strukturen tydelig til brukeren. Utfordringen er å gjøre forsiden relevant for begge målgruppene - og der tror jeg lekenhet og kreativitet er en viktig fellesnevner.

# Features:

- Responsivt design som funker på alle skjermstørrelser
- Konktaktskjema som er sikret mot XSS, SQL-injections og bots
- Masse bra innhold

# To do:

### Design

- En grundig gjennomgang av typografien
- En gjennomgang av designet generelt sett for å gjøre det enklere og mer profesjonelt (og mer konsekvent)
- Finn steder å legge inn små animasjoner, for å gjøre uttrykket mer lekent
  - når jeg viser de gamle prosjektene
- tooltip som dukker opp når man klikker på teknologiene

### Styling

- Favikon
- Stailing av ekstrabilder
- gå gjennom feilmeldingene og sjekk om de kommer til bruker og er godt stailet
- vis hvor jeg er i nav, deaktiver lenken og endre på stailingen
- stail ferdig footeren
- stail ferdig enkeltbloggpost
- fiks konvolutten i nav på liten skjerm
- stail linker som er h1-h3 så cssen blir mer elegant

### Innhold

- Flere bloggposter, skriv om leserinnlegg jeg har hatt i BT og lignende
- <time> med datetime= på bloggpostene

### Backend

- Bedre logging av feil, kanskje de bare skal sendes på epost?
- implementer goatcounter og skru av vercel sine analytics

### På sikt

- migrere til Supabase?
- bedre redigering for bloggen, bruk useOptimistic
- bedre redigering for web-prosjektene og barnehageressursene
- blogg eller lignende på webutviklingssiden?
- gjør flere av komponentene til servercomponents med async await, sånn at jeg kan fjerne den ekle linjen fra next.config
