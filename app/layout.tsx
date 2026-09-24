import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
 title:"THE DRINKERS 2.0 — Official",
 description:"The Drinkers — Litija, Slovenia. Nova zasedba, nova glasba in aktualni koncerti za 2026.",\n openGraph:{title:"THE DRINKERS 2.0 — Official",description:"Nova zasedba. Nova glasba. The Drinkers iz Litije.",type:"website"},\n twitter:{card:"summary_large_image",title:"THE DRINKERS 2.0",description:"Nova zasedba. Nova glasba. The Drinkers iz Litije."},
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="sl"><body>{children}</body></html>;
}
