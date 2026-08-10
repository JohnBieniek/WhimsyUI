import Image from "next/image";
import Link from "next/link";
import { Backpack, CalendarDays, ClipboardList, Images, Megaphone, Monitor, Mountain, Palette, UsersRound } from "lucide-react";
import { Collage, Partners } from "./site-chrome";

const highlights = [
  { image: "/work/1478820320938914.jpg", title: "Community Day", copy: "Events that bring neighbors together.", Icon: UsersRound },
  { image: "/work/797501532404133.jpg", title: "Back to School", copy: "Campaigns supporting local families.", Icon: Backpack },
  { image: "/work/1385435016944112.jpg", title: "Student Art Show", copy: "Celebrating community creativity.", Icon: Palette },
  { image: "/work/1426596552827958.jpg", title: "Cascade Connections", copy: "Stories rooted in Jackson.", Icon: Mountain },
];

const pathways = [
  { title: "Plan", copy: "Clarify goals and build a practical strategy.", Icon: ClipboardList },
  { title: "Create", copy: "Content and design that tell your story.", Icon: Images },
  { title: "Promote", copy: "Campaigns that reach the right audience.", Icon: Megaphone },
  { title: "Build online", copy: "Websites and updates that work.", Icon: Monitor },
];

export default function Home() {
  return <main>
    <section className="home-hero shell">
      <div className="home-copy"><Image className="home-logo" src="/logo%20tight.png" alt="Whimsy Consulting, Media, Marketing" width={4744} height={2198} priority/><span className="home-logo-dots" aria-hidden="true"/><h1 className="home-tagline">Local strategy. Creative media. Practical growth.</h1><p>Whimsy helps local businesses and organizations strengthen their brand, promote events, improve their online presence, and make practical decisions about growth. We combine consulting, media, marketing, and website support with firsthand knowledge of the Jackson-area community.</p><div className="actions"><Link className="button" href="/work">✦ Explore our work</Link><Link className="button outline" href="/contact"><CalendarDays aria-hidden="true"/> Book a consultation</Link></div></div>
      <Collage className="home-collage" images={["/work/1478820320938914.jpg", "/work/797501532404133.jpg", "/work/1233972312090384.jpg", "/work/1426596552827958.jpg"]}/>
    </section>
    <section className="highlight-grid shell">{highlights.map(({image,title,copy,Icon})=><Link href="/work" className="highlight" key={title}><div><Image src={image} alt="" fill sizes="25vw"/></div><article><span className="highlight-icon" aria-hidden="true"><Icon/></span><h2>{title}</h2><p>{copy}</p><b>→</b></article></Link>)}</section>
    <Partners/>
    <section className="home-bottom shell"><div><p className="kicker pathways-title">Our service pathways</p><div className="pathways">{pathways.map(({Icon,title,copy})=><article key={title}><span className="pathway-icon" aria-hidden="true"><Icon/></span><h3>{title}</h3><p>{copy}</p><Link href="/services">Learn more →</Link></article>)}</div></div><aside><p className="kicker">Pricing preview</p><p>Strategy Session <b>$300</b></p><p>Brand & Advertising Plan <b>$1,250</b></p><p>Website Support <b>$150/hour</b></p><Link className="button" href="/contact">Book a consultation</Link></aside></section>
  </main>;
}
