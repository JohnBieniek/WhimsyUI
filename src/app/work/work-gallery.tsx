"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getImageAlt } from "../image-alt";
import { caseStudies } from "../work-data";
import { softwareProjects } from "./software-projects";

const categories = ["All work", "Community events", "Advertising", "Media", "Brand support", "Software"];
const projects = [
  ...caseStudies.filter(item => item.category !== "Websites").map(item => ({
    ...item,
    image: `/work/${item.file}`,
    alt: getImageAlt(`/work/${item.file}`),
  })),
  ...softwareProjects.map(item => ({ ...item, category: "Software", client: item.kind })),
];

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
        <div><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, 25vw" style={item.category === "Software" ? { objectFit: "contain", background: "var(--mint)" } : undefined} /></div>
        <p className="tag">{item.category}</p>
        <h2>{item.title}</h2>
        <strong>{item.client}</strong>
        <p>{item.summary}</p>
        <Link href={`/work/${item.slug === "lakeland-website" ? "lakeland-cabaret" : item.slug}`}>View case study →</Link>
      </article>)}
    </section>
  </>;
}
