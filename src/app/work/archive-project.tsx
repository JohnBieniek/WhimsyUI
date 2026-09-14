import Image from "next/image";
import Link from "next/link";
import { type ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import styles from "./archive-project.module.css";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";

function ArchiveImage({ item, hero = false }: { item: [string, string]; hero?: boolean }) {
  const [id, caption] = item;
  const size = dimensions[id as keyof typeof dimensions];
  return <figure className={styles.figure}>
    <a href={`/work/archive/${id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={`/work/archive/${id}.jpg`} alt={caption} width={size.width} height={size.height} preload={hero} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function ArchiveProject({ story, title, client, category }: { story: ArchiveStory; title: string; client: string; category: string }) {
  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={story.title ?? title} description={story.summary}>
      <p className="kicker">{category} · {client}</p>
    </ProjectHeader>
    <section className={styles.opening}>
      <div>
        <p className="kicker">The project</p>
        <h2>{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      {story.video ? <figure className={styles.figure}>
        <video controls playsInline preload="none" poster={`/work/archive/${story.hero[0]}.jpg`} aria-label="Jackson Crossing holiday commercial">
          <source src={story.video} type="video/mp4" />
        </video>
        <figcaption>Script, direction, and casting: Whimsy. Filming and editing: Media Advantage.</figcaption>
      </figure> : <ArchiveImage item={story.hero} hero />}
    </section>
    {story.sections.map(section => <section className={styles.chapter} key={section.title}>
      <header className={styles.chapterHeading}>
        <div><p className="kicker">{section.kicker}</p><h2>{section.title}</h2></div>
        <div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </header>
      {section.images.length > 0 && <div className={`${styles.gallery} ${section.images.length === 1 ? styles.single : ""}`}>
        {section.images.map(item => <ArchiveImage item={item} key={item[0]} />)}
      </div>}
    </section>)}
    <ProjectCallToAction />
  </main>;
}
