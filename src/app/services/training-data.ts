export type Training = {
  slug: string;
  name: string;
  hours: number;
  intro: string;
  deliverables: string[];
  outcomes: { title: string; copy: string; items?: string[] }[];
  goal: string;
  motto: string;
};

export const trainingServices: Training[] = [
  {
    slug: "facebook-meta-basics-training",
    name: "Facebook & Meta Basics Training",
    hours: 2,
    intro: "This hands-on Facebook & Meta training is designed to give you the knowledge and confidence to effectively manage your business’s Facebook presence, create content, and understand the tools available through Meta.",
    deliverables: ["Facebook Business Page walkthrough", "Page setup and organization", "Content and brand preparation", "Practical Meta tools", "A finished, branded Facebook post"],
    outcomes: [
      { title: "A Facebook Business Page Walkthrough", copy: "A guided tour of your business page, including how to navigate, manage, and update the information customers see." },
      { title: "Your Business Page Set Up & Organized", copy: "We’ll review and organize the essentials of your Facebook presence, including:", items: ["Business information", "Profile & cover images", "About section", "Contact information", "Page settings"] },
      { title: "Your Content & Brand Ready to Go", copy: "We’ll look at how to keep your Facebook presence consistent with your brand and make the most of the photos, graphics, and content you already have." },
      { title: "Meta Tools You’ll Actually Use", copy: "We’ll walk through helpful features and tools, including:", items: ["Creating Facebook posts", "Scheduling content", "Stories", "Meta Business Suite", "Managing messages and comments", "Connecting Instagram and Facebook", "Content planning"] },
      { title: "Create a Facebook Post Together", copy: "You won’t just learn how Facebook works—you’ll put it into practice. Together, we’ll create a finished, branded Facebook post that you can publish for your business." },
    ],
    goal: "You leave with more than just Facebook knowledge. You leave with a better-organized business presence, a clearer understanding of Meta’s tools, the confidence to create and manage your own content, and a finished Facebook post ready to use.",
    motto: "Learn it. Manage it. Post it. Grow your presence.",
  },
  {
    slug: "canva-basics-training",
    name: "Canva Basics Training",
    hours: 3,
    intro: "This hands-on Canva Basics training is designed to give you the tools and confidence to start creating professional, on-brand graphics for your business.",
    deliverables: ["Canva walkthrough", "Brand assets gathered", "Branding set up", "Practical design tools", "A finished, branded advertisement"],
    outcomes: [
      { title: "A Canva Walkthrough", copy: "A guided tour of Canva’s basics, layout, navigation, and how to find the tools you need." },
      { title: "Your Brand Assets Gathered", copy: "We’ll organize the essentials you’ll use in your designs, including:", items: ["Logos", "Photos", "Existing graphics", "Other important brand assets"] },
      { title: "Your Branding Set Up", copy: "We’ll get your brand elements organized and ready to use so creating consistent designs is easier." },
      { title: "Canva Tools You’ll Actually Use", copy: "We’ll work through helpful in-app features such as:", items: ["Background Remover", "Templates", "Elements", "Text tools", "Image editing", "Design adjustments"] },
      { title: "Create a Branded Advertisement", copy: "You won’t just learn how Canva works—you’ll put it into practice. Together, we’ll create a finished, branded advertisement that you can use for your business." },
    ],
    goal: "You leave with more than just Canva knowledge. You leave with your Canva account organized, your brand ready to use, new skills you can continue building on, and a finished piece of marketing material in hand.",
    motto: "Learn it. Build it. Leave ready to create.",
  },
];
