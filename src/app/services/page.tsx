import Link from "next/link";
import {
  ArrowRightLeft,
  BriefcaseBusiness,
  FileChartColumnIncreasing,
  LayoutTemplate,
  MessagesSquare,
  MonitorCog,
  PanelsTopLeft,
} from "lucide-react";
import { services } from "../content";
import { Collage } from "../site-chrome";

const serviceIcons = {
  "strategy-session": MessagesSquare,
  "brand-advertising-plan": FileChartColumnIncreasing,
  "business-consulting": BriefcaseBusiness,
  "website-support": MonitorCog,
  "website-transfer": ArrowRightLeft,
  "single-page-website": LayoutTemplate,
  "five-page-website": PanelsTopLeft,
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
        <Collage images={["/work/906381761516109.jpg", "/work/837501851737434.jpg", "/work/985893490231602.jpg", "/work/1426596552827958.jpg"]} />
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
                {service.deliverables.slice(0, 2).map((point) => (
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
