import Image from "next/image";

export function PagesCmsCard() {
  return <section className="pages-cms-card" aria-labelledby="pages-cms-title">
    <header>
      <p className="kicker">Easy updates, included</p>
      <h2 id="pages-cms-title">We build it. You can keep it up to date.</h2>
      <p>Once your website is up, you can edit it yourself without any software development knowledge. We set you up with <a href="https://pagescms.org/">Pages CMS</a>, a free website editor. <strong>CMS stands for Content Management System.</strong> That simply means a place to change the words, pictures, and business details on your website.</p>
      <p>Think of it like filling in a form. Update your hours, change a price, replace a photo, or add an announcement in the sections we prepare for you. Your website keeps the design we built while you keep the information fresh.</p>
      <p><strong>You will have a seperate beta copy of your website to test your changes.</strong> This is a practice version with its own link. You can publish changes there first, see how they look, and check photos, links, and page layouts before your customers see them. When you are happy, you can promote those changes to your live website, the real version your customers visit. Your live site stays as it is until you choose to publish the checked changes. We show you how to use both copies and move changes from beta to live.</p>
    </header>
    <figure>
      <div className="pages-cms-images">
        <a href="/Pages%20CMS.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Pages CMS photo editor screenshot at full size">
          <Image src="/Pages%20CMS.png" alt="Pages CMS showing a menu of website sections, editable slideshow photos, image descriptions, and a Save button" width={2165} height={1494} sizes="(max-width: 700px) 100vw, 42vw" />
        </a>
        <a href="/Pages%20CMS%202.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Pages CMS service editor screenshot at full size">
          <Image src="/Pages%20CMS%202.png" alt="Pages CMS service editor with labeled fields for Music & DJ and Fire Performance titles, descriptions, and details" width={2087} height={1494} sizes="(max-width: 700px) 100vw, 42vw" />
        </a>
      </div>
      <figcaption>Real examples: choose a section on the left, change its photos or words, and save. Select either image for a closer look.</figcaption>
    </figure>
    <ol className="pages-cms-steps">
      <li><h3>Sign in</h3><p>Open the editor link we give you in your web browser. We help you get access and show you around before handing over the site.</p></li>
      <li><h3>Edit and test on beta</h3><p>Select your beta copy, choose a section, then type into the labeled boxes or upload a photo. Save to publish to the beta site first. Open its link to check your changes and make any adjustments. You do not need to install software or write code.</p></li>
      <li><h3>Publish when you are ready</h3><p>Once everything looks good on beta, follow the steps we show you to promote your changes to the live site. Give it a moment to update, then open your usual website address to check the finished result.</p></li>
    </ol>
    <p className="pages-cms-note"><strong>Your everyday edits are free.</strong> There is no monthly Pages CMS subscription and no need to pay us each time you change your content. We include a walkthrough and follow-up email support. Want a new layout or extra features later? We can help with those separately.</p>
  </section>;
}
