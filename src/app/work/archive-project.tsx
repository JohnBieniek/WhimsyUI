import Image from "next/image";
import Link from "next/link";
import { type ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import styles from "./archive-project.module.css";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import HalloweenDecorations from "./halloween-decorations";

function ArchiveImage({ item, hero = false, showEnlarge = false }: { item: [string, string]; hero?: boolean; showEnlarge?: boolean }) {
  const [id, caption] = item;
  const size = dimensions[id as keyof typeof dimensions];
  return <figure className={styles.figure}>
    <a href={`/work/archive/${id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${caption}`}>
      <Image src={`/work/archive/${id}.jpg`} alt={caption} width={size.width} height={size.height} preload={hero} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw" />
    </a>
    <figcaption className={showEnlarge ? styles.captionWithLink : undefined}>
      <span>{caption}</span>
      {showEnlarge && <a className={styles.enlargeLink} href={`/work/archive/${id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`Enlarge ${caption}`}>Click to enlarge</a>}
    </figcaption>
  </figure>;
}

function ArchiveHeading({ heading }: { heading: ArchiveStory["heading"] }) {
  const mobileLines = heading === "A local favorite, with room for your whole group."
    ? ["A local favorite, with room", "for your whole group."]
    : heading === "Connect an everyday visit with a larger gathering."
      ? ["Connect an everyday visit", "with a larger gathering."]
      : heading === "New connections around a familiar table."
        ? ["New connections around", "a familiar table."]
        : heading === "Turn the halls into a place to discover young artists."
          ? ["Turn the halls into a place", "to discover young artists."]
          : heading === "Help visitors find their way into the show."
            ? ["Help visitors find their", "way into the show."]
            : heading === "Give the celebration its own supporting cast."
              ? ["Give the celebration its", "own supporting cast."]
              : heading === "Give the activities their own invitation."
                ? ["Give the activities", "their own invitation."]
                : heading === "Turn useful conversations into practical next steps."
                  ? ["Turn useful conversations", "into practical next steps."]
                  : heading === "Show the journey behind the counter."
                    ? ["Show the journey", "behind the counter."]
                    : undefined;
  if (mobileLines) return <h2 className={`${styles.mobileTwoLineHeading} ${heading === "Connect an everyday visit with a larger gathering." ? styles.desktopTwoLineHeading : ""}`}>
    {mobileLines.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>)}
  </h2>;
  return <h2 className={Array.isArray(heading) ? styles.twoLineHeading : undefined}>
    {Array.isArray(heading) ? heading.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>) : heading}
  </h2>;
}

export default function ArchiveProject({ story, title }: { story: ArchiveStory; title: string }) {
  const isHalloween = story.theme === "halloween";
  return <main className={`case-page shell ${styles.page} ${isHalloween ? styles.halloween : ""}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={story.title ?? title} description={story.summary}
      mobileTitleLines={(story.title ?? title) === "Jackson County Student Art Show" ? ["Jackson County", "Student Art Show"]
        : (story.title ?? title) === "Malloween at Jackson Crossing" ? ["Malloween at", "Jackson Crossing"]
          : (story.title ?? title) === "Serenity Consulting & Community Support" ? ["Serenity Consulting", "& Community Support"]
            : (story.title ?? title) === "Sisters Smoothies Feature" ? ["Sisters Smoothies", "Feature"]
              : (story.title ?? title) === "Alpha Koney Islands Story" ? ["Alpha Koney", "Islands Story"] : undefined}
      mobileTitleSize="min(50px, 7.5cqw)" />
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
        : section.galleryLayout === "aligned" ? `${styles.alignedGallery} ${section.images.length === 2 ? styles.alignedPair : ""}`
        : `${styles.gallery} ${section.images.length === 1 ? styles.single : ""}`;
      const gallery = section.images.length > 0 && <div className={galleryClass}>
        {section.images.map(item => <ArchiveImage item={item} showEnlarge={section.enlargeImages?.includes(item[0])} key={item[0]} />)}
      </div>;
      return <section className={`${styles.chapter} ${imageLeft ? styles.imageLeft : ""} ${section.card === "light-purple" ? styles.purpleCard : section.card === "light-mint" ? styles.mintCard : ""} ${section.galleryLayout === "stacked" ? styles.eventChapter : ""}`} key={Array.isArray(section.title) ? section.title.join(" ") : section.title}>
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
