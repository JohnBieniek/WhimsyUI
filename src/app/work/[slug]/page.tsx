import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../work-data";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

const lakelandFacts = [
  "Developed the Lakeland Cabaret logo and visual direction.",
  "Designed and built the responsive Lakeland Cabaret website.",
  "Booked performances and handled event photography.",
];

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const isLakeland = study.slug === "lakeland-cabaret";
  const facts = isLakeland ? lakelandFacts : study.facts;

  return <main className="case-page shell">
    <Link className="back-link" href="/work">← All work</Link>
    <header className={`case-header ${isLakeland ? "lakeland-case-header" : ""}`.trim()}>
      {!isLakeland && <p className="kicker">{study.category} · Case study</p>}
      <h1>{study.title}</h1>
      <p className="intro">{study.summary}</p>
      <div className="case-meta"><span>Partner</span><b>{study.client}</b>{!isLakeland && <><span>Project</span><b>{study.event}</b></>}</div>
      {isLakeland && <a className="button case-website" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Visit Lakeland Cabaret ↗</a>}
    </header>
    {isLakeland ? <section className="lakeland-project-sections">
      <article className="lakeland-project-card lakeland-logo-layout">
        <div className="lakeland-card-copy">
          <p className="kicker">The identity</p>
          <h2>A logo built to hold the whole show.</h2>
          <p>Whimsy developed a recognizable identity for an entertainment collective spanning live music, fire performance, photography, videography, and wedding ceremonies.</p>
          <p>The finished mark gives those different offerings one shared name and a confident visual anchor across the website, event materials, and public appearances.</p>
        </div>
        <figure className="lakeland-card-image lakeland-logo-card"><Image src="/work/lakeland%20cabaret/LAKELAND%20CABARET%20clean.png" alt="Lakeland Cabaret logo" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></figure>
      </article>
      <article className="lakeland-project-card image-first">
        <figure className="lakeland-card-image lakeland-site-card"><Image src="/work/lakeland%20cabaret/site.png" alt="Lakeland Cabaret website homepage" fill sizes="(max-width: 800px) 100vw, 55vw" /></figure>
        <div className="lakeland-card-copy">
          <p className="kicker">The website</p>
          <h2>A clear path from curiosity to booking.</h2>
          <p>Whimsy designed and built a responsive website that organizes the collective’s services, pricing, story, and inquiry flow without losing the energy of the performances.</p>
          <p>The site pairs bold editorial type with real event imagery, helping visitors understand what Lakeland Cabaret offers and confidently plan an event.</p>
          <a className="button" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Explore the live site ↗</a>
        </div>
      </article>
      <article className="lakeland-project-card">
        <div className="lakeland-card-copy">
          <p className="kicker">The experience</p>
          <h2>The work continued beyond launch day.</h2>
          <p>Whimsy booked performances and helped turn the brand promise into real audience experiences. Photography documented the artists, atmosphere, and memorable details behind those events.</p>
          <ul className="lakeland-contributions">{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
        </div>
        <div className="lakeland-photo-grid">
          {study.images.slice(1).map((file, index) => <figure className={file.endsWith("performer.webp") ? "lakeland-dj-photo" : undefined} key={file}><Image src={`/work/${file}`} alt={`Lakeland Cabaret performance and event photography ${index + 1}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></figure>)}
        </div>
      </article>
    </section> : <>
      <figure className="case-feature"><Image src={`/work/${study.file}`} alt={`Full ${study.title} advertisement`} fill priority sizes="100vw" /></figure>
      <section className="case-story">
        <article>
          <p className="kicker">The assignment</p>
          <h2>Make the invitation clear—and worth showing up for.</h2>
          <p>Whimsy connected the visual campaign, the event story, and the community context so each piece could do more than announce a date. It could explain why the moment mattered and give people a reason to participate.</p>
          <p>The work was designed for real-world use across social feeds, partner sharing, and repeated event promotion.</p>
        </article>
        <aside><p className="kicker">Project details</p><ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>
      </section>
      <section className="case-gallery">{study.images.map((file, index) => <figure key={file}><Image src={`/work/${file}`} alt={`${study.title} supporting creative ${index + 1}`} fill sizes="(max-width:700px) 100vw, 50vw" /></figure>)}</section>
    </>}
    <section className="ready"><h2>Have a campaign in mind?</h2><p>Let’s build something useful for your audience and your community.</p><Link className="button" href="/contact">Start a conversation →</Link></section>
  </main>;
}
