import Image from "next/image";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import { softwareProjects } from "./software-projects";
import { softwareStories } from "./software-stories";
import styles from "./work.module.css";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";

export default function SoftwareProject({ project }: { project: (typeof softwareProjects)[number] }) {
  const story = softwareStories[project.slug];
  return (
    <main className={`case-page shell ${styles.page} ${project.slug === "sonic-shielding" ? styles.sonic : ""}`}>
      <Link className="back-link" href="/work#campaigns">← All work</Link>
      <ProjectHeader title={project.title} description={project.intro}>
        <a className="button" href={project.link}>{project.linkLabel} ↗</a>
      </ProjectHeader>
      <a className={styles.projectImage} href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`View full screenshot: ${project.alt}`}>
        <Image src={project.image} alt={project.alt} fill priority sizes="(max-width: 1080px) 100vw, 1000px" />
      </a>
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
        <div className={chapter.image && chapter.image !== project.image ? styles.illustratedChapter : styles.chapterCopy}>
          <div>{chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          {chapter.image && chapter.image !== project.image && <figure>
            <a className={styles.chapterImage} href={chapter.image} target="_blank" rel="noopener noreferrer" aria-label={`View full screenshot: ${chapter.alt}`}><Image src={chapter.image} alt={chapter.alt ?? ""} fill sizes="(max-width: 900px) 100vw, 50vw" /></a>
            <figcaption>{chapter.caption}</figcaption>
          </figure>}
        </div>
        {chapter.points && <div className={styles.details}>{chapter.points.map(point => <article key={point.title}><h3>{point.title}</h3><p>{point.copy}</p></article>)}</div>}
      </section>)}
      {project.slug === "multiverse-adventurers-guild" && <section className={styles.storyChapter}>
        <p className="kicker">On a smaller screen</p>
        <h2>The same game, ready to take to the table.</h2>
        <p>Mobile views keep the game reference and character tools close at hand. These screens show how navigation, readable rules, and character details fit into the space a player has on a phone.</p>
        <div className={styles.mobileScreens}>
          <figure><a href="/services/multiverse/home-page-mobile.png" target="_blank" rel="noopener noreferrer"><Image src="/services/multiverse/home-page-mobile.png" alt="Multiverse mobile homepage with navigation and game guides" width={390} height={972} sizes="(max-width: 700px) 45vw, 280px" /></a><figcaption>The game reference on mobile.</figcaption></figure>
          <figure><a href="/services/multiverse/character-library-mobile.png" target="_blank" rel="noopener noreferrer"><Image src="/services/multiverse/character-library-mobile.png" alt="Multiverse character sheet with character details and dice controls on mobile" width={655} height={1411} sizes="(max-width: 700px) 45vw, 280px" /></a><figcaption>Character tools on mobile.</figcaption></figure>
        </div>
      </section>}
      {!story && project.detailImage && <figure className={styles.detailImage}>
        <div><Image src={project.detailImage} alt={project.detailAlt} fill sizes="(max-width: 700px) 100vw, 80vw" /></div>
        <figcaption>{project.detailCaption}</figcaption>
      </figure>}
      <p className={styles.credit}>Software by John Bieniek. <a href={project.source}>Read the engineering overview ↗</a></p>
      <CreatorCredit />
      <ProjectCallToAction />
    </main>
  );
}
