export type WebProject = {
   id: number;
   navn: string;
   ingress: string;
   mertekst: string | null;
   teknologier: string | null;
   previewimg: string;
   previewimgalt: string;
   extraimg: string | null;
   extraimgalt: string | null;
   url: string | null;
   gitHubUrl: string | null;
   old: boolean;
   mobilvisning: boolean;
};
export type WebArray = WebProject[];
