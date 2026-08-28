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
    <header className="case-header">
      <p className="kicker">{study.category} · Case study</p>
      <h1>{study.title}</h1>
      <p className="intro">{study.summary}</p>
      <div className="case-meta"><span>Partner</span><b>{study.client}</b><span>Project</span><b>{study.event}</b></div>
      {isLakeland && <a className="button case-website" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Visit Lakeland Cabaret ↗</a>}
    </header>
    <figure className="case-feature"><Image src={`/work/${study.file}`} alt={isLakeland ? "Lakeland Cabaret website homepage" : `Full ${study.title} advertisement`} fill priority sizes="100vw" /></figure>
    <section className="case-story">
      <article>
        <p className="kicker">The assignment</p>
        <h2>{isLakeland ? "Build one identity for every part of the performance." : "Make the invitation clear—and worth showing up for."}</h2>
        {isLakeland ? <>
          <p>Whimsy helped shape Lakeland Cabaret from the brand outward, developing the logo and building a website that gives its music, fire performance, photography, videography, and ceremony services one cohesive home.</p>
          <p>The partnership also extends beyond the screen. Whimsy booked performances and handled photography, connecting the public-facing site with the real events, artists, and images behind the collective.</p>
        </> : <>
          <p>Whimsy connected the visual campaign, the event story, and the community context so each piece could do more than announce a date. It could explain why the moment mattered and give people a reason to participate.</p>
          <p>The work was designed for real-world use across social feeds, partner sharing, and repeated event promotion.</p>
        </>}
      </article>
      <aside><p className="kicker">Project details</p><ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul></aside>
    </section>
    <section className="case-gallery">{study.images.map((file, index) => <figure key={file}><Image src={`/work/${file}`} alt={`${study.title} supporting creative ${index + 1}`} fill sizes="(max-width:700px) 100vw, 50vw" /></figure>)}</section>
    <section className="ready"><h2>Have a campaign in mind?</h2><p>Let’s build something useful for your audience and your community.</p><Link className="button" href="/contact">Start a conversation →</Link></section>
  </main>;
}
