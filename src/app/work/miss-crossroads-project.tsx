import Image from "next/image";
import Link from "next/link";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./miss-crossroads-project.module.css";

type ProjectPhoto = { file: string; caption: string; width: number; height: number };

const photos = {
  recruitment: { file: "applications-open.jpg", caption: "Whimsy’s black-and-gold recruitment ad for Miss Crossroads and Miss Crossroads’ Teen.", width: 1545, height: 1999 },
  application: { file: "application-guide.png", caption: "The application guide brings the program, county eligibility, divisions, and application link together.", width: 1236, height: 1600 },
  ambassador: { file: "community-ambassador.png", caption: "The community-ambassador ad explains how titleholders take part in local life.", width: 1236, height: 1600 },
  carousel: { file: "community-carousel.jpg", caption: "Miss Crossroads and Miss Crossroads’ Teen beside the Jackson Crossing carousel.", width: 2048, height: 1536 },
  restaurant: { file: "alpha-koney-visit.jpg", caption: "A stop at Alpha Koney Island during the community visit.", width: 2048, height: 1536 },
  smoothies: { file: "sisters-smoothies-visit.jpg", caption: "Enjoying drinks from Sisters Smoothies, a local business inside Jackson Crossing.", width: 1536, height: 2048 },
  animals: { file: "humane-society-visit.jpg", caption: "Meeting a cat during a visit to Cascades Humane Society’s Jackson Crossing location.", width: 1536, height: 2048 },
} satisfies Record<string, ProjectPhoto>;

function ProjectImage({ item, preload = false, sizes = "(max-width: 700px) 90vw, 50vw" }: { item: ProjectPhoto; preload?: boolean; sizes?: string }) {
  const src = `/work/miss-crossroads/${item.file}`;
  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${item.caption}`}>
      <Image src={src} alt={item.caption} width={item.width} height={item.height} preload={preload} sizes={sizes} />
    </a>
    <figcaption>{item.caption}</figcaption>
  </figure>;
}

export default function MissCrossroadsProject({ title, description }: { title: string; description: string }) {
  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={description} />

    <section className={styles.opening} aria-labelledby="crossroads-project-title">
      <ProjectImage item={photos.recruitment} preload sizes="(max-width: 900px) 90vw, 520px" />
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="crossroads-project-title">Put opportunity in the spotlight.</h2>
        <p>Whimsy created a recruitment campaign for Miss Crossroads and Miss Crossroads’ Teen: an announcement that catches the eye, an application guide that answers practical questions, and an introduction to the community role behind the title.</p>
        <p>The lead advertisement uses gold light, a dark background, and portraits of crowned titleholders to give the invitation a sense of occasion. The large application headline leads into the deadline, competition date, and a QR code, with Jackson Crossing’s partnership recognized below.</p>
        <ul className={styles.services}>
          <li>Advertising design</li><li>Campaign messaging</li><li>Community photography</li>
        </ul>
        <aside className={styles.program} aria-labelledby="crossroads-program-title">
          <p className={styles.kicker}>The opportunity</p>
          <h3 id="crossroads-program-title">Scholarship, service, and local representation.</h3>
          <p>Miss Crossroads serves Jackson, Ingham, and Hillsdale counties. As a local Miss America affiliate, the program connects educational opportunities with talent, leadership, and community involvement. The advertising makes those possibilities easier for prospective participants and their families to understand.</p>
          <a href="https://jtv.tv/events-of-december-5-6-and-7-2025/" target="_blank" rel="noopener noreferrer">Read JTV’s program background ↗</a>
        </aside>
      </div>
    </section>

    <section className={styles.campaign} aria-labelledby="crossroads-campaign-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>The advertising</p>
        <h2 id="crossroads-campaign-title">An invitation with answers behind it.</h2>
        <p>The supporting pieces share gold lettering, warm accents, and titleholder portraits. Each gives the audience a different reason to take a closer look.</p>
      </header>
      <div className={styles.creativePair}>
        <article className={styles.application} aria-labelledby="crossroads-application-title">
          <div className={styles.cardCopy}>
            <p className={styles.kicker}>Make the next step clear</p>
            <h3 id="crossroads-application-title">Help someone picture themselves applying.</h3>
            <p>The application guide brings the county requirements, divisions, deadline, and application QR code into one piece. A short explanation of the program gives the practical details a purpose: representing a community while pursuing scholarship opportunities.</p>
            <p>The Facebook address gives interested readers another place to find contest information. Together, the portrait, explanation, and contact details turn an eye-catching announcement into something a prospective participant can use.</p>
          </div>
          <ProjectImage item={photos.application} />
        </article>
        <article className={styles.ambassador} aria-labelledby="crossroads-ambassador-title">
          <ProjectImage item={photos.ambassador} />
          <div className={styles.cardCopy}>
            <p className={styles.kicker}>Explain the role</p>
            <h3 id="crossroads-ambassador-title">Show what representing a community can mean.</h3>
            <p>The companion ad focuses on being a community ambassador. Local celebrations, school events, business openings, nonprofit fundraisers, and volunteer projects give readers concrete examples of where that role can lead.</p>
            <p>A more relaxed portrait makes the message approachable. The matching gold identity connects it to the recruitment campaign while giving the people and the work beyond the competition their own space.</p>
          </div>
        </article>
      </div>
    </section>

    <section className={styles.community} aria-labelledby="crossroads-community-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>Out in the community</p>
        <h2 id="crossroads-community-title">Meet the people behind the titles.</h2>
        <p>In June 2026, Whimsy shared photographs of Miss Crossroads and Miss Crossroads’ Teen visiting Jackson Crossing and thanked them for supporting the community event. The photographs take the story into familiar local places, from the carousel to a restaurant booth.</p>
      </header>
      <div className={styles.landscapeGrid}>
        <ProjectImage item={photos.carousel} />
        <ProjectImage item={photos.restaurant} />
      </div>
    </section>

    <section className={styles.localStops} aria-labelledby="crossroads-local-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>Local connections</p>
        <h2 id="crossroads-local-title">Make room for the businesses and causes along the way.</h2>
        <p>The visit also included Sisters Smoothies and the humane society. Sharing these moments gives the surrounding businesses and organizations a place in the story, connecting the titleholders’ visibility with the people, products, and causes in their community.</p>
      </header>
      <div className={styles.portraitGrid}>
        <ProjectImage item={photos.smoothies} sizes="(max-width: 700px) 90vw, 420px" />
        <ProjectImage item={photos.animals} sizes="(max-width: 700px) 90vw, 420px" />
      </div>
    </section>

    <section className={styles.value} aria-labelledby="crossroads-value-title">
      <header>
        <p className={styles.kicker}>The value</p>
        <h2 id="crossroads-value-title">A clearer invitation. A stronger local connection.</h2>
      </header>
      <div>
        <p>For the program, the campaign provides a coordinated set of materials that introduces the opportunity, explains participation, and shows community involvement in practice. For prospective participants, it makes the purpose and the next step easier to understand.</p>
        <p>For local businesses and organizations, the visit photographs place their work alongside a community story. Advertising and photography work together to give people something to recognize, something to learn about, and a reason to get involved.</p>
      </div>
    </section>

    <ProjectCallToAction />
  </main>;
}
