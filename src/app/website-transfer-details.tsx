import Link from "next/link";

const subscriptionExamples = [
  { name: "Wix Light", monthly: "$17", yearly: "$204", note: "Entry paid website plan", href: "https://www.wix.com/blog/is-wix-free" },
  { name: "Squarespace Basic", monthly: "About $16", yearly: "About $192", note: "Entry paid website plan", href: "https://www.squarespace.com/pricing" },
  { name: "Canva Pro", monthly: "$15", yearly: "$180", note: "One person; also includes design tools", href: "https://www.canva.com/pricing/" },
  { name: "WordPress.com Personal", monthly: "$4", yearly: "$48", note: "Hosted WordPress.com plan", href: "https://wordpress.com/pricing/" },
  { name: "Webflow Premium", monthly: "$25", yearly: "$300", note: "Website plan with a content editor", href: "https://webflow.com/pricing" },
];

export function WebsiteTransferCosts() {
  return <section className="transfer-costs" aria-labelledby="transfer-costs-title">
    <header>
      <p className="kicker">Less to pay. Easy to manage.</p>
      <h2 id="transfer-costs-title"><span>Keep your website.</span>{" "}<span>Lose the builder subscription.</span></h2>
      <p>If you are paying Wix, Canva, Squarespace, WordPress.com, or Webflow just to keep your website online and make changes, we can help you move away from that recurring bill. Once your replacement is live, everyday content updates through Pages CMS are free. Choose a section, change the words or photos, and save.</p>
    </header>
    <div className="transfer-cost-highlight"><strong><span className="transfer-editor-desktop">$0 / month for your content editor</span><span className="transfer-editor-mobile">$0 / month for you editor</span></strong><p>The standard website transfer is a one-time $750 service. Pages CMS access and your own content edits have no subscription fee.</p></div>
    <div className="transfer-price-scroll" role="region" aria-label="Website subscription price comparison" tabIndex={0}>
      <table>
        <caption>Typical paid plans in USD, using annual billing. Monthly figures are the yearly cost divided by 12, not a month-to-month offer.</caption>
        <thead><tr><th scope="col">Service &amp; <span className="transfer-plan-detail">example </span>plan</th><th scope="col">Per month</th><th scope="col">Per year</th></tr></thead>
        <tbody>
          {subscriptionExamples.map((plan) => <tr key={plan.name}><th scope="row"><a href={plan.href}>{plan.name}</a><span>{plan.note}</span></th><td>{plan.monthly}</td><td>{plan.yearly}</td></tr>)}
          <tr className="transfer-price-free"><th scope="row"><a href="https://pagescms.org/">Your Pages CMS editor</a><span>Included with your Whimsy website</span></th><td>$0</td><td>$0</td></tr>
        </tbody>
      </table>
    </div>
    <p className="transfer-price-note">Price examples reviewed September 9, 2026. Follow each plan link for current pricing; location, taxes, promotions, and renewals can change your bill. These packages include different features. Free plans also exist, including Canva Free; moving a free site does not create subscription savings.</p>
    <div className="transfer-cost-details">
      <article><h3>What could you save?</h3><p>Replacing a $17-a-month website plan removes $204 a year in subscription charges. Against the $750 transfer price, that is roughly 44 months to recover the transfer cost through that subscription alone, before any other costs. Higher monthly bills can mean a quicker payback.</p></article>
      <article><h3>What might you still pay for?</h3><p>Your domain name still needs renewing. However, that cost will be the same or lower than if you stay with your old provider. We confirm hosting costs and any paid email, booking, shop, or other tools before the move; free hosting can suit a straightforward business website. Optional work you ask us to do is separate. We help you check what can be canceled after launch so you keep the services you still use.</p></article>
    </div>
  </section>;
}

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
        <p>You get full access to our Content Management System and can make your own website content updates for free, without contacting or hiring us. We show you how to make changes and give you access to your transferred files and the accounts needed to manage the site, including hosting and analytics. Your domain remains under your control.</p>
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
