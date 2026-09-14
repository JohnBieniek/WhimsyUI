import Image from "next/image";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import { softwareProjects } from "./software-projects";
import styles from "./work.module.css";

export default function SoftwareProject({ project }: { project: (typeof softwareProjects)[number] }) {
  return (
    <main className={`inner-page shell ${styles.page}`}>
      <Link className="back-link" href="/work#software">← All software projects</Link>
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
      <section className={styles.section} aria-labelledby="project-details-title">
        <p className="kicker">What we built</p>
        <h2 id="project-details-title">Useful features. Thoughtful details.</h2>
        <div className={styles.details}>
          {project.sections.map(({ title, copy }) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      {project.detailImage && <figure className={styles.detailImage}>
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
