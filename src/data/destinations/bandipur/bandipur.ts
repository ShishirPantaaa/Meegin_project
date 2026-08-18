import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const bandipurPlaces: Place[] = [
  {
    id: "bandipur-bazaar",
    slug: "bandipur-bazaar",
    name: "Bandipur Bazaar",
    category: "Culture & Heritage",
    shortDescription:
      "Walk through Bandipur's charming historic streets and discover beautifully preserved Newari architecture in the old town.",
    description:
      "Bandipur Bazaar is the cultural heart of the destination. Originally an important stop on the India-Tibet trade route, the main street is lined with traditional 18th-century Newari wooden homes, cafes, and historic courtyards. It offers a completely vehicle-free, peaceful walking experience that transports you back in time.",
    image: "/images/destinations/bandipur/bazaar.jpg",
    location: "Bandipur Center",
    duration: "2–4 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Traditional Newari architecture",
      "Vehicle-free historic streets",
      "Cafes and local crafts",
      "Photography opportunities",
      "Authentic local lifestyle",
    ],
    travelTips: [
      {
        id: "bazaar-tip-1",
        title: "Explore on foot",
        description: "The main street is pedestrian-only, so prepare for a relaxed stroll.",
        category: "Travel",
      },
      {
        id: "bazaar-tip-2",
        title: "Respect local homes",
        description: "While visually stunning, these are operational homes and businesses.",
        category: "Culture",
      },
    ],
    gallery: [
      { id: "bazaar-g1", src: "/images/destinations/bandipur/bazaar-1.jpg", alt: "Bandipur Old Town historic street", category: "Heritage" },
      { id: "bazaar-g2", src: "/images/destinations/bandipur/bazaar-2.jpg", alt: "Bandipur Newari architecture", category: "Architecture" },
    ],
  },
  {
    id: "khadga-devi-temple",
    slug: "khadga-devi-temple",
    name: "Khadga Devi Temple",
    category: "Spiritual & Heritage",
    shortDescription:
      "Discover the most revered temple in Bandipur, carrying legendary historical significance.",
    description:
      "Khadga Devi Temple holds deep spiritual importance for the local community. Rather than housing traditional statues, the shrine preserves a sacred sword (Khadga) believed to have been a gift from Lord Shiva. Opening fully only once a year during Dashain, its surroundings remain a peaceful and culturally defining landmark year-round.",
    image: "/images/destinations/bandipur/khadga-devi.jpg",
    location: "Bandipur Hillside",
    duration: "1 Hour",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Religious heritage",
      "Sacred sword legend",
      "Local cultural significance",
      "Peaceful hilltop setting",
    ],
    travelTips: [
      {
        id: "khadga-tip-1",
        title: "Observe from the exterior",
        description: "The inner sanctum is tightly restricted, but the grounds are beautiful.",
        category: "Culture",
      },
    ]
  },
  {
    id: "bindebasini-temple",
    slug: "bindebasini-temple",
    name: "Bindebasini Temple",
    category: "Spiritual",
    shortDescription:
      "Visit this peaceful temple located right in the heart of the historic bazaar.",
    description:
      "Located at the northern end of the main bazaar, the Bindebasini Temple is dedicated to the goddess Durga. The temple features beautiful traditional carvings and its walls depict detailed stories from Hindu mythology. It's a serene, easily accessible spiritual spot right in the town's center.",
    image: "/images/destinations/bandipur/bindebasini.jpg",
    location: "Bandipur Bazaar area",
    duration: "30 Minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Traditional wood carvings",
      "Mythological artwork",
      "Central location",
      "Local prayer rhythms",
    ],
    travelTips: [
      {
        id: "binde-tip-1",
        title: "Respect worshippers",
        description: "Keep a quiet and respectful distance from morning rituals.",
        category: "Respect",
      },
    ]
  },
  {
    id: "thani-mai-temple",
    slug: "thani-mai-temple",
    name: "Thani Mai Viewpoint",
    category: "Viewpoint & Nature",
    shortDescription:
      "A scenic hilltop climb offering the absolute best sunrise views in Bandipur.",
    description:
      "The hike up to Thani Mai Temple involves a steady climb up a stone staircase, but the reward is immense. Sitting atop the highest peak near the town, it provides a breathtaking 360-degree panorama of the Himalayan range, including the Machhapuchhre and Annapurna massifs. It is universally considered Bandipur's premier sunrise spot.",
    image: "/images/destinations/bandipur/thani-mai.jpg",
    location: "Hilltop above Bandipur",
    duration: "2 Hours",
    bestTime: "September–May (Early Morning)",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Spectacular sunrise views",
      "Himalayan panoramas",
      "Morning hike",
      "Landscape photography",
    ],
    travelTips: [
      {
        id: "thani-tip-1",
        title: "Start 45 minutes before sunrise",
        description: "The stone steps require a moderate effort, so leave early to catch the light.",
        category: "Planning",
      },
      {
        id: "thani-tip-2",
        title: "Bring a flashlight",
        description: "The path can be dark if you begin your ascent early in the morning.",
        category: "Safety",
      },
    ],
    gallery: [
      { id: "thani-g1", src: "/images/destinations/bandipur/thani-mai-1.jpg", alt: "Thani Mai sunrise", category: "Viewpoint" },
      { id: "thani-g2", src: "/images/destinations/bandipur/thani-mai-2.jpg", alt: "Himalayan view from Thani Mai", category: "Nature" },
    ]
  },
  {
    id: "siddha-gufa",
    slug: "siddha-gufa",
    name: "Siddha Gufa",
    category: "Adventure",
    shortDescription:
      "Venture into Nepal's largest cave network, filled with massive stalactites and underground wonders.",
    description:
      "Siddha Gufa is claimed to be the largest cave in Nepal and the second largest in South Asia. Located about a 90-minute hike down from Bandipur, the cave is a mesmerizing underground world spanning nearly 500 meters deep, featuring enormous stalagmite and stalactite formations.",
    image: "/images/destinations/bandipur/siddha-gufa.jpg",
    location: "Bimalnagar (below Bandipur)",
    duration: "3–4 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Nepal's largest cave",
      "Underground hiking",
      "Stalagmite formations",
      "Adventure trekking",
    ],
    travelTips: [
      {
        id: "siddha-tip-1",
        title: "Hire a local guide",
        description: "The cave is deep and unlit; a guide with torches is highly recommended for safety.",
        category: "Safety",
      },
      {
        id: "siddha-tip-2",
        title: "Wear sturdy shoes",
        description: "The ground inside can be damp, uneven, and slippery.",
        category: "Travel",
      },
    ],
    gallery: [
      { id: "siddha-g1", src: "/images/destinations/bandipur/siddha-gufa-1.jpg", alt: "Siddha Gufa entrance", category: "Adventure" },
      { id: "siddha-g2", src: "/images/destinations/bandipur/siddha-gufa-2.jpg", alt: "Siddha Gufa interior rock formations", category: "Nature" },
    ]
  },
  {
    id: "tundikhel",
    slug: "tundikhel",
    name: "Tundikhel",
    category: "Nature & Viewpoint",
    shortDescription:
      "Relax in Bandipur's former parade ground, an open space offering exceptional Himalayan views.",
    description:
      "Once a staging ground for trading caravans and military parades, Tundikhel is now a beautiful, expansive open field surrounded by fig trees. It provides an unobstructed view of the Marshyangdi Valley below and the prominent peaks of the Dhaulagiri, Machhapuchhre, Langtang, and Manaslu ranges.",
    image: "/images/destinations/bandipur/tundikhel.jpg",
    location: "North of Bandipur Center",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Open ridge lines",
      "Valley and Himalayan views",
      "Relaxing picnic spot",
      "Sunset photography",
    ],
    travelTips: [
      {
        id: "tundi-tip-1",
        title: "Perfect for sunsets",
        description: "While Thani Mai is best for sunrise, Tundikhel shines wonderfully in the late afternoon.",
        category: "Photography",
      },
    ]
  },
  {
    id: "ramkot",
    slug: "ramkot",
    name: "Ramkot Village",
    category: "Village Walk",
    shortDescription:
      "Take a peaceful hike to Ramkot to experience untouched Magar village life and round traditional houses.",
    description:
      "A scenic 2-hour walk west of Bandipur leads to Ramkot, a traditional Magar village. It remains untouched by modern commercialization, featuring unique round houses with thatched roofs. The trail is gentle, winding through forests and terraced fields, making for a perfect half-day cultural excursion.",
    image: "/images/destinations/bandipur/ramkot.jpg",
    location: "2-hour hike from Bandipur",
    duration: "Half Day",
    bestTime: "September–April",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Traditional Magar culture",
      "Round thatched houses",
      "Gentle hiking trails",
      "Untouched rural lifestyle",
    ],
    travelTips: [
      {
        id: "ramkot-tip-1",
        title: "Carry adequate water",
        description: "There are few shops along the trail, so pack hydration and light snacks.",
        category: "Travel",
      },
      {
        id: "ramkot-tip-2",
        title: "Ask before photographing homes",
        description: "Always respect the privacy of the village residents.",
        category: "Culture",
      },
    ],
    gallery: [
      { id: "ramkot-g1", src: "/images/destinations/bandipur/ramkot-1.jpg", alt: "Ramkot village path", category: "Village" },
      { id: "ramkot-g2", src: "/images/destinations/bandipur/ramkot-2.jpg", alt: "Traditional round house in Ramkot", category: "Architecture" },
    ]
  },
  {
    id: "gurungche-hill",
    slug: "gurungche-hill",
    name: "Gurungche Hill",
    category: "Nature & Hiking",
    shortDescription:
      "A moderately challenging hike to a high viewpoint offering spectacular panoramas.",
    description:
      "Gurungche Hill sits opposite the Thani Mai viewpoint and provides an alternative but equally magnificent hike. This spot gives visitors a sweeping perspective over both Bandipur town below and the massive snow-capped ranges stretching across the northern horizon.",
    image: "/images/destinations/bandipur/gurungche-hill.jpg",
    location: "Above Bandipur",
    duration: "2–3 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Sweeping valley views",
      "Overlooking Bandipur town",
      "Nature hiking trails",
      "Quiet viewpoint",
    ],
    travelTips: [
      {
        id: "gurungche-tip-1",
        title: "Wear proper trekking shoes",
        description: "The trail can be steep and loose in minor sections.",
        category: "Travel",
      },
    ]
  }
];

const bandipurHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Step back in time in the car-free Bazaar",
    description: "Explore the main street of Bandipur lined with 18th-century Newari wooden mansions, quaint cafes, and local craft shops.",
  },
  {
    id: "h2",
    title: "Capture Himalayan horizons",
    description: "Enjoy unobstructed views of the Annapurna, Dhaulagiri, and Manaslu mountain ranges from Tundikhel.",
  },
  {
    id: "h3",
    title: "Start your day at Thani Mai",
    description: "Climb the stone steps in the early morning for one of the most remarkable sunrise experiences in central Nepal.",
  },
  {
    id: "h4",
    title: "Descend into Siddha Gufa",
    description: "Add a touch of adventure by spelunking in the depths of Nepal’s largest cave system.",
  },
  {
    id: "h5",
    title: "Experience authentic Magar culture in Ramkot",
    description: "Hike the gentle hillside paths to witness traditional round houses and a slow-paced agricultural lifestyle.",
  },
];

const bandipurExperiences: Experience[] = [
  {
    id: "e1",
    title: "Heritage Walk",
    description: "Wander the brick-paved streets of the Bazaar to admire intricate wooden window carvings.",
    icon: "🏘️",
  },
  {
    id: "e2",
    title: "Sunrise & Sunset",
    description: "Catch the glowing Himalayan peaks from Thani Mai at dawn and Tundikhel at dusk.",
    icon: "🌅",
  },
  {
    id: "e3",
    title: "Cave Exploration",
    description: "Venture deep underground securely with guides into the immense caverns of Siddha Gufa.",
    icon: "🔦",
  },
  {
    id: "e4",
    title: "Cultural Hiking",
    description: "Follow historic trading trails connecting Bandipur to untouched Magar and Gurung villages.",
    icon: "🥾",
  },
];

const bandipurTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "Autumn (Sept-Nov) offers the clearest mountain views, while Spring (Feb-April) brings blooming hill flora.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Prepare to Walk",
    description: "The main town is vehicle-free, making it peaceful but reliant on comfortable walking shoes.",
    category: "Travel",
  },
  {
    id: "t3",
    title: "Limited Nightlife",
    description: "Bandipur is known for tranquility; evenings are best spent relaxing at local cafes or enjoying the stargazing.",
    category: "Planning",
  },
];

const bandipurFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "How long should I stay in Bandipur?",
    answer: "A 2-night stay is highly recommended. It allows you one full day for hiking (like Siddha Gufa or Ramkot) and another to relax in the Bazaar and catch a sunrise.",
  },
  {
    id: "faq2",
    question: "Is Bandipur suitable for older travelers?",
    answer: "Yes, the main Bazaar area is relatively flat, paved, and extremely peaceful. However, some viewpoints require stair climbing.",
  },
  {
    id: "faq3",
    question: "How do I reach Bandipur?",
    answer: "Bandipur sits midway between Kathmandu and Pokhara. You turn off the Prithvi Highway at Dumre and take an 8km scenic drive up the hill.",
  },
  {
    id: "faq4",
    question: "Are there ATMs available?",
    answer: "There are extremely limited banking facilities on the hill. It is highly recommended to carry enough cash from Kathmandu or Pokhara.",
  },
];

