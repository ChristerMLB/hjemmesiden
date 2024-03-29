# hjemmesiden min!

En enkel hjemmeside hvor jeg viser frem utviklerporteføljen min, og blogger om barndomspolitikk.

Nettsiden har to ulike seksjoner, med to ganske ulike målgrupper. Tanken er at forsiden bare skal være en visuelt leken side uten noe særlig innhold bortsett fra navigasjonen – på denne måten får jeg kommunisert denne strukturen tydelig til brukeren. Utfordringen er å gjøre forsiden relevant for begge målgruppene - og der tror jeg lekenhet og kreativitet er en viktig fellesnevner.

# Features:

- Responsivt design som funker på alle skjermstørrelser
- Konktaktskjema som er sikret mot XSS, SQL-injections og bots
- Masse bra innhold

# To do:


### Styling

- Favikon
- Stailing av ekstrabilder
- stail ferdig footeren
- stail ferdig enkeltbloggpost
- gå gjennom feilmeldingene og sjekk om de kommer til bruker og er godt stailet
- finn et par stilige fonter og putt litt luft inn hvor behov

### Innhold

- Flere bloggposter, skriv om leserinnlegg jeg har hatt i BT og lignende

### Backend

- Bedre logging av feil, kanskje de bare skal sendes på epost?
- implementer goatcounter og skru av vercel sine analytics

### Design

- En grundig gjennomgang av typografien
- En gjennomgang av designet generelt sett for å gjøre det enklere og mer profesjonelt (og mer konsekvent) - gjøre en
grundig jobb i figma?
- Finn steder å legge inn små animasjoner, for å gjøre uttrykket mer lekent
  - når jeg viser de gamle prosjektene
- tooltip som dukker opp når man klikker på teknologiene

### På sikt

- migrere til Supabase?
- bedre redigering for bloggen, bruk useOptimistic
- bedre redigering for web-prosjektene og barnehageressursene
- blogg eller lignende på webutviklingssiden?
- gjør flere av komponentene til servercomponents med async await, sånn at jeg kan fjerne den ekle linjen fra next.config

