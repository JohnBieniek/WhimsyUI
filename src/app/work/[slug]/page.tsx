import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../../work-data";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

const teamHopeEducation = [
  ["894468282707457.jpg", "Understanding the disease"],
  ["894468319374120.jpg", "Recognizing symptoms"],
  ["894468362707449.jpg", "Making symptoms approachable"],
  ["894468402707445.jpg", "Supporting personal care"],
  ["894468439374108.jpg", "Thanking the support network"],
];

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const isLakeland = study.slug === "lakeland-cabaret";
  const isHoliday = study.slug === "holiday-local";
  const isTeamHope = study.slug === "team-hope-walk";
  const facts = study.facts;

  return <main className="case-page shell">
    <Link className="back-link" href={isLakeland || isHoliday ? "/" : "/work"}>{isLakeland || isHoliday ? "← Home" : "← All work"}</Link>
    <header className={`case-header ${isLakeland ? "lakeland-case-header" : isHoliday ? "holiday-case-header" : isTeamHope ? "team-hope-case-header" : ""}`.trim()}>
      {!isLakeland && <p className="kicker">{study.category} · Case study</p>}
      <h1>{study.title}</h1>
      <p className="intro">{study.summary}</p>
      <div className="case-meta"><span>Partner</span><b>{study.client}</b>{!isLakeland && !isHoliday && <><span>Project</span><b>{study.event}</b></>}</div>
      {isLakeland && <a className="button case-website" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Visit Lakeland Cabaret ↗</a>}
    </header>
    {isLakeland ? <section className="lakeland-project-sections">
      <article className="lakeland-project-card lakeland-logo-layout">
        <div className="lakeland-card-copy">
          <p className="kicker">The identity</p>
          <p>We designed the Lakeland Cabaret logo to bring the different sides of their identity together in one mark. The DJ at the center reflects their roots in live music and event entertainment, while the flame in his hand ties back to their fire performance work. The lake and sunset root the design in Michigan, where the water and summer atmosphere are part of the brand’s character.</p>
          <p>We wrapped those elements in a classic circular badge to give the logo a classic and versatile feel that works across signage, apparel, social media, and event materials. The bold type and mix of deep navy, lake blue, gold, and red keep it recognizable while still carrying the energy of a live performance.</p>
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
          <p>Our work with Lakeland Cabaret is representative of the broad spectrum of help we provide at Whimsy. The holistic elevation of a brand with logo work, website design, marketing, and photography can take any company’s offerings to the next level. We’d love a chance to work with you on any or all of these things. Reach out for a free consultation to find out how you can take the next step of your journey today!</p>
        </div>
        <div className="lakeland-photo-grid">
          {study.images.slice(1).map((file, index) => <figure className={file.endsWith("performer.webp") ? "lakeland-dj-photo" : undefined} key={file}><Image src={`/work/${file}`} alt={`Lakeland Cabaret performance and event photography ${index + 1}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></figure>)}
        </div>
      </article>
    </section> : isHoliday ? <section className="holiday-case-study">
      <div className="holiday-opening">
        <div className="holiday-opening-copy">
          <p className="kicker">From campaign to community experience</p>
          <h2>A holiday invitation with a real event waiting behind it.</h2>
          <p>Whimsy built a campaign that made the date, activities, partners, and reasons to attend easy to understand—then carried that visual story into coverage of the day itself.</p>
          <div className="holiday-pill-row"><span>Seasonal campaign</span><span>Partner promotion</span><span>Event photography</span></div>
        </div>
        <figure className="holiday-opening-art"><Image src="/work/1000952755392342.jpg" alt="Holiday in the Halls campaign recap" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></figure>
      </div>

      <div className="holiday-campaign-block">
        <header><p className="kicker">The campaign system</p><h2>Several ads. One unmistakable invitation.</h2><p>The creative evolved across placements while keeping the event name, date, festive palette, and community focus recognizable. Each piece could lead with a different reason to attend without losing the larger campaign.</p></header>
        <div className="holiday-ad-mosaic">
          <figure className="holiday-ad-primary"><Image src="/work/994558686031749.jpg" alt="Square Holiday in the Halls event advertisement" fill sizes="(max-width: 800px) 100vw, 44vw" /></figure>
          <figure className="holiday-ad-tall"><Image src="/work/985893490231602.jpg" alt="Tall Holiday in the Halls event advertisement" fill sizes="(max-width: 800px) 100vw, 26vw" /></figure>
          <aside><strong>Campaign details</strong><p>Santa visits, holiday vendors, sweet treats, live music, and family photo opportunities were organized into clear promotional messages for repeated sharing.</p></aside>
        </div>
      </div>

      <div className="holiday-live-block">
        <div className="holiday-live-heading"><p className="kicker">The live event</p><h2>The campaign became a place people could step into.</h2></div>
        <figure className="holiday-live-photo"><Image src="/work/lakeland%20cabaret/mall%20christmas%20backdrop.jpg" alt="DJ performing at the Holiday in the Halls Christmas event" fill sizes="(max-width: 800px) 100vw, 68vw" /></figure>
        <div className="holiday-live-copy"><p>The finished event brought the advertised experience into the mall with a decorated photo setting, Santa, local shopping, treats, and a live DJ.</p><p>Event-day photography gave the campaign a useful final chapter: proof of the atmosphere, partner participation, and people gathering in the space.</p></div>
        <figure className="holiday-recap-art"><Image src="/work/1000952755392342.jpg" alt="Holiday in the Halls event recap featuring live photographs" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
      </div>

      <div className="holiday-outcomes">
        <article><span>01</span><h3>Before the event</h3><p>Clear creative gave families the essential details and multiple reasons to save the date.</p></article>
        <article><span>02</span><h3>Across the campaign</h3><p>Flexible formats kept partners, activities, and seasonal atmosphere visible.</p></article>
        <article><span>03</span><h3>After doors opened</h3><p>Live photography connected the promotional promise to the experience people attended.</p></article>
      </div>
    </section> : isTeamHope ? <section className="team-hope-case-study">
      <div className="team-hope-opening">
        <figure><Image src="/work/team%20hope%20core.jpg" alt="Central Michigan Team Hope Walk campaign announcement" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></figure>
        <div>
          <p className="kicker">Awareness with a destination</p>
          <h2>One visual system carried the invitation and the cause.</h2>
          <p>Whimsy created a coordinated campaign for the August 17, 2024 Central Michigan Team Hope Walk at the Michigan Theatre in downtown Jackson.</p>
          <p>The work brought HDSA, Jackson Crossing, Neurocrine Biosciences, Teva, and Whimsy into one recognizable visual system—making the walk details clear while keeping Huntington’s disease awareness at the center.</p>
          <dl><div><dt>Registration</dt><dd>10:00 AM</dd></div><div><dt>Walk</dt><dd>11:00 AM</dd></div><div><dt>Location</dt><dd>Michigan Theatre</dd></div></dl>
        </div>
      </div>

      <div className="team-hope-action">
        <header><p className="kicker">The campaign sequence</p><h2>Invite. Inform. Give people a way to help.</h2><p>The core announcement introduced the experience, while supporting pieces repeated the date, linked people to HDSA information, and made donation opportunities visible.</p></header>
        <div className="team-hope-action-grid">
          <figure className="team-hope-reminder"><Image src="/work/team-hope/894457912708494.jpg" alt="Team Hope Walk event reminder and HDSA information graphic" fill sizes="(max-width: 800px) 100vw, 58vw" /></figure>
          <figure><Image src="/work/team-hope/894457969375155.jpg" alt="Team Hope Walk donation campaign graphic" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
        </div>
      </div>

      <div className="team-hope-education">
        <header><p className="kicker">Beyond event promotion</p><h2>An education series gave the campaign depth.</h2><p>Five companion graphics moved beyond the event invitation to explain Huntington’s disease, identify common symptoms, encourage personal care, and recognize the importance of family and community support.</p></header>
        <div className="team-hope-education-grid">{teamHopeEducation.map(([file, label], index) => <figure className={index === 0 ? "team-hope-wide" : undefined} key={file}><Image src={`/work/team-hope/${file}`} alt={`Team Hope campaign graphic: ${label}`} fill sizes="(max-width: 700px) 100vw, 33vw" /><figcaption>{label}</figcaption></figure>)}</div>
      </div>

      <aside className="team-hope-close"><p className="kicker">The documented connection</p><h2>Creative built to support awareness before the first step.</h2><p>The archived campaign connects the public invitation, HDSA resources, donation messaging, and educational content to one community walk. It demonstrates how a local event campaign can carry both practical details and a larger public-service purpose without making unsupported attendance claims.</p></aside>
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
