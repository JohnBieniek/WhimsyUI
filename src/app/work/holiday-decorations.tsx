import { CandyCane, Gift, Snowflake, Sparkles, TreePine } from "lucide-react";
import styles from "./holiday-decorations.module.css";

type HolidayVariant = "intro" | "invitation" | "partners" | "heading" | "live" | "thanks";

function Snowman({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
    <path d="M23 18a11 11 0 1 0 18 0M23 17V7h18v10M18 17h28" />
    <path d="M23 36a18 18 0 1 0 18 0M22 34q10 7 20 0M35 38v11h5V37" />
    <path d="m14 49-10-9m4 4v-8m0 8-6 1m48 4 10-9m-4 4v-8m0 8 6 1M32 27l8 2-8 2" />
    <g fill="currentColor" stroke="none"><circle cx="28" cy="25" r="1.3" /><circle cx="36" cy="25" r="1.3" /><circle cx="32" cy="53" r="1.5" /><circle cx="32" cy="61" r="1.5" /></g>
  </svg>;
}

export default function HolidayDecorations({ variant }: { variant: HolidayVariant }) {
  const Character = variant === "invitation" || variant === "partners" ? TreePine : Snowman;
  const Accent = variant === "invitation" || variant === "thanks" ? CandyCane : Gift;
  return <div className={`${styles.decorations} ${styles[variant]}`} aria-hidden="true">
    <Snowflake className={styles.snowflakeOne} strokeWidth={1} focusable="false" />
    <Snowflake className={styles.snowflakeTwo} strokeWidth={1} focusable="false" />
    {variant !== "heading" && <>
      <Character className={styles.character} strokeWidth={1} focusable="false" />
      <Accent className={styles.accent} strokeWidth={1} focusable="false" />
    </>}
    <Sparkles className={styles.sparkles} strokeWidth={1} focusable="false" />
    {variant === "thanks" && <TreePine className={styles.tree} strokeWidth={1} focusable="false" />}
  </div>;
}
