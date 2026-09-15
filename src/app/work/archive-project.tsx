import Image from "next/image";
import Link from "next/link";
import { type ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import styles from "./archive-project.module.css";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import HalloweenDecorations from "./halloween-decorations";

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

function ArchiveHeading({ heading }: { heading: ArchiveStory["heading"] }) {
  return <h2 className={Array.isArray(heading) ? styles.twoLineHeading : undefined}>
    {Array.isArray(heading) ? heading.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>) : heading}
  </h2>;
}

export default function ArchiveProject({ story, title }: { story: ArchiveStory; title: string }) {
  const isHalloween = story.theme === "halloween";
  return <main className={`case-page shell ${styles.page} ${isHalloween ? styles.halloween : ""}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={story.title ?? title} description={story.summary} />
    <section className={styles.opening}>
      {isHalloween && <HalloweenDecorations variant="intro" />}
      <div className={Array.isArray(story.heading) ? styles.headingColumn : undefined}>
        <p className="kicker">The project</p>
        <ArchiveHeading heading={story.heading} />
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
    {story.sections.map(section => {
      const imageLeft = section.layout === "image-left";
      const galleryClass = section.galleryLayout === "stacked" ? styles.stackedGallery
        : section.galleryLayout === "centered" ? styles.centeredGallery
        : section.galleryLayout === "paired" ? `${styles.centeredGallery} ${styles.pairedGallery}`
        : `${styles.gallery} ${section.images.length === 1 ? styles.single : ""}`;
      const gallery = section.images.length > 0 && <div className={galleryClass}>
        {section.images.map(item => <ArchiveImage item={item} key={item[0]} />)}
      </div>;
      return <section className={`${styles.chapter} ${imageLeft ? styles.imageLeft : ""} ${section.card === "light-purple" ? styles.purpleCard : ""} ${section.galleryLayout === "stacked" ? styles.eventChapter : ""}`} key={Array.isArray(section.title) ? section.title.join(" ") : section.title}>
        {isHalloween && section.accent && <HalloweenDecorations variant={section.accent} />}
        {imageLeft && gallery}
        <header className={styles.chapterHeading}>
          <div className={Array.isArray(section.title) ? styles.headingColumn : undefined}>
            <p className="kicker">{section.kicker}</p>
            <ArchiveHeading heading={section.title} />
          </div>
          <div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </header>
        {!imageLeft && gallery}
      </section>;
    })}
    <ProjectCallToAction />
  </main>;
}
