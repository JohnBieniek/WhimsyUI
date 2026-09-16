import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { MobileHeadingText, ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./welcome-home-project.module.css";

function ProjectImage({ item, preload = false, sizes = "(max-width: 700px) 100vw, 50vw" }: { item: [string, string]; preload?: boolean; sizes?: string }) {
  const [id, caption] = item;
  const src = `/work/archive/${id}.jpg`;
  const size = dimensions[id as keyof typeof dimensions];

  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={src} alt={caption} width={size.width} height={size.height} preload={preload} sizes={sizes} />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function WelcomeHomeProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [creative, planning, community, partners, value] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} mobileTitleLines={["Welcome Home", "Organization"]} />

    <section className={styles.opening} aria-labelledby="who-project-title">
      <div>
        <p className={styles.kicker}>The project</p>
        <h2 id="who-project-title">{story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ProjectImage item={story.hero} preload />
    </section>

    <section className={styles.creative} aria-labelledby="who-creative-title">
      <div className={styles.creativeCopy}>
        <p className={styles.kicker}>{creative.kicker}</p>
        <h2 id="who-creative-title">{creative.title}</h2>
        {creative.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.deliverables}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
        <a className={styles.websiteLink} href="https://www.whovision.org/" target="_blank" rel="noopener noreferrer">Visit Welcome Home Organization →</a>
      </div>
      <figure className={styles.figure}>
        <a href="/work/archive/welcome-home-site.png" target="_blank" rel="noopener noreferrer" aria-label="View the full Welcome Home Organization website screenshot">
          <Image src="/work/archive/welcome-home-site.png" alt="Welcome Home Organization's public homepage, with its identity, program navigation, and community mission." width={1440} height={1000} sizes="(max-width: 900px) 100vw, 55vw" />
        </a>
        <figcaption>The organization’s public homepage, bringing its identity, programs, and mission together.</figcaption>
      </figure>
    </section>

    <div className={styles.storyPair}>
      <section className={styles.planning} aria-labelledby="who-planning-title">
        <ProjectImage item={planning.images[0]} />
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{planning.kicker}</p>
          <h2 id="who-planning-title"><MobileHeadingText lines={["Start with the people", "behind the mission."]} /></h2>
          {planning.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>
      <section className={styles.community} aria-labelledby="who-community-title">
        <div className={styles.cardCopy}>
          <p className={styles.kicker}>{community.kicker}</p>
          <h2 id="who-community-title"><MobileHeadingText lines={["Make getting involved", "feel possible."]} /></h2>
          {community.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className={styles.communityImages}>
          {community.images.map(item => <ProjectImage item={item} key={item[0]} sizes="(max-width: 700px) 50vw, 25vw" />)}
        </div>
      </section>
    </div>

    <section className={styles.partners} aria-labelledby="who-partners-title">
      <div>
        <p className={styles.kicker}>{partners.kicker}</p>
        <h2 id="who-partners-title">{partners.title}</h2>
        {partners.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className={styles.partnerImages}>
        {partners.images.map(item => <ProjectImage item={item} key={item[0]} sizes="(max-width: 900px) 50vw, 30vw" />)}
      </div>
    </section>

    <section className={styles.value} aria-labelledby="who-value-title">
      <div>
        <p className={styles.kicker}>{value.kicker}</p>
        <h2 id="who-value-title"><MobileHeadingText lines={["Give good work a clearer", "way to reach people."]} /></h2>
      </div>
      <div>{value.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <ProjectCallToAction />
  </main>;
}
