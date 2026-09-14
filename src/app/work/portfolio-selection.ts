export const workCategories = ["Holidays", "Community Events", "Software", "Restaurants", "Businesses"] as const;

export const selectedWork = {
  Holidays: ["holiday-in-the-halls", "malloween", "valentines-at-jackson-crossing", "happy-harvest"],
  "Community Events": ["back-to-school-bash", "student-art-show", "community-day", "team-hope-walk"],
  Software: ["lakeland-website", "multiverse-adventurers-guild", "sonic-shielding", "whimsy-warden"],
  Restaurants: ["fetch-market-launch", "sisters-smoothies-feature", "alpha-koney-story", "grazing-thyme-opening"],
  Businesses: ["social-growth", "fox-candles-spotlight", "serenity-support", "cascades-ribbon-cutting"],
} satisfies Record<(typeof workCategories)[number], string[]>;

export const selectedCategoryBySlug: Record<string, string> = Object.fromEntries(
  workCategories.flatMap(category => selectedWork[category].map(slug => [slug, category])),
);
selectedCategoryBySlug["lakeland-cabaret"] = "Software";
