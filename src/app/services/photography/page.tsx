import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Package, Store, UserRound } from "lucide-react";
import { CreatorCredit } from "../../creator-credit";
import styles from "./photography.module.css";

export const metadata: Metadata = {
  title: "Photography | $100/hour | Whimsy",
  description:
    "Event photography, business and brand photos, headshots, and product photography for Jackson-area businesses, nonprofits, and individuals. Photography at $100 per hour.",
};

const photographyServices = [
  {
    title: "Event photography",
    Icon: CalendarDays,
    copy: "Capture the people, activity, and details that tell the story of your event. From grand openings and performances to fundraisers and community gatherings, we plan around the moments that matter to you.",
    uses: "Event recaps, partner updates, social posts, and future promotions.",
  },
  {
    title: "Business & brand photos",
    Icon: Store,
    copy: "Show people who you are and what you do. Photography of your team, space, and work in progress helps customers get to know the people behind your business or nonprofit.",
    uses: "Websites, advertising campaigns, business profiles, and social content.",
  },
  {
    title: "Headshots",
    Icon: UserRound,
    copy: "Put a face to your name with a portrait that suits your work and personality. We discuss the setting, style, and how you’ll use the photos, whether you need an individual headshot or pictures of your team.",
    uses: "Team pages, professional profiles, speaker introductions, and press materials.",
  },
  {
    title: "Product photography",
    Icon: Package,
    copy: "Give customers a closer look at what you make or sell. We plan the backgrounds, angles, and details around your products and the places you’ll share the finished photographs.",
    uses: "Online listings, menus, product launches, and promotional materials.",
  },
];

const photographyInclusions = [
  {
    title: "Planning and a shared shot list",
    copy: "We talk through your goals, location, schedule, and where the photos will be used. Together, we agree on the people, products, and moments to capture so everyone knows what to expect.",
  },
  {
    title: "Photography on location",
    copy: "Your booked time covers the agreed shoot, whether that means portraits, products, your workplace, or an event. We work through the shot list with attention to the setting and the details that tell your story.",
  },
  {
    title: "Image selection and agreed edits",
    copy: "We confirm the image selection and editing scope before the shoot. The work follows that agreement, with any additional retouching or extra requests discussed and quoted separately.",
  },
  {
    title: "Digital delivery and handoff",
    copy: "Receive your finished photographs in the formats and on the schedule we agree together. We plan delivery around how you’ll use them, from team pages and product listings to campaigns and event recaps.",
  },
];

export default function PhotographyPage() {
  return (
    <main className={`shell ${styles.page}`} data-service="photography">
      <header className={styles.hero}>
        <div>
          <Link className="back-link" href="/services">← All services</Link>
          <p className="kicker">Photography · $100/hour</p>
          <h1>Photography</h1>
          <p className={styles.lead}>Your people. Your work. Your story.</p>
          <p>
            Great photographs help people connect with what you do. Whimsy offers
            event photography, business and brand photos, headshots, and product
            photography for businesses, nonprofits, and individuals around
            Jackson, Michigan.
          </p>
          <p>
            Whether you’re introducing your team, refreshing your website,
            launching a product, or bringing the community together, we’ll help
            you plan photographs around the story you want to tell.
          </p>
          <Link className="button" href="/contact">
            Plan your shoot <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <Image
          className={styles.heroImage}
          src="/portrait.webp"
          alt="A photographer in a purple cap using a camera with a long lens beside a creek."
          width={1800}
          height={2402}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 900px) 100vw, 45vw"
        />
      </header>

      <section className={styles.coverage} aria-labelledby="photography-coverage-title">
        <p className="kicker">What we photograph</p>
        <h2 id="photography-coverage-title">People, places, and the things you create.</h2>
        <div className={styles.coverageGrid}>
          {photographyServices.map(({ title, Icon, copy, uses }) => (
            <article key={title}>
              <span className={styles.icon}><Icon aria-hidden="true" size={25} /></span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <p className={styles.uses}><strong>Useful for:</strong> {uses}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.planning} aria-labelledby="photography-planning-title">
        <figure className={styles.locationPhoto}>
          <div className={styles.locationPhotoCrop}>
            <Image
              src="/Airport%20voltuneering/signal-2026-09-13-08-56-21-708.jpg"
              alt="Dawn holding a camera at the Jackson County Airport Open House, wearing a yellow volunteer shirt."
              width={1536}
              height={2048}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <figcaption>Dawn Parker at the Jackson County Airport Open House</figcaption>
        </figure>
        <div>
          <p className="kicker">A shoot shaped around you</p>
          <h2 id="photography-planning-title">Let’s work out what you need.</h2>
          <p>
            Photography is <strong>$100 per hour</strong>. The right amount of
            time depends on what we’re photographing, the location, and the
            coverage you have in mind. We’ll talk through the scope and estimated
            time with you before booking.
          </p>
          <p>
            Need photographs for a new website or an advertising campaign?
            We can plan the shoot around those layouts and messages so the
            images fit the rest of your project.
          </p>
          <p>
            You don’t need a finished shot list to get started. Bring your ideas,
            examples you like, or a description of what you want people to see.
          </p>
        </div>
      </section>

      <section
        className={`website-deliverables service-included ${styles.included}`}
        aria-labelledby="photography-included-title"
      >
        <header className="website-deliverables-intro">
          <p className="kicker">What’s included</p>
          <h2 id="photography-included-title">Your story, captured and ready to share.</h2>
          <p>
            Your agreed photography project includes shoot planning, the booked
            coverage, image selection and agreed editing, and digital delivery
            shaped around the way you’ll use your photos.
          </p>
        </header>
        <ul className="website-deliverables-grid" role="list">
          {photographyInclusions.map(({ title, copy }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta} aria-labelledby="photography-cta-title">
        <div>
          <p className="kicker">Ready when you are</p>
          <h2 id="photography-cta-title">Let’s make the next step clear.</h2>
        </div>
        <Link className="button" href="/contact">
          Book a consultation <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </section>
      <CreatorCredit />
    </main>
  );
}
