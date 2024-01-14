export type WebProject = {
   index: number;
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
};
export type WebArray = WebProject[];
