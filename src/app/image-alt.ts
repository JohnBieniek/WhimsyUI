// Describe the asset itself: some portfolio entries reuse the same image.
const imageDescriptions: Record<string, string> = {
  "/work/1478820320938914.jpg": "Back to School Bash poster with blue lockers, advertising free backpacks, school photos, library sign-ups, and family activities at Jackson Crossing.",
  "/work/1385435016944112.jpg": "Jackson County Student Art Show poster featuring a student painting of an orange dragon; exhibition runs April 20 through May 4 at Jackson Crossing.",
  "/work/1426596552827958.jpg": "Gold ribbon and scissors announce the Cascades Humane Society grand opening on June 3 at Jackson Crossing.",
  "/work/994558686031749.jpg": "Holiday in the Halls poster with Santa, a Christmas arch, vendors, and treats; December 21, noon to 5 p.m. at Jackson Crossing.",
  "/work/1233972312090384.jpg": "Brightly colored Sips Happen drink graphic with a takeaway cup, fruit, and playful smiling faces.",
  "/work/1275042854649996.jpg": "Whimsy's 2025 award nominations: Chamber Small Business Award, Jackson Magazine 40 and Under, and Community Enthusiast Award.",
  "/work/837501851737434.jpg": "Black-and-white poster of guitarist Johnathan Fiene advertising live music at Blackstone's Smokehouse on May 10, 7 to 10 p.m.",
  "/work/894475189373433.jpg": "Jackson County Fair admission information poster for August 4 through 10, with fairground photographs and ticket details.",
  "/work/team hope core.jpg": "Central Michigan Team Hope Walk and Run poster supporting Huntington's disease awareness, with walker silhouettes and sponsor logos; August 17 at the Michigan Theatre in Jackson.",
  "/work/797501532404133.jpg": "Jackson Crossing social audience growth: 191 likes and 243 followers initially, 645 likes and 760 followers at three months, and 1.4K likes and 1.6K followers at six months.",
  "/work/1000952755392342.jpg": "Holiday in the Halls poster featuring Santa and Christmas event photos; December 21, noon to 5 p.m., with music, free face painting, and holiday vendors.",
  "/work/894472109373741.jpg": "Yellow and pink Jackson County Fair poster promoting the rodeo, dynamometer show, and Taylor Swift tribute during August 4 through 10, 2024.",
  "/work/915857340568551.jpg": "Color Street advertisement showing patterned nail designs, nail polish and beauty products, and representative Dawn Stails' contact QR code.",
  "/work/944490211038597.jpg": "Dark Mall-O-Ween poster advertising Lakeland Cabaret's spooky DJ, games, musical chairs, and fire dance on October 26, 1 to 4 p.m.",
  "/work/906381761516109.jpg": "Whimsy design-services flyer with sample concert and event posters, listing Facebook ads, posters, and logo rework.",
  "/work/1233972422090373.jpg": "Musicians performing with guitars outside the Salvaged Decor storefront.",
  "/work/1233619748792307.jpg": "Guitarists performing beside the entrance to Salvaged Decor.",
  "/work/904318161722469.jpg": "Pink Sisters Smoothies advertisement for the Cee Cee, a strawberry, cherry, blueberry, and banana smoothie pictured with fresh fruit.",
  "/services/ad-campaign/sisters-smoothies-livie.jpg": "Sisters Smoothies ad for The Livie, a mango and banana smoothie on a golden background.",
  "/work/985893490231602.jpg": "Vertical Holiday in the Halls poster with Santa, a Christmas arch, and vendor photos; December 21, noon to 5 p.m.",
  "/work/974588071362144.jpg": "Happy Harvest poster advertising Lakeland Cabaret DJ services next to Alpha Koney on November 23.",
  "/work/957429079744710.jpg": "Mall-O-Ween poster advertising Lakeland Cabaret's spooky DJ event on October 26, with games, musical chairs, and a fire dance.",
  "/work/957428976411387.jpg": "Studio One Photography's Mall-O-Ween advertisement showing a Halloween portrait backdrop with pumpkins, cobwebs, and a wooden bench.",
  "/work/957428889744729.jpg": "Color Street Halloween-themed advertisement with nail-design photos, beauty products, and representative Dawn Stails' contact QR code.",
  "/work/957426256411659.jpg": "Lakeland Cabaret Mall-O-Ween poster promoting a spooky DJ event next to Alpha Koney on October 26.",
  "/work/894457882708497.jpg": "Team Hope Walk and Run announcement with silhouettes of walkers and Huntington's disease awareness sponsor logos.",
  "/work/944490221038596.jpg": "Studio One Photography Halloween photo station with pumpkins and an autumn backdrop, advertising Mall-O-Ween portraits on October 26.",
  "/work/lakeland cabaret/site.png": "Lakeland Cabaret homepage with a blue and yellow design, the headline Every event deserves a little wonder, and an outdoor wedding photograph.",
  "/work/lakeland cabaret/LAKELAND CABARET clean.png": "Lakeland Cabaret circular blue and yellow logo showing a top-hatted DJ holding a flame.",
  "/work/lakeland cabaret/performer.webp": "A smiling performer in a hooded costume stands behind a DJ table with a Beware sign and a speaker.",
  "/work/lakeland cabaret/mall christmas close.jpg": "A smiling DJ in a Santa hat stands behind a laptop beside a decorated Christmas tree at the mall.",
  "/work/lakeland cabaret/mcordy wand.jpg": "A performer outdoors at dusk spins a flaming prop, leaving arcs of fire around their body.",
  "/work/back to school homepage.jpg": "Back to School Bash information board beside the Jackson Crossing carousel, listing backpacks, school photos, library sign-ups, and activities.",
  "/service 1.jpg": "A consultant with a notebook talks with a client across a cafe table.",
  "/advertising plan.png": "A 90-day advertising plan connects a brand audit, unified message, and audience insights with a channel mix, style guide, and email support.",
  "/buisness consult.jpg": "Two people discuss business plans over paperwork at a table beside a window.",
  "/website support.jpg": "Two people review website code on a laptop, with one pointing to the screen.",
  "/domain change image.png": "Website migration diagram: Whimsy moves pages, photos, and forms from a clunky builder to a cleaner site, checking every link and form before launch.",
  "/services/lakeland site.png": "Lakeland Cabaret website homepage presenting performance, photography, and event services.",
  "/large home page MAG.png": "Multiverse Adventurers Guild homepage introducing the role-playing game and linking to rules, player guides, Game Master material, and characters.",
};

export function getImageAlt(src: string): string {
  const description = imageDescriptions[decodeURIComponent(src)];
  if (!description) throw new Error(`Add an image description for ${src}`);
  return description;
}
