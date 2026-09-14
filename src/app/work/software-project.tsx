import Image from "next/image";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import { softwareProjects } from "./software-projects";
import { softwareStories } from "./software-stories";
import styles from "./work.module.css";

export default function SoftwareProject({ project }: { project: (typeof softwareProjects)[number] }) {
  const story = softwareStories[project.slug];
  return (
    <main className={`inner-page shell ${styles.page}`}>
      <Link className="back-link" href="/work#campaigns">← All work</Link>
      <header className={styles.projectHero}>
        <div>
          <p className="kicker">Software · {project.kind}</p>
          <h1>{project.title}</h1>
          <p className={styles.intro}>{project.intro}</p>
          <a className="button" href={project.link}>{project.linkLabel} ↗</a>
        </div>
        <div className={styles.projectImage}>
          <Image src={project.image} alt={project.alt} fill priority sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
      </header>
      {story && <section className={styles.storyOverview} aria-labelledby="project-brief-title">
        <div><p className="kicker">The project</p><h2 id="project-brief-title">{story.title}</h2></div>
        <div>{story.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>}
      <section className={styles.section} aria-labelledby="project-details-title">
        <p className="kicker">What we built</p>
        <h2 id="project-details-title">Useful features. Thoughtful details.</h2>
        <div className={styles.details}>
          {project.sections.map(({ title, copy }) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      {story?.chapters.map((chapter, index) => <section className={styles.storyChapter} key={chapter.title} aria-labelledby={`chapter-${index}`}>
        <p className="kicker">{chapter.kicker}</p>
        <h2 id={`chapter-${index}`}>{chapter.title}</h2>
        <div className={chapter.image ? styles.illustratedChapter : styles.chapterCopy}>
          <div>{chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          {chapter.image && <figure>
            <div className={styles.chapterImage}><Image src={chapter.image} alt={chapter.alt ?? ""} fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
            <figcaption>{chapter.caption}</figcaption>
          </figure>}
        </div>
        {chapter.points && <div className={styles.details}>{chapter.points.map(point => <article key={point.title}><h3>{point.title}</h3><p>{point.copy}</p></article>)}</div>}
      </section>)}
      {!story && project.detailImage && <figure className={styles.detailImage}>
        <div><Image src={project.detailImage} alt={project.detailAlt} fill sizes="(max-width: 700px) 100vw, 80vw" /></div>
        <figcaption>{project.detailCaption}</figcaption>
      </figure>}
      <p className={styles.credit}>Software by John Bieniek. <a href={project.source}>Read the engineering overview ↗</a></p>
      <section className={styles.cta}>
        <div><p className="kicker">Your next project</p><h2>Let’s build something useful.</h2></div>
        <Link className="button" href="/contact">Book a consultation →</Link>
      </section>
      <CreatorCredit />
    </main>
  );
}
