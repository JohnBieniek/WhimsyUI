import Link from "next/link";
import { Collage } from "../site-chrome";

const services = [
  ["Strategy Session","$300",["90-minute working session","Written next steps"]],
  ["Brand & Advertising Plan","$1,250",["Brand audit","Message direction","90-day advertising plan"]],
  ["Business Consulting Session","$300",["90-minute operational session","Action summary"]],
  ["Website Support","$150/hour",["Updates and technical help","Billed per hour"]],
  ["Domain Change & Website Transfer","$750",["DNS and redirects","Launch checks"]],
  ["Single-Page Website","$750",["One responsive page","Contact form and basic SEO"]],
  ["Five-Page Website","$3,000",["Five responsive pages","Analytics and basic SEO"]],
] as const;

export default function ServicesPage(){return <main className="inner-page shell"><section className="page-hero compact"><div><p className="kicker">Services & Pricing <span>4 of 5</span></p><h1>Clear services.<br/>Fixed prices.</h1><p className="intro">Straightforward support for local businesses and organizations. No surprises. Just strategy, creativity, and reliable execution.</p></div><Collage images={["/work/906381761516109.jpg","/work/837501851737434.jpg","/work/985893490231602.jpg","/work/1426596552827958.jpg"]}/></section><section className="service-cards">{services.map(([name,price,points])=><article key={name}><i>✦</i><h2>{name}</h2><strong>{price}</strong><ul>{points.map(p=><li key={p}>{p}</li>)}</ul><Link href="/contact">Learn more →</Link></article>)}<aside className="panel extras"><p className="kicker">What costs extra</p><h3>E-commerce</h3><p>Online stores and payment processing.</p><h3>Custom applications</h3><p>Advanced features and integrations.</p><h3>Copywriting</h3><p>Custom writing beyond supplied content.</p><h3>Paid ad spend</h3><p>Ad budgets are managed separately.</p></aside></section><section className="ready"><h2>Ready to get started?</h2><p>Book a free consultation to discuss your goals and the right mix of services.</p><Link className="button" href="/contact">Book a consultation →</Link></section></main>}
