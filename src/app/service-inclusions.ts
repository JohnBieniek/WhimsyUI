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
      { title: "Follow-up support", description: "Email support helps you use the finished artwork. Paid advertising spend and placement are separate from the design package." },
    ],
  },
  "brand-advertising-plan": {
    title: ["A clear brand direction,", "with a plan to promote it."],
    intro: "We connect your message, audience, and channels in a practical 90-day promotion plan built around your budget and capacity.",
    items: [
      { title: "Brand and message audit", description: "We review your existing brand, messaging, and marketing efforts to identify strengths, gaps, and the clearest way to explain your value." },
      { title: "Audience and channel strategy", description: "Recommendations identify who to reach and how your channels can work together as a coordinated, omnichannel strategy." },
      { title: "90-day advertising plan", description: "A promotion plan sets out campaign priorities, recommended channels, and timing for the next three months." },
      { title: "Style guide and support", description: "A marketing brand style guide helps keep your visuals and voice consistent, with follow-up email support as you put the plan into use." },
    ],
  },
  "website-support": {
    title: ["Practical website help,", "where you need it."],
    intro: "We review your requests, agree on priorities and estimated time, and complete the updates within the approved hourly scope.",
    items: [
      { title: "Content and design updates", description: "Refresh text, images, layouts, and other existing content so your site stays accurate and useful." },
      { title: "Technical fixes", description: "Investigate and resolve the agreed website issues. We work with any programming language and review your existing setup before estimating the work." },
      { title: "Features and accessibility", description: "Implement agreed feature requests and accessibility improvements that help people navigate and use your website." },
      { title: "Completion notes", description: "A clear handoff explains what changed, what was checked, and any remaining work or recommended next steps." },
    ],
  },
  "website-transfer": {
    title: ["A carefully managed move,", "with the details checked."],
    intro: "We prepare your website transfer, coordinate the move, and verify that the important paths still work when it is complete.",
    items: [
      { title: "Domain and DNS setup", description: "Review your current configuration and update the domain and DNS settings needed for the agreed destination." },
      { title: "Redirect and form checks", description: "Check key redirects and forms so visitors can reach the right pages and continue contacting your business." },
      { title: "Updates and launch verification", description: "Complete basic website updates included in the transfer and verify the site at its new destination." },
      { title: "Follow-up support", description: "Email support helps answer questions about the completed move and the updated website setup." },
    ],
  },
  "single-page-website": {
    title: ["One responsive page,", "built around your offer."],
    intro: "We turn your approved content and brand assets into a focused website that makes your offer and the next step easy to understand.",
    items: [
      { title: "Request and content review", description: "We review your goals, message, logo, photos, and content to organize the page around what visitors need to know." },
      { title: "Three design choices", description: "Three custom design choices give you a clear direction to select before we build the finished page." },
      { title: "One responsive page", description: "A complete page brings your content together in a layout designed for phones, tablets, and desktops." },
      { title: "Email and follow-up support", description: "Custom email addresses and follow-up email support help you put your new website to work." },
    ],
  },
};
