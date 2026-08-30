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

const backToSchoolAds = [
  ["1478820370938909.jpg", "Free school photos and professional headshots"],
  ["1478820410938905.jpg", "Free Michigan Theatre tickets"],
  ["1478820450938901.jpg", "Jackson District Library pop-up"],
  ["1478820494272230.jpg", "Stitch mascot appearance"],
  ["1478820534272226.jpg", "Coloring pages and bookmarks"],
  ["1478820577605555.jpg", "Specialty drinks from Sipster of Jackson"],
];

const backToSchoolPhotos = [
  ["1479071537580459.jpg", "The Back to School Bash welcome display at Jackson Crossing"],
  ["1479071577580455.jpg", "A child enjoying the coloring station"],
  ["1479071617580451.jpg", "Kids meeting Stitch beside the carousel"],
  ["1479071647580448.jpg", "The school photo station during the event"],
  ["1479071790913767.jpg", "Jackson District Library resources at the event"],
  ["1479071827580430.jpg", "Families gathering for the Back to School Bash"],
];

const holidayPartnerAds = [
  ["1000952505392367.jpg", "Lakeland Cabaret DJ Services"],
  ["1000952588725692.jpg", "Santa and free face painting"],
  ["1000952525392365.jpg", "Heavenly Bakes & Cakes"],
  ["1000952685392349.jpg", "The Christmas Tree Kiosk"],
  ["1000952718725679.jpg", "Peggy's Custom Floral Designs"],
  ["1000952628725688.jpg", "Spoons, Rings & Other Bling"],
  ["1000952598725691.jpg", "DT's Dance Center"],
  ["1000952675392350.jpg", "Ashley Sweet Creations"],
];

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const isLakeland = study.slug === "lakeland-cabaret";
  const isHoliday = study.slug === "holiday-in-the-halls";
  const isTeamHope = study.slug === "team-hope-walk";
  const isBackToSchool = study.slug === "back-to-school-bash";
  const linksHome = ["social-growth", "back-to-school-bash", "holiday-in-the-halls", "team-hope-walk", "lakeland-cabaret"].includes(study.slug);
  const facts = study.facts;

  return <main className="case-page shell">
    <Link className="back-link" href={linksHome ? "/" : "/work"}>{linksHome ? "← Home" : "← All work"}</Link>
    <header className={`case-header ${isLakeland ? "lakeland-case-header" : isHoliday ? "holiday-case-header" : isTeamHope ? "team-hope-case-header" : isBackToSchool ? "back-school-case-header" : ""}`.trim()}>
      {!isLakeland && !isHoliday && !isTeamHope && !isBackToSchool && study.category !== "Community events" && <p className="kicker">{study.category} · Case study</p>}
      <h1>{study.title}</h1>
      <p className="intro">{study.summary}</p>
      <div className="case-meta"><span>Partner</span><b>{study.client}</b>{!isLakeland && !isHoliday && !isTeamHope && !isBackToSchool && <><span>Project</span><b>{study.event}</b></>}</div>
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
          <h2 className="lakeland-closing-heading"><span>The work continued</span><span>beyond launch day.</span></h2>
          <p>Whimsy booked performances and helped turn the brand promise into real audience experiences. Photography documented the artists, atmosphere, and memorable details behind those events.</p>
          <p>Our work with Lakeland Cabaret is representative of the broad spectrum of help we provide at Whimsy. The holistic elevation of a brand with logo work, website design, marketing, and photography can take any company’s offerings to the next level. We’d love a chance to work with you on any or all of these things. Reach out for a free consultation to find out how you can take the next step of your journey today!</p>
        </div>
        <div className="lakeland-photo-grid">
          {study.images.slice(1).map((file, index) => <figure className={file.endsWith("performer.webp") ? "lakeland-dj-photo" : undefined} key={file}><Image src={`/work/${file}`} alt={`Lakeland Cabaret performance and event photography ${index + 1}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></figure>)}
        </div>
      </article>
    </section> : isHoliday ? <section className="holiday-story">
      <div className="holiday-story-opening">
        <figure className="holiday-story-hero"><Image src="/work/1000952755392342.jpg" alt="Holiday in the Halls campaign and event overview" fill priority sizes="(max-width: 800px) 100vw, 49vw" /></figure>
        <div className="holiday-story-intro">
          <p className="kicker">One event, many reasons to visit</p>
          <h2 className="holiday-two-line-title"><span>We gave the whole day</span>{" "}<span>a clear invitation.</span></h2>
          <p>Whimsy promoted and hosted Holiday in the Halls for Jackson Crossing on December 21. The campaign brought Santa, music, free face painting, holiday treats, and local shopping into one recognizable event story.</p>
          <dl><div><dt>Date</dt><dd>December 21, 2024</dd></div><div><dt>Time</dt><dd>Noon–5 PM</dd></div><div><dt>Location</dt><dd>Jackson Crossing</dd></div></dl>
        </div>
      </div>

      <div className="holiday-invitation">
        <header>
          <p className="kicker">The main invitation</p>
          <h2 className="holiday-two-line-title"><span>We turned a full day of Christmas</span><span>into one clear reason to visit.</span></h2>
          <p>The primary ad brought Santa photos, local vendors, home decor, gifts, sweet treats, and a live DJ into one easy-to-scan invitation. Real event photography made every promise feel tangible instead of generic.</p>
          <p className="holiday-invitation-proof"><strong>Whimsy brought it together:</strong> campaign strategy, graphic design, event promotion, and photography working as one connected story.</p>
          <p className="holiday-invitation-cta"><Link href="/contact">Talk to us</Link> about how we can plan and advertise your event in a similar manner!</p>
        </header>
        <figure><Image src="/work/985893490231602.jpg" alt="Vertical Holiday in the Halls event advertisement" fill sizes="(max-width: 800px) 100vw, 38vw" /></figure>
      </div>

      <div className="holiday-partners">
        <header><p className="kicker">A campaign for the participants, too</p><h2 className="holiday-two-line-title"><span>Each store and performer</span><span>got a moment of their own.</span></h2><p>Instead of asking one general ad to do every job, Whimsy created focused invitations for the businesses, performers, and activities families could discover. Together, the pieces made the event feel active before the doors even opened.</p></header>
        <div className="holiday-partner-wall">
          {holidayPartnerAds.map(([file, label]) => <figure className="holiday-partner-ad" key={file}>
            <div><Image src={`/work/holiday-in-the-halls/${file}`} alt={`Holiday in the Halls promotion for ${label}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></div>
            <figcaption>{label}</figcaption>
          </figure>)}
        </div>
      </div>

      <div className="holiday-live-story">
        <header><p className="kicker">The day in the halls</p><h2 className="holiday-live-one-line">A truely festive place to gather!</h2></header>
        <figure className="holiday-live-dj"><Image src="/work/lakeland%20cabaret/mall%20christmas%20backdrop.jpg" alt="The DJ performing beneath the Merry Christmas arch at Holiday in the Halls" fill sizes="(max-width: 800px) 100vw, 64vw" /><a className="holiday-lakeland-tag" href="https://lakelandcabaret.com/" target="_blank" rel="noopener noreferrer">Lakeland Cabaret ↗</a></figure>
        <div className="holiday-live-note"><p>The live event carried festive energy throughout the mall! Santa greeted families, vendors filled the halls, and a DJ performed beneath the illuminated Merry Christmas arch.</p><p>The photography closes the loop between promotion and experience, showing the people and seasonal setting behind the campaign.</p></div>
        <figure className="holiday-event-recap"><Image src="/work/holiday-in-the-halls/santa-at-jackson-crossing.jpg" alt="Santa waving beside the holiday carousel at Jackson Crossing" fill sizes="(max-width: 800px) 100vw, 46vw" /></figure>
      </div>

      <div className="holiday-thanks">
        <figure><Image src="/work/holiday-in-the-halls/1000952532059031.jpg" alt="Holiday in the Halls thank-you to the participating vendors" fill sizes="(max-width: 800px) 100vw, 45vw" /></figure>
        <div><p className="kicker">After the event</p><h2 className="holiday-two-line-title"><span>The campaign ended by recognizing</span><span>the community that made it possible.</span></h2><p>The final piece thanked the broad group of small businesses and entrepreneurs who filled Jackson Crossing. It gave every participant another moment of visibility and left the campaign with a clear sense of shared ownership.</p></div>
      </div>
    </section> : isTeamHope ? <section className="team-hope-case-study">
      <div className="team-hope-opening">
        <figure><Image src="/work/team%20hope%20core.jpg" alt="Central Michigan Team Hope Walk campaign announcement" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></figure>
        <div>
          <p className="kicker">Awareness with a destination</p>
          <h2 className="team-hope-two-line-title"><span>One visual system carried</span><span>the invitation and the cause.</span></h2>
          <p>Whimsy created a coordinated campaign for the August 17, 2024 Central Michigan Team Hope Walk at the Michigan Theatre in downtown Jackson.</p>
          <p>The work brought HDSA, Jackson Crossing, Neurocrine Biosciences, Teva, and Whimsy into one recognizable visual system—making the walk details clear while keeping Huntington’s disease awareness at the center.</p>
          <dl><div><dt>Date</dt><dd>August 17, 2024</dd></div><div><dt>Registration</dt><dd>10:00 AM</dd></div><div><dt>Walk</dt><dd>11:00 AM</dd></div><div><dt>Location</dt><dd>Michigan Theatre</dd></div></dl>
        </div>
      </div>

      <div className="team-hope-action">
        <header><p className="kicker">The campaign sequence</p><h2>Invite. Inform. Give<br /> people a way to help.</h2><p>The core announcement introduced the experience, while supporting pieces repeated the date, linked people to HDSA information, and made donation opportunities visible.</p></header>
        <div className="team-hope-action-grid">
          <figure className="team-hope-reminder"><Image src="/work/team-hope/894457912708494.jpg" alt="Team Hope Walk event reminder and HDSA information graphic" fill sizes="(max-width: 800px) 100vw, 58vw" /></figure>
          <figure><Image src="/work/team-hope/894457969375155.jpg" alt="Team Hope Walk donation campaign graphic" fill sizes="(max-width: 800px) 100vw, 30vw" /></figure>
        </div>
      </div>

      <div className="team-hope-education">
        <header><p className="kicker">Beyond event promotion</p><h2>An education series gave<br /> the campaign depth.</h2><p>Five companion graphics moved beyond the event invitation to explain Huntington’s disease, identify common symptoms, encourage personal care, and recognize the importance of family and community support.</p></header>
        <div className="team-hope-education-grid">{teamHopeEducation.map(([file, label], index) => <figure className={index === 0 ? "team-hope-wide" : undefined} key={file}><Image src={`/work/team-hope/${file}`} alt={`Team Hope campaign graphic: ${label}`} fill sizes="(max-width: 700px) 100vw, 33vw" /><figcaption>{label}</figcaption></figure>)}</div>
      </div>

      <aside className="team-hope-close"><p className="kicker">The documented connection</p><h2>Built to support awareness</h2><p>The archived campaign connects the public invitation, HDSA resources, donation messaging, and educational content to one community walk. It demonstrates how a local event campaign can carry both practical details and a larger public-service purpose without making unsupported attendance claims.</p></aside>
    </section> : isBackToSchool ? <section className="back-school-case-study">
      <div className="back-school-opening">
        <figure className="back-school-opening-art"><Image src="/work/back-to-school/1478820320938914.jpg" alt="Back to School Bash campaign overview" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></figure>
        <div className="back-school-opening-copy">
          <p className="kicker">A calmer start to the school year</p>
          <h2 className="back-school-opening-title"><span>Practical help, without</span><span>the overwhelming atmosphere.</span></h2>
          <p>Jackson Crossing wanted families to have an easier way to get ready for school. The Back to School Bash brought useful resources together in a calm, low-stimulation event designed to feel welcoming from the first invitation through the day itself.</p>
          <dl><div><dt>Date</dt><dd>August 1</dd></div><div><dt>Time</dt><dd>Noon–4 PM</dd></div><div><dt>Location</dt><dd>Jackson Crossing</dd></div></dl>
        </div>
      </div>

      <div className="back-school-campaign">
        <header><p className="kicker">The campaign</p><h2 className="back-school-campaign-title"><span>Every reason to attend got</span> <span>its own clear invitation.</span></h2><p>A coordinated campaign of ads introduced the event, then gave each partner and activity room to be understood. Families could quickly see what was available and decide which parts would help them most.</p></header>
        <div className="back-school-ad-grid">{backToSchoolAds.map(([file, label], index) => <figure className={`back-school-ad-${index + 1}`} key={file}><Image src={`/work/back-to-school/${file}`} alt={`Back to School Bash advertisement: ${label}`} fill sizes="(max-width: 700px) 100vw, 33vw" /><figcaption>{label}</figcaption></figure>)}</div>
      </div>

      <div className="back-school-resources">
        <article><h3>Ready for class</h3><p>Loaded backpacks included a lunch box, travel cup, meal voucher, Michigan Theatre tickets, and a Jackson Crossing sticker while supplies lasted.</p></article>
        <article><h3>Useful for the whole family</h3><p>Children could get school photos while adults had access to professional headshots in a relaxed, low-pressure setting.</p></article>
        <article><h3>Reasons to stay</h3><p>Library sign-up, coloring, specialty drinks, a mascot visit, and live music turned a supply pickup into a community event.</p></article>
      </div>

      <div className="back-school-live">
        <header><p className="kicker">The live event</p><h2 className="back-school-live-title"><span>The promise in the ads became</span> <span>a day families could enjoy.</span></h2><p>The event photography documented the practical support and the atmosphere around it: backpacks being distributed, portraits being made, community resources, music, and kids meeting Stitch by the carousel.</p></header>
        <div className="back-school-live-grid">{backToSchoolPhotos.map(([file, label], index) => <figure className={`back-school-live-${index + 1}`} key={file}><Image src={`/work/back-to-school/${file}`} alt={label} fill sizes="(max-width: 700px) 100vw, 40vw" /></figure>)}</div>
      </div>

      <aside className="back-school-outcome"><p className="kicker">The result</p><div className="back-school-outcome-copy"><p><strong>More than 3× the previous year’s attendance—and a day that worked for kids, parents, and the mall.</strong></p><p>Kids danced to live music, met Stitch beside the carousel, colored pages and bookmarks, and had school portraits made. Those playful moments gave them reasons to explore and enjoy the event instead of treating it as a quick supply pickup.</p><p>Parents left with practical help for the school year: loaded backpacks, hot-meal vouchers, Michigan Theatre tickets, affordable school-photo options, professional headshots, and direct access to Jackson District Library cards and resources.</p><p>For Jackson Crossing and its businesses, more than triple the prior attendance meant substantially more families moving through the mall. Activities placed near the carousel and tenants—including Sipster’s drinks in front of Dunham’s—extended the visit, created useful foot traffic, and gave participating businesses more opportunities to meet local customers.</p></div></aside>
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
