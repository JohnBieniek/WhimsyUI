import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./humane-society-project.module.css";

function HumaneImage({ item, preload = false, sizes = "(max-width: 700px) 100vw, 50vw" }: { item: [string, string]; preload?: boolean; sizes?: string }) {
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

export default function HumaneSocietyProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [advertising, opening, community] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.introduction} aria-labelledby="humane-project-title">
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="humane-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      <HumaneImage item={story.hero} preload />
    </section>

    <section className={styles.advertising} aria-labelledby="humane-advertising-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>{advertising.kicker}</p>
        <h2 id="humane-advertising-title">{advertising.title}</h2>
      </header>
      <div className={styles.adGrid}>
        <article className={styles.openingAd}>
          <div className={styles.cardCopy}>
            <h3>Promote the grand opening.</h3>
            {advertising.paragraphs.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <HumaneImage item={advertising.images[0]} />
        </article>
        <article className={styles.adoptionAd}>
          <HumaneImage item={advertising.images[1]} />
          <div className={styles.cardCopy}>
            <h3>Keep the invitation open.</h3>
            <p>{advertising.paragraphs[2]}</p>
          </div>
        </article>
      </div>
    </section>

    <section className={styles.celebration} aria-labelledby="humane-opening-title">
      <div className={styles.celebrationIntro}>
        <div>
          <p className={styles.kicker}>{opening.kicker}</p>
          <h2 id="humane-opening-title">{opening.title}</h2>
          {opening.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <HumaneImage item={opening.images[0]} />
      </div>
      <div className={styles.crowdGallery}>
        {opening.images.slice(1).map(item => <HumaneImage item={item} key={item[0]} sizes="(max-width: 700px) 100vw, 33vw" />)}
      </div>
    </section>

    <section className={styles.community} aria-labelledby="humane-community-title">
      <header className={styles.communityHeader}>
        <div>
          <p className={styles.kicker}>{community.kicker}</p>
          <h2 id="humane-community-title">{community.title}</h2>
        </div>
        <div>{community.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </header>
      <div className={styles.animalGallery}>
        <HumaneImage item={community.images[0]} sizes="(max-width: 700px) 100vw, 33vw" />
        <HumaneImage item={community.images[1]} sizes="(max-width: 700px) 100vw, 33vw" />
        <HumaneImage item={community.images[2]} sizes="(max-width: 700px) 100vw, 33vw" />
      </div>
    </section>

    <ProjectCallToAction />
  </main>;
}
