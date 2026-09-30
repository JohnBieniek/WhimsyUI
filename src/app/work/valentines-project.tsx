import Image from "next/image";
import Link from "next/link";
import { Flower2, Gift, Heart, Mail, Sparkles } from "lucide-react";
import type { ArchiveStory } from "./archive-stories";
import dimensions from "./archive-images.json";
import { MobileHeadingText, ProjectCallToAction, ProjectHeader } from "./project-framing";
import styles from "./valentines-project.module.css";

function ValentineDecorations({ theme }: { theme: "intro" | "gifts" | "photography" | "takeaway" }) {
  const Accent = theme === "gifts" ? Gift : Mail;
  return <div className={[styles.decorations, styles[`${theme}Decorations`]].filter(Boolean).join(" ")} aria-hidden="true">
    <Heart className={styles.heartOne} strokeWidth={1} focusable="false" />
    <Heart className={styles.heartTwo} strokeWidth={1} fill="currentColor" focusable="false" />
    <Accent className={styles.loveNote} strokeWidth={1} focusable="false" />
    <Flower2 className={styles.flower} strokeWidth={1} focusable="false" />
    <Sparkles className={styles.sparkles} strokeWidth={1} focusable="false" />
    {theme === "photography" && <Heart className={styles.heartThree} strokeWidth={1} focusable="false" />}
  </div>;
}

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

