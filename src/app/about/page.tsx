import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ClipboardList, Megaphone, Monitor, Palette, Wrench } from "lucide-react";
import aboutCollage from "../../../collage/about collage.png";
import { CreatorCredit } from "../creator-credit";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Whimsy | Our People, Our Work & Jackson County",
  description: "Founded by Kay Pickett, Whimsy helps Jackson-area businesses and nonprofits with consulting, campaigns, media, events, and websites while giving back across the county.",
};

const offerings = [
  {
    title: "Business consulting",
    Icon: ClipboardList,
    copy: "A practical outside perspective on growth, operations, partnerships, and the decisions ahead. We help you set priorities and leave with a plan you can use.",
    links: [{ label: "Consulting sessions", href: "/services/business-consulting-session" }],
  },
  {
    title: "Branding & strategy",
    Icon: Palette,
    copy: "Brand audits, audience research, a clear message, visual direction, and advertising plans that connect your goals to the right channels and a realistic calendar.",
    links: [{ label: "Brand & advertising plans", href: "/services/brand-advertising-plan" }],
  },
  {
    title: "Advertising & campaigns",
    Icon: Megaphone,
    copy: "Coordinated ads, social content, and promotions for products, openings, fundraisers, and events. From a set of four ads to a larger campaign, we bring the message together.",
    links: [{ label: "Ad campaigns", href: "/services/ad-campaign" }],
  },
  {
    title: "Media & events",
    Icon: Camera,
    copy: "Photography, video, business stories, media coordination, and event planning and promotion. We help you introduce the people behind your organization and bring your community together.",
    links: [{ label: "Talk about your project", href: "/contact" }],
  },
  {
    title: "Websites & applications",
    Icon: Monitor,
    copy: "Single-page sites, full business and nonprofit websites, online stores, and custom applications. We connect clear content and thoughtful design with the features your visitors need.",
    links: [
      { label: "Single-page websites", href: "/services/single-page-website" },
      { label: "Five-page websites", href: "/services/five-page-website" },
    ],
  },
  {
    title: "Website care & transfers",
    Icon: Wrench,
    copy: "Content updates, technical fixes, accessibility improvements, and new features. We also move websites and domains and help your team manage the content after launch.",
    links: [
      { label: "Website support", href: "/services/website-support" },
      { label: "Website transfers", href: "/services/website-transfer" },
    ],
  },
];

const communityWork = [
  {
    name: "Grow Jackson & River & Rail",
    image: "/about/grow-jackson-volunteering.jpg",
    alt: "Community Impact Day volunteers shoveling mulch at Grow Jackson and River & Rail.",
    position: "center 68%",
    copy: "During Community Impact Day, we joined other local volunteers to work on plant beds, mulch, and compost, lending a hand to the people growing Jackson’s local food community.",
  },
  {
    name: "Serenity Sober Living House",
    image: "/about/serenity-volunteering.jpg",
    alt: "Kay taking a group selfie with fellow Community Impact Day participants outside Serenity Sober Living House.",
    position: "center 30%",
    copy: "We weeded, planted flowers, edged garden beds, helped build a fire pit, and cleared a patio as part of the Jackson County Chamber of Commerce’s Community Impact Day.",
  },
  {
    name: "Jackson County Airport",
    image: "/Airport%20voltuneering/signal-2026-09-13-08-56-21-708-4.jpg",
    alt: "Two volunteers in yellow Jackson County Airport Open House shirts smiling together under a blue canopy.",
    position: "center 65%",
    copy: "Our team also volunteers at the Jackson County Airport Open House. Giving our time to local events is another way we stay involved with the people and places that make this county home.",
  },
];

