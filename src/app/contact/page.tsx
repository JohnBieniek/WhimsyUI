import Image from "next/image";
import ContactForm from "../contact-form";
import { Partners } from "../site-chrome";
import { CreatorCredit } from "../creator-credit";

export default function ContactPage() {
  return (
    <main className="inner-page shell contact-page">
      <section className="contact-page-grid">
        <div className="contact-primary">
          <div className="contact-intro">
            <p className="kicker">Contact</p>
            <h1>Tell us what you are trying to accomplish.</h1>
            <p className="intro">
              Tell us what you&apos;re working on and where you&apos;d like some
              help. We&apos;ll figure out the next step together.
            </p>
          </div>
          <ContactForm />
        </div>

        <aside className="contact-sidebar">
          <Image
            className="contact-headshot"
            src="/headshot-tight.png"
            alt="A smiling Whimsy consultant with shoulder-length blond hair against a pale blue background."
            width={778}
            height={508}
            priority
            sizes="(max-width: 1050px) 100vw, 40vw"
          />
          <div className="panel checklist">
            <p className="kicker">Before you send</p>
            <p>To help us give you the best response, please include:</p>
            <ul>
              <li>
                What you&apos;re trying to accomplish and who you&apos;re trying
                to reach.
              </li>
              <li>Your timeline and budget</li>
              <li>Any must-haves or nice-to-haves</li>
              <li>
                What you already have to work with, such as a website,
                branding, content, photos, or existing materials
              </li>
            </ul>
          </div>
          <div className="panel price-list">
            <p className="kicker">Fixed-price services</p>
            <p>Ad Campaign <b>$300</b></p>
            <p>Buisness consulting session <b>$300</b></p>
            <p>Brand &amp; Advertising Plan <b>$1,000</b></p>
            <p>Website Support <b>$100/hour</b></p>
            <p>Website Transfer <b>$750</b></p>
            <p>Single-Page Website <b>$750</b></p>
            <p>Five-Page Website <b>$2,500</b></p>
          </div>
        </aside>
      </section>
      <Partners />
      <CreatorCredit />
    </main>
  );
}
