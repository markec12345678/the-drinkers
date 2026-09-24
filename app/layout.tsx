import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
 title:"THE DRINKERS 2.0 — Official",
 description:"The Drinkers — Litija, Slovenia. Nova zasedba, nova glasba in aktualni koncerti za 2026.",
 keywords:["The Drinkers","The Drinkers 2.0","Ni še umru","drink’n’roll","Litija","Slovenia","rock","Domen Kolenc"],
 authors:[{name:"The Drinkers"}],
 creator:"The Drinkers",
 publisher:"The Drinkers",
 category:"music",
 openGraph:{title:"THE DRINKERS 2.0 — Official",description:"Nova zasedba. Nova glasba. The Drinkers iz Litije.",type:"website",siteName:"The Drinkers",locale:"sl_SI"},
 twitter:{card:"summary_large_image",title:"THE DRINKERS 2.0",description:"Nova zasedba. Nova glasba. The Drinkers iz Litije."},
};

const structuredData={
 "@context":"https://schema.org",
 "@graph":[
  {"@type":"MusicGroup","name":"The Drinkers","foundingDate":"1993","foundingLocation":{"@type":"Place","name":"Litija, Slovenia"},"genre":["Rock","Rock'n'roll"],"sameAs":["https://open.spotify.com/artist/6XSxgkalTJrh6wkh1LFEF5","https://music.apple.com/us/artist/the-drinkers/1863334471"]},
  {"@type":"MusicEvent","name":"The Drinkers at Blunout","startDate":"2026-09-25T20:30:00+02:00","location":{"@type":"MusicVenue","name":"Blunout","address":{"@type":"PostalAddress","addressLocality":"Domžale","addressCountry":"SI"}},"performer":{"@type":"MusicGroup","name":"The Drinkers"},"url":"https://blunout.si/izdelek/koncert-the-drinkers-petek-25-09-2026-20-30/"}
 ]
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="sl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} /></body></html>;
}
