"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appVersion } from "./generated-version";

const links = [["/", "Home"], ["/about", "About"], ["/work", "Work"], ["/services", "Services & Pricing"], ["/contact", "Contact"]];

export function SiteHeader() {
  const path = usePathname();
  return <header className="site-header shell">
    <Link href="/" className="brand"><Image src="/logo.png" alt="Whimsy Consulting, Media, Marketing" width={5000} height={5000} priority /></Link>
    <nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>)}</nav>
  </header>;
}

export function SiteFooter() {
  return <footer><div className="shell"><p>Whimsy · Jackson, Michigan</p><p>Consulting · Media · Marketing <small>v{appVersion}</small></p></div></footer>;
}

export function Partners() {
  return <section className="partners shell" aria-labelledby="partners-title">
    <h2 id="partners-title">Featured<br/>partners</h2>
    <div className="partner jackson" aria-label="Jackson Crossing"><strong>Jackson<br/><i>CROSSING</i></strong></div>
    <div className="partner fetch" aria-label="Fetch Marketplace and Deli"><strong>FETCH</strong><em>Marketplace & Deli</em></div>
    <div className="partner serenity" aria-label="Serenity Sober Living House"><strong>Serenity</strong><em>SOBER LIVING HOUSE</em></div>
    <div className="partner reinhart" aria-label="Dawn Parker Realtors"><strong>DAWN PARKER<br/><i>Reinhart</i></strong></div>
  </section>;
}

export function Collage({ images, labels = [] }: { images: string[]; labels?: string[] }) {
  return <div className="collage" aria-label="Whimsy community work collage">{images.map((src, index) => <figure key={src} className={`bubble bubble-${index + 1}`}><Image src={src} alt="" fill sizes="(max-width: 700px) 45vw, 24vw" />{labels[index] && <figcaption>{labels[index]}</figcaption>}</figure>)}</div>;
}