const bandipurGallery: GalleryImage[] = [
  { id: "g1", src: "/images/destinations/bandipur/bazaar-2.jpg", alt: "Bandipur evening streets", category: "Heritage" },
  { id: "g2", src: "/images/destinations/bandipur/ramkot-2.jpg", alt: "Newari wood carvings", category: "Culture" },
  { id: "g3", src: "/images/destinations/bandipur/intro.jpg", alt: "Himalayan view from hilltop", category: "Viewpoint" },
  { id: "g4", src: "/images/destinations/bandipur/ramkot.jpg", alt: "Traditional village homestay", category: "Culture" },
];

export const bandipur: Destination = {
  id: "bandipur",
  slug: "bandipur",
  name: "Bandipur",
  tagline: "The Living Museum of Newari Heritage",
  shortDescription:
    "Step into the timeless charm of Bandipur, where traditional Newari architecture, a vehicle-free bazaar, and breathtaking mountain views create an unforgettable romantic and cultural escape.",
  description:
    "Bandipur is a beautifully preserved hilltop town situated midway between Kathmandu and Pokhara. Originally a vital stop on the India-Tibet trade route, it has retained its 18th-century Newari architecture, complete with intricate wooden windows and winding brick-paved streets. With commanding views of the Annapurna and Manaslu ranges, historic temples, and untouched rural trails, Bandipur offers a uniquely peaceful immersion into authentic Nepalese history and hill-culture.",
  heroImage: "/images/destinations/bandipur/hero.jpg",
  introImage: "/images/destinations/bandipur/intro.jpg",
  ctaImage: "/images/destinations/bandipur/cta.jpg",
  location: "Tanahun District, Gandaki Province",
  region: "Central Nepal",
  knownFor:
    "Newari heritage, traditional streetscapes, stunning Himalayan viewpoints, quiet village hikes, and ancient caves.",
  idealFor: [
    "Couples & Romantics",
    "Culture & History enthusiasts",
    "Photographers",
    "Travelers seeking peaceful escapes",
    "Light hikers",
  ],
  recommendedDuration: "1–3 Days",
  bestTime: "September–May",
  numberOfTours: 1, // Reflecting the actual current mapped tours (Bandipur Heritage)
  featured: true,
  places: bandipurPlaces,
  highlights: bandipurHighlights,
  experiences: bandipurExperiences,
  travelTips: bandipurTravelTips,
  faqs: bandipurFaqs,
  gallery: bandipurGallery,
  seo: {
    title: "Bandipur Tours & Travel Packages | MEegin Tours & Travels",
    description:
      "Explore Bandipur, Nepal's most charming historic town. Discover Newari heritage, the car-free bazaar, Himalayan viewpoints, and carefully designed MEegin tour packages.",
    keywords: [
      "Bandipur",
      "Nepal",
      "heritage",
      "Newari culture",
      "mountain views",
      "historic town",
      "tour packages",
      "Bandipur Bazaar",
    ],
  },
};
