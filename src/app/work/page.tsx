import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import WorkGallery from "./work-gallery";
import { softwareProjects } from "./software-projects";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Our Work | Software, Campaigns & Community | Whimsy",
  description: "Explore Whimsy’s websites, software, advertising, and community projects, including Lakeland Cabaret, Multiverse Adventurers Guild, Sonic Shielding, and Whimsy’s Warden.",
};

export default function WorkPage() {
  return (
    <main className={`inner-page shell ${styles.page}`}>
      <header className={styles.hero}>
        <div><p className="kicker">Our work</p><h1>Ideas made real.<br />Work made useful.</h1></div>
        <div>
          <p className={styles.intro}>Websites people can navigate, software they can use, and campaigns that bring a community together. Explore the work behind our consulting, creative, and technical services.</p>
          <nav className={styles.jumpLinks} aria-label="Work sections"><a href="#software">Software ↓</a><a href="#campaigns">Campaigns &amp; community ↓</a></nav>
        </div>
      </header>
      <section id="software" className={styles.section} aria-labelledby="software-title">
        <p className="kicker">Software</p>
        <h2 id="software-title">Built around the people using it.</h2>
        <p>From a business website to tools for play, listening, and keeping services online, these projects show how clear design and practical engineering work together.</p>
        <div className={styles.softwareGrid}>
          {softwareProjects.map(project => <article key={project.slug}>
            <Link className={styles.cardImage} href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
            </Link>
            <div className={styles.cardCopy}>
              <p className="kicker">{project.kind}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link className={styles.cardLink} href={`/work/${project.slug}`}>Explore {project.title} →</Link>
            </div>
          </article>)}
        </div>
      </section>
      <section id="campaigns" className={styles.section} aria-labelledby="campaigns-title">
        <p className="kicker">Campaigns &amp; community</p>
        <h2 id="campaigns-title">Local stories. Shared experiences.</h2>
        <p>Advertising, events, photography, and brand support for the organizations and communities around us. Browse the collection by the kind of work you want to see.</p>
        <WorkGallery />
      </section>
      <section className={styles.cta}>
        <div><p className="kicker">Ready when you are</p><h2>Let’s make the next step clear.</h2></div>
        <Link className="button" href="/contact">Book a consultation →</Link>
      </section>
      <CreatorCredit />
    </main>
  );
}
