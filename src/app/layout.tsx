import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import "./collage.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

const body = Archivo({ variable: "--font-body", subsets: ["latin"] });
const display = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whimsy | Consulting · Media · Marketing",
  description: "Creative consulting, advertising, media, marketing, and website support for local businesses and organizations.",
  icons: { icon: [{ url: "/whimsy-favicon.ico", type: "image/x-icon" }] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${body.variable} ${display.variable}`}><body><SiteHeader/>{children}<SiteFooter/></body></html>;
}
