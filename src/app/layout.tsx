import type { Metadata } from "next";
import { Poppins, Vollkorn, Fjalla_One, Cantarell, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const text = Montserrat({ subsets: ["latin"], weight: ['500'] });
const headers = Montserrat({ subsets: ["latin"], weight: '700' });

export const metadata: Metadata = {
   title: "Christer M.L. Bendixen sin hjemmeside | Fortelle.no",
   description: "Hjemmesiden til barnehagelærer, hobbyfilosof og webutvikler Christer M.L. Bendixen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="no">
         <body className={text.className}>
            <style>{`:root{
               --headers: ${headers.style.fontFamily}
            }`}</style>
            {children}
            <Analytics />
         </body>
      </html>
   );
}