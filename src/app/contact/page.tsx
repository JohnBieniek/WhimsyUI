const email = "Experiencewhimsy@gmail.com";

export default function ContactPage() {
  return (
    <main className="inner-page shell contact-page-simple">
      <section className="contact-card">
        <p className="kicker">Contact Whimsy</p>
        <h1>Let’s talk about what you need.</h1>
        <p className="intro">
          Reach out by email and tell us a little about your project. We’ll get
          back to you to talk through the details and next steps.
        </p>
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <div className="contact-needs">
          <h2>What to include</h2>
          <ul>
            <li>What you’re trying to accomplish</li>
            <li>Who you’re trying to reach</li>
            <li>Your ideal timeline</li>
            <li>Your budget range</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
