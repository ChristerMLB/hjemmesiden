export type RessursKort = {
    id: number,
    hovedbilde_url: string,
    hovedbilde_alttext: string,
    tittel: string,
    oppsummering: string,
}
type RessursBilde = {
    bildeid: number,
    bildeurl: string,
    alttekst: string,
}
export type EnkeltRessurs = {
    id: number,
    hovedbilde_url: string,
    hovedbilde_alttext: string,
    tittel: string,
    brodtekst: string,
    filurl: string,
    betalingsforslag: number,
    ekstraBilder: RessursBilde[] | null
}