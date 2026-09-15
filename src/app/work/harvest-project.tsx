import Image from "next/image";
import Link from "next/link";
import { Leaf, Wheat } from "lucide-react";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./harvest-project.module.css";

function HarvestHeading({ text }: { text: ArchiveStory["heading"] }) {
  return <h2 className={styles.headline}>
    {Array.isArray(text) ? text.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>) : text}
  </h2>;
}

function HarvestArtwork({ item, caption }: { item: [string, string]; caption: string }) {
  const [id, alt] = item;
  const size = dimensions[id as keyof typeof dimensions];
  return <figure className={styles.artwork}>
    <a href={`/work/archive/${id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${alt}`}>
      <Image src={`/work/archive/${id}.jpg`} alt={alt} width={size.width} height={size.height} sizes="(max-width: 700px) 100vw, 640px" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

const vendorNames = ["Spoons, Rings & Other Bling", "Ashley Sweet Creations", "J&D’s Flavorful Delight", "Enchanted Chains"];

export default function HarvestProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [entertainment, vendors] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.introduction}>
      <Leaf className={styles.leaf} aria-hidden="true" strokeWidth={1} />
      <Wheat className={styles.wheat} aria-hidden="true" strokeWidth={1} />
      <div className={styles.introContent}>
        <div className={styles.headingContainer}><HarvestHeading text={story.heading} /></div>
        <p>Something handmade, something sweet, and music along the way. Happy Harvest brought local businesses together for a warm autumn welcome at Jackson Crossing.</p>
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
    </section>

    <section className={styles.invitation}>
      <HarvestArtwork item={story.hero} caption="The Happy Harvest invitation brought the participating vendors together." />
      <div className={styles.invitationCopy}>
        <h2>Local makers.<br />One shared invitation.</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <dl className={styles.eventFacts}>
          <div><dt>When</dt><dd>November 23, 2024</dd></div>
          <div><dt>Where</dt><dd>Jackson Crossing</dd></div>
        </dl>
      </div>
    </section>

    <section className={styles.music}>
      <header className={styles.sectionHeader}>
        <div className={styles.headingContainer}><HarvestHeading text={entertainment.title} /></div>
        <p>{entertainment.paragraphs[0]}</p>
      </header>
      <div className={styles.musicArtwork}>
        <HarvestArtwork item={entertainment.images[0]} caption="Lakeland Cabaret’s Happy Harvest DJ promotion, beside Alpha Koney." />
      </div>
      <p className={styles.musicNote}>{entertainment.paragraphs[1]}</p>
    </section>

    <section className={styles.vendors}>
      <header className={styles.sectionHeader}>
        <div className={styles.headingContainer}><HarvestHeading text={vendors.title} /></div>
        <p>{vendors.paragraphs[0]}</p>
      </header>
      <div className={styles.vendorGrid}>
        {vendors.images.map((item, index) => <HarvestArtwork key={item[0]} item={item} caption={vendorNames[index]} />)}
      </div>
    </section>

    <section className={styles.takeaway}>
      <h2>More to explore.<br />More reasons to visit.</h2>
      <div>
        <p>{vendors.paragraphs[1]}</p>
        <p>For local businesses, a shared campaign creates more ways to be discovered. For visitors, the mix of makers, music, and treats gives a shopping trip a sense of occasion and a reason to spend time together.</p>
      </div>
    </section>

    <ProjectCallToAction />
  </main>;
}
