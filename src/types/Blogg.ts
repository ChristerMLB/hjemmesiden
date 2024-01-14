export type BloggPost = {
   id: number;
   tittel: string;
   dato: Date;
   hovedbilde_url: string;
   hovedbilde_alttext: string;
   ingress: string;
};
export type BloggBrodTekst = {
   post_id: number;
   brodtekst: string;
   ekstra: string;
};
