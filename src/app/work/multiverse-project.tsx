import Image from "next/image";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import { softwareProjects } from "./software-projects";
import { softwareStories } from "./software-stories";
import styles from "./multiverse-project.module.css";

const screens = {
  home: { src: "/services/multiverse/home-page-desktop.png", width: 2880, height: 1470 },
  command: { src: "/services/multiverse/command-window.png", width: 1207, height: 964 },
  character: { src: "/services/multiverse/playable-sheet.png", width: 3807, height: 3561 },
  library: { src: "/services/multiverse/character-library-desktop.png", width: 3838, height: 1957 },
  mobileCharacter: { src: "/services/multiverse/character-library-mobile.png", width: 655, height: 1411 },
  mobileHome: { src: "/services/multiverse/home-page-mobile.png", width: 390, height: 972 },
};

function Screenshot({ screen, alt, caption, preload = false, className = "" }: {
  screen: (typeof screens)[keyof typeof screens];
  alt: string;
  caption?: string;
  preload?: boolean;
  className?: string;
}) {
  return <figure className={`${styles.screenshot} ${className}`}>
    <a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`View full screenshot: ${alt}`}>
      <Image {...screen} alt={alt} preload={preload} sizes="(max-width: 900px) 100vw, 50vw" />
    </a>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

export default function MultiverseProject({ project }: { project: (typeof softwareProjects)[number] }) {
  const story = softwareStories[project.slug];
  const [accessibility, characters, rulebook, responsive] = story.chapters;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={project.title} description={project.intro}>
      <a className={`button ${styles.visitButton}`} href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>
    </ProjectHeader>

    <section className={styles.overview} aria-labelledby="project-brief-title">
      <Screenshot screen={screens.home} alt={project.alt} preload className={styles.heroImage} />
      <div className={styles.overviewCopy}>
        <p className={styles.kicker}>The project</p>
        <h2 className={styles.heading} id="project-brief-title">{story.title}</h2>
        {story.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>

    <section className={styles.capabilities} aria-labelledby="project-details-title">
      <header><p className={styles.kicker}>What we built</p><h2 className={styles.heading} id="project-details-title">Useful features. Thoughtful details.</h2></header>
      <div className={styles.capabilityGrid}>
        {project.sections.map(({ title, copy }) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <section className={styles.featureCard} aria-label="Accessible interaction and interactive character management">
      <div className={styles.featureColumns}>
        <article className={styles.featureColumn} aria-labelledby="accessible-interaction-title">
          <div className={styles.featureCopy}>
            <p className={styles.kicker}>{accessibility.kicker}</p>
            <h2 className={styles.heading} id="accessible-interaction-title">{accessibility.title}</h2>
            {accessibility.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Screenshot screen={screens.command} alt={accessibility.alt ?? ""} caption={accessibility.caption} />
        </article>
        <article className={styles.featureColumn} aria-labelledby="character-management-title">
          <Screenshot screen={screens.character} alt={characters.alt ?? ""} caption={characters.caption} />
          <div className={styles.featureCopy}>
            <p className={styles.kicker}>{characters.kicker}</p>
            <h2 className={styles.heading} id="character-management-title">{characters.title}</h2>
            {characters.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </article>
      </div>
      <div className={styles.commandPoints}>
        {accessibility.points?.map(point => <article key={point.title}><h3>{point.title}</h3><p>{point.copy}</p></article>)}
      </div>
    </section>

    <section className={styles.rulebook} aria-labelledby="connected-rulebook-title">
      <header><p className={styles.kicker}>{rulebook.kicker}</p><h2 className={styles.heading} id="connected-rulebook-title">{rulebook.title}</h2></header>
      <div>{rulebook.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <section className={styles.library} aria-labelledby="responsive-delivery-title">
      <header className={styles.libraryCopy}>
        <div><p className={styles.kicker}>{responsive.kicker}</p><h2 className={styles.heading} id="responsive-delivery-title">{responsive.title}</h2></div>
        <div>{responsive.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </header>
      <Screenshot screen={screens.library} alt={responsive.alt ?? ""} caption={responsive.caption} />
    </section>

    <section className={styles.mobileCard} aria-labelledby="mobile-play-title">
      <div className={styles.mobileIntro}>
        <p className={styles.kicker}>On a smaller screen</p>
        <h2 className={styles.heading} id="mobile-play-title">The same game, ready to take to the table.</h2>
        <p>Mobile views keep the game reference and character tools close at hand. These screens show how navigation, readable rules, and character details fit into the space a player has on a phone.</p>
        <Screenshot screen={screens.command} alt={accessibility.alt ?? ""} caption="Typed and spoken commands add accessibility." />
      </div>
      <Screenshot screen={screens.mobileCharacter} alt="Multiverse character sheet with character details and dice controls on mobile" caption="Character tools on mobile." className={styles.phone} />
      <Screenshot screen={screens.mobileHome} alt="Multiverse mobile homepage with navigation and game guides" caption="The game reference on mobile." className={styles.phone} />
    </section>

    <p className={styles.credit}>Software by John Bieniek. <a href={project.source}>Read the engineering overview ↗</a></p>
    <CreatorCredit />
    <ProjectCallToAction />
  </main>;
}
