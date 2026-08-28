type Category = "Community events" | "Advertising" | "Media" | "Brand support" | "Websites";

const projects: Record<Category, Array<[string,string,string,string,string]>> = {
  "Community events": [
    ["back-to-school-bash","1478820320938914.jpg","Back to School Bash","Jackson Crossing","A calm, low-stimulation school-year kickoff with backpacks, photos, library resources, and family activities."],
    ["student-art-show","1385435016944112.jpg","Jackson County Student Art Show","Jackson County Schools","A countywide gallery experience celebrating student work from more than 25 local schools."],
    ["community-day","1426596552827958.jpg","Community Day","Jackson Crossing","A partner-led gathering designed to connect local organizations with the families they serve."],
    ["santa-stories","994558686031749.jpg","Santa Stories","Jackson Crossing","A holiday reading experience created with the Jackson District Library and community partners."],
    ["cascades-ribbon-cutting","1233972312090384.jpg","Cascades Humane Society Ribbon Cutting","Cascades Humane Society","A welcoming grand-opening event that introduced a trusted nonprofit to its new mall location."],
    ["grow-jackson-opening","1275042854649996.jpg","Grow Jackson & River Rail Opening","Grow Jackson","Ribbon-cutting storytelling for a community-focused market and local food initiative."],
    ["grazing-thyme-opening","837501851737434.jpg","Grazing Thyme Grand Opening","Grazing Thyme","On-location event media celebrating a new Brooklyn space and the people behind it."],
    ["miss-crossroads-visit","894475189373433.jpg","Miss Crossroads Community Visit","Jackson Crossing","A joyful public appearance built around connection, visibility, and community support."],
  ],
  "Advertising": [
    ["social-growth","797501532404133.jpg","Jackson Crossing Social Growth","Jackson Crossing","A six-month advertising rhythm that grew awareness through consistent events, tenants, and community stories."],
    ["holiday-local","944490204371931.jpg","Holiday Local Campaign","Jackson Crossing","A coordinated seasonal campaign spanning social promotion, broadcast, and in-mall messaging."],
    ["back-to-school-ads","1478820320938914.jpg","Back to School Advertising Series","Jackson Crossing","A family-first series making every activity, giveaway, and accessibility detail easy to understand."],
    ["shop-small-saturday","1000952755392342.jpg","Shop Small Saturday","Local businesses","A bold campaign encouraging Jackson-area shoppers to discover and support independent businesses."],
    ["jackson-county-fair","894472109373741.jpg","Jackson County Fair Campaign","Community campaign","Bright promotional creative built around fair dates, attractions, and repeat social sharing."],
    ["student-art-promotion","1385435016944112.jpg","Student Art Show Promotion","Jackson County Schools","A flexible ad system inviting families, teachers, and neighbors into a countywide celebration."],
    ["tenant-feature-campaign","915857340568551.jpg","Meet the Mall Campaign","Jackson Crossing","A recurring advertising series turning individual tenant stories into reasons to visit."],
    ["holiday-commercial","944490211038597.jpg","Holiday Broadcast Commercial","Jackson Crossing","Script, direction, and casting for a holiday spot distributed across major cable networks."],
  ],
  "Media": [
    ["community-connections","1426596552827958.jpg","Community Connections","Jackson Crossing","Ongoing photo and story coverage showing the people and partnerships inside a community gathering place."],
    ["black-friday-coverage","994558686031749.jpg","Black Friday Photo Story","Jackson Crossing","On-location photography capturing the energy, details, and people of a major retail weekend."],
    ["local-business-video","906381761516109.jpg","Local Business Video Series","Local business clients","Short-form media shaped to introduce owners, spaces, products, and the story behind the work."],
    ["community-day-media","1233972422090373.jpg","Community Day Media Coverage","Community partners","Event-day visuals designed for immediate posting, partner sharing, and useful follow-up."],
    ["ribbon-cutting-media","1233619748792307.jpg","Ribbon Cutting Storytelling","Local organizations","A complete visual record of the people, place, and milestone behind a grand opening."],
    ["channel-six-feature","904318161722469.jpg","Channel 6 Community Feature","Jackson Crossing","Media coordination supporting a local-news conversation about events and community activity."],
    ["tenant-photo-library","985893490231602.jpg","Tenant Photo Library","Jackson Crossing","A reusable bank of people, product, and place photography for ongoing communications."],
    ["event-recap-series","974588071362144.jpg","Event Recap Series","Community partners","Timely recap content that thanks attendees, documents results, and carries momentum forward."],
  ],
  "Brand support": [
    ["fox-candles-spotlight","957429079744710.jpg","Fox Candles Spotlight","Fox Candles","A small-business feature translating scent, craft, and personality into an approachable brand story."],
    ["dawn-parker-campaign","957428976411387.jpg","Dawn Parker Brand Campaign","Dawn Parker, Reinhart","A recognizable social look supporting an accessible, personable real-estate presence."],
    ["serenity-support","957428889744729.jpg","Serenity Brand Support","Serenity Sober Living House","Clear, compassionate brand materials centered on dignity, recovery, and community."],
    ["fetch-market-launch","957426256411659.jpg","Fetch Market Launch Support","Fetch Market & Deli","Early-stage messaging and media support for a new downtown Brooklyn market concept."],
    ["sisters-smoothies-feature","894457882708497.jpg","Sisters Smoothies Feature","Sisters Smoothies","A founder-focused spotlight celebrating five young entrepreneurs and their growing family business."],
    ["alpha-koney-story","944490221038596.jpg","Alpha Koney Island Story","Alpha Koney Island","Brand storytelling positioning a familiar mall restaurant as a welcoming place for group gatherings."],
    ["local-maker-series","906381761516109.jpg","Local Maker Series","Jackson-area makers","Flexible visual templates giving each maker a distinct voice inside a consistent campaign."],
    ["grazing-thyme-brand","837501851737434.jpg","Grazing Thyme Brand Story","Grazing Thyme","Warm opening content highlighting the character, menu, and atmosphere of a new local space."],
  ],
  "Websites": [
    ["lakeland-cabaret","lakeland cabaret/site.png","Lakeland Cabaret Website","Lakeland Cabaret","A new brand and website bringing the collective's performance booking, photography, and event services into one vivid online home."],
    ["community-event-hub","974588071362144.jpg","Community Event Hub","Community organization","A mobile-friendly information hub bringing schedules, partners, and event details into one place."],
    ["campaign-destination","906381761516109.jpg","Campaign Destination Page","Advertising client","A conversion-focused destination extending an ad campaign beyond the social post."],
    ["organization-refresh","944490221038596.jpg","Organization Website Refresh","Local nonprofit","A clearer structure and updated content system helping visitors find services and next steps."],
    ["small-business-site","915857340568551.jpg","Small Business Website","Local entrepreneur","An approachable multi-page site designed around trust, local search, and simple maintenance."],
    ["event-registration-page","904318161722469.jpg","Event Registration Page","Community partners","A streamlined event page reducing friction between discovery, details, and registration."],
    ["website-transfer","944490211038597.jpg","Website & Domain Transfer","Local organization","A carefully managed platform move protecting links, forms, domains, and launch continuity."],
    ["digital-resource-center","1000952755392342.jpg","Digital Resource Center","Community client","An organized online home for reusable information, campaign materials, and community resources."],
  ],
};

export const caseStudies = (Object.entries(projects) as Array<[Category, typeof projects[Category]]>).flatMap(([category,items]) => items.map(([slug,file,title,client,summary]) => ({
  slug,file,title,client,category,
  event:title,
  summary,
  facts:[`A distinct ${category.toLowerCase()} engagement shaped around the partner’s audience.`,"Strategy, creative execution, and practical rollout support.","Reusable campaign assets and a clear path for follow-up."],
  images:slug==="lakeland-cabaret"?["lakeland cabaret/LAKELAND CABARET clean.png","lakeland cabaret/performer.webp","lakeland cabaret/bouncy house dj close.jpg","lakeland cabaret/mcordy wand.jpg"]:[file,file],
})));
