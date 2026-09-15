type StoryHeading = string | [string, string];
type StorySection = { kicker: string; title: StoryHeading; paragraphs: string[]; images: [string, string][]; galleryLayout?: "stacked" | "centered" | "paired"; layout?: "image-left"; card?: "light-purple" | "light-mint"; accent?: "activities" | "shopping" | "event" | "value" };
export type ArchiveStory = { title?: string; summary: string; heading: StoryHeading; introduction: string[]; hero: [string, string]; services: string[]; sections: StorySection[]; video?: string; theme?: "halloween" };

export const archiveStories: Record<string, ArchiveStory> = {
  "malloween": {
    theme: "halloween",
    summary: "A Halloween campaign bringing costumes, trick-or-treating, music, food, and independent vendors together at Jackson Crossing.",
    heading: ["One spooky afternoon.", "Plenty of reasons to explore."],
    introduction: ["The second annual Malloween invited families to Jackson Crossing on October 26, from noon to 5 PM. Costumes and candy stops gave the day its Halloween character, while local vendors, food, photography, and entertainment offered reasons to spend time throughout the mall.", "Whimsy's campaign gave those participants individual promotions within the larger event. Each piece connected a specific attraction with the Malloween invitation, helping visitors see what they could discover before they arrived."],
    hero: ["944490211038597", "Malloween promotion for Lakeland Cabaret's spooky DJ set"],
    services: ["Campaign design", "Event advertising", "Vendor promotions"],
    sections: [
      { kicker: "Things to do", accent: "activities", title: "Give the activities their own invitation.", paragraphs: ["The entertainment promotions introduced Lakeland Cabaret's DJ set, local dance classes, a Studio One Photography session, and a Stitch appearance. Each ad offered a different reason to stop, with event details repeated where visitors needed them.", "The photography piece used an autumn backdrop, while the DJ artwork leaned into darker Halloween imagery. Those individual styles gave each activity personality within a shared seasonal campaign."], images: [["944490197705265", "Malloween promotion for local dance classes"], ["944490221038596", "Studio One Photography's autumn photo session at Malloween"], ["944490214371930", "Malloween Stitch appearance announcement for 4 to 5 PM"]] },
      { kicker: "Food and shopping", accent: "shopping", title: ["Let each business bring", "something different."], paragraphs: ["F'ing Fantastic Food Truck's promotion highlighted egg rolls, fries, and nachos, with the event announcement directing visitors to the truck outside Dunham's. Other pieces introduced clothing, home décor, handmade jewelry, and sweets.", "Product photographs make the variety tangible. Someone arriving for Halloween activities could also discover a local maker, browse a display, or plan a food stop as part of the same visit."], images: [["944490204371931", "Food truck advertisement for Malloween"], ["944490191038599", "BINHI clothing collection promotion for Malloween"], ["944490217705263", "Home décor and seasonal displays promoted for Malloween"], ["944490207705264", "Handmade jewelry promotion for the Halloween event"], ["944490201038598", "McCallister Creations sweets promotion in the Malloween campaign"], ["944490194371932", "Enchanted Chains permanent jewelry promotion for Malloween"]] },
      {
        kicker: "The event in action",
        accent: "event",
        title: "Music, games, and reasons to stay.",
        galleryLayout: "stacked",
        paragraphs: [
          "Visitors loved the music from Lakeland Cabaret’s DJ, gathering around the booth and enjoying the Halloween atmosphere. Attendees explored the shops and event vendors throughout Jackson Crossing, finding treats, gifts, and plenty of local businesses to discover along the way.",
          "Kids joined in musical chairs and freeze dance, with candy and prizes adding to the excitement. The games gave families a chance to play, cheer one another on, and enjoy the afternoon together, turning a shopping trip into a shared Halloween celebration.",
        ],
        images: [
          ["malloween-crowd", "Costumed shoppers exploring stores and vendor displays at Jackson Crossing during Malloween."],
          ["malloween-dj", "Visitors gathering around Lakeland Cabaret’s DJ booth during Malloween."],
          ["malloween-games", "Halloween costumes and family activities beside the Malloween DJ booth."],
        ],
      },
      {
        kicker: "The value of bringing people together",
        accent: "value",
        title: ["A memorable day for visitors.", "New connections for businesses."],
        card: "light-purple",
        paragraphs: [
          "For the shops and participating vendors, Malloween brought people into the halls and gave them reasons to browse, ask questions, and spend time with local businesses. Whimsy’s advertising introduced the offerings before the event, while the music and activities created opportunities to turn that interest into conversations and customer relationships.",
          "For attendees, shopping, music, games, candy, and prizes came together in one welcoming outing. Families could make memories and discover something new, while businesses had a chance to become part of those memories. That shared value gives people a reason to return and helps local businesses build lasting connections with their community.",
        ],
        images: [],
      },
    ],
  },
  "valentines-at-jackson-crossing": {
    summary: "Valentine's promotions connecting gifts, photography, and local businesses with seasonal visits to Jackson Crossing.",
    heading: ["Make the occasion personal.", "Make the details clear."],
    introduction: ["Valentine's Day gives local businesses a chance to offer something thoughtful: a gift, a photograph, or time spent together. Whimsy's Jackson Crossing work includes a floral gift promotion and photography-led creative connected to Cupid's Corner.", "These pieces come from separate Valentine's campaigns. Each keeps its own offer and dates, showing how the occasion can support different businesses while giving customers a clear next step."],
    hero: ["1040973861390231", "Peggy's Custom Floral Designs Valentine's promotion for February 13 and 14, 2025"],
    services: ["Seasonal advertising", "Graphic design", "Business promotion"],
    sections: [
      { kicker: "Valentine's gifts · 2025", title: "Show the gift, then explain where to find it.", paragraphs: ["Peggy's Custom Floral Designs' advertisement pairs floral borders with photographs of decorated gift arrangements. Pink, red, and heart details make the occasion immediately recognizable, while the products remain central to the invitation.", "The ad lists February 13 and 14 at Jackson Crossing, including different hours for each day. That information helps shoppers plan a visit around a short seasonal window: Thursday from 11 AM to 6 PM and Friday from 11 AM to 5 PM."], images: [] },
      { kicker: "Photography and Cupid's Corner · 2024", title: ["Connect a seasonal offer", "to a larger gathering."], paragraphs: ["Studio One Photography's earlier creative uses a bold red portrait, hearts, and a booking prompt to introduce Valentine's specials. The supporting information connects the piece to Cupid's Corner on February 14, from 2 to 6 PM, with photography, live music, vendors, and food.", "The two campaigns show different ways to approach the same occasion. A product-led invitation helps someone choose a gift; a portrait-led promotion helps them picture an experience. In both, the seasonal design works alongside the practical details customers need to take part."], images: [["787291360091817", "Studio One Photography Valentine's specials and Cupid's Corner event promotion"]] },
    ],
  },
  "happy-harvest": {
    summary: "Autumn advertising and vendor coordination for Happy Harvest at Jackson Crossing, bringing local makers, treats, and music into one seasonal event.",
    heading: ["A fall gathering built", "around local discoveries."],
    introduction: ["Happy Harvest brought vendors and entertainment to Jackson Crossing on November 23. Whimsy assisted with advertising and curating the vendor group, connecting the seasonal event with the businesses and makers taking part.", "The campaign combined a broad vendor announcement with individual features for music, jewelry, and sweet treats. Warm colors, leaves, and harvest details gave the event its own autumn identity."],
    hero: ["974588278028790", "Happy Harvest vendor announcement with autumn leaves"],
    services: ["Event advertising", "Vendor coordination", "Campaign design"],
    sections: [
      { kicker: "The entertainment", title: ["Give visitors a reason", "to stay awhile."], paragraphs: ["Lakeland Cabaret's promotion placed its DJ services within the Happy Harvest event and identified the location beside Alpha Koney. The entertainment became part of the invitation to explore the halls and spend time with the participating businesses.", "That connection gives a vendor event a fuller sense of occasion. Visitors can browse at their own pace while music provides another point of interest during the day."], images: [["974588071362144", "Lakeland Cabaret DJ promotion for Happy Harvest on November 23"]] },
      { kicker: "Meet the vendors", title: ["Turn a list of names", "into things to discover."], paragraphs: ["Individual advertisements introduced Spoons, Rings & Other Bling, Ashley Sweet Creations, J&D's Flavorful Delight, and Enchanted Chains. Jewelry photographs and baked goods gave visitors a closer look at what each participant brought to the event.", "The full vendor announcement tied those individual stories back together. Whimsy's follow-up recognized the businesses involved and the work of assembling the group, carrying the campaign through from invitation to acknowledgment."], images: [["974588108028807", "Spoons, Rings & Other Bling promotion for Happy Harvest"], ["974588138028804", "Ashley Sweet Creations Happy Harvest advertisement"], ["974588164695468", "J&D's Flavorful Delight baked goods advertisement"], ["974588238028794", "Enchanted Chains jewelry promotion for Happy Harvest"]] },
    ],
  },
  "santa-stories": {
    summary: "Holiday storytime, library resources, and photographs of the small moments that made families feel welcome at Jackson Crossing.",
    heading: "A little Christmas magic. A reason to read together.",
    introduction: ["Santa Stories brought Jackson District Library into the holiday setting at Jackson Crossing. Families could settle in for a story, meet Santa, and discover the library's resources during a visit to the mall.", "Whimsy joined the day as Santa's elf and photographed the experience. The story lives in the details: a book held up for the children, a quiet conversation with Santa, and a reading space framed by presents and Christmas decorations."],
    hero: ["1266008515553430", "Santa reading to a child in the Christmas storytime setting"],
    services: ["Event participation", "Photography", "Community storytelling"],
    sections: [
      { kicker: "The partnership", title: "The library became part of the celebration.", paragraphs: ["Jackson District Library's table gave families a place to learn more while Santa made reading part of the holiday experience. The photographs show both sides of the visit: the festive attraction and the community resource behind it.", "That connection gives an event story more substance. The library belongs in the coverage alongside Santa, so families can recognize the people and services that helped make the day possible."], images: [["1266008452220103", "Jackson District Library's information table"], ["1266008478886767", "The Night Before Christmas book during storytime"]] },
      { kicker: "The experience", title: "Make room for the moments between poses.", paragraphs: ["Alongside the reading, we captured greetings, the decorated setting, and Santa's visits around the mall. These are different parts of the same experience, from a child's close-up conversation to a familiar local vendor joining the fun.", "The resulting collection lets the event be remembered as a day people shared. It also gives future invitations real examples of what a welcoming holiday activity can look like."], images: [["1266008422220106", "Santa preparing for storytime"], ["1266008545553427", "A child talking with Santa"], ["1266008588886756", "The decorated storytime space and books"], ["1266008622220086", "Santa visiting a food truck outside Jackson Crossing"]] },
    ],
  },
  "black-friday-coverage": {
    summary: "A holiday photo story following Santa through Jackson Crossing, connecting seasonal excitement with the stores and people in the halls.",
    heading: "Follow the energy through the whole mall.",
    introduction: ["Whimsy photographed Black Friday and Santa Stories during a busy holiday week at Jackson Crossing. With Santa moving through the halls, the coverage had a natural thread: familiar storefronts, conversations with employees, and families enjoying the seasonal setting.", "The photographs below follow the mall visits from that shared holiday-week collection. They show the retail setting and the people within it, giving the story more range than a single picture at Santa's chair."],
    hero: ["1271099948377620", "Santa greeting visitors beside the Jackson Crossing carousel"],
    services: ["On-location photography", "Retail storytelling", "Seasonal coverage"],
    sections: [
      { kicker: "Around the halls", title: "Give the businesses a place in the story.", paragraphs: ["Santa's visits created an opportunity to photograph the people behind the stores. Clothing displays, shop counters, and seasonal merchandise make each stop recognizable while the portraits keep the mood friendly.", "A collection like this offers several ways to share one occasion. Individual businesses can be featured in their own moment, while a broader photo story shows the variety visitors can find throughout the mall."], images: [["1271100248377590", "Santa posing with employees in a clothing store"], ["1271100488377566", "Santa visiting a store employee at the counter"], ["1271100661710882", "Santa waving from a shop aisle"], ["1271100695044212", "Santa and a local shopkeeper"]] },
      { kicker: "The holiday setting", title: "Photograph the place as well as the occasion.", paragraphs: ["The carousel, decorated halls, and seasonal displays help tell visitors where the experience happened. Wide views establish the location; closer photographs bring attention back to the greetings and details people remember.", "This collection comes from the shared Black Friday and Santa Stories holiday week. Together, the images connect the seasonal setting with the shopkeepers, employees, and visitors who brought it to life."], images: [["1271099911710957", "Snow along the outdoor storefronts at Jackson Crossing"], ["1271100135044268", "The carousel and visitors in the mall"], ["1271100588377556", "Santa visiting a decorated display"], ["1271100898377525", "Santa walking through the halls with visitors"], ["1271100935044188", "Santa beside the carousel horses"]] },
    ],
  },
  "holiday-commercial": {
    summary: "A Jackson Crossing holiday commercial with Whimsy handling the script, direction, and casting, alongside filming and editing by Media Advantage.",
    heading: "A seasonal invitation, made for the screen.",
    introduction: ["Jackson Crossing's holiday commercial brought the mall's seasonal message to television. Whimsy worked with Jackson Crossing and Media Advantage, contributing the script, direction, and casting that shaped what viewers would see and hear.", "Media Advantage filmed and edited the commercial. That division of work brought creative planning and production together, carrying the invitation from a written concept through to the finished spot."],
    hero: ["holiday-commercial-poster", "A frame from the Jackson Crossing holiday commercial"],
    video: "/work/archive/holiday-commercial.mp4",
    services: ["Scriptwriting", "Creative direction", "Casting"],
    sections: [
      { kicker: "Before the cameras", title: "Give a short spot a clear purpose.", paragraphs: ["A commercial needs an understandable message within a limited running time. The script supplies that structure: what the audience needs to know, how the setting supports the invitation, and how the on-screen action moves the story forward.", "Whimsy's role connected the written message with direction and casting. Those choices work together, so the people appearing in the spot feel like part of the same holiday experience the script describes."], images: [] },
      { kicker: "The finished commercial", title: "Local creative work with a wider audience.", paragraphs: ["The archived release lists HGTV, USA, Food Network, TBS, Bravo, AMC, TLC, Entertainment, and Freeform among the channels carrying the spot. The commercial above is the finished work from that release.", "The collaboration carried the idea through distinct stages of production. Whimsy shaped the script and on-camera direction; Media Advantage brought the filming and edit. Together, those contributions gave Jackson Crossing a complete holiday advertisement."], images: [] },
    ],
  },
  "student-art-show": {
    summary: "Campaign artwork, participant promotions, and local media visibility for student creativity at Jackson Crossing across multiple annual art shows.",
    heading: "Turn the halls into a place to discover young artists.",
    introduction: ["The Jackson County Student Art Show brings local K–12 artwork into the halls of Jackson Crossing. Whimsy's work helped invite families, recognize participating schools, and promote the food and entertainment surrounding the show.", "The 2026 invitation led with Annie Saenz's fish artwork, pairing the art with the April 20–May 4 show dates and Jackson Crossing location. Opening-day promotion highlighted live entertainment, food, and hundreds of student pieces to discover.", "The earlier campaigns below show the other parts of the work: recognizing participating schools, helping visitors find displays, and promoting the food and music around the event."],
    hero: ["1385435016944112", "2026 Student Art Show invitation featuring artwork by Annie Saenz, April 20–May 4."],
    services: ["Campaign design", "Event promotion", "Partner features"],
    sections: [
      { kicker: "The 2025 campaign", title: "Help visitors find their way into the show.", paragraphs: ["The 2025 artwork introduced the exhibition, recognized participating schools, and supplied a map of the displays. These pieces answer different questions: why to visit, who is involved, and where to go once you arrive.", "Keeping those jobs distinct lets a visually lively campaign remain useful. A family looking for a school's display needs practical directions as much as an invitation."], images: [["1088502739970676", "2025 art show school and participant acknowledgments"], ["1088502653304018", "2025 Student Art Show poster"], ["1088502793304004", "2025 student artwork location map"]] },
      { kicker: "The 2024 appreciation day", title: "Give the celebration its own supporting cast.", paragraphs: ["The earlier show included a student and teacher appreciation day, with food trucks and music alongside artwork from more than 25 local schools. Whimsy created focused promotions for Petey's Donuts, F'ing Fantastic Food Truck, and the Two Soups duo.", "The archive also records this campaign artwork appearing during JTV's art show interview. Together, the pieces show how a main event can extend into partner promotions and local media coverage."], images: [["822363509917935", "Petey's Donuts promotion for the 2024 appreciation day"], ["822363549917931", "Food truck promotion for the 2024 appreciation day"], ["822363589917927", "Two Soups live music promotion for the 2024 art show"]] },
    ],
  },
  "community-day": {
    summary: "Planning conversations and local media coordination ahead of a Jackson Crossing gathering centered on food, fun, and community resources.",
    heading: "Build the invitation before the day arrives.",
    introduction: ["Community Day at Jackson Crossing was planned for June 13, with food, activities, and local resources in the halls. Whimsy's archive follows the preparation: time spent discussing the event and a visit from Channel 6 to talk about what was happening at the mall.", "This part of event work happens before the public gathering. It connects the plans with an understandable invitation and gives local organizations a place in the conversation."],
    hero: ["1432439228910357", "Channel 6 filming inside Jackson Crossing ahead of Community Day"],
    services: ["Event planning", "Media coordination", "Community promotion"],
    sections: [
      { kicker: "The preparation", title: "Start with what the community can use.", paragraphs: ["The planning post described a day of fun, food, and community resources. Bringing those elements together gives families multiple reasons to visit and lets an event introduce useful local services in a familiar setting.", "The preparation and media visit gave that invitation a starting point. Our role connected behind-the-scenes planning with the public conversation about the upcoming day."], images: [] },
      { kicker: "Local media", title: "Connect the event with the wider story of the mall.", paragraphs: ["Sean Graney from Channel 6 visited to discuss Jackson Crossing, the new Cascades Humane Society location, and the upcoming Community Day. Those subjects gave the conversation a concrete local focus: new activity in the halls and ways the community could take part.", "Media coordination works best when there is a useful story to tell. Here, the event and the nonprofit's new location offered related reasons to pay attention to what was happening at Jackson Crossing."], images: [["1432439262243687", "Kay at Jackson Crossing during the Channel 6 visit"]], layout: "image-left" },
    ],
  },
  "fetch-market-launch": {
    summary: "Consulting, launch messaging, and food photography for Fetch Market & Deli, bringing its sandwiches, savory dishes, desserts, and downtown Brooklyn location into view.",
    heading: "Give people a taste of what’s coming.",
    introduction: ["Whimsy partnered with Fetch Market & Deli for consulting and media marketing, including kitchen visits and early conversations about the menu. The work connected the plans for a new downtown Brooklyn destination with the food and people behind it.", "The photography brings that story to the table: layered sandwiches, savory pastries, fresh vegetables, and individual desserts. Together with the storefront and launch photographs, it gives people a clearer picture of what makes Fetch worth discovering."],
    hero: ["1447327190754894", "Fetch Market sign and Chef Gretchen in an early business announcement"],
    services: ["Business consulting", "Launch messaging", "Media marketing", "Food photography"],
    sections: [
      { kicker: "Introduce the idea", title: "A familiar corner with something new on the way.", paragraphs: ["The first images establish the downtown building and the space inside it. Showing the location helps neighbors place the business in their own routines, while the menu and market description explains why they might return.", "These pre-opening photographs document the project taking shape. Sharing the building and interior gives the early story a sense of place as plans for the market develop."], images: [["1447327210754892", "The downtown Brooklyn building planned for Fetch Market"], ["1447327197421560", "The Fetch Market interior before opening"], ["1447327270754886", "Street-level view of the future market entrance"]] },
      { kicker: "Build the relationship", title: "Know the business behind the announcement.", paragraphs: ["Consulting and kitchen visits gave the partnership a closer connection to what Fetch was preparing to offer. The menu, the chef's experience, and the mix of market goods gave the early messaging substance beyond a coming-soon headline.", "An additional announcement pointed readers to The Exponent and Fetch's website for more information. The combination of personal introductions, a recognizable location, and a next place to learn more helped carry the launch story across channels."], images: [["1478031421017804", "Kay and a Fetch Market partner during the consulting and media partnership"], ["1257575986396683", "Fetch Market coming-soon announcement referencing The Exponent"]] },
    ],
  },
  "sisters-smoothies-feature": {
    summary: "A family business introduction and a coordinated set of five signature-drink ads for Sisters Smoothies at Jackson Crossing.",
    heading: ["Five sisters. Five drinks.", "One recognizable campaign."],
    introduction: ["Sisters Smoothies grew from smoothies at school events to a food truck and a place at Jackson Crossing. Whimsy introduced the five young entrepreneurs and their family's role in building the business, then brought the menu into a colorful series of product ads.", "Each signature smoothie carries a sister's name. That gives the campaign a natural connection between the products on offer and the people behind them."],
    hero: ["755016366652650", "Sisters Smoothies business introduction collage"],
    services: ["Business storytelling", "Product advertising", "Campaign design"],
    sections: [
      { kicker: "The business story", title: "Show the journey behind the counter.", card: "light-purple", paragraphs: ["The introductory feature celebrated the sisters' progression from school events to their own business in the mall. It recognized their parents' support and invited local customers to encourage young entrepreneurs in their community.", "That background gives a product promotion a more personal starting point. Customers can learn who makes the drinks as well as what they can order."], images: [] },
      { kicker: "The signature menu", title: "Make each flavor easy to recognize.", galleryLayout: "centered", paragraphs: ["The five ads share a layout, logo placement, and order prompt while changing the fruit, color, and drink name. Strawberry pinks, mango yellows, and darker berry tones give the individual recipes their own character.", "The connected format allows each drink to stand alone in a feed while still looking like part of Sisters Smoothies. Seen together, the series presents a range of choices without losing the family identity at the center of the campaign."], images: [["904318161722469", "The Cee Cee smoothie advertisement"], ["904318168389135", "The Ila smoothie advertisement"], ["904318158389136", "The Sophie strawberry and mango smoothie advertisement"], ["904318165055802", "The Livie mango and banana smoothie advertisement"], ["904318171722468", "The Cali strawberry and banana smoothie advertisement"]] },
    ],
  },
  "alpha-koney-story": {
    summary: "Restaurant advertising and community event coverage presenting Alpha Koney Island as a familiar place to eat, meet, and gather at Jackson Crossing.",
    heading: "A local favorite, with room for your whole group.",
    introduction: ["Whimsy paired restaurant advertising with a business feature following a Jackson County Chamber of Commerce networking event at Alpha Koney Island. The work introduced the restaurant to local audiences and showed its role as a place for people to come together.", "The campaign connected an everyday dining invitation with a real example of the restaurant hosting a group. The finished advertisement, recognizable entrance, and guests in conversation carry that story from promotion to the experience of visiting."],
    hero: ["772622481558705", "Alpha Koney Island restaurant advertisement featuring its food"],
    services: ["Restaurant advertising", "Business features", "Event coverage"],
    sections: [
      {
        kicker: "The invitation",
        title: "Connect an everyday visit with a larger gathering.",
        card: "light-purple",
        paragraphs: [
          "The restaurant advertisement brings the Alpha name, a selection of dishes, and Jackson Crossing together in one recognizable piece. It gives a local audience a quick introduction to the restaurant and a clear sense of where to find it.",
          "The business feature extends that introduction to families, organizations, and networking groups. The message gives people another reason to consider Alpha: a familiar place for their next get-together.",
        ],
        images: [],
      },
      {
        kicker: "The gathering",
        title: "New connections around a familiar table.",
        galleryLayout: "paired",
        paragraphs: [
          "The Chamber networking event gave the invitation a real setting. The entrance photograph connects Alpha's name and location with the event, while the wider view shows guests seated together and talking beneath the restaurant sign.",
          "Together, these views help a prospective visitor picture arriving and spending time there. For someone considering a group gathering, they show the atmosphere and the restaurant's connection to the local business community.",
        ],
        images: [["1285889730231975", "Alpha Koney Island's entrance and Chamber networking event sign at Jackson Crossing"], ["1285889956898619", "Guests sharing tables and conversation during the Chamber networking event"]],
      },
      {
        kicker: "The value",
        title: ["Give the restaurant more", "reasons to be remembered."],
        card: "light-mint",
        paragraphs: [
          "For Alpha, the advertising and event feature connect its name with both everyday dining and community gatherings. The work gives the restaurant a story to share with people who may know its location but have not considered it for their next occasion.",
          "For visitors and group organizers, that story makes the choice easier to picture: where to go, what the setting feels like, and how people can spend time together. A local business becomes part of the next plan.",
        ],
        images: [],
      },
    ],
  },
  "welcome-home-organization": {
    title: "Welcome Home Organization",
    summary: "A shared rebranding, website, and marketing project through Leadership Jackson, supported by community promotion and local partnerships.",
    heading: "A clearer identity for a community mission.",
    introduction: [
      "The Welcome Home Organization works with communities in Jackson and Albion through youth initiatives, urban agriculture, and transitional support. Explaining that range of work means helping people understand both the larger mission and the practical ways they can take part.",
      "Through Leadership Jackson with the Jackson County Chamber of Commerce, Whimsy's Kay Pickett worked alongside a team supporting WHO. The project brought together a full rebrand, website updates, and a complete marketing package, with the team's work celebrated in April 2026.",
    ],
    hero: ["1390509449770002", "The Leadership Jackson team and Welcome Home Organization at the project presentation"],
    services: ["Rebranding", "Website updates", "Marketing materials"],
    sections: [
      {
        kicker: "The creative work",
        title: "One mission, carried across the work.",
        paragraphs: [
          "The rebrand, website updates, and marketing package were parts of the same team project. Together, they addressed how WHO presents itself, explains its work, and introduces its mission to people who may want to get involved.",
          "Each part serves a different purpose: an identity people can recognize, a website where they can learn more, and materials that support outreach. Connecting those pieces gives an organization a more consistent starting point for conversations with its community.",
        ],
        images: [],
      },
      {
        kicker: "Listening and planning",
        title: "Start with the people behind the mission.",
        paragraphs: [
          "The relationship included meeting WHO's board through Leadership Jackson in November 2025. That evening at Bella Notte brought the project team into the same room as the people guiding the organization and its community work.",
          "Those connections matter to a creative project. Before deciding how to present an organization, there is value in learning from the people who know its work, its partnerships, and the community it serves.",
        ],
        images: [["1260243139463301", "Meeting with WHO's board and Leadership Jackson peers at Bella Notte"]],
      },
      {
        kicker: "Community promotion",
        title: "Make getting involved feel possible.",
        paragraphs: [
          "Whimsy's September coverage introduced WHO through a practical project: volunteers painting tires for a new sensory playground. Photographs showed the preparation and colorful materials, while the accompanying post invited local people to join the next workday.",
          "It gave the mission a concrete example. Someone seeing the post could understand what was happening, why it mattered, and how showing up could contribute to a shared community space.",
        ],
        images: [["1215787063908909", "Paint supplies being organized during WHO's sensory playground workday"], ["1215787187242230", "A brightly painted tire prepared for the sensory playground"]],
      },
      {
        kicker: "Local partnerships",
        title: "Warm coats for local families.",
        paragraphs: [
          "In December, Whimsy helped connect Jackson Crossing, Dawn and Travis Parker, WHO, and Lakeland Cabaret. The mall hosted the Parkers' coat drive, and the collected coats went to WHO's Whoville event, with music provided by Lakeland Cabaret's DJ.",
          "The partners brought different things to the effort: a collection location, donated coats, an event that could put them into the community, and entertainment for the gathering. Whimsy's role was to help those contributions come together and share the story of the collaboration.",
        ],
        images: [["1282288987258716", "Donated coats gathered for WHO's Whoville event"], ["1282289017258713", "Lakeland Cabaret providing music at the Whoville gathering"]],
      },
      {
        kicker: "The value",
        title: "Give good work a clearer way to reach people.",
        paragraphs: [
          "For WHO, the team project combined its public identity, website, and marketing materials in support of one mission. The surrounding community work gave that mission specific stories to tell, from a playground taking shape to a coat drive reaching its destination.",
          "For neighbors and potential partners, those stories make participation easier to picture. They show the people involved, the work underway, and the different ways a local business or individual can contribute.",
        ],
        images: [],
      },
    ],
  },
  "heavenly-bakes-and-cakes": {
    title: "Heavenly Bakes & Cakes Advertising",
    summary: "Custom-cake and strawberry advertisements, a local-business spotlight, and holiday promotion for a Jackson baker.",
    heading: "Put the baker's creativity on the menu.",
    introduction: [
      "Heavenly Bakes & Cakes makes custom cakes, hand-dipped strawberries, and other sweet treats. Whimsy's advertising brought that range into view, pairing the products with the details customers need to ask about an order.",
      "The custom-cake ad gives a bright blue birthday cake the center of the page, with a bold headline and pink sunburst drawing attention to the baker's work. Our January 2025 business spotlight added a personal recommendation, recognizing the care behind the creations and encouraging readers to support a local baker.",
    ],
    hero: ["1021283623359255", "Custom-cake advertisement with a blue birthday cake and ordering details"],
    services: ["Advertisement design", "Business storytelling", "Seasonal promotion"],
    sections: [
      {
        kicker: "The business at a glance",
        title: "Make the next step easy to find.",
        paragraphs: [
          "The companion business graphic gives the winged-cupcake identity room to stand out. Its pink rays connect it visually to the custom-cake ad, while the address, phone number, email, and website sit together in a clear contact block.",
          "One piece introduces the business; the other shows what it can make. Both carry the practical information a customer needs to move from admiring a cake to discussing their own occasion.",
        ],
        images: [["1021283576692593", "Heavenly Bakes & Cakes business advertisement with its cupcake identity and contact details"]],
      },
      {
        kicker: "The product detail",
        title: "Let the treats make the invitation.",
        paragraphs: [
          "The strawberry advertisement takes a closer look at the variety: chocolate drizzle, colorful coatings, heart details, and decorated gift boxes. Angled panels bring several examples together without reducing the promotion to a list of flavors.",
          "Soft pinks and illustrated cupcakes surround the product photographs, with the business name and contact information above. The design gives someone choosing a treat or gift a concrete example to ask about.",
        ],
        images: [["1040973798056904", "Chocolate-dipped strawberry advertisement with decorated gift boxes and pink bakery details"]],
      },
      {
        kicker: "Seasonal promotion",
        title: "Bring a local baker into the holiday plans.",
        paragraphs: [
          "For Holiday in the Halls at Jackson Crossing, Whimsy created a Heavenly Bakes & Cakes vendor promotion within the wider event campaign. Evergreen colors, ornaments, gifts, and candy-cane details connected the bakery to the Christmas outing.",
          "Photographs of decorated pretzels, cakesicles, and cupcakes made the invitation specific. The copy suggested treats to enjoy or give as gifts, helping visitors picture a stop at the baker's display as part of their day in the halls.",
        ],
        images: [["1000952525392365", "Heavenly Bakes & Cakes vendor advertisement for Holiday in the Halls"]],
      },
      {
        kicker: "The value for a local food business",
        title: "Give the work behind each treat a wider audience.",
        paragraphs: [
          "A custom baker has more to offer than a product name. Showing the decoration, variety, and care behind the treats helps customers understand what they can request. Clear contact details give that interest somewhere to go.",
          "For the business, product ads and event promotion provide different ways to be discovered. For customers, they offer ideas for celebrations, thoughtful gifts, and a chance to support someone making food in their own community.",
        ],
        images: [],
      },
    ],
  },
  "serenity-support": {
    title: "Serenity Consulting & Community Support",
    summary: "Consulting, training, and hands-on volunteering with Serenity Sober Living House, connecting business planning with practical support for its community work.",
    heading: "Turn useful conversations into practical next steps.",
    introduction: ["Whimsy's relationship with Serenity Sober Living House began through Jackson County Chamber of Commerce networking. Conversations with Nicole and the team covered fundraising, training, marketing, branding, media, administration, and opportunities in the local community.", "Follow-up consulting and training brought more focus to advertising, local resources, partnerships, and putting ideas into action. The relationship also included volunteering at the house during Community Impact Day."],
    hero: ["1437973818356898", "Kay with the Serenity team after a consulting and training session"],
    services: ["Business consulting", "Training and planning", "Community volunteering"],
    sections: [
      { kicker: "Consulting and strategy", title: "Connect the mission to a plan the team can use.", paragraphs: ["The sessions considered how fundraising, advertising, and community presence support one another. Discussing local resources and possible collaborations helped put those ideas in the context of the organization's day-to-day work.", "The consultation and training gave the team space to discuss those opportunities together. Each topic returned to the same practical question: how to put the ideas into action in a way that supports the organization's work."], images: [["1416300217190925", "Kay and Nicole during an early Serenity consulting visit"], ["1437973855023561", "Serenity Sober Living House during the consulting visit"]] },
      { kicker: "Community Impact Day", title: "Support also means showing up to help.", paragraphs: ["Whimsy joined the Chamber's Community Impact Day at Serenity, with Jim Hartnett from Harvest Solar lending a hand. The work included weeding, planting flowers, edging, building a fire pit, and clearing a patio.", "The photographs document the volunteers and outdoor work around the house. This was a separate, practical contribution alongside the consulting relationship, supporting the people caring for the home and its grounds."], images: [["1407931354694478", "Volunteers planting and tending the front garden"], ["1407931418027805", "Kay and a fellow volunteer at the project"], ["1407931661361114", "The lawn and garden after work at Serenity"]] },
    ],
  },
  "cascades-ribbon-cutting": {
    summary: "Advertising, grand-opening promotion, and event photography welcoming Cascades Humane Society to Jackson Crossing and helping people connect with animals in need of a home.",
    heading: "A warm welcome. A chance for a new beginning.",
    introduction: [
      "Cascades Humane Society's new Jackson Crossing location created another place for people to meet animals, learn about adoption, and support local animal care. Whimsy helped introduce it through custom advertisements, grand-opening promotion, and photographs of the celebration.",
      "The work connected a practical invitation with a personal reason to visit. Behind the opening announcement were animals with their own personalities, people ready to care for them, and the possibility of a new companion.",
    ],
    hero: ["cascades-gray-kitten-hero", "A gray tabby kitten looking toward the camera at Cascades Humane Society"],
    services: ["Ad creation", "Grand-opening promotion", "Event photography"],
    sections: [
      {
        kicker: "The advertising",
        title: "A clear invitation, built around a good cause.",
        paragraphs: [
          "We created the grand-opening ad with gold ribbon and scissors, a prominent June 3 date, and the CHS and Jackson Crossing identities. The design gave the opening a sense of occasion while keeping the organization, location, and invitation easy to recognize.",
          "Our social promotion paired the artwork with the details people needed to attend: a 12:30 PM ribbon cutting with the Jackson County Chamber of Commerce, an open house from 12:30 to 2:30 PM, and adoption opportunities and pet viewing until 6 PM. It gave people several ways to take part in the day.",
          "The Adopt Locally ad brought the animals into the message. We paired cat photographs with CHS green, paw prints, and clear location information for the Target wing. The afternoon visiting information gave the audience a practical next step, extending the invitation beyond the grand-opening celebration.",
        ],
        images: [
          ["1426596552827958", "Whimsy's gold ribbon-and-scissors advertisement for the June 3 grand opening"],
          ["cascades-adopt-locally", "Whimsy's Adopt Locally advertisement featuring cats, CHS green, and the Jackson Crossing location"],
        ],
      },
      {
        kicker: "The grand opening",
        title: "A ribbon cut. A community ready to welcome them.",
        paragraphs: [
          "The June 3 opening brought the CHS team, Chamber representatives, and local supporters together to celebrate the new location. Guests gathered around the red ribbon, filled the space, and spent time talking with one another and meeting the animals.",
          "We photographed the ribbon cutting, the crowd, and the welcome at the storefront, then shared the celebration in our follow-up promotion. Those images carried the opening's energy to people who could not attend and gave the new location another opportunity to be discovered.",
        ],
        images: [
          ["cascades-ribbon-cutting", "The CHS team and supporters cutting the red Chamber ribbon at the grand opening"],
          ["cascades-opening-welcome", "Guests gathering beneath the Cascades Humane Society sign and green balloons"],
          ["1426887109465569", "The grand-opening crowd filling the new Cascades Humane Society space"],
          ["1426887206132226", "Visitors talking and meeting animals during the CHS open house"],
        ],
      },
      {
        kicker: "The community impact",
        title: "Better lives for animals. Companionship for people.",
        paragraphs: [
          "Helping animals find caring homes does good on both sides of the relationship. Cats, dogs, and small animals need safety, attention, and people committed to their care. The people who welcome them gain companionship, shared routines, and another member of the household.",
          "Cascades Humane Society brings that work into the community, giving people a place to meet animals and learn how they can help. A visit can become an adoption conversation, an introduction to volunteering, or a decision to support the care that continues every day.",
        ],
        images: [
          ["cascades-community-cat", "A curious tabby kitten at Cascades Humane Society"],
          ["cascades-community-dog", "A gray-and-white dog with a blue collar enjoying a reassuring cuddle"],
          ["cascades-community-small-pet", "A guinea pig peeking out from a pink hideaway at Cascades Humane Society"],
        ],
      },
    ],
  },
  "ingendahl-acres-branding": {
    summary: "Logo designs, stickers, and social graphics for Ingendahl Acres in Wells, Maine, bringing the farm's animals and personality into a recognizable visual identity.",
    heading: "A farm identity with character.",
    introduction: [
      "Ingendahl Acres worked with Whimsy on logos and stickers for its farm in Wells, Maine. The designs draw on the animals at the heart of the business, combining farm imagery with a name people can recognize and remember.",
      "The collection includes bold animal silhouettes, a colorful cow motif, and a Moolisa portrait sticker. Each brings out a different part of the farm's personality, while the printed pieces give that identity a place beyond a screen.",
    ],
    hero: ["708070294680591", "The Moolisa sticker beside a sunflower, with the Ingendahl Acres name around the edge"],
    services: ["Logo design", "Sticker artwork", "Social media graphics"],
    sections: [
      {
        kicker: "The printed identity",
        title: "Small stickers. A clear sense of place.",
        paragraphs: [
          "The black-and-white badge brings a cow, pig, sheep, and chicken together through overlapping silhouettes. The farm name and Wells, Maine location frame the animals, giving the compact design a clear connection to the business.",
          "A second sticker takes a more colorful approach: a cow's head holds a sunset scene and another cow in silhouette. Shown against bark and hay, the finished stickers connect the artwork with the textures and setting of farm life.",
        ],
        images: [
          ["708070388013915", "Ingendahl Acres animal silhouette sticker displayed against tree bark"],
          ["708070331347254", "A sunset-colored cow design on an Ingendahl Acres sticker resting in hay"],
        ],
      },
      {
        kicker: "A family of graphics",
        title: "Different animals. One familiar farm.",
        paragraphs: ["The social graphics use a shared square composition: the Ingendahl Acres name above an animal illustration, an established date below, and a softly faded aerial view of the farm behind it. A cow, a sheep with lambs, and a hen each get their own version.", "That shared structure gives the farm variety while keeping the business recognizable. The subject changes from image to image, and the name, setting, and lettering hold the collection together."],
        images: [
          ["738553398298947", "Ingendahl Acres cow graphic over an aerial farm photograph"],
          ["738553384965615", "Ingendahl Acres sheep and lambs graphic in the matching farm series"],
          ["738553388298948", "Ingendahl Acres hen graphic with the farm name and established date"],
        ],
      },
      {
        kicker: "Event advertising",
        title: "An invitation to Open Farm Day.",
        paragraphs: ["The Open Farm Day ads pair farm-animal photographs with a shared layout, the farm's name, and clear event details. Each version promotes the same gathering, with local vendors, pony rides, a walk-in petting zoo, tie-dye, refreshments, and a food truck, while a different photograph gives each ad its own character."],
        images: [
          ["ingendahl-open-farm-day-garden", "Ingendahl Acres Open Farm Day advertisement with a rooster among flowers, the July 26 date, activities, and Wells address"],
          ["ingendahl-open-farm-day-rooster", "Ingendahl Acres Open Farm Day advertisement with a close-up rooster photograph and the event details"],
          ["ingendahl-open-farm-day-cow", "Ingendahl Acres Open Farm Day advertisement with a cow beside a fence and the event details"],
          ["ingendahl-open-farm-day-lamb", "Ingendahl Acres Open Farm Day advertisement with a lamb photograph and the event details"],
        ],
      },
      {
        kicker: "The value",
        title: "Give a small business something people can remember.",
        paragraphs: ["For Ingendahl Acres, the work provides artwork to use in print and online, with enough variety to show different sides of the farm. For customers and supporters, the animals and place name make the business easier to recognize, while the stickers offer a small, tangible connection to it."],
        images: [],
      },
    ],
  },
};
