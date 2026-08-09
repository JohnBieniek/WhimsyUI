import Image from "next/image";
import ContactForm from "./contact-form";

const featured = [
  { title: "Back-to-School Bash", client: "Jackson Crossing", image: "/work/1478820320938914.jpg", tag: "Community campaign", copy: "A calm, low-stimulation school-year kickoff pairing a loaded-backpack giveaway with photos, local partners, and family activities." },
  { title: "Holiday in the Halls", client: "Jackson Crossing", image: "/work/994558686031749.jpg", tag: "Event promotion", copy: "A festive in-mall experience built around local vendors, family photos, sweet treats, and live music." },
  { title: "Malloween", client: "Jackson Crossing", image: "/work/944490211038597.jpg", tag: "Community event", copy: "A playful seasonal campaign connecting entertainment and family activities with an easy-to-read event invitation." },
  { title: "Jackson County Fair", client: "Jackson County Fair", image: "/work/894472109373741.jpg", tag: "Advertising", copy: "A bright promotional series highlighting live entertainment, fair attractions, and Whimsy’s local partnership." },
];

const gallery = [
  ["1275042854649996.jpg", "Community recognition", "Brand support"], ["1233619748792307.jpg", "Witches Night Out", "Events"],
  ["985893490231602.jpg", "Holiday in the Halls", "Advertising"], ["957428976411387.jpg", "Malloween recap", "Events"],
  ["957428889744729.jpg", "Malloween partner feature", "Brand support"], ["957429079744710.jpg", "Malloween community post", "Media"],
  ["944490204371931.jpg", "Malloween activities", "Advertising"], ["944490221038596.jpg", "Malloween event details", "Advertising"],
  ["915857340568551.jpg", "Local business spotlight", "Brand support"], ["906381761516109.jpg", "Whimsy services campaign", "Brand support"],
  ["904318161722469.jpg", "Sip, Smile, Repeat", "Advertising"], ["894475189373433.jpg", "Jackson Crossing partnership", "Media"],
  ["837501851737434.jpg", "Live music at Blackstone’s", "Advertising"], ["1233972312090384.jpg", "Community creative", "Media"],
  ["957426256411659.jpg", "Seasonal campaign graphic", "Advertising"], ["1233972422090373.jpg", "Local promotion", "Brand support"],
];

const eventConnections = [
  { title: "Back-to-School Bash", date: "August 1, 2026", image: "1478820320938914.jpg", client: "Jackson Crossing", advertised: "A low-stimulation family event with loaded backpacks, photos, library-card sign-up, a mascot visit, and local offers.", outcome: "The same-day recap documents children’s activities, giveaways, and community partners. The post reports more than triple the prior year’s attendance." },
  { title: "Cascades Humane Society Grand Opening", date: "June 3, 2026", image: "1426596552827958.jpg", client: "Jackson Crossing · Cascades Humane Society", advertised: "A ribbon cutting and community open house for Cascades Humane Society’s new Jackson Crossing location, with pet viewing and adoptions.", outcome: "A later post from the same date documents the ribbon cutting with the Jackson County Chamber and the new location’s opening." },
  { title: "Jackson County Student Art Show", date: "April 20–May 4, 2026", image: "1385435016944112.jpg", client: "Jackson Crossing · Jackson County schools", advertised: "A public exhibition transforming the mall hallways into a gallery of student work from local schools.", outcome: "Cataloged event coverage connects the invitation to the installed artwork and visitors experiencing the student exhibition." },
  { title: "Holiday in the Halls", date: "December 21, 2024", image: "1000952755392342.jpg", client: "Jackson Crossing", advertised: "A holiday market with Santa, music, face painting, seasonal vendors, and family activities.", outcome: "The follow-up asset and post document the vendor market, decorated halls, Santa setup, and the participating community." },
  { title: "Second Annual Malloween", date: "October 2024", image: "944490211038597.jpg", client: "Jackson Crossing", advertised: "A family Halloween event with costumes, entertainment, activities, and participating businesses throughout the mall.", outcome: "The catalog contains a related eleven-image recap thanking participants and documenting the completed community event." },
  { title: "Team Hope Walk", date: "August 17, 2024", image: "894457882708497.jpg", client: "Huntington’s Disease Society of America partners", advertised: "A Central Michigan Team Hope walk at the Michigan Theatre supporting Huntington’s disease awareness.", outcome: "The campaign record establishes Whimsy’s awareness work with Jackson Crossing and event partners; no attendance total is claimed." },
];

