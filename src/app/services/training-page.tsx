import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FolderOpen, MessageCircle, MousePointer2, Palette, Send, Sparkles } from "lucide-react";
import { CreatorCredit } from "../creator-credit";
import { StandardPrice } from "../standard-price";
import { trainingServices, type Training } from "./training-data";
import { trainingEditorial } from "./training-editorial";
import styles from "./training.module.css";

export function TrainingPage({ training }: { training: Training }) {
  const companion = trainingServices.find(item => item.slug !== training.slug)!;
  const content = trainingEditorial[training.slug as keyof typeof trainingEditorial];
  const isFacebook = training.slug === "facebook-meta-basics-training";
  const skillIcons = isFacebook ? [ClipboardCheck, MessageCircle, Send] : [FolderOpen, Palette, MousePointer2];
  return <main className={`shell ${styles.page} ${isFacebook ? "" : styles.canva}`} data-service={training.slug}>
    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <Link className="back-link" href="/services">← All services</Link>
        <StandardPrice price="$100/hour" />
        <h1><span>{content.platform}</span>{" "}<span>Basics Training</span></h1>
        <p className={styles.lead}>{content.lead}</p>
        <p>{content.introduction}</p>
        <p className={styles.sessionLength}>{training.hours} hours recommended <span aria-hidden="true">·</span> ${training.hours * 100} total</p>
        <Link className="button" href="/contact">Plan your training <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className={styles.heroVisual}>
        <Image src={content.hero} alt={content.heroAlt} width={1024} height={1024} preload sizes="(max-width: 900px) 100vw, 48vw" />
        <div className={styles.heroCaption}><Sparkles size={22} aria-hidden="true" /><span>Your business. Your content.<br /><strong>Hands-on from the first click.</strong></span></div>
      </div>
    </header>
    <section className={styles.workflow} aria-labelledby="training-workflow-title">
      <header><p className="kicker">How we work</p><h2 id="training-workflow-title">Learn it.<br />{" "}Put it to work.</h2></header>
      <ol>{content.steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    </section>
    <section className={styles.overview} aria-labelledby="training-overview-title">
      <article><p className="kicker">Training shaped around you</p><h2 id="training-overview-title">{content.overviewTitle}</h2>{content.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</article>
      <aside className={styles.preparation}><FolderOpen size={30} aria-hidden="true" /><p className="kicker">What to bring</p><h3>A little preparation.<br />More time for practice.</h3><ul>{content.preparation.map(item => <li key={item}>{item}</li>)}</ul><p>{content.preparationNote}</p></aside>
    </section>
    <section className={styles.skills} aria-labelledby="training-skills-title">
      <header><p className="kicker">Everyday skills, lasting confidence</p><h2 id="training-skills-title">{isFacebook ? "Make showing up feel simpler." : "Find your eye for good design."}</h2><p>{isFacebook ? "Build a routine around the tasks that matter to your business, from updating your page to answering a customer." : "Get comfortable with the tools and the choices behind a clear, consistent piece of marketing."}</p></header>
      <div className={styles.skillGrid}>{content.skills.map((skill, index) => {
        const Icon = skillIcons[index];
        return <article key={skill.title}><span className={styles.skillIcon}><Icon size={28} aria-hidden="true" /></span><h3>{skill.title}</h3><p>{skill.copy}</p><ul>{skill.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>;
      })}</div>
    </section>
    <section className={styles.project} aria-labelledby="training-project-title">
      <figure><div className={styles.projectImage}><Image src={content.projectImage} alt={content.projectAlt} width={1080} height={1080} sizes="(max-width: 900px) 100vw, 40vw" /></div><figcaption>{content.projectCaption}</figcaption></figure>
      <div><p className="kicker">Make something real</p><h2 id="training-project-title">{content.projectTitle}</h2><p>{content.projectCopy}</p><ul>{content.projectChecks.map(item => <li key={item}><Check size={19} aria-hidden="true" /><span>{item}</span></li>)}</ul><p className={styles.projectMotto}>{training.motto}</p></div>
    </section>
    <section className={`website-deliverables service-included ${styles.included}`} aria-labelledby="training-included-title">
      <header className="website-deliverables-intro"><p className="kicker">What’s included</p><h2 id="training-included-title">{content.promise}</h2><p>{training.intro}</p></header>
      <ul className="website-deliverables-grid" role="list">{training.outcomes.map(outcome => <li key={outcome.title}><h3>{outcome.title}</h3><p>{outcome.copy}</p>{outcome.items && <p className={styles.includedTools}>{outcome.items.join(" · ")}</p>}</li>)}<li><h3>A workflow you can repeat</h3><p>{isFacebook ? "Review the steps for creating your next post and fitting content planning into your week. Leave knowing where to find the tools you practiced." : "Review how to revisit your design, update the message, and export it for use. Leave with the confidence to build on the work in your own account."}</p></li></ul>
    </section>
    <section className={styles.bundle} aria-labelledby="training-bundle-title">
      <div><p className="kicker">Better together</p><h2 id="training-bundle-title">Create it in Canva.<br />Share it on Facebook.</h2><p>Connect the whole process, from organizing your brand and designing an advertisement to managing your page and preparing a finished Facebook post.</p><div className={styles.bundleBreakdown}><span><Palette size={20} aria-hidden="true" /> Canva · 3 hours</span><span><MessageCircle size={20} aria-hidden="true" /> Facebook &amp; Meta · 2 hours</span></div><Link className={styles.companionLink} href={`/services/${companion.slug}`}>Explore {companion.name} <ArrowRight size={17} aria-hidden="true" /></Link></div>
      <div className={styles.bundlePrice}><span className={styles.savings}>Save 10% when you book both</span><strong>$450<span> total</span></strong><p>5 hours of combined training<br />Regular combined price: $500 · Save $50</p><Link className="button" href="/contact">Book the combined package <ArrowRight size={17} aria-hidden="true" /></Link></div>
    </section>
    <section className={styles.faq} aria-labelledby="training-faq-title"><header><p className="kicker">Before we get started</p><h2 id="training-faq-title">A few useful answers.</h2><p>{training.goal}</p></header><div>{content.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}{!isFacebook && <p className={styles.toolNote}>Feature access depends on your Canva account. <a href="https://www.canva.com/features/background-remover/" target="_blank" rel="noopener noreferrer">See Canva’s Background Remover options.</a></p>}</div></section>
    <section className={styles.cta}><div><p className="kicker">Bring your questions. Bring your business.</p><h2>Let’s build your confidence.</h2></div><Link className="button" href="/contact">Book a consultation <ArrowRight size={18} aria-hidden="true" /></Link></section>
    <CreatorCredit />
  </main>;
}
