import type { Metadata } from "next";
import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import WorkGallery from "./work-gallery";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Our Work | Software, Campaigns & Community | Whimsy",
  description: "Explore Whimsy’s websites, software, advertising, and community projects, including Lakeland Cabaret, Multiverse Adventurers Guild, Sonic Shielding, and Whimsy’s Warden.",
};

export default function WorkPage() {
  return (
    <main className={`inner-page shell ${styles.page}`}>
      <header className={styles.hero}>
        <p className="kicker">Our work</p>
        <h1>Ideas made real.<br />Work made useful.</h1>
        <div className={styles.heroCopy}>
          <p className={styles.intro}>We create ads that get your business noticed and give people a reason to visit, shop, or take part. Our consulting helps you clarify your goals, plan your next steps, and connect with your community. Explore that work alongside websites people can navigate and software that makes everyday tasks easier.</p>
        </div>
      </header>
      <section id="campaigns" className={styles.section} aria-labelledby="campaigns-title">
        <p className="kicker">Campaigns &amp; community</p>
        <h2 id="campaigns-title">Local stories. Shared experiences.</h2>
        <p className={styles.campaignIntro}>Twenty projects spanning holidays, community events, software, restaurants, and businesses. Explore four examples in each category to see the work behind the stories.</p>
        <WorkGallery />
      </section>
      <section className={styles.cta}>
        <div>
          <h2>Ready to get started?</h2>
          <p>Book a free consultation to discuss your goals and the right mix of services.</p>
        </div>
        <Link className="button" href="/contact">Book a consultation →</Link>
      </section>
      <CreatorCredit />
    </main>
  );
}