const services = [
  { icon: "✦", name: "Strategy Session", price: "$300", points: ["90-minute working session", "Written next steps"] },
  { icon: "◎", name: "Brand & Advertising Plan", price: "$1,250", points: ["Brand audit and message direction", "Audience priorities", "90-day advertising plan"] },
  { icon: "↗", name: "Business Consulting", price: "$300", points: ["90-minute operational session", "Clear action summary"] },
  { icon: "⌘", name: "Website Support", price: "$150/hour", points: ["Updates and technical help", "Flexible, ongoing support"] },
  { icon: "⇄", name: "Domain Change & Transfer", price: "$750", points: ["DNS and redirects", "Launch checks"] },
  { icon: "▣", name: "Single-Page Website", price: "$750", points: ["One responsive page", "Contact form and basic SEO"] },
  { icon: "▤", name: "Five-Page Website", price: "$3,000", points: ["Five responsive pages", "Analytics and basic SEO"] },
];

export default function Home() {
  return <>
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Whimsy home"><strong>WHIMSY</strong><span>Consulting <b>•</b> Media <b>•</b> Marketing</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#work">Work</a><a href="#services">Services & Pricing</a><a href="#contact">Contact</a>
      </nav>
      <a className="button mini" href="#contact">Let’s talk <span>↗</span></a>
    </header>

    <main id="home">
      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow">Jackson, Michigan · Creative studio</p><h1>LOCAL IDEAS.<br/>REAL <em>IMPACT.</em></h1><p className="lede">Whimsy helps local businesses and organizations find the right story, turn it into memorable creative, and put it to work in the community.</p><div className="actions"><a className="button" href="#work">Explore the work <span>↗</span></a><a className="text-link" href="#services">See services & pricing →</a></div></div>
        <div className="hero-art" aria-label="A collage of Whimsy-created advertisements">
          <div className="mint-orb"/><Image className="hero-main" src="/work/1478820320938914.jpg" alt="Back-to-School Bash advertisement created for Jackson Crossing" fill priority sizes="(max-width: 800px) 88vw, 48vw"/><Image className="hero-float" src="/work/994558686031749.jpg" alt="Holiday in the Halls advertisement" width={210} height={210}/><span className="sticker">MADE FOR<br/><b>HERE.</b></span>
        </div>
      </section>

      <section className="manifesto"><div className="shell manifesto-inner"><p>CONSULTING</p><i>✦</i><p>MEDIA</p><i>✦</i><p>MARKETING</p><i>✦</i><p>WEBSITES</p></div></section>

      <section id="about" className="about shell section-pad">
        <div><p className="eyebrow">Why Whimsy</p><h2>LOCAL KNOWLEDGE.<br/><span>USEFUL CREATIVE.</span></h2></div>
        <div className="about-copy"><p>Good marketing should feel like you—and make it easier for the right people to notice, understand, and act.</p><p>Whimsy brings practical consulting, advertising, media, and website support together for businesses and organizations in and around Jackson County.</p><a className="text-link" href="#contact">Start a conversation →</a></div>
        <div className="process">
          {[["01","Listen","Goals, audience, and community context come first."],["02","Plan","A focused path connects the message to the right people."],["03","Create","On-brand content and campaigns are built to earn attention."],["04","Measure","Results guide the next useful move."]].map(([n,t,c])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{c}</p></article>)}
        </div>
      </section>

      <section id="work" className="work section-pad"><div className="shell">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>CAMPAIGNS BUILT<br/>FOR <span>REAL COMMUNITIES.</span></h2></div><p>Real advertisements from Whimsy’s archive—designed to help local events, businesses, and ideas show up clearly.</p></div>
        <div className="featured-grid">{featured.map((item,i)=><article className="campaign" key={item.title}><div className="campaign-image"><Image src={item.image} alt={`${item.title} advertisement created by Whimsy`} fill sizes="(max-width: 800px) 90vw, 24vw"/></div><div className="campaign-copy"><span className="count">0{i+1}</span><p className="tag">{item.tag}</p><h3>{item.title}</h3><strong>{item.client}</strong><p>{item.copy}</p></div></article>)}</div>
        <div className="connections-head"><p className="eyebrow">From advertisement to event</p><h3>CAMPAIGNS WITH A DOCUMENTED COMMUNITY CONNECTION</h3><p>These cards only connect an advertisement to an event when the catalog’s Facebook posts, dates, and grouped media support that relationship.</p></div>
        <div className="connection-grid">{eventConnections.map((item)=><article className="connection" key={item.title}>
          <div className="connection-image"><Image src={`/work/${item.image}`} alt={`${item.title} advertisement created by Whimsy`} fill sizes="(max-width: 700px) 92vw, 33vw"/></div>
          <div className="connection-copy"><div className="connection-meta"><span>{item.date}</span><b>Ad ↗ Event</b></div><h3>{item.title}</h3><p className="client">{item.client}</p><dl><div><dt>What the ad promoted</dt><dd>{item.advertised}</dd></div><div><dt>Documented connection</dt><dd>{item.outcome}</dd></div></dl></div>
        </article>)}</div>
        <div className="gallery-head"><h3>More from the archive</h3><p>Every card below is an original campaign asset cataloged from Whimsy’s Facebook portfolio.</p></div>
        <div className="gallery">{gallery.map(([file,title,tag],i)=><figure key={file} className={i%5===0?"wide":""}><div><Image src={`/work/${file}`} alt={`${title} promotional graphic created by Whimsy`} fill sizes="(max-width: 600px) 45vw, 20vw"/></div><figcaption><span>{tag}</span><b>{title}</b></figcaption></figure>)}</div>
      </div></section>

      <section id="services" className="services section-pad"><div className="shell">
        <div className="section-head"><div><p className="eyebrow">Offerings & pricing</p><h2>CLEAR SERVICES.<br/><span>FIXED PRICES.</span></h2></div><p>Start with a working session, build an advertising plan, or get hands-on website support. Scope is agreed before work begins.</p></div>
        <div className="service-grid">{services.map(s=><article key={s.name}><i>{s.icon}</i><h3>{s.name}</h3><strong>{s.price}</strong><ul>{s.points.map(p=><li key={p}>{p}</li>)}</ul><a href="#contact">Choose this service →</a></article>)}</div>
        <aside className="extras"><b>Quoted separately</b><span>E-commerce</span><span>Custom applications</span><span>Copywriting beyond supplied content</span><span>Paid ad spend</span></aside>
      </div></section>

      <section id="contact" className="contact section-pad"><div className="shell contact-grid">
        <div className="contact-intro"><p className="eyebrow">Start something useful</p><h2>TELL US WHAT<br/>YOU’RE TRYING TO <span>ACCOMPLISH.</span></h2><p>Share the goal, the audience, and whatever you already know. Whimsy will help you find the clearest next step.</p><Image src="/work/906381761516109.jpg" alt="Whimsy services advertisement" width={520} height={520}/></div>
        <ContactForm />
      </div></section>
    </main>
    <footer><div className="shell"><a className="logo inverse" href="#home"><strong>WHIMSY</strong><span>Consulting · Media · Marketing</span></a><p>Useful creative for local business and community.</p><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
