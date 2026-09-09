import Image from "next/image";

export function PagesCmsCard() {
  return <section className="pages-cms-card" aria-labelledby="pages-cms-title">
    <header>
      <p className="kicker">Easy updates, included</p>
      <h2 id="pages-cms-title">We build it. You can keep it up to date.</h2>
      <p>Once your website is up, you can edit it yourself without any software development knowledge. We set you up with <a href="https://pagescms.org/">Pages CMS</a>, a free content management system. That simply means a place to change the words, pictures, and business details on your website.</p>
      <p>Think of it like filling in a form. Update your hours, change a price, replace a photo, or add an announcement in the sections we prepare for you. Your website keeps the design we built while you keep the information fresh.</p>
    </header>
    <figure>
      <a href="/Pages%20CMS.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Pages CMS screenshot at full size">
        <Image src="/Pages%20CMS.png" alt="Pages CMS showing a menu of website sections, editable slideshow photos, image descriptions, and a Save button" width={3670} height={1494} sizes="(max-width: 700px) 100vw, 90vw" />
      </a>
      <figcaption>A real example: choose a section on the left, change its photos or words, and save. Select the image for a closer look.</figcaption>
    </figure>
    <ol className="pages-cms-steps">
      <li><h3>Sign in</h3><p>Open the editor link we give you in your web browser. We help you get access and show you around before handing over the site.</p></li>
      <li><h3>Make your changes</h3><p>Choose a section, type into the labeled boxes, or upload a photo. You do not need to install software or write code.</p></li>
      <li><h3>Save and check</h3><p>Click Save. We connect the editor to your website so saved updates can publish automatically. Give the site a moment to update, then open it to check your changes.</p></li>
    </ol>
    <p className="pages-cms-note"><strong>Your everyday edits are free.</strong> There is no monthly Pages CMS subscription and no need to pay us each time you change your content. We include a walkthrough and follow-up email support. Want a new layout or extra features later? We can help with those separately.</p>
  </section>;
}
