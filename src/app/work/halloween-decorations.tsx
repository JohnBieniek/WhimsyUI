import { Candy, Ghost, MoonStar, Sparkles } from "lucide-react";
import styles from "./halloween-decorations.module.css";

type HalloweenVariant = "intro" | "activities" | "shopping" | "event" | "value";

function Pumpkin({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M32 17c-10-9-24 0-24 18 0 16 12 24 24 19 12 5 24-3 24-19 0-18-14-27-24-18Z" />
    <path d="M29 15c-1-6 2-11 9-11l-3 11M22 18c-6 9-8 25-1 35M42 18c6 9 8 25 1 35" />
    <path d="m24 28 5 7h-9Zm16 0 4 7h-9ZM23 42l5 4 4-3 4 3 5-4" />
  </svg>;
}

function Bat({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 80 40" fill="currentColor" focusable="false">
    <path d="m40 14-5-7-3 9C23 6 13 3 3 6l5 16c5-6 11-4 14 3 4-4 9-2 12 6l6 6 6-6c3-8 8-10 12-6 3-7 9-9 14-3l5-16C67 3 57 6 48 16l-3-9Z" />
  </svg>;
}

export default function HalloweenDecorations({ variant }: { variant: HalloweenVariant }) {
  return <div className={`${styles.decorations} ${styles[variant]}`} aria-hidden="true">
    <Pumpkin className={styles.pumpkinOne} />
    <Pumpkin className={styles.pumpkinTwo} />
    <Ghost className={styles.ghost} strokeWidth={1} focusable="false" />
    <Candy className={styles.candy} strokeWidth={1} focusable="false" />
    <MoonStar className={styles.moon} strokeWidth={1} focusable="false" />
    <Bat className={styles.bat} />
    <Sparkles className={styles.sparkles} strokeWidth={1} focusable="false" />
  </div>;
}
