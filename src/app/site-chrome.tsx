"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import partnerLogoSource from "../../mock up/home.png";
import { appVersion } from "./generated-version";

const links = [["/", "Home"], ["/about", "About"], ["/work", "Work"], ["/services", "Services & Pricing"], ["/contact", "Contact"]];

export function SiteHeader() {
  const path = usePathname();
  return <header className={`site-header shell${path === "/" ? " home-header" : ""}`}>
    <nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>)}</nav>
  </header>;
}

export function SiteFooter() {
  return <footer><div className="shell"><p>Whimsy · Jackson, Michigan</p><p>Consulting · Media · Marketing <small>v{appVersion}</small></p></div></footer>;
}

export function Partners() {
  return <section className="partners shell" aria-labelledby="partners-title">
    <h2 id="partners-title">Featured<br/>partners</h2>
    <div className="partner" aria-label="Jackson Crossing"><span className="partner-logo jackson-logo" style={{ backgroundImage: `url(${partnerLogoSource.src})` }}/></div>
    <div className="partner" aria-label="Fetch Marketplace and Deli"><span className="partner-logo fetch-logo" style={{ backgroundImage: `url(${partnerLogoSource.src})` }}/></div>
    <div className="partner" aria-label="Serenity Sober Living House"><span className="partner-logo serenity-logo" style={{ backgroundImage: `url(${partnerLogoSource.src})` }}/></div>
    <div className="partner" aria-label="Dawn Parker Realtors"><span className="partner-logo reinhart-logo" style={{ backgroundImage: `url(${partnerLogoSource.src})` }}/></div>
  </section>;
}

export function Collage({ images, labels = [], className = "" }: { images: string[]; labels?: string[]; className?: string }) {
  return <div className={`collage ${className}`.trim()} aria-label="Whimsy community work collage">{images.map((src, index) => <figure key={src} className={`bubble bubble-${index + 1}`}><Image src={src} alt="" fill sizes="(max-width: 700px) 45vw, 24vw" />{labels[index] && <figcaption>{labels[index]}</figcaption>}</figure>)}</div>;
}
