import Image from "next/image";
import Link from "next/link";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./fetch-project.module.css";

type Photo = { src: string; caption: string; width: number; height: number };

function photo(src: string, caption: string, width = 4000, height = 3000): Photo {
  return { src, caption, width, height };
}

const photos = {
  sandwiches: photo("/caprese.jpg", "Caprese sandwiches, with Cowboy Club sandwiches behind them."),
  outside: photo("/fetch%20outside.jpg", "Fetch Market & Deli’s downtown Brooklyn storefront, with a balloon-framed entrance."),
  pastries: photo("/spnach%20spankies.jpg", "Five-cheese and spinach pastries, ready to share."),
  vegetables: photo("/veggies.jpg", "Fresh vegetables with roasted garlic and feta-buttermilk dips."),
  esquites: photo("/esquites.jpg", "Esquites corn dip, served with chips and crackers.", 3000, 4000),
  brownies: photo("/brownies.jpg", "Chocolate ganache brownies."),
  coconut: photo("/mouse.jpg", "Toasted coconut and lime mousse."),
  strawberry: photo("/strawberry%20mouse.jpg", "Strawberry cheesecake mousse."),
};

function archivePhoto([id, caption]: [string, string]): Photo {
  return { src: `/work/archive/${id}.jpg`, caption, ...dimensions[id as keyof typeof dimensions] };
}

function FetchPhoto({ item, preload = false, className = "" }: { item: Photo; preload?: boolean; className?: string }) {
  return <figure className={`${styles.photo} ${className}`}>
    <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${item.caption}`}>
      <Image src={item.src} alt={item.caption} width={item.width} height={item.height} preload={preload} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 660px" />
    </a>
    <figcaption>{item.caption}</figcaption>
  </figure>;
}

export default function FetchProject({ story, title }: { story: ArchiveStory; title: string }) {
  return <main className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} />

    <section className={styles.opening} aria-labelledby="fetch-project-title">
      <div className={styles.openingCopy}>
        <p className={styles.kicker}>The project</p>
        <h2 id="fetch-project-title">{Array.isArray(story.heading) ? story.heading.join(" ") : story.heading}</h2>
        {story.introduction.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
      </div>
      <FetchPhoto item={photos.sandwiches} preload />
    </section>

    <section className={styles.place} aria-labelledby="fetch-place-title">
      <FetchPhoto item={photos.outside} />
      <div>
        <p className={styles.kicker}>The place</p>
        <h2 id="fetch-place-title">A familiar corner.<br />A new reason to stop.</h2>
        <p>The brick building, Fetch sign, and balloon-framed entrance connect the food to a recognizable downtown Brooklyn location. A photograph of the storefront helps people picture where their next visit could begin.</p>
        <p>Paired with the food photography, it gives the story both a destination and a reason to go: a place to find sandwiches, savory bites, and something sweet.</p>
      </div>
    </section>

    <section className={styles.savory} aria-labelledby="fetch-savory-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>From the kitchen</p>
        <h2 id="fetch-savory-title">Sandwiches are just the beginning.</h2>
        <p>The Caprese and Cowboy Club sandwiches introduce the spread. Five-cheese and spinach pastries, colorful vegetables with dips, and esquites corn dip show the variety alongside them. These photographs give each dish room to be noticed.</p>
      </header>
      <div className={styles.savoryGrid}>
        <FetchPhoto item={photos.pastries} />
        <FetchPhoto item={photos.vegetables} />
        <FetchPhoto item={photos.esquites} className={styles.portrait} />
      </div>
    </section>

    <section className={styles.sweets} aria-labelledby="fetch-sweets-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>Something sweet</p>
        <h2 id="fetch-sweets-title">Finish with something worth remembering.</h2>
        <p>Chocolate ganache brownies, toasted coconut and lime mousse, and strawberry cheesecake mousse complete the picture. Close-up photographs make the textures, colors, and presentation part of the invitation.</p>
      </header>
      <div className={styles.sweetsGrid}>
        <FetchPhoto item={photos.coconut} />
        <FetchPhoto item={photos.brownies} />
        <FetchPhoto item={photos.strawberry} />
      </div>
    </section>

    <section className={styles.launch} aria-labelledby="fetch-launch-title">
      <header className={styles.sectionHeader}>
        <p className={styles.kicker}>The launch story</p>
        <h2 id="fetch-launch-title">Build familiarity before the first visit.</h2>
        <p>The earlier campaign introduced Chef Gretchen, known locally for her work at Atlas, and the plans for fresh foods, local goods, and specialty market finds. These photographs and announcements trace that work before the doors opened.</p>
      </header>
      {story.sections.map((section, index) => <section className={styles.archiveChapter} key={section.kicker}>
        <header className={styles.archiveHeader}>
          <h3>{section.title}</h3>
          <div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </header>
        <div className={`${styles.archiveGrid} ${index === 1 ? styles.partners : ""}`}>
          {(index === 0 ? [story.hero, ...section.images] : section.images).map(item => <FetchPhoto key={item[0]} item={archivePhoto(item)} />)}
        </div>
      </section>)}
    </section>

    <section className={styles.takeaway} aria-labelledby="fetch-takeaway-title">
      <h2 id="fetch-takeaway-title">Make the business easier to discover.</h2>
      <p>For Fetch, a connected set of food, storefront, and partnership photographs gives the launch story useful material to share. For future visitors, it answers simple questions: what looks good, where to find it, and who is behind it. The result is a more concrete invitation to get to know a local business.</p>
    </section>

    <ProjectCallToAction />
  </main>;
}
