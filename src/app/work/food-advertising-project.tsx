import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./food-advertising-project.module.css";

function Advertisement({ item, preload = false }: { item: [string, string]; preload?: boolean }) {
  const [id, caption] = item;
  const src = `/work/archive/${id}.jpg`;
  const size = dimensions[id as keyof typeof dimensions];

  return <figure className={styles.advertisement}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full advertisement: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes="(max-width: 700px) 100vw, 50vw" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function FoodAdvertisingProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [wings, craveable, shorties, value] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="food-project-title">
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="food-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      <Advertisement item={story.hero} preload />
    </section>

    <div className={styles.campaignPair}>
      <section className={styles.wings} aria-labelledby="food-wings-title">
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{wings.kicker}</p>
          <h2 id="food-wings-title">{wings.title}</h2>
          {wings.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Advertisement item={wings.images[0]} />
      </section>
      <section className={styles.craveable} aria-labelledby="food-craveable-title">
        <Advertisement item={craveable.images[0]} />
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{craveable.kicker}</p>
          <h2 id="food-craveable-title">{craveable.title}</h2>
          {craveable.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
    </div>

    <section className={styles.event} aria-labelledby="food-event-title">
      <Advertisement item={shorties.images[0]} />
      <div className={styles.eventCopy}>
        <p className={styles.kicker}>{shorties.kicker}</p>
        <h2 id="food-event-title">{shorties.title}</h2>
        {shorties.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>

    <section className={styles.value} aria-labelledby="food-value-title">
      <div>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="food-value-title">{value.title}</h2>
      </div>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
