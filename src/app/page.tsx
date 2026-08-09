import Image from "next/image";
import Link from "next/link";
import { Collage, Partners } from "./site-chrome";

const highlights = [
  ["/work/1478820320938914.jpg", "Community Day", "Events that bring neighbors together."],
  ["/work/797501532404133.jpg", "Back to School", "Campaigns supporting local families."],
  ["/work/1385435016944112.jpg", "Student Art Show", "Celebrating community creativity."],
  ["/work/1426596552827958.jpg", "Cascade Connections", "Stories rooted in Jackson."],
];

export default function Home() {
  return <main>
    <section className="home-hero shell">
      <div className="home-copy"><Image className="home-logo" src="/logo.png" alt="Whimsy Consulting, Media, Marketing" width={5000} height={5000} priority/><h1 className="home-tagline">Local strategy. Creative media. Practical growth.</h1><p>Whimsy helps local businesses and organizations strengthen their brand, promote events, improve their online presence, and make practical decisions about growth.</p><div className="actions"><Link className="button" href="/work">✦ Explore our work</Link><Link className="button outline" href="/contact">▣ Book a consultation</Link></div></div>
      <Collage className="home-collage" images={["/work/1478820320938914.jpg", "/work/797501532404133.jpg", "/work/1233972312090384.jpg", "/work/1426596552827958.jpg"]}/>
    </section>
    <section className="highlight-grid shell">{highlights.map(([image,title,copy])=><Link href="/work" className="highlight" key={title}><div><Image src={image} alt="" fill sizes="25vw"/></div><article><h2>{title}</h2><p>{copy}</p><b>→</b></article></Link>)}</section>
    <Partners/>
    <section className="home-bottom shell"><div><p className="kicker">Our service pathways</p><div className="pathways">{[["Plan","Clarify goals and build a practical strategy."],["Create","Content and design that tell your story."],["Promote","Campaigns that reach the right audience."],["Build online","Websites and updates that work."]].map(([title,copy])=><article key={title}><i>✦</i><h3>{title}</h3><p>{copy}</p><Link href="/services">Learn more →</Link></article>)}</div></div><aside><p className="kicker">Pricing preview</p><p>Strategy Session <b>$300</b></p><p>Brand & Advertising Plan <b>$1,250</b></p><p>Website Support <b>$150/hour</b></p><Link className="button" href="/contact">Book a consultation</Link></aside></section>
  </main>;
}
