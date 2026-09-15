export const workCategories = ["Seasonal Events", "Community Events", "Software", "Restaurants", "Businesses"] as const;

export const selectedWork = {
  "Seasonal Events": ["holiday-in-the-halls", "malloween", "valentines-at-jackson-crossing", "happy-harvest"],
  "Community Events": ["back-to-school-bash", "student-art-show", "community-day", "team-hope-walk"],
  Software: ["lakeland-website", "multiverse-adventurers-guild", "sonic-shielding", "whimsy-warden"],
  Restaurants: ["fetch-market-launch", "sisters-smoothies-feature", "alpha-koney-story"],
  Businesses: ["ingendahl-acres-branding", "fox-candles-spotlight", "serenity-support", "cascades-ribbon-cutting", "welcome-home-organization"],
} satisfies Record<(typeof workCategories)[number], string[]>;

export const selectedCategoryBySlug: Record<string, string> = Object.fromEntries(
  workCategories.flatMap(category => selectedWork[category].map(slug => [slug, category])),
);
selectedCategoryBySlug["lakeland-cabaret"] = "Software";
