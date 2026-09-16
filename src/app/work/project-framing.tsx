import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import styles from "./project-framing.module.css";

export function MobileHeadingText({ lines, size = "min(30px, 5.4cqw)" }: { lines: string[]; size?: string }) {
  return <span className={styles.mobileLines} style={{ "--mobile-heading-size": size } as CSSProperties}>
    {lines.map((line, index) => <span key={line}>{index > 0 ? " " : ""}{line}</span>)}
  </span>;
}

export function ProjectHeader({ title, description, children, mobileTitleLines, mobileTitleSize }: { title: string; description: string; children?: ReactNode; mobileTitleLines?: string[]; mobileTitleSize?: string }) {
  return <header className={styles.header}>
    <h1 className={styles.title}>{mobileTitleLines ? <MobileHeadingText lines={mobileTitleLines} size={mobileTitleSize ?? "min(50px, 8cqw)"} /> : title}</h1>
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
