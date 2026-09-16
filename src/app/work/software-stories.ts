type Chapter = {
  kicker: string;
  title: string;
  paragraphs: string[];
  points?: { title: string; copy: string }[];
  image?: string;
  alt?: string;
  caption?: string;
};

export const softwareStories: Record<string, { title: string; overview: string[]; chapters: Chapter[] }> = {
  "multiverse-adventurers-guild": {
    title: "A complete game, with a place for every player.",
    overview: [
      "Multiverse Adventurers Guild is a tabletop roleplaying game designed and written by Scott Bieniek. Its heroes can move between fantasy, science fiction, westerns, and other settings. The website had to explain that game while also helping people play it: finding a rule, creating a hero, making a roll, and keeping track of what happens next.",
      "The result brings the game reference, character tools, and an accessible command interface into one application. Players can read and click, type instructions, or use spoken commands and audible responses. Accessibility shapes the interaction itself, including how a player finds controls, hears status updates, and returns to a character during a session.",
    ],
    chapters: [
      {
        kicker: "Accessible interaction",
        title: "A dependable way to speak, listen, and play.",
        paragraphs: [
          "The command button stays at the top right throughout the application. It opens a focused window with a consistently positioned Start Listening control. A player does not have to learn a different route into voice interaction every time the page changes.",
          "The interface announces when speech processing is loading, and distinct sounds mark the beginning and end of listening. The same requests work as typed text or spoken instructions. A player can ask to hear a rule, open the character sheet, inspect equipment, or make a roll without searching through visual controls. For the blind and visually impaired players of the game, this feature has enabled much more freedom to explore.",
        ],
        points: [
          { title: "Create a hero", copy: "Set a name, species, archetype, statistics, skills, weapons, traits, and contacts conversationally, then ask to hear those details again." },
          { title: "Follow the action", copy: "Request rolls and hear the results, apply damage, and receive guidance through the game’s death-watch steps when a character falls below zero." },
          { title: "Reduce arithmetic", copy: "Describe a roll in everyday language. The application combines dice and bonuses and announces the total, reducing the calculation a player needs to do." },
        ],
        image: "/services/multiverse/command-window.png",
        alt: "Multiverse command window with typed commands, listening controls, and spoken responses.",
        caption: "One consistent command window connects rules, character information, and game actions.",
      },
      {
        kicker: "Interactive character management",
        title: "A character sheet that does the work with you.",
        paragraphs: [
          "The sheet brings statistics, skills, defenses, attacks, resources, equipment, talents, contacts, and notes together. Selecting an archetype supplies starting values and traits, along with an appropriate equipment loadout. Related values update as the character changes, while integrated dice controls support checks, attacks, and damage.",
          "Characters can be saved in the browser and reopened from a library. Explicit saves and autosave support ongoing play, while character-file export and import provide a way to back up a hero or move it between devices. A saved character is part of the application’s navigation, so returning to play does not mean starting the setup again.",
        ],
        image: "/services/multiverse/playable-sheet.png",
        alt: "Multiverse playable character sheet with statistics, skills, equipment, and dice controls.",
        caption: "Character information and playable controls stay together throughout an adventure.",
      },
      {
        kicker: "Content and navigation",
        title: "Keep the rulebook connected as it grows.",
        paragraphs: [
          "Players and Game Masters each have a dedicated section explaining the game's rules. Stable section links let a character-sheet label lead directly to the rule behind a skill, item, weapon, or talent. That makes the publication useful in the middle of a game, when a player needs a specific answer quickly.",
        ],
      },
      {
        kicker: "Responsive delivery",
        title: "Bring the reference and the tools to the table.",
        paragraphs: [
          "The rebuild carries the original game’s identity into a clearer application with stronger hierarchy, contrast, spacing, and direct navigation. On smaller screens, controls and content reorganize for the space available rather than shrinking the desktop layout.",
          "That combination matters during real play. The rules remain available on a phone, the character library stays within reach, and the command interface offers another way to use the same tools. The project demonstrates how a content-heavy website can become an interactive product without separating the publication from the audience using it.",
        ],
        image: "/services/multiverse/character-library-desktop.png",
        alt: "Multiverse character library with saved heroes and character creation options.",
        caption: "The character library gives returning players a direct route back into the game.",
      },
    ],
  },
  "sonic-shielding": {
    title: "More control over the sound coming from a browser.",
    overview: [
      "A video, meeting, or web page can move abruptly from quiet speech to an alarm, beep, or loud impact. Sonic Shielding was built to give listeners more control over those changes in Chrome and Brave. Its purpose is to soften uncomfortable audio while keeping conversation and useful sound recognizable.",
      "The work combines a browser extension, a real-time audio engine, and controls that explain what the listener can change. Protection is chosen per tab, with a saved comfort profile for frequency preferences. Audio stays on the device throughout processing.",
    ],
    chapters: [
      {
        kicker: "The listening experience",
        title: "Choose a tab, then shape the response.",
        paragraphs: [
          "The setup flow explains how to pin the extension and start protection for the current tab. The user remains in control of which tabs are protected rather than having every browser sound silently redirected. Setup guidance, the extension toggle, and the detailed controls each have a distinct role.",
          "Listeners can adjust how the extension responds to tonal sounds, sudden peaks, and alarm-like patterns, with speech preservation included in that balance. This makes the controls a way to tune the experience instead of relying on a single on-or-off reduction for every kind of audio.",
        ],
        image: "/work/software/sonic-controls.png",
        alt: "Sonic Shielding controls for tonal, peak, alarm, and speech-preserving audio protection.",
        caption: "The interface connects listening preferences to specific kinds of sound reduction.",
      },
      {
        kicker: "The audio engine",
        title: "Different sounds need different treatment.",
        paragraphs: [
          "A Web Audio processor examines short windows of sound from a protected tab. It looks for prominent tones and sudden level changes, then applies the response selected by the listener. Persistent tonal candidates are tracked across successive windows so an isolated spectral peak is not automatically treated as an alarm.",
          "The engine uses targeted filters for tones and a separate limiter for broadband clicks, impacts, and bursts. A short look-ahead delay gives the processor time to analyze a peak before it reaches the output. Attack and release behavior control how quickly reduction begins and how smoothly normal audio returns.",
        ],
        points: [
          { title: "Tones and beeps", copy: "Adaptive notch filters track confirmed frequencies and reduce their prominence without applying the same cut across the whole audio signal." },
          { title: "Alarm patterns", copy: "Aggressive mode looks for multiple stable tonal components. When that pattern is confirmed, the response can widen and temporarily reduce the overall signal." },
          { title: "Speech and peaks", copy: "Speech-aware thresholds avoid treating ordinary voiced harmonics as alarms, while the limiter separately catches sudden broadband level changes." },
        ],
      },
      {
        kicker: "Personal preferences",
        title: "A listening profile the user can fine-tune.",
        paragraphs: [
          "A nine-band comfort profile spans low frequencies through the upper range of browser audio. Saved reductions control individual frequency bands, allowing a listener to soften the areas they find uncomfortable without making one blanket volume change.",
          "The controls expose the tradeoffs behind the processing: how sensitive tone detection should be, which frequencies it should consider, how strongly it should respond, and how quickly it should release the reduction. Keeping those choices together makes it easier to understand and revisit the profile.",
        ],
        image: "/work/software/sonic-profile.png",
        alt: "Sonic Shielding saved comfort profile with frequency and sound protection settings.",
        caption: "Frequency preferences and protection settings remain under the listener’s control.",
      },
      {
        kicker: "Privacy and practical delivery",
        title: "Process the audio where it is played.",
        paragraphs: [
          "The extension processes audio locally in the browser. It does not record the sound, upload it, or send it to a remote analysis service. Processing resources are also released while protected audio is silent, keeping the implementation attentive to how the extension is used between active listening periods.",
          "The project includes setup information, support guidance, and a privacy explanation alongside the extension itself. Those materials help users understand both the controls and the boundaries of the product. Sonic Shielding is a listening-comfort tool; it does not promise to prevent migraine symptoms or replace medical care.",
        ],
      },
    ],
  },
  "whimsy-warden": {
    title: "Know when an application needs attention.",
    overview: [
      "Running websites and applications means looking after them after launch. A service can be reachable but unusually slow, or stop responding altogether. Whimsy’s Warden brings those conditions into one monitoring system for production applications and stable beta deployments.",
      "The project combines concurrent service probes, scheduled checks, stored incident state, a responsive dashboard, and email notifications. Its job is to make the current operational picture easy to read and to call attention to a new problem without sending the same message over and over.",
    ],
    chapters: [
      {
        kicker: "Monitoring engine",
        title: "Check several services without waiting on the slowest one.",
        paragraphs: [
          "The Go monitoring engine checks targets through a bounded pool of workers. Multiple requests can run together, while the concurrency limit keeps the process controlled. Explicit timeouts and cancellation prevent a service that is slow or unresponsive from keeping the entire check open indefinitely.",
          "Connection reuse, redirect limits, and deliberate TLS settings keep the HTTP client predictable. A shared target inventory describes the applications being checked, and results return in a consistent order even when individual requests finish at different times. That makes the same information easier to use in command-line output, tests, and the dashboard.",
        ],
      },
      {
        kicker: "From check to notification",
        title: "A complete cycle every five minutes.",
        paragraphs: [
          "Scheduled edge checks evaluate availability and response latency, then save the latest snapshot and incident information. The dashboard reads that operational state, while notification decisions compare what just happened with what the system already knows.",
          "Keeping a snapshot and incident state serves two different purposes. The snapshot explains the latest check to someone viewing the dashboard. The incident state helps the system decide whether a problem is new, continuing, or has recovered before another alert is needed.",
        ],
        points: [
          { title: "Schedule and probe", copy: "A scheduled Cloudflare Worker starts checks every five minutes and gathers availability and latency results for the configured targets." },
          { title: "Keep the current picture", copy: "Cloudflare KV stores the latest snapshot and incident state so the dashboard and alerting decisions share the same evidence." },
          { title: "Notify when it matters", copy: "Email reports new outages and responses above the configured 500 ms threshold. A continuing incident does not trigger duplicate alerts at every check." },
        ],
      },
      {
        kicker: "Operational interface",
        title: "Read the whole system, then focus on a service.",
        paragraphs: [
          "The dashboard summarizes healthy and degraded services, median latency, and the time of the latest check. Individual service cards provide the detail behind that summary. Production and beta filters narrow the view, and a manual refresh can request another check when someone needs current evidence.",
          "The layout adapts across desktop, tablet, and mobile screens so the same information can be reviewed at a workstation or on the go. The interface is dependency-free, keeping the dashboard focused on a small set of operational tasks rather than requiring a larger application framework just to report service health.",
        ],
        image: "/work/software/warden-dashboard.png",
        alt: "Whimsy’s Warden dashboard with health totals, response times, environment filters, and service cards.",
        caption: "A recorded dashboard view illustrates the interface; current service status is available in the live Warden.",
      },
      {
        kicker: "Production and beta",
        title: "Test changes without duplicating production incidents.",
        paragraphs: [
          "Production and beta deploy independently. The beta environment has its own storage namespace and does not run the production alerting schedule. That separation allows changes to be checked without creating a second stream of notifications for the same real-world issue.",
          "The interface and API are served at the edge with responses configured to avoid stale cached status and with structured logs for observability. Together, those choices make Warden an example of the less visible work behind a useful digital service: checking it, reporting its condition clearly, and supporting it beyond the initial launch.",
        ],
      },
    ],
  },
};
