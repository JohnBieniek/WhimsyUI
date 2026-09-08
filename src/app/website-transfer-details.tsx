import Link from "next/link";

export function WebsiteTransferOverview() {
  return <>
    <p>We begin with a complete inventory of your website: pages, menus, images, downloads, contact forms, booking tools, payment links, and other features. Together, we confirm what needs to stay, what needs updating, and how the replacement will work. Keeping your existing pages and functionality is part of the plan, not something left until launch day.</p>
    <p>Moving away from Wix or a similar closed website builder can mean rebuilding the site rather than copying its files. We recreate your content and layouts and reconnect the tools your customers use. If a platform-specific feature needs a replacement, we explain the options and agree on the solution and any additional cost before starting.</p>
    <p>You keep your existing domain name. We connect it to the new site by updating its routing settings, check the security certificate, and preserve existing page addresses wherever possible. Where an address changes, we add a redirect to send visitors to the right page. We also review your email settings so the website move does not accidentally disrupt business email.</p>
  </>;
}

export function WebsiteTransferHandoff() {
  return <section className="transfer-handoff" aria-labelledby="transfer-handoff-title">
    <header>
      <p className="kicker">After the move</p>
      <h2 id="transfer-handoff-title">Your website, with access and answers.</h2>
    </header>
    <div className="transfer-handoff-grid">
      <article>
        <h3>Full CMS access, on your terms</h3>
        <p>You get full access to our CMS and can make your own website content updates for free, without contacting or hiring us. We show you how to make changes and give you access to your transferred files and the accounts needed to manage the site, including hosting and analytics. Your domain remains under your control.</p>
        <p>Follow-up email support covers questions about the transfer and using your CMS. If you would like us to make edits for you or build additional features, paid help is optional and available through <Link href="/services/website-support">Website Support</Link>.</p>
      </article>
      <article>
        <h3>Understand how people use your site</h3>
        <p>We set up Cloudflare Web Analytics and show you how to open its dashboard. Think of it as a simple activity report: how many visits and page views your site receives, which pages get attention, which websites send people your way, and whether they visit on a phone, tablet, or computer.</p>
        <p>You can also see how quickly pages load for visitors. These trends help you decide what content to improve and where to focus your marketing. The reports show traffic patterns, not a list of named visitors or a guarantee that a visit became a sale. Ad blockers and browser settings can prevent some visits from being counted.</p>
        <p><a href="https://developers.cloudflare.com/web-analytics/">Learn about Cloudflare Web Analytics</a></p>
      </article>
    </div>
  </section>;
}