export default function AboutPage() {
  return (
    <main className={`inner-page shell about-page ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div>
          <p className="kicker">About Whimsy</p>
          <h1 id="about-title">Local people.<br />Creative partners.</h1>
          <p className={styles.intro}>
            We’re Whimsy, a consulting, media, and marketing team rooted in
            Jackson, Michigan. Started by Kay Pickett, we help businesses and
            nonprofits tell their stories, reach more people, and turn good
            ideas into work that makes a difference.
          </p>
          <p>
            From websites and advertising campaigns to community events and
            hands-on volunteering, we’re invested in the place we call home.
          </p>
          <Link className="button" href="/contact">
            Let’s work together <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <Image
          className={styles.collage}
          src={aboutCollage}
          alt="Whimsy team portraits surrounding a group photo of volunteers at the Jackson County Airport Open House."
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1050px) 100vw, 58vw"
        />
      </section>

      <section className={styles.story} aria-labelledby="our-story-title">
        <div>
          <p className="kicker">Our story</p>
          <h2 id="our-story-title">Started by Kay.<br />Connected to Jackson.</h2>
          <p>
            Kay Pickett founded Whimsy and brings a background in community
            relations, advertising, and the arts to our work. Connecting people,
            understanding what an organization needs, and finding a creative way
            to share its story are at the heart of that approach.
          </p>
          <a className={styles.textLink} href="https://www.linkedin.com/in/kay-pickett">
            Get to know Kay on LinkedIn <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
        <div>
          <p className="kicker">The organizations beside us</p>
          <h2>Good work, all around town.</h2>
          <p>
            We’ve made websites, campaigns, and creative materials for businesses,
            nonprofits, and community organizations throughout the Jackson area.
            Our work spans shops and restaurants, local makers, real estate,
            entertainment, and organizations serving our neighbors.
          </p>
          <p>
            That includes advertising and events with Jackson Crossing, branding
            and a website for Lakeland Cabaret, and creative support for Fetch
            Market &amp; Deli, Dawn Parker, and Sisters Smoothies. We’ve also
            worked with Serenity Sober Living House on consulting and brand
            support, and helped promote Huntington’s disease awareness with
            HDSA partners.
          </p>
        </div>
      </section>

      <section className={styles.team} aria-labelledby="team-title">
        <div className={styles.teamIntro}>
          <p className="kicker">Our team</p>
          <h2 id="team-title">Different skills.<br />One shared purpose.</h2>
          <p>
            Our team brings together the planning, creative, and technical work
            that helps your organization move forward. Here’s how those pieces
            fit together.
          </p>
        </div>
        <div className={styles.roles}>
          <article>
            <h3>Strategy &amp; relationships</h3>
            <p>Understanding your goals, shaping the plan, and coordinating the people and partnerships that make it possible.</p>
          </article>
          <article>
            <h3>Creative &amp; media</h3>
            <p>Developing the visuals, photography, content, and campaigns that give your story a recognizable voice.</p>
          </article>
          <article>
            <h3>Web &amp; technical support</h3>
            <p>Building and maintaining websites, solving technical problems, and making your online presence easier to use.</p>
          </article>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="offerings-title">
        <header className={styles.sectionHeader}>
          <div>
            <p className="kicker">What we do</p>
            <h2 id="offerings-title">From the first idea to the everyday details.</h2>
          </div>
          <Link className={styles.textLink} href="/services">
            Services &amp; pricing <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </header>
        <div className={styles.serviceGrid}>
          {offerings.map(({ title, Icon, copy, links }) => (
            <article key={title}>
              <span className={styles.icon}><Icon aria-hidden="true" size={25} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className={styles.serviceLinks}>
                {links.map(({ label, href }) => (
                  <Link className={styles.textLink} href={href} key={href}>
                    {label} <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.community} aria-labelledby="community-title">
        <header className={styles.communityHeader}>
          <div>
            <p className="kicker">Giving back</p>
            <h2 id="community-title">Part of the community.<br />Happy to lend a hand.</h2>
          </div>
          <p>
            Jackson County is where we work, build relationships, and volunteer.
            You’ll find us pitching in at local events and working alongside
            community organizations. Sometimes that means bringing a camera;
            sometimes it means picking up a shovel.
          </p>
        </header>
        <div className={styles.communityGrid}>
          {communityWork.map(({ name, image, alt, position, copy }) => (
            <article key={name}>
              <div className={styles.communityImage}>
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  style={{ objectPosition: position }}
                />
              </div>
              <div className={styles.communityCopy}>
                <h3>{name}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="about-cta-title">
        <p className="kicker">Let’s make something happen</p>
        <h2 id="about-cta-title">Your next idea could start here.</h2>
        <p>
          Growing a business, supporting a cause, or planning something for the
          community? Tell us what you have in mind. We offer free consultations
          to help you find the right next step.
        </p>
        <Link className="button" href="/contact">
          Book a free consultation <ArrowRight aria-hidden="true" size={17} />
        </Link>
      </section>
      <CreatorCredit />
    </main>
  );
}
