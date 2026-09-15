import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./ingendahl-project.module.css";

function FarmImage({ item, preload = false, sizes = "(max-width: 700px) 100vw, 50vw" }: { item: [string, string]; preload?: boolean; sizes?: string }) {
  const [id, caption] = item;
  const size = dimensions[id as keyof typeof dimensions];
  const src = `/work/archive/${id}.jpg`;

  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes={sizes} />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function IngendahlProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [stickers, graphics, value] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="ingendahl-project-title">
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="ingendahl-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      <FarmImage item={story.hero} preload />
    </section>

    <section className={styles.stickers} aria-labelledby="ingendahl-stickers-title">
      <FarmImage item={stickers.images[0]} />
      <div className={styles.stickerCopy}>
        <div>
          <p className={styles.kicker}>{stickers.kicker}</p>
          <h2 id="ingendahl-stickers-title">{stickers.title}</h2>
          {stickers.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <FarmImage item={stickers.images[1]} />
      </div>
    </section>

    <section className={styles.graphics} aria-labelledby="ingendahl-graphics-title">
      <header className={styles.graphicsHeader}>
        <p className={styles.kicker}>{graphics.kicker}</p>
        <h2 id="ingendahl-graphics-title">{graphics.title}</h2>
        {graphics.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </header>
      <div className={styles.graphicsGrid}>
        {graphics.images.map(item => <FarmImage item={item} key={item[0]} sizes="(max-width: 700px) 100vw, 33vw" />)}
      </div>
    </section>

    <section className={styles.value} aria-labelledby="ingendahl-value-title">
      <div>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="ingendahl-value-title">{value.title}</h2>
      </div>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
