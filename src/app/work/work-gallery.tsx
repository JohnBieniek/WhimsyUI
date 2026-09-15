"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImageAlt } from "../image-alt";
import { caseStudies } from "../work-data";
import { softwareProjects } from "./software-projects";
import { selectedWork, workCategories } from "./portfolio-selection";
import { archiveStories } from "./archive-stories";
import styles from "./work.module.css";

const categories = ["All work", ...workCategories];
const galleryThumbnails: Partial<Record<string, { image: string; alt: string }>> = {
  malloween: {
    image: "/mall%20o%20week%20initial.jpg",
    alt: "Visitors gathering around a costumed DJ at a Halloween-decorated booth during Malloween.",
  },
};
const availableProjects = [
  ...caseStudies.filter(item => item.category !== "Websites").map(item => ({
    ...item,
    title: archiveStories[item.slug]?.title ?? item.title,
    summary: archiveStories[item.slug]?.summary ?? item.summary,
    image: galleryThumbnails[item.slug]?.image ?? (archiveStories[item.slug] ? `/work/archive/${archiveStories[item.slug].hero[0]}.jpg` : `/work/${item.file}`),
    alt: galleryThumbnails[item.slug]?.alt ?? archiveStories[item.slug]?.hero[1] ?? getImageAlt(`/work/${item.file}`),
  })),
  ...softwareProjects.map(item => ({ ...item, image: item.thumbnail ?? item.image, category: "Software", client: item.kind })),
];
const projects = workCategories.flatMap(category => selectedWork[category].map(slug => {
  const project = availableProjects.find(item => item.slug === slug);
  if (!project) throw new Error(`Missing selected work project: ${slug}`);
  return { ...project, category, href: `/work/${project.slug === "lakeland-website" ? "lakeland-cabaret" : project.slug}` };
})).sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));

export default function WorkGallery() {
  const [active, setActive] = useState("All work");
  const shown = active === "All work" ? projects : projects.filter(item => item.category === active);
  return <>
    <fieldset className="filters">
      <legend className="sr-only">Filter work by type</legend>
      {categories.map(category => <label key={category} className={active === category ? "selected" : ""}>
        <input type="radio" name="work-filter" value={category} checked={active === category} onChange={() => setActive(category)} />
        <span>{category}</span>
      </label>)}
    </fieldset>
    <section className="portfolio-grid" aria-live="polite">
      {shown.map(item => <article key={item.slug}>
        <div>
          <Link className={`${styles.galleryImageLink}${item.slug === "lakeland-website" ? ` ${styles.lakelandThumbnail}` : ""}`} href={item.href} aria-label={`View ${item.title} case study`}>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 700px) 90vw, 25vw"
              style={item.category === "Software" && item.slug !== "lakeland-website"
                ? { objectFit: "contain", background: "var(--mint)" }
                : item.slug === "malloween"
                  ? { objectPosition: "center 35%" }
                  : item.slug === "alpha-koney-story" || item.slug === "valentines-at-jackson-crossing"
                    ? { objectPosition: "center 20%" }
                    : item.slug === "cascades-ribbon-cutting" || item.slug === "happy-harvest" || item.slug === "serenity-support" || item.slug === "welcome-home-organization"
                      ? { objectPosition: "center top" }
                      : undefined}
            />
          </Link>
        </div>
        <p className="tag">{item.category}</p>
        <h2>{item.title}</h2>
        <strong>{item.client}</strong>
        <p>{item.summary}</p>
        <Link href={item.href}>View case study →</Link>
      </article>)}
    </section>
  </>;
}
