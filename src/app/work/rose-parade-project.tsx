import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./rose-parade-project.module.css";

function Poster({ item, preload = false }: { item: [string, string]; preload?: boolean }) {
  const [id, caption] = item;
  const src = `/work/archive/${id}.jpg`;
  const size = dimensions[id as keyof typeof dimensions];

  return <figure className={styles.poster}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full poster: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes="(max-width: 900px) 90vw, 520px" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function RoseParadeProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [creative, tradition, pageant, value] = story.sections;
  const designDetails = ["Recognize the occasion", "Find a way to participate", "See the people and partners"];

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="rose-project-title">
      <Poster item={story.hero} preload />
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="rose-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
        <div className={styles.creativeDetails}>
          <p className={styles.kicker}>{creative.kicker}</p>
          <h3>{creative.title}</h3>
          <dl>{creative.paragraphs.map((paragraph, index) => <div key={paragraph}>
            <dt>{designDetails[index]}</dt>
            <dd>{paragraph}</dd>
          </div>)}</dl>
        </div>
      </div>
    </section>

    <section className={styles.tradition} aria-labelledby="rose-tradition-title">
      <header>
        <p className={styles.kicker}>{tradition.kicker}</p>
        <h2 id="rose-tradition-title">{tradition.title}</h2>
      </header>
      <div>
        {tradition.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <a className={styles.sourceLink} href="https://jacksonrosefestival.org/about-us/" target="_blank" rel="noopener noreferrer">Explore the Rose Festival’s history ↗</a>
      </div>
      <p className={styles.eventNote}>The artwork promoted the parade planned for June 2, 2024. On May 24, the festival announced its cancellation after receiving too few entries. This case study presents the advertising prepared ahead of that decision. <a href="https://jacksonrosefestival.org/" target="_blank" rel="noopener noreferrer">Read the festival’s announcement ↗</a></p>
    </section>

    <section className={styles.pageant} aria-labelledby="rose-pageant-title">
      <div>
        <p className={styles.kicker}>{pageant.kicker}</p>
        <h2 id="rose-pageant-title">{pageant.title}</h2>
        {pageant.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <Poster item={pageant.images[0]} />
    </section>

    <section className={styles.value} aria-labelledby="rose-value-title">
      <header>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="rose-value-title">{value.title}</h2>
      </header>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
