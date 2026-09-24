import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={
 title:"THE DRINKERS — Official",
 description:"The Drinkers — rock'n'roll from Litija, Slovenia. Since 1993.",
 metadataBase:new URL("https://the-drinkers.vercel.app")
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="sl"><body>{children}</body></html>}