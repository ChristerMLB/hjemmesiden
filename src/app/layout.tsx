import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Christer M.L. Bendixen sin hjemmeside | Fortelle.no",
   description: "Hjemmesiden til barnehagelærer, hobbyfilosof og webutvikler Christer M.L. Bendixen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="no">
         <body className={inter.className}>
            {children}
            <Analytics />
         </body>
      </html>
   );
}
