import Link from "next/link";
import Image from "next/image";
import offsetSquareCollage from "../../../collage/offset square collage.png";
import offsetSquareCollageDesktop from "../../../collage/offset square collage desktop.png";
import {
  ArrowRightLeft,
  BriefcaseBusiness,
  FileChartColumnIncreasing,
  Files,
  LayoutTemplate,
  MessagesSquare,
  MonitorCog,
} from "lucide-react";
import { services } from "../content";

const serviceIcons = {
  "strategy-session": MessagesSquare,
  "brand-advertising-plan": FileChartColumnIncreasing,
  "business-consulting": BriefcaseBusiness,
  "website-support": MonitorCog,
  "website-transfer": ArrowRightLeft,
  "single-page-website": LayoutTemplate,
  "five-page-website": Files,
} as const;

export default function ServicesPage() {
  return (
    <main className="inner-page services-page shell">
      <section className="page-hero compact">
        <div>
          <p className="kicker">Services &amp; Pricing</p>
          <h1>Clear services.<br />Fixed prices.</h1>
          <p className="intro">
            Straightforward support helps local businesses and organizations move
            forward with confidence. You get clear pricing, practical guidance,
            and no surprises along the way. Every service combines thoughtful
            strategy, useful creativity, and reliable execution.
          </p>
        </div>
        <Image
          className="offset-square-collage offset-square-collage-mobile"
          src={offsetSquareCollage}
          alt="A collage of selected Whimsy campaign work"
          priority
          sizes="100vw"
        />
        <Image
          className="offset-square-collage offset-square-collage-desktop"
          src={offsetSquareCollageDesktop}
          alt="A collage of selected Whimsy campaign work"
          priority
          sizes="55vw"
        />
      </section>
      <section className="service-cards">
        {services.map((service) => {
          const Icon = serviceIcons[service.slug];

          return (
            <article key={service.slug}>
              <span className="service-icon" aria-hidden="true">
                <Icon />
              </span>
              <h2>{service.name}</h2>
              <strong>{service.price}</strong>
              <ul>
                {service.deliverables.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          );
        })}
        <aside className="panel extras">
          <p className="kicker">What costs extra</p>
          <h3>E-commerce</h3>
          <p>Online stores and payment processing.</p>
          <h3>Custom applications</h3>
          <p>Advanced features and integrations.</p>
          <h3>Copywriting</h3>
          <p>Custom writing beyond supplied content.</p>
          <h3>Paid ad spend</h3>
          <p>Ad budgets are managed separately.</p>
        </aside>
      </section>
      <section className="ready">
        <h2>Ready to get started?</h2>
        <p>
          Book a free consultation to discuss your goals and the right mix of
          services.
        </p>
        <Link className="button" href="/contact">
          Book a consultation →
        </Link>
      </section>
    </main>
  );
}
