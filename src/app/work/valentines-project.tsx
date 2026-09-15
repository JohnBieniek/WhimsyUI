import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./valentines-project.module.css";

function CampaignHeading({ text }: { text: ArchiveStory["heading"] }) {
  return <h2 className={styles.headline}>
    {Array.isArray(text) ? text.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>) : text}
  </h2>;
}

function CampaignArtwork({ item, caption }: { item: [string, string]; caption: string }) {
  const [id, alt] = item;
  const size = dimensions[id as keyof typeof dimensions];
  return <figure className={styles.artwork}>
    <a href={`/work/archive/${id}.jpg`} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${alt}`}>
      <Image src={`/work/archive/${id}.jpg`} alt={alt} width={size.width} height={size.height} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 780px" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function ValentinesProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [gifts, photography] = story.sections;

  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.introduction}>
      <p className={styles.eyebrow}>The idea</p>
      <div className={styles.headlineContainer}><CampaignHeading text={story.heading} /></div>
      <p className={styles.introCopy}>Thoughtful gifts and a reason to spend time together. Whimsy connected local businesses with the Valentine’s season through floral promotions and photography-led creative at Jackson Crossing.</p>
      <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
    </section>

    <section className={styles.gifts}>
      <div className={styles.giftArtwork}>
        <CampaignArtwork item={story.hero} caption="Peggy’s Custom Floral Designs · February 2025" />
      </div>
      <div className={styles.giftCopy}>
        <p className={styles.eyebrow}>01 / Valentine’s gifts / 2025</p>
        <h2>{gifts.title}</h2>
        <p>{gifts.paragraphs[0]}</p>
        <div className={styles.visitDetails}>
          <h3>A clear plan for a visit</h3>
          <p>Jackson Crossing · February 2025</p>
          <dl>
            <div><dt>Thursday, February 13</dt><dd>11 AM–6 PM</dd></div>
            <div><dt>Friday, February 14</dt><dd>11 AM–5 PM</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section className={styles.photography}>
      <header className={styles.photoHeader}>
        <p className={styles.eyebrow}>02 / Photography &amp; Cupid’s Corner / 2024</p>
        <div className={styles.headlineContainer}><CampaignHeading text={photography.title} /></div>
        <p>A bold portrait, a vivid red palette, and an invitation to join in. Studio One Photography’s creative promoted February 17 Valentine’s specials, while its sponsor panel connected the business to Cupid’s Corner on February 14.</p>
      </header>
      <div className={styles.photoArtwork}>
        <CampaignArtwork item={photography.images[0]} caption="Studio One Photography · Valentine’s specials and Cupid’s Corner, 2024" />
      </div>
      <div className={styles.eventDetails}>
        <div><h3>Cupid’s Corner</h3><p>February 14, 2024 · 2–6 PM</p></div>
        <ul><li>Photography</li><li>Live music</li><li>Vendors</li><li>Food &amp; more</li></ul>
      </div>
    </section>

    <section className={styles.takeaway}>
      <div><p className={styles.eyebrow}>The common thread</p><h2>A personal reason to visit.</h2></div>
      <div>
        <p>{photography.paragraphs[1]}</p>
        <p>For businesses, that means a clear way to introduce an offer. For visitors, it means knowing what’s available, where to find it, and how to make it part of their day.</p>
      </div>
    </section>

    <ProjectCallToAction />
  </main>;
}
