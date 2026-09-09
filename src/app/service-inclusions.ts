type ServiceInclusion = {
  title: [string, string];
  intro: string;
  items: { title: string; description: string }[];
};

export const serviceInclusions: Record<string, ServiceInclusion> = {
  "ad-campaign": {
    title: ["Four coordinated ads,", "ready to share."],
    intro: "We shape your supplied message and brand assets into a consistent campaign with a clear next step for your audience.",
    items: [
      { title: "Campaign preparation", description: "We review your audience, offer, approved copy, and brand assets, then confirm the formats and sizes for your chosen placements." },
      { title: "Four custom ad designs", description: "Four coordinated designs bring your campaign together with consistent visuals and clear calls to action." },
      { title: "Ready-to-use files", description: "Final digital files are prepared in the agreed formats and sizes so you can share them through your chosen channels." },
      { title: "Follow-up support", description: "We promote your ads on Whimsy's social channels and provide email support to help you use the finished artwork. Paid advertising spend is separate." },
    ],
  },
  "brand-advertising-plan": {
    title: ["Your next three months,", "ready to put into motion."],
    intro: "The $1,000 package connects the strategy, creative, and rollout in one practical handoff. We walk through the plan with you so your team knows how to use it. Leave with the confidence and materials you need to move forward successfully.",
    items: [
      { title: "Brand audit and audience profiles", description: "A review of your existing presence and a written summary of priority customer groups, their needs, buying questions, and the opportunities your campaign should address." },
      { title: "Unified message and brand guide", description: "A core company message for the next 90 days, supporting talking points, voice and tone guidance, and visual rules for logos, colors, fonts, imagery, and formatting." },
      { title: "Channel plan and campaign calendar", description: "Recommendations for your channel mix, each channel's role, and a three-month schedule connecting the ads to your offers, publishing responsibilities, and results to track." },
      { title: "12 custom digital ads", description: "Twelve coordinated ad designs, reviewed with you and delivered in the agreed formats and sizes for your campaign placements." },
      { title: "Whimsy website placements", description: "All 12 ads run on the Whimsy website during the three-month campaign, with timing and links coordinated around your plan." },
      { title: "Walkthrough and email support", description: "A practical walkthrough of the guides, calendar, and ad files, plus follow-up email support for questions as you use them." },
    ],
  },
  "website-support": {
    title: ["The work you need,", "with a clear handoff."],
    intro: "Support is billed at $100 per hour for the scope we agree together. Each request includes a clear plan, the agreed changes, and checks before handoff.",
    items: [
      { title: "Review and estimate", description: "We assess your requests and site access, agree on priorities, and outline the work and estimated time. Any paid tools or services needed are identified for your approval." },
      { title: "Agreed website changes", description: "We carry out the approved content edits, repairs, design improvements, or feature work within your existing setup, with updates on progress and any decisions needed." },
      { title: "Testing and publishing", description: "We check the affected links, forms, or features and review relevant desktop and mobile layouts. Publishing is coordinated with you, followed by checks on the live site." },
      { title: "Walkthrough and notes", description: "You receive a summary of the changes and checks, instructions for any new features, and details of any remaining issues or recommended next steps." },
    ],
  },
  "website-transfer": {
  "title": [
    "Your website, moved,",
    "checked, and handed over."
  ],
  "intro": "The agreed transfer includes your existing pages and functionality, basic content updates, domain setup, launch checks, and a practical handoff.",
  "items": [
    {
      "title": "Pages, features, and updates",
      "description": "Migrate or rebuild your existing pages and agreed functionality, with basic updates to current text and images. Any new pages, extra features, or larger redesigns are quoted separately."
    },
    {
      "title": "Same domain, checked connections",
      "description": "Connect your existing domain, configure DNS, review email settings, and check redirects, forms, and the live site after the move."
    },
    {
      "title": "Full CMS access and analytics",
      "description": "Full CMS access lets you update your website content yourself for free, without needing us. Website management accounts, Cloudflare Web Analytics setup, and a walkthrough of its reports are included."
    },
    {
      "title": "Launch and follow-up support",
      "description": "Review the replacement before switching over, verify the launch, and get follow-up email support for questions about the transfer."
    }
  ]
},
  "single-page-website": {
    title: ["One responsive page,", "built around your offer."],
    intro: "We turn your approved content and brand assets into a focused website that makes your offer and the next step easy to understand.",
    items: [
      { title: "Request and content review", description: "We review your goals, message, logo, photos, and content to organize the page around what visitors need to know." },
      { title: "Collaborative design", description: "We work with you to shape the layout and visual style around your goals, ideas, and brand, using your feedback to refine the design as we build." },
      { title: "One responsive page", description: "A complete page brings your content together in a layout designed for phones, tablets, and desktops. Full CMS access lets you keep that content up to date yourself for free, without needing us." },
      { title: "Email, analytics, and support", description: "Custom email addresses, website analytics to understand visitor activity, and follow-up email support help you put your new website to work." },
    ],
  },
};
