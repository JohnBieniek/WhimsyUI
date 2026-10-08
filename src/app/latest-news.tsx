"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import styles from "./latest-news.module.css";

type NewsMedia = { src: string; alt: string; kind: "image" | "video"; poster?: string };
export type NewsArticle = { id: string; date: string; dateLabel: string; body: ReactNode; media: [NewsMedia, ...NewsMedia[]] };

// Keep articles newest first. Add media in its intended playback order.
const articles: NewsArticle[] = [{
  id: "wake-up-jackson-2026-10-08",
  date: "2026-10-08",
  dateLabel: "October 8, 2026",
  body: <>
    <p>Had a great morning speaking with the <a href="https://www.linkedin.com/company/jackson-county-chamber-of-commerce-mi-/" target="_blank" rel="noopener noreferrer"><strong>Jackson County Chamber of Commerce</strong></a> at &quot;Wake Up Jackson&quot; on behalf of The Jackson Crossing Mall and our non-profit highlight <a href="https://www.linkedin.com/company/cascadeshumanesociety/" target="_blank" rel="noopener noreferrer"><strong>Cascades Humane Society</strong></a>! We got to discuss our work creating an event space at the Cross Mall, hosting the Jackson County Student Art show, and more!</p>
    <p>We&apos;re so proud to share the amazing things we’ve accomplished in these halls over the years. Thank you to our community and our wonderful hosts this morning!</p>
  </>,
  media: [
    { kind: "video", src: "/work/Wake%20Up%20Jackson%20video.mp4", alt: "Speaking at Wake Up Jackson", poster: "/work/Wake%20Up%20Jackson%201.jpg" },
    ...[1, 2, 3].map(number => ({ kind: "image" as const, src: `/work/Wake%20Up%20Jackson%20${number}.jpg`, alt: `Wake Up Jackson community gathering, photo ${number}` })),
  ],
}];

function ArticleMedia({ media, paused, onManualChange }: { media: NewsArticle["media"]; paused: boolean; onManualChange: () => void }) {
  const [index, setIndex] = useState(0);
  const [hasAdvanced, setHasAdvanced] = useState(false);
  const current = media[index];

  useEffect(() => {
    if (paused || media.length < 2 || current.kind === "video") return;
    const timer = window.setTimeout(() => {
      setHasAdvanced(true);
      setIndex(previous => (previous + 1) % media.length);
    }, hasAdvanced ? 8000 : 5000);
    return () => window.clearTimeout(timer);
  }, [current.kind, index, hasAdvanced, media.length, paused]);

  function advanceVideo() {
    if (paused || media.length < 2) return;
    setHasAdvanced(true);
    setIndex(previous => (previous + 1) % media.length);
  }

  function navigate(direction: number) {
    onManualChange();
    setIndex(previous => (previous + direction + media.length) % media.length);
  }

  return <div className={styles.media} role="group" aria-label="Article photos and video">
    <div className={styles.frame}>
      {current.kind === "video"
        ? <video key={current.src} src={current.src} poster={current.poster} aria-label={current.alt} autoPlay muted playsInline controls preload="metadata" onEnded={advanceVideo} />
        : <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(max-width: 760px) calc(100vw - 56px), 50vw" />}
      {media.length > 1 && <>
        <button type="button" className={`${styles.mediaArrow} ${styles.previous}`} aria-label="Previous image or video" onClick={() => navigate(-1)}><ChevronLeft aria-hidden="true" /></button>
        <button type="button" className={`${styles.mediaArrow} ${styles.next}`} aria-label="Next image or video" onClick={() => navigate(1)}><ChevronRight aria-hidden="true" /></button>
      </>}
    </div>
    {media.length > 1 && <p className={styles.mediaCount}>{index + 1} / {media.length}</p>}
  </div>;
}

export function LatestNews({ items = articles }: { items?: NewsArticle[] }) {
  const [articleIndex, setArticleIndex] = useState(0);
  const [rotationPaused, setRotationPaused] = useState(false);
  const article = items[articleIndex];
  if (!article) return null;

  return <section className={`${styles.section} shell`} aria-labelledby="latest-news-heading">
    <header className={styles.header}>
      <h2 id="latest-news-heading">The Latest from Whimsy</h2>
      <time dateTime={article.date}>{article.dateLabel}</time>
    </header>
    <div className={styles.content}>
      <ArticleMedia key={article.id} media={article.media} paused={rotationPaused} onManualChange={() => setRotationPaused(true)} />
      <div className={styles.copy}>{article.body}</div>
    </div>
    {items.length > 1 && <nav className={styles.articleNav} aria-label="Latest articles">
      <button type="button" disabled={articleIndex === 0} onClick={() => setArticleIndex(index => index - 1)}><ChevronLeft aria-hidden="true" /> More recent article</button>
      <button type="button" disabled={articleIndex === items.length - 1} onClick={() => setArticleIndex(index => index + 1)}>Previous article <ChevronRight aria-hidden="true" /></button>
    </nav>}
  </section>;
}
