import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./heavenly-bakes-project.module.css";

function ProjectImage({ item, preload = false }: { item: [string, string]; preload?: boolean }) {
  const [id, caption] = item;
  const src = `/work/archive/${id}.jpg`;
  const size = dimensions[id as keyof typeof dimensions];

  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes="(max-width: 700px) 100vw, 50vw" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function HeavenlyBakesProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [identity, products, holiday, value] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="heavenly-project-title">
      <ProjectImage item={story.hero} preload />
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="heavenly-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
    </section>

    <div className={styles.creativePair}>
      <section className={styles.identity} aria-labelledby="heavenly-identity-title">
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{identity.kicker}</p>
          <h2 id="heavenly-identity-title">{identity.title}</h2>
          {identity.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ProjectImage item={identity.images[0]} />
      </section>
      <section className={styles.products} aria-labelledby="heavenly-products-title">
        <ProjectImage item={products.images[0]} />
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{products.kicker}</p>
          <h2 id="heavenly-products-title">{products.title}</h2>
          {products.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
    </div>

    <section className={styles.holiday} aria-labelledby="heavenly-holiday-title">
      <div>
        <p className={styles.kicker}>{holiday.kicker}</p>
        <h2 id="heavenly-holiday-title">{holiday.title}</h2>
        {holiday.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ProjectImage item={holiday.images[0]} />
    </section>

    <section className={styles.value} aria-labelledby="heavenly-value-title">
      <div>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="heavenly-value-title">{value.title}</h2>
      </div>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
