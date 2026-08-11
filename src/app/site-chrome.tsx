"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { appVersion } from "./generated-version";

const links = [["/", "Home"], ["/about", "About"], ["/work", "Work"], ["/services", "Services & Pricing"], ["/contact", "Contact"]];

export function SiteHeader() {
  const path = usePathname();
  return <header className={`site-header shell${path === "/" ? " home-header" : ""}`}>
    {path !== "/" && <Link href="/" className="nav-logo"><Image src="/logo%20tight.png" alt="Whimsy home" width={4744} height={2198} priority /></Link>}
    <nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>)}</nav>
  </header>;
}

export function SiteFooter() {
  return <footer><div className="shell"><p>Whimsy · Jackson, Michigan</p><p>Consulting · Media · Marketing <small>v{appVersion}</small></p></div></footer>;
}

export function Partners() {
  return <section className="partners shell" aria-labelledby="partners-title">
    <h2 id="partners-title">Featured<br/>partners</h2>
    <div className="partner jackson-mark" aria-label="Jackson Crossing"><span className="carousel-mark" aria-hidden="true">♞</span><strong>Jackson<br/><i>Crossing</i></strong></div>
    <div className="partner fetch-mark" aria-label="Fetch Market and Deli"><strong>FETCH</strong><span>MARKET &amp; DELI</span></div>
    <div className="partner serenity-mark" aria-label="Serenity Sober Living House"><strong>Serenity</strong><span>SOBER LIVING HOUSE</span><small>“NOT PERFECT, SOBER &amp; FREE”</small></div>
    <div className="partner dawn-mark" aria-label="Dawn Parker, Reinhart"><strong>DAWN PARKER</strong><span>Reinhart</span></div>
  </section>;
}

export function AdCollage({className=""}:{className?:string}){const ads=["1478820320938914.jpg","797501532404133.jpg","1385435016944112.jpg","994558686031749.jpg","894472109373741.jpg","1233972312090384.jpg"];return <div className={`ad-collage ${className}`.trim()} aria-label="Selected Whimsy advertising work">{ads.map((file,index)=><figure key={file} className={`ad-tile ad-tile-${index+1}`}><Image src={`/work/${file}`} alt="" fill sizes="(max-width:700px) 45vw, 22vw"/></figure>)}</div>}

export function Collage({ images, labels = [], className = "" }: { images: string[]; labels?: string[]; className?: string }) {
  return <div className={`collage ${className}`.trim()} aria-label="Whimsy community work collage">{images.map((src, index) => <figure key={src} className={`bubble bubble-${index + 1}`}><Image src={src} alt="" fill sizes="(max-width: 700px) 45vw, 24vw" />{labels[index] && <figcaption>{labels[index]}</figcaption>}</figure>)}</div>;
}
