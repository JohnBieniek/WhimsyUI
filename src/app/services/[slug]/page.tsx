import Image from "next/image";
import { getImageAlt } from "../../image-alt";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../content";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const isLakeland = slug === "single-page-website";
  const isMultiverse = slug === "five-page-website";
  const processBlock = <div className="process-block"><p className="kicker">{isMultiverse || slug === "strategy-session" ? "How we work" : "How we do it"}</p><ol>{service.process.map((item, index) => <li key={item}><b>{index + 1}</b><span>{item}</span></li>)}</ol></div>;

  return <main data-service={slug} className={`article-page${isLakeland ? " single-page-service" : ""}${isMultiverse ? " multiverse-service" : ""}${slug === "website-support" ? " website-support-service" : ""}`}>
    <header className="article-hero shell">
      <div><Link className="back-link" href="/services">← All services</Link><p className="kicker">STANDARD PRICE · {service.price}</p><h1 className={slug === "website-transfer" ? "website-transfer-title" : slug === "strategy-session" ? "strategy-session-title" : slug === "business-consulting" ? "business-consulting-title" : slug === "brand-advertising-plan" ? "brand-advertising-title" : undefined}>{slug === "website-transfer" ? <><span>Domain Change &amp;</span>{" "}<span>Website Transfer</span></> : service.name}</h1><p className="intro">{service.intro}</p></div>
      <div className="article-image"><Image src={service.image} alt={getImageAlt(service.image)} fill priority sizes="(max-width: 700px) 100vw, 45vw"/></div>
    </header>
    <section className="article-body shell">{(isMultiverse || slug === "strategy-session") && processBlock}<article><p className="kicker">What we do</p><h2 className="useful-work-title">{isMultiverse ? <><span>Design around your needs,</span>{" "}<span>then exceed your expectations.</span></> : slug === "strategy-session" ? "Turn a crowded idea list into a clear direction." : <><span>Useful work, shaped</span>{" "}<span>around your real goal.</span></>}</h2>{isMultiverse ? <ul><li><p>We’ll start with a free consultation. We’ll gather your needs and desire with a focus on creating an actionable plan. You’ll leave the meeting with a list of details to gather and a contract laying out the work to be done. This will cover a 50% down payment, pages to be created, timeframe for completion, and a firm definition of done.</p></li><li><p>From there we’ll get to work. We’ll transfer or purchase your domain, build your website, and get you access to manage it. We can train your staff to handle ongoing changes or work to set up a long-term support plan. When we’re done we’ll publish publicly and hand things off to your company.</p><p>After completion we offer content update services, advertising plans, and business strategies to keep you ahead of the curve. Questions about the details? Don’t hesitate to ask!</p></li></ul> : slug === "strategy-session" ? <><p>We start with the decision you need to make. We review your business, audience, offer, current marketing, past attempts, available resources, and anything standing in your way.</p><p>Together, we compare the realistic options and choose the work most likely to move your goal forward. We finish by turning that direction into specific actions with priorities, timing, responsibilities, and ways to measure progress.</p></> : <><p>We bring strategy, clear communication, and hands-on execution together. The scope stays understandable, the recommendations stay practical, and every choice connects back to the people you need to reach.</p><p>Whimsy works especially well with local businesses and community organizations that want an experienced partner without adding a large agency process.</p></>}</article><aside className="article-callout"><p className="kicker">What we need</p><ul>{service.need.map((item) => <li key={item}>{item}</li>)}</ul>{slug === "strategy-session" && <p className="strategy-preparation-note">You do not need a polished business plan. Bring what you have. “We don’t know yet” is a useful place to start.</p>}</aside>{slug === "strategy-session" && <section className="strategy-help" aria-labelledby="strategy-help-title">
      <header><p className="kicker">What we can help with</p><h2 id="strategy-help-title">Bring us the problem that keeps getting pushed aside.</h2><p>A Strategy Session can focus on one specific challenge or help connect several related problems. You do not need to know which service you need before we meet. We help determine that with you.</p></header>
      <div className="strategy-help-grid">
        <article><h3>Website direction</h3><p>Decide whether to repair, rebuild, simplify, expand, or move your website, and identify what visitors need from it.</p></article>
        <article><h3>Marketing and advertising</h3><p>Choose where to promote your business, how to use your budget, what to test, and how to tell whether it is working.</p></article>
        <article><h3>Audience and messaging</h3><p>Clarify who you need to reach, what matters to them, and how to explain your value in language they understand.</p></article>
        <article><h3>Services and offers</h3><p>Decide what to promote, how to package it, and how to make the next step easier for customers to understand.</p></article>
        <article><h3>Brand and creative direction</h3><p>Bring consistency to your visuals, photography, video, voice, and marketing materials without starting over unnecessarily.</p></article>
        <article><h3>Launches and events</h3><p>Build a practical plan for a new business, service, product, location, campaign, performance, or community event.</p></article>
        <article><h3>Customer experience</h3><p>Find gaps in how people discover you, evaluate your business, contact you, make a purchase, and receive follow-up.</p></article>
        <article><h3>Tools and workflows</h3><p>Choose practical systems for inquiries, scheduling, payments, content, customer information, projects, or recurring work.</p></article>
        <article><h3>Stalled ideas and difficult decisions</h3><p>Sort through competing priorities, incomplete projects, vendor recommendations, and ideas that have not found a clear path forward.</p></article>
      </div>
    </section>}{!isMultiverse && slug !== "strategy-session" && processBlock}{isLakeland && <section className="featured-site">
      <div><p className="kicker">Featured single-page website</p><h2>Lakeland Cabaret</h2><p>Lakeland Cabaret needed one lively, easy-to-navigate destination for a wonderfully varied offering: music and DJ services, fire performance, photography and video, wedding ceremonies, pricing, and contact details.</p><p>The finished page gives each service room to shine while carrying visitors through one continuous story—from the opening promise to clear pricing and a direct invitation to plan an event.</p><a className="button outline" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Visit the live website ↗</a></div>
      <ul><li><b>One page, many services</b><span>A clear structure keeps a broad creative offering understandable.</span></li><li><b>Personality first</b><span>Bold imagery and playful copy capture the team’s sense of wonder.</span></li><li><b>Built to convert</b><span>Service details, pricing, and contact paths live in one smooth journey.</span></li><li><b>Designed to grow</b><span>The site is ready to be updated, changed, and expanded as the team’s services evolve.</span></li></ul>
    </section>}{isMultiverse && <section className="mag-showcase">
      <header><p className="kicker">Featured multi-page website</p><h2>Multiverse Adventurers Guild</h2><p>This project shows how a multi-page website can grow beyond publishing information. Here, the complete rule sets connect to an interactive character tool that people can use while they play. The playable character sheet auto calculates changes and updates the UI. Changes can be saved locally or exported to other machines. The ability to add such powerful and engaging tools to your site leaves you with vast opportunities to engage with your clients!</p><a className="button" href="https://multiverseadventurersguild.com/" target="_blank" rel="noopener noreferrer">Explore the live website ↗</a></header>
      <figure className="mag-sheet"><Image src="/services/multiverse/playable-sheet-small.png" alt="Interactive Multiverse Adventurers Guild character sheet with editable stats, skills, and dice controls" width={3807} height={1869} sizes="(max-width: 700px) 100vw, 80vw"/><figcaption>A playable sheet—not a static form</figcaption></figure>
      <div className="mag-capabilities"><article><b>Interactive character sheet</b><p>Players create and edit heroes, calculate derived values, manage equipment, and roll checks, attacks, and damage directly in the page.</p></article><article><b>Private browser memory</b><p>Characters save in the browser with explicit save and autosave options, then return in a library without requiring an account or database.</p></article><article><b>Blind access</b><p>The application can be run entirely from voice commands. This level of accessibility allows even visually impaired gamers to get the full experience.</p></article><article><b>Connected content</b><p>Character-sheet labels link to the exact supporting rules, turning multiple content pages and the interactive tool into one useful system.</p></article></div>
      <div className="mag-responsive"><div><p className="kicker">Built for real use</p><h3><span>Complex tools can still</span>{" "}<span>work on a phone.</span></h3><p>The layout reorganizes controls and game information for smaller screens instead of simply shrinking the desktop experience. That keeps character creation, saved heroes, rules, and play tools useful wherever the audience needs them.</p><figure><Image src="/services/multiverse/command-window.png" alt="Multiverse Adventurers Guild command window with typed and spoken commands" width={1600} height={1265} sizes="(max-width: 700px) 100vw, 28vw"/><figcaption><span className="command-caption-desktop">Typed and spoken commands add accessibility</span><span className="command-caption-mobile">Spoken commands add accessibility</span></figcaption></figure></div><Image src="/services/multiverse/character-library-mobile.png" alt="Playable Multiverse Adventurers Guild character sheet on a mobile phone" width={655} height={1411} sizes="(max-width: 700px) 70vw, 24vw"/><Image src="/services/multiverse/home-page-mobile.png" alt="Multiverse Adventurers Guild homepage on a mobile phone with links to rules, player guides, and characters" width={390} height={972} sizes="(max-width: 700px) 70vw, 24vw"/></div>
    </section>}{isMultiverse ? <section className="website-deliverables" aria-labelledby="website-deliverables-title">
      <header className="website-deliverables-intro">
        <p className="kicker">What’s included</p>
        <h2 id="website-deliverables-title"><span>A finished website,</span>{" "}<span>ready for business.</span></h2>
        <p>We plan, design, build, and launch the site with the essentials already connected.</p>
        <strong className="website-deliverables-badge">5 pages</strong>
      </header>
      <ul className="website-deliverables-grid" role="list">
        <li><h3>A Cross platform site</h3><p>Custom layouts built for phones, tablets, and desktops.</p></li>
        <li><h3>Structure and strategy</h3><p>Clear content, visitor paths, calls to action, and feature planning.</p></li>
        <li><h3>Launch setup</h3><p>Domain, security, business email, analytics, and final testing.</p></li>
        <li><h3>Handoff and support</h3><p>Launch help, a site walkthrough, and follow-up email support.</p></li>
      </ul>
      <div className="website-deliverables-note"><strong>Need something more interactive?</strong><p>We’ll scope custom tools before work begins.</p></div>
    </section> : slug === "strategy-session" ? <section className="website-deliverables" aria-labelledby="strategy-deliverables-title">
      <header className="website-deliverables-intro">
        <p className="kicker">What’s included</p>
        <h2 id="strategy-deliverables-title"><span>Clear decisions, captured</span>{" "}<span>in a practical plan.</span></h2>
        <p>We prepare, lead the working session, and document the direction so you can put it into action.</p>
      </header>
      <ul className="website-deliverables-grid" role="list">
        <li><h3>Pre-session review</h3><p>A short intake followed by our review of your goals, links, materials, and current situation.</p></li>
        <li><h3>90-minute working session</h3><p>A focused discussion that identifies the strongest opportunity and resolves the decisions holding you back.</p></li>
        <li><h3>Strategy Brief</h3><p>A written summary of the recommended direction, priorities, next steps, timing, responsibilities, and measures of success.</p></li>
        <li><h3>Follow-up support</h3><p>Delivery within three business days, plus one round of clarification questions by email within seven days.</p></li>
      </ul>
    </section> : <article><p className="kicker">Deliverables</p><h2 className="momentum-title">You leave with momentum.</h2><ul className="deliverables">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>}</section>
    <section className="article-cta"><div className="shell"><p className="kicker">Ready when you are</p><h2>Let’s make the next step clear.</h2><Link className="button" href="/contact">Book a consultation →</Link></div></section>
  </main>;
}
