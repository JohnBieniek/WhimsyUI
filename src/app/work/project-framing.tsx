import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./project-framing.module.css";

export function ProjectHeader({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    {children}
  </header>;
}

export function ProjectCallToAction() {
  return <section className={`ready ${styles.cta}`}>
    <h2 className={styles.title}>Have a campaign in mind?</h2>
    <p className={styles.description}>Let’s build something useful for your audience and your community.</p>
    <Link className="button" href="/contact">Start a conversation →</Link>
  </section>;
}
