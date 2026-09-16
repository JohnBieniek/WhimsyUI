export const workCategories = ["Businesses", "Community Events", "Restaurants", "Seasonal Events", "Software"] as const;

export const selectedWork = {
  "Seasonal Events": ["holiday-in-the-halls", "malloween", "valentines-at-jackson-crossing", "happy-harvest"],
  "Community Events": ["back-to-school-bash", "student-art-show", "jackson-county-rose-parade", "team-hope-walk"],
  Software: ["lakeland-website", "multiverse-adventurers-guild", "sonic-shielding", "whimsy-warden"],
  Restaurants: ["fetch-market-launch", "sisters-smoothies-feature", "alpha-koney-story", "heavenly-bakes-and-cakes"],
  Businesses: ["ingendahl-acres-branding", "serenity-support", "cascades-ribbon-cutting", "welcome-home-organization"],
} satisfies Record<(typeof workCategories)[number], string[]>;

export const selectedCategoryBySlug: Record<string, string> = Object.fromEntries(
  workCategories.flatMap(category => selectedWork[category].map(slug => [slug, category])),
);
selectedCategoryBySlug["lakeland-cabaret"] = "Software";
