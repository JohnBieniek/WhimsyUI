import Link from "next/link";
import { CreatorCredit } from "../creator-credit";
import { trainingServices, type Training } from "./training-data";
import styles from "./training.module.css";

export function TrainingPage({ training }: { training: Training }) {
  const companion = trainingServices.find(item => item.slug !== training.slug)!;
  return <main className={`inner-page shell ${styles.page}`} data-service={training.slug}>
    <Link className="back-link" href="/services">← All services</Link>
    <header className={styles.hero}>
      <p className="kicker">WHIMSY · Hands-on business training</p>
      <h1>WHIMSY {training.name}</h1>
      <p className={styles.intro}>{training.intro}</p>
      <div className={styles.price}><strong>$100/hour</strong><span>Recommended: {training.hours} hours · ${training.hours * 100} total</span></div>
      <Link className="button" href="/contact">Book your training →</Link>
    </header>
    <section className={styles.outcomes} aria-labelledby="training-outcomes-title">
      <header><p className="kicker">Practical skills. Something ready to use.</p><h2 id="training-outcomes-title">What You’ll Walk Away With</h2><p>By the end of the training, you can expect to walk away with:</p></header>
      <div className={styles.grid}>{training.outcomes.map((outcome, index) => <article key={outcome.title}>
        <span className={styles.number} aria-hidden="true">0{index + 1}</span>
        <h3>{outcome.title}</h3><p>{outcome.copy}</p>
        {outcome.items && <ul>{outcome.items.map(item => <li key={item}>{item}</li>)}</ul>}
      </article>)}</div>
    </section>
    <section className={styles.goal} aria-labelledby="training-goal-title"><h2 id="training-goal-title">The Goal</h2><p>{training.goal}</p><strong>{training.motto}</strong></section>
    <section className={styles.bundle} aria-labelledby="training-bundle-title">
      <div><p className="kicker">Learn to create and share</p><h2 id="training-bundle-title">Combine both trainings and save 10%.</h2><p>Book Facebook &amp; Meta Basics Training and Canva Basics Training together: 2 hours of Facebook &amp; Meta plus 3 hours of Canva.</p><p><Link href={`/services/${companion.slug}`}>Explore {companion.name} →</Link></p></div>
      <div className={styles.bundlePrice}><strong>$450 total</strong><p>5 hours combined · Save $50<br />Regular combined price: $500</p><Link className="button" href="/contact">Book the combined package →</Link></div>
    </section>
    <CreatorCredit />
  </main>;
}
