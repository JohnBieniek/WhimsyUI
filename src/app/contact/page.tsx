import Image from "next/image";
import ContactForm from "../contact-form";
import { Partners } from "../site-chrome";

export default function ContactPage() {
  return (
    <main className="inner-page shell contact-page">
      <section className="page-hero compact contact-hero">
        <div>
          <p className="kicker">Contact</p>
          <h1>Tell us what you are trying to accomplish.</h1>
          <p className="intro">
            Tell us what you&apos;re working on and where you&apos;d like some
            help. We&apos;ll figure out the next step together.
          </p>
        </div>
        <Image
          className="contact-headshot"
          src="/headshot-tight.png"
          alt="Whimsy consultant"
          width={778}
          height={508}
          priority
          sizes="(max-width: 1050px) 100vw, 40vw"
        />
      </section>
      <section className="contact-layout">
        <ContactForm />
        <aside>
          <div className="panel checklist">
            <p className="kicker">Before you send</p>
            <p>To help us give you the best response, please include:</p>
            <ul>
              <li>What you’re trying to accomplish</li>
              <li>Who you’re trying to reach</li>
              <li>Your timeline</li>
              <li>Any must-haves or nice-to-haves</li>
              <li>Your budget range</li>
              <li>
                What you already have to work with, such as a website,
                branding, content, photos, or existing materials
              </li>
            </ul>
          </div>
          <div className="panel price-list">
            <p className="kicker">Fixed-price services</p>
            <p>Strategy Session <b>$300</b></p>
            <p>Business Consulting Session <b>$300</b></p>
            <p>Brand &amp; Advertising Plan <b>$1,000</b></p>
            <p>Website Support <b>$100/hour</b></p>
            <p>Domain Change &amp; Website Transfer <b>$750</b></p>
            <p>Single-Page Website <b>$750</b></p>
            <p>Five-Page Website <b>$2,500</b></p>
          </div>
        </aside>
      </section>
      <Partners />
    </main>
  );
}
