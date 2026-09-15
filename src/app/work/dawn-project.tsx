import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./dawn-project.module.css";

function CampaignImage({ item, preload = false }: { item: [string, string]; preload?: boolean }) {
  const [id, caption] = item;
  const size = dimensions[id as keyof typeof dimensions];
  const src = `/work/archive/${id}.jpg`;

  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes="(max-width: 700px) 100vw, 50vw" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function DawnProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [advice, property, personality, value] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="dawn-project-title">
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="dawn-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      <CampaignImage item={story.hero} preload />
    </section>

    <section className={styles.advice} aria-labelledby="dawn-advice-title">
      <header className={styles.adviceHeader}>
        <p className={styles.kicker}>{advice.kicker}</p>
        <h2 id="dawn-advice-title">{advice.title}</h2>
        {advice.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </header>
      <div className={styles.adviceGrid}>
        {advice.images.map(item => <CampaignImage item={item} key={item[0]} />)}
      </div>
    </section>

    <div className={styles.campaignPair}>
      <section className={styles.property} aria-labelledby="dawn-property-title">
        <CampaignImage item={property.images[0]} />
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{property.kicker}</p>
          <h2 id="dawn-property-title">{property.title}</h2>
          {property.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className={styles.personality} aria-labelledby="dawn-personality-title">
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{personality.kicker}</p>
          <h2 id="dawn-personality-title">{personality.title}</h2>
          {personality.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <CampaignImage item={personality.images[0]} />
      </section>
    </div>

    <section className={styles.value} aria-labelledby="dawn-value-title">
      <div>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="dawn-value-title">{value.title}</h2>
      </div>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