function ValentineArtwork({ name, alt, caption, height = 1080, preload = false }: { name: string; alt: string; caption: string; height?: number; preload?: boolean }) {
  const src = `/work/valentines/${name}.webp`;
  return <figure className={styles.artwork}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${alt}`}>
      <Image src={src} alt={alt} width={1080} height={height} preload={preload} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 600px" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}

export default function ValentinesProject({ story, title }: { story: ArchiveStory; title: string }) {
  const [gifts, photography] = story.sections;

  return <main data-project="valentines-at-jackson-crossing" className={`case-page shell ${styles.page}`}>
    <Link className="back-link" href="/work">← All work</Link>
    <ProjectHeader title={title} description={story.summary} mobileTitleLines={["Valentine’s at", "Jackson Crossing"]} mobileTitleSize="min(50px, 7.5cqw)" />

    <section className={styles.introduction}>
      <ValentineDecorations theme="intro" />
      <p className={styles.eyebrow}>The idea</p>
      <div className={styles.headlineContainer}><CampaignHeading text={story.heading} /></div>
      <p className={styles.introCopy}>Pick out flowers, stop for something sweet, and stay for a song. Whimsy’s Valentine’s creative brings Jackson Crossing’s local businesses together, giving visitors a collection of thoughtful ways to spend time and celebrate.</p>
      <ul className={styles.services}>{story.services.map(service => <li key={service}>{service}</li>)}</ul>
    </section>

    <section className={styles.overview} aria-labelledby="valentine-overview-title">
      <div className={styles.chapterCopy}>
        <p className={styles.eyebrow}>The invitation</p>
        <h2 id="valentine-overview-title">One destination.<br />A day of possibilities.</h2>
        <p>The shared Valentine’s guide brings flowers, live music, treats, photography, drinks, and dinner into one invitation. Visitors can see what catches their eye, then explore each business’s offer.</p>
        <p>Individual promotions carry the details, while the Jackson Crossing name ties the whole collection together.</p>
      </div>
      <ValentineArtwork name="crossing-valentines-day" alt="Jackson Crossing Valentine’s Day guide featuring Peggy’s flowers, Kay Harper live music, Heavenly Bakes & Cakes, Studio One Photography, Sipster, and Alpha’s dinner special." caption="The shared guide brings the participating businesses together." height={1375} preload />
    </section>

    <section className={styles.giftFeature} aria-labelledby="valentine-flowers-title">
      <ValentineArtwork name="flowers-valentines" alt="Peggy’s Custom Floral Designs Valentine’s Day silk flowers promotion for February 13 and 14." caption="Peggy’s Custom Floral Designs · Silk flowers for Valentine’s Day" />
      <div className={styles.chapterCopy}>
        <p className={styles.eyebrow}>Start with something thoughtful</p>
        <h2 id="valentine-flowers-title">A gift that lasts beyond the day.</h2>
        <p>Peggy’s silk floral designs offer a lasting way to mark the occasion. A frame of red roses sets the mood, while the message puts handcrafted arrangements and the February 13–14 dates in view.</p>
        <p>It gives the wider event a personal starting point: something to choose for someone else, or to take home yourself.</p>
      </div>
    </section>

    <section className={styles.treats} aria-labelledby="valentine-treats-title">
      <header className={styles.chapterHeader}>
        <p className={styles.eyebrow}>Make a day of it</p>
        <h2 id="valentine-treats-title">A sweet stop. A drink. Dinner for two.</h2>
        <p>Each business adds its own reason to visit. The creative moves from small gifts and refreshments to a meal together, keeping every offer distinct within the same celebration.</p>
      </header>
      <div className={styles.offerGrid}>
        <article>
          <ValentineArtwork name="bakes-and-cakes-valentines" alt="Heavenly Bakes & Cakes Valentine’s sweets promotion, February 12–15 from noon to 5 PM, featuring chocolate strawberry boxes, chocolate bouquets, heart tins, and treat boxes." caption="Heavenly Bakes & Cakes · February 12–15, noon–5 PM" />
          <h3>Something sweet to share</h3>
          <p>Chocolate strawberries, bouquets, and heart-shaped tins make the bakery’s selection easy to picture as a gift or a treat.</p>
        </article>
        <article>
          <ValentineArtwork name="sipster-valentines" alt="Sipster Valentine’s Day refreshments promotion for February 14 at Jackson Crossing, across from the vintage carousel." caption="Sipster · February 14, across from the vintage carousel" />
          <h3>A pause between stops</h3>
          <p>A drink photograph and a recognizable meeting point invite visitors to stop for refreshments while exploring the mall.</p>
        </article>
        <article>
          <ValentineArtwork name="alpha-valentines" alt="Alpha Koney Island Valentine’s Day dinner for two: two New York strips with a choice of potato, rice, soup, or salad, and one free slice of cake." caption="Alpha Koney Island · Valentine’s Day dinner for two" />
          <h3>Finish with dinner together</h3>
          <p>Alpha’s dinner-for-two promotion makes the meal the focus, with the steak special, side choices, and a slice of cake spelled out.</p>
        </article>
      </div>
    </section>

    <section className={styles.music} aria-labelledby="valentine-music-title">
      <div className={styles.chapterCopy}>
        <p className={styles.eyebrow}>Stay for a song</p>
        <h2 id="valentine-music-title">Give the gathering a soundtrack.</h2>
        <p>Kay Harper’s live music adds a shared experience to the shopping and dining offers. Her portrait with a guitar makes the performance the centerpiece of the invitation.</p>
        <p>The artwork points visitors to the vintage carousel on February 14, from 11 AM to 2 PM—a place and time to pause and enjoy the day.</p>
      </div>
      <ValentineArtwork name="live-valentines-music" alt="Kay Harper live music at Jackson Crossing on Valentine’s Day, February 14 from 11 AM to 2 PM, next to the vintage carousel." caption="Kay Harper · Live music next to the vintage carousel" />
    </section>

    <header className={styles.archiveIntro}>
      <p className={styles.eyebrow}>Earlier Valentine’s campaigns</p>
      <h2>More ways to mark the occasion.</h2>
      <p>The collection builds on earlier floral and photography promotions. These pieces retain their original dates and offers.</p>
    </header>

    <section className={styles.gifts}>
      <ValentineDecorations theme="gifts" />
      <div className={styles.giftArtwork}>
        <CampaignArtwork item={story.hero} caption="Peggy’s Custom Floral Designs · February 2025" />
      </div>
      <div className={styles.giftCopy}>
        <h2><MobileHeadingText lines={["Show the gift, then explain", "where to find it."]} size="min(30px, 5cqw)" /></h2>
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
      <ValentineDecorations theme="photography" />
      <header className={styles.photoHeader}>
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
      <ValentineDecorations theme="takeaway" />
      <div><p className={styles.eyebrow}>The common thread</p><h2><MobileHeadingText lines={["A personal reason to visit."]} size="min(30px, 5.5cqw)" /></h2></div>
      <div>
        <p>A shared guide helps visitors discover the celebration. Individual promotions give each business room to show its offer, from a floral gift to dinner or a live performance.</p>
        <p>For businesses, that means a clear way to introduce an offer. For visitors, it means knowing what’s available, where to find it, and how to make it part of their day.</p>
      </div>
    </section>

    <ProjectCallToAction />
  </main>;
}
