import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
 title:"THE DRINKERS 2.0 — Official",
 description:"The Drinkers — Litija, Slovenia. Nova zasedba, nova glasba in aktualni koncerti za 2026.",
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="sl"><body>{children}</body></html>;
}
