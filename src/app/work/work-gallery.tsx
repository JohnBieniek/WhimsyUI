"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { caseStudies } from "../content";

const categories = ["All work","Community events","Advertising","Media","Brand support","Websites"];
export default function WorkGallery(){
  const [active,setActive]=useState("All work");
  const shown=active==="All work"?caseStudies:caseStudies.filter(item=>item.category===active);
  return <><fieldset className="filters"><legend className="sr-only">Filter work by type</legend>{categories.map(category=><label key={category} className={active===category?"selected":""}><input type="radio" name="work-filter" value={category} checked={active===category} onChange={()=>setActive(category)}/><span>{category}</span></label>)}</fieldset><section className="portfolio-grid" aria-live="polite">{shown.map(item=><article key={item.slug}><div><Image src={`/work/${item.file}`} alt={`${item.title} campaign creative`} fill sizes="(max-width: 700px) 90vw, 25vw"/></div><p className="tag">{item.category}</p><h2>{item.title}</h2><strong>{item.client}</strong><p>{item.summary}</p><Link href={`/work/${item.slug}`}>View case study →</Link></article>)}</section></>;
}
