import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const lumbiniPlaces: Place[] = [
  {
    id: "maya-devi-temple",
    slug: "maya-devi-temple",
    name: "Maya Devi Temple",
    category: "Spiritual & Heritage",
    shortDescription:
      "Stand at the sacred birthplace of Buddha, where history and spirituality come together.",
    description:
      "Maya Devi Temple is the spiritual heart of Lumbini and the sacred site associated with the birth of Siddhartha Gautama, who became Buddha. Its peaceful surroundings and ancient heritage make it one of Nepal's most meaningful places to visit.",
    image: "/images/destinations/lumbini/maya-devi-temple.jpg",
    location: "Lumbini, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Sacred birthplace of Buddha",
      "Ancient archaeological remains",
      "Peaceful surroundings",
      "Spiritual experience",
    ],
    travelTips: [
      {
        id: "maya-devi-tip-1",
        title: "Visit in the morning",
        description: "The temple is quietest and most peaceful before the midday crowds arrive.",
        category: "Planning",
      },
      {
        id: "maya-devi-tip-2",
        title: "Dress respectfully",
        description: "Modest clothing and quiet behavior help maintain the reverence of the sacred site.",
        category: "Culture",
      },
      {
        id: "maya-devi-tip-3",
        title: "Allow time to reflect",
        description: "The atmosphere is calm and meaningful, so a slow visit is often the most rewarding.",
        category: "Experience",
      },
    ],
    gallery: [
      {
        id: "maya-g1",
        src: "/images/destinations/lumbini/maya-devi-temple-1.jpg",
        alt: "Maya Devi Temple in Lumbini",
        category: "Temple",
      },
      {
        id: "maya-g2",
        src: "/images/destinations/lumbini/maya-devi-temple-2.jpg",
        alt: "Sacred atmosphere at Maya Devi Temple",
        category: "Heritage",
      },
    ],
  },
  {
    id: "sacred-garden",
    slug: "sacred-garden",
    name: "Lumbini Sacred Garden",
    category: "Nature & Spirituality",
    shortDescription:
      "A peaceful garden where ancient heritage, nature and spirituality create a deeply calming experience.",
    description:
      "The Sacred Garden surrounds the most important heritage sites of Lumbini. Walk beneath peaceful trees, explore historic landmarks and enjoy a quiet atmosphere that makes this area perfect for reflection and photography.",
    image: "/images/destinations/lumbini/sacred-garden.jpg",
    location: "Lumbini Sacred Garden, Rupandehi",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Peaceful gardens",
      "Sacred heritage",
      "Walking paths",
      "Meditation atmosphere",
    ],
    travelTips: [
      {
        id: "sacred-garden-tip-1",
        title: "Take a slow walk",
        description: "The garden is best enjoyed at a relaxed pace, allowing you to notice its calm atmosphere.",
        category: "Experience",
      },
      {
        id: "sacred-garden-tip-2",
        title: "Bring a camera",
        description: "The greenery, stone paths and heritage sites create some of the best photo moments in Lumbini.",
        category: "Photography",
      },
      {
        id: "sacred-garden-tip-3",
        title: "Pause for reflection",
        description: "This area is ideal for quiet moments and mindful observation of the surroundings.",
        category: "Spirituality",
      },
    ],
    gallery: [
      {
        id: "sacred-garden-g1",
        src: "/images/destinations/lumbini/sacred-garden.jpg",
        alt: "Sacred Garden walkway in Lumbini",
        category: "Garden",
      },
      {
        id: "sacred-garden-g2",
        src: "/images/destinations/lumbini/sacred-garden-1.jpg",
        alt: "Peaceful Lumbini garden setting",
        category: "Nature",
      },
    ],
  },
  {
    id: "ashoka-pillar",
    slug: "ashoka-pillar",
    name: "Ashoka Pillar",
    category: "History & Heritage",
    shortDescription:
      "Discover an ancient landmark connecting Lumbini with centuries of Buddhist history.",
    description:
      "The Ashoka Pillar is one of Lumbini's most important historical landmarks. Erected during the reign of Emperor Ashoka, it stands as a powerful symbol of Lumbini's ancient Buddhist heritage.",
    image: "/images/destinations/lumbini/ashoka-pillar.jpg",
    location: "Lumbini, Rupandehi",
    duration: "30–45 minutes",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Ancient historical landmark",
      "Buddhist heritage",
      "Archaeological importance",
      "Photography",
    ],
    travelTips: [
      {
        id: "ashoka-tip-1",
        title: "Learn the story",
        description: "Understanding the Ashoka connection adds deeper meaning to the visit.",
        category: "History",
      },
      {
        id: "ashoka-tip-2",
        title: "Take a quick stop",
        description: "It is a short but memorable stop, perfect alongside nearby heritage sites.",
        category: "Planning",
      },
      {
        id: "ashoka-tip-3",
        title: "Photograph early light",
        description: "The pillar and surrounding heritage area look especially beautiful in softer morning light.",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "ashoka-g1",
        src: "/images/destinations/lumbini/ashoka-pillar.jpg",
        alt: "Ashoka Pillar in Lumbini",
        category: "Heritage",
      },
      {
        id: "ashoka-g2",
        src: "/images/destinations/lumbini/ashoka-pillar-1.jpg",
        alt: "Ancient Ashoka pillar and historic setting",
        category: "History",
      },
    ],
  },
  {
    id: "world-peace-pagoda",
    slug: "world-peace-pagoda",
    name: "World Peace Pagoda",
    category: "Peace & Spirituality",
    shortDescription:
      "A striking symbol of peace rising above the peaceful landscape of Lumbini.",
    description:
      "The World Peace Pagoda offers visitors a beautiful place to pause, reflect and enjoy the calm atmosphere of Lumbini. Its elegant white structure and peaceful surroundings make it a memorable stop for travelers seeking serenity.",
    image: "/images/destinations/lumbini/world-peace-pagoda.jpg",
    location: "Lumbini, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Symbol of peace",
      "Beautiful architecture",
      "Peaceful surroundings",
      "Photography",
    ],
    travelTips: [
      {
        id: "world-peace-tip-1",
        title: "Slow down and enjoy the view",
        description: "The pagoda is a perfect place to pause and take in the spiritual atmosphere.",
        category: "Experience",
      },
      {
        id: "world-peace-tip-2",
        title: "Visit in clear weather",
        description: "Good visibility makes the surrounding landscape feel even more serene and open.",
        category: "Weather",
      },
      {
        id: "world-peace-tip-3",
        title: "Bring water",
        description: "The area is easy to explore at a relaxed pace, but it is helpful to stay hydrated.",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "world-peace-g1",
        src: "/images/destinations/lumbini/world-peace-pagoda.jpg",
        alt: "World Peace Pagoda in Lumbini",
        category: "Spirituality",
      },
      {
        id: "world-peace-g2",
        src: "/images/destinations/lumbini/world-peace-pagoda-1.jpg",
        alt: "White pagoda overlooking peaceful surroundings",
        category: "Architecture",
      },
    ],
  },
  {
    id: "lumbini-monastic-zone",
    slug: "lumbini-monastic-zone",
    name: "Lumbini Monastic Zone",
    category: "Culture & Architecture",
    shortDescription:
      "Explore beautiful monasteries from different Buddhist traditions gathered in one peaceful destination.",
    description:
      "The Monastic Zone brings together monasteries representing different Buddhist traditions from around the world. Each monastery offers its own architecture, artistic style and cultural character, making the area a fascinating journey through global Buddhist heritage.",
    image: "/images/destinations/lumbini/monastic-zone.jpg",
    location: "Lumbini Monastic Zone, Rupandehi",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "International monasteries",
      "Buddhist architecture",
      "Cultural diversity",
      "Peaceful environment",
    ],
    travelTips: [
      {
        id: "monastic-zone-tip-1",
        title: "Explore one monastery at a time",
        description: "The area is large and each monastery has a distinct atmosphere, so a slow visit feels richer.",
        category: "Exploration",
      },
      {
        id: "monastic-zone-tip-2",
        title: "Respect quiet spaces",
        description: "Many monasteries are places of worship and reflection, so silence is appreciated.",
        category: "Culture",
      },
      {
        id: "monastic-zone-tip-3",
        title: "Look for architecture details",
        description: "The differences in design and decoration are one of the highlights of the zone.",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "monastic-zone-g1",
        src: "/images/destinations/lumbini/monastic-zone.jpg",
        alt: "Monastic Zone in Lumbini",
        category: "Architecture",
      },
      {
        id: "monastic-zone-g2",
        src: "/images/destinations/lumbini/monastic-zone-1.jpg",
        alt: "Buddhist monastery architecture in Lumbini",
        category: "Culture",
      },
    ],
  },
  {
    id: "myanmar-golden-temple",
    slug: "myanmar-golden-temple",
    name: "Myanmar Golden Temple",
    category: "Buddhist Architecture",
    shortDescription:
      "Admire one of Lumbini's distinctive monasteries, inspired by traditional Myanmar Buddhist architecture.",
    description:
      "The Myanmar Golden Temple stands out with its traditional architectural style and peaceful atmosphere. It gives visitors a glimpse into Myanmar's Buddhist traditions while adding another cultural layer to the Lumbini experience.",
    image: "/images/destinations/lumbini/myanmar-golden-temple.jpg",
    location: "Lumbini Monastic Zone, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Myanmar architecture",
      "Buddhist heritage",
      "Unique design",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "myanmar-tip-1",
        title: "Appreciate the details",
        description: "The temple's design and colors are rich with cultural meaning and visual beauty.",
        category: "Architecture",
      },
      {
        id: "myanmar-tip-2",
        title: "Take a quiet moment",
        description: "Its calm setting makes it ideal for a moment of stillness and reflection.",
        category: "Spirituality",
      },
      {
        id: "myanmar-tip-3",
        title: "Keep your visit gentle",
        description: "The temple is a sacred place, so quiet observation is always appreciated.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "myanmar-g1",
        src: "/images/destinations/lumbini/myanmar-golden-temple.jpg",
        alt: "Myanmar Golden Temple in Lumbini",
        category: "Architecture",
      },
      {
        id: "myanmar-g2",
        src: "/images/destinations/lumbini/myanmar-golden-temple-1.jpg",
        alt: "Golden Buddhist temple and serene surroundings",
        category: "Culture",
      },
    ],
  },
  {
    id: "chinese-zhong-hua-temple",
    slug: "chinese-zhong-hua-temple",
    name: "Chinese Zhong Hua Temple",
    category: "Culture & Architecture",
    shortDescription:
      "Experience beautiful Chinese Buddhist architecture in the peaceful heart of Lumbini.",
    description:
      "The Chinese Zhong Hua Temple showcases elegant Chinese Buddhist architecture and offers a peaceful space for visitors. Its distinctive design makes it one of the memorable architectural highlights of the Monastic Zone.",
    image: "/images/destinations/lumbini/chinese-zhong-hua-temple.jpg",
    location: "Lumbini Monastic Zone, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Chinese architecture",
      "Buddhist culture",
      "Peaceful environment",
      "Photography",
    ],
    travelTips: [
      {
        id: "chinese-tip-1",
        title: "Look for artistic details",
        description: "The temple's architecture and decorations capture the beauty of Chinese Buddhist design.",
        category: "Architecture",
      },
      {
        id: "chinese-tip-2",
        title: "Enjoy a quiet pause",
        description: "It is a good place to slow down and enjoy the calm atmosphere of the monastic area.",
        category: "Spirituality",
      },
      {
        id: "chinese-tip-3",
        title: "Move at your own pace",
        description: "The temple's charm is best appreciated without rushing from one site to the next.",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "chinese-g1",
        src: "/images/destinations/lumbini/chinese-zhong-hua-temple.jpg",
        alt: "Chinese temple in Lumbini Monastic Zone",
        category: "Architecture",
      },
      {
        id: "chinese-g2",
        src: "/images/destinations/lumbini/chinese-zhong-hua-temple-1.jpg",
        alt: "Chinese Buddhist architecture and serene setting",
        category: "Culture",
      },
    ],
  },
  {
    id: "thai-monastery",
    slug: "thai-monastery",
    name: "Thai Monastery",
    category: "Architecture & Spirituality",
    shortDescription:
      "Discover elegant Thai-inspired Buddhist architecture surrounded by a calm and welcoming atmosphere.",
    description:
      "The Thai Monastery brings the beauty of Thai Buddhist architecture to Lumbini. Its graceful design, peaceful surroundings and cultural character make it a wonderful stop for visitors exploring the Monastic Zone.",
    image: "/images/destinations/lumbini/thai-monastery.jpg",
    location: "Lumbini Monastic Zone, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Thai architecture",
      "Buddhist traditions",
      "Peaceful surroundings",
      "Cultural experience",
    ],
    travelTips: [
      {
        id: "thai-tip-1",
        title: "Explore for details",
        description: "The monastery stands out for its graceful forms, colors and cultural styling.",
        category: "Architecture",
      },
      {
        id: "thai-tip-2",
        title: "Stay mindful of the atmosphere",
        description: "The site feels peaceful and reflective, so a calm pace adds to the experience.",
        category: "Culture",
      },
      {
        id: "thai-tip-3",
        title: "Capture cultural beauty",
        description: "The architecture and surroundings make it an excellent place for thoughtful photography.",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "thai-g1",
        src: "/images/destinations/lumbini/thai-monastery.jpg",
        alt: "Thai Monastery in Lumbini",
        category: "Architecture",
      },
      {
        id: "thai-g2",
        src: "/images/destinations/lumbini/thai-monastery-1.jpg",
        alt: "Thai Buddhist architecture in peaceful surroundings",
        category: "Spirituality",
      },
    ],
  },
  {
    id: "korean-temple",
    slug: "korean-temple",
    name: "Korean Temple",
    category: "Culture & Spirituality",
    shortDescription:
      "Experience the simplicity, beauty and peaceful character of Korean Buddhist traditions.",
    description:
      "The Korean Temple offers visitors a calm introduction to Korean Buddhist culture and architecture. Its peaceful environment provides a beautiful contrast to the surrounding heritage sites of Lumbini.",
    image: "/images/destinations/lumbini/korean-temple.jpg",
    location: "Lumbini Monastic Zone, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Korean Buddhist culture",
      "Traditional architecture",
      "Peaceful environment",
      "Cultural experience",
    ],
    travelTips: [
      {
        id: "korean-tip-1",
        title: "Take time to observe",
        description: "The simplicity and design of the temple create a calming experience that rewards patient viewing.",
        category: "Experience",
      },
      {
        id: "korean-tip-2",
        title: "Respect surrounding silence",
        description: "The temple and surrounding gardens offer a quiet setting for reflection.",
        category: "Culture",
      },
      {
        id: "korean-tip-3",
        title: "Combine with nearby sites",
        description: "Pairing the temple with neighboring monasteries helps you fully appreciate the monastic zone.",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "korean-g1",
        src: "/images/destinations/lumbini/korean-temple.jpg",
        alt: "Korean Temple in Lumbini",
        category: "Culture",
      },
      {
        id: "korean-g2",
        src: "/images/destinations/lumbini/korean-temple-1.jpg",
        alt: "Peaceful Korean Buddhist temple setting",
        category: "Spirituality",
      },
    ],
  },
  {
    id: "lumbini-museum",
    slug: "lumbini-museum",
    name: "Lumbini Museum",
    category: "History & Education",
    shortDescription:
      "Discover the history, archaeology and Buddhist heritage behind one of Nepal's most important destinations.",
    description:
      "The Lumbini Museum helps visitors understand the history and cultural significance of Lumbini through exhibits and heritage information. It is an excellent stop for travelers who want to look beyond the monuments and understand the story of this sacred destination.",
    image: "/images/destinations/lumbini/lumbini-museum.jpg",
    location: "Lumbini, Rupandehi",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Buddhist history",
      "Archaeological heritage",
      "Cultural exhibits",
      "Educational experience",
    ],
    travelTips: [
      {
        id: "museum-tip-1",
        title: "Visit before or after the monuments",
        description: "The museum gives helpful context before exploring the sacred area in more detail.",
        category: "Planning",
      },
      {
        id: "museum-tip-2",
        title: "Take your time with the exhibits",
        description: "The displays connect Lumbini's story to Buddhist heritage and local history.",
        category: "Education",
      },
      {
        id: "museum-tip-3",
        title: "Bring curiosity",
        description: "The museum makes the site's spiritual and historical significance easier to understand.",
        category: "Experience",
      },
    ],
    gallery: [
      {
        id: "museum-g1",
        src: "/images/destinations/lumbini/lumbini-museum.jpg",
        alt: "Lumbini Museum exhibits",
        category: "Museum",
      },
      {
        id: "museum-g2",
        src: "/images/destinations/lumbini/lumbini-museum-1.jpg",
        alt: "Historical heritage exhibits in Lumbini Museum",
        category: "History",
      },
    ],
  },
  {
    id: "pushkarini-pool",
    slug: "pushkarini-pool",
    name: "Pushkarini Pool",
    category: "Peace & Nature",
    shortDescription: "A serene sacred pond near key heritage sites.",
    description:
      "Pushkarini Pool adds a calm and contemplative layer to the Lumbini experience. Located close to major monuments, it is often included in spiritual and cultural walks through the core heritage zone. The still water, open surroundings and nearby sacred landmarks make it a memorable stop for visitors interested in atmosphere as much as architecture.",
    image: "/images/destinations/lumbini/pushkarini-pool.jpg",
    location: "Sacred Garden, Lumbini",
    duration: "30–45 minutes",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Sacred pond",
      "Peaceful atmosphere",
      "Heritage surroundings",
      "Reflection and photography",
    ],
    travelTips: [
      {
        id: "pushkarini-tip-1",
        title: "Visit in the morning",
        description: "The pool is most serene before midday crowds arrive.",
        category: "Planning",
      },
      {
        id: "pushkarini-tip-2",
        title: "Keep the area clean",
        description: "The sacred pond should be respected and kept free of litter.",
        category: "Responsibility",
      },
      {
        id: "pushkarini-tip-3",
        title: "Move quietly",
        description: "The pond is a reflective space — a slow, quiet visit is most rewarding.",
        category: "Experience",
      },
    ],
    gallery: [
      {
        id: "pushkarini-g1",
        src: "/images/destinations/lumbini/pushkarini-pool.jpg",
        alt: "Pushkarini Pool in the Lumbini Sacred Garden",
        category: "Nature",
      },
      {
        id: "pushkarini-g2",
        src: "/images/destinations/lumbini/pushkarini-pool-1.jpg",
        alt: "Sacred pond surrounded by heritage monuments",
        category: "Heritage",
      },
    ],
  },
];

const lumbiniHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Birthplace of Buddha",
    description: "Walk through the sacred grounds where the journey of Buddha began.",
  },
  {
    id: "h2",
    title: "Peaceful gardens",
    description: "Find calm among temples, pathways and reflective spaces across the heritage complex.",
  },
  {
    id: "h3",
    title: "Global Buddhist heritage",
    description: "Discover monasteries and traditions from across the Buddhist world in one destination.",
  },
  {
    id: "h4",
    title: "Historic landmarks",
    description: "Visit the Ashoka Pillar and other sacred monuments that connect visitors to the past.",
  },
];

const lumbiniExperiences: Experience[] = [
  {
    id: "e1",
    title: "Sacred pilgrimage",
    description: "Explore the birthplace of Buddha and experience a deeply meaningful spiritual setting.",
    icon: "🙏",
  },
  {
    id: "e2",
    title: "Quiet reflection",
    description: "Walk through peaceful gardens and meditation spaces designed for calm and contemplation.",
    icon: "🧘",
  },
  {
    id: "e3",
    title: "Monastic exploration",
    description: "Visit international monasteries and witness the diversity of Buddhist architecture and culture.",
    icon: "🏯",
  },
  {
    id: "e4",
    title: "Heritage learning",
    description: "Understand the history of Lumbini through the museum and the sacred sites around it.",
    icon: "📚",
  },
];

const lumbiniTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best time to visit",
    description: "October to March is ideal for cooler weather, comfortable walking and clearer sightseeing.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Wear respectful clothing",
    description: "Modest outfits are the best choice during temple visits and quiet monastery walks.",
    category: "Culture",
  },
  {
    id: "t3",
    title: "Plan a relaxed day",
    description: "Lumbini is most rewarding when you move slowly, visit key sites and allow time for reflection.",
    category: "Planning",
  },
  {
    id: "t4",
    title: "Bring essentials",
    description: "Comfortable footwear, water and sun protection make the visit easier and more enjoyable.",
    category: "Travel",
  },
];

const lumbiniFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Is Lumbini a holy place for Buddhists?",
    answer: "Yes. Lumbini is one of the most sacred destinations in Buddhism and is strongly associated with the birth of Lord Buddha.",
  },
  {
    id: "faq2",
    question: "Can travelers of all faiths visit Lumbini?",
    answer: "Absolutely. Visitors from all backgrounds are welcome to explore the heritage sites respectfully.",
  },
  {
    id: "faq3",
    question: "How long should I spend in Lumbini?",
    answer: "A day or two is usually enough for the major sacred and heritage sites, but longer stays are ideal for a reflective visit.",
  },
  {
    id: "faq4",
    question: "What is the best time to visit?",
    answer: "October to March offers the most comfortable weather and the best conditions for walking, photography and spiritual exploration.",
  },
];

const lumbiniGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/lumbini/hero.jpg",
    alt: "Lumbini sacred heritage landscape",
    category: "Heritage",
  },
  {
    id: "g2",
    src: "/images/destinations/lumbini/intro.jpg",
    alt: "Peaceful spiritual atmosphere in Lumbini",
    category: "Spirituality",
  },
  {
    id: "g3",
    src: "/images/destinations/lumbini/cta.jpg",
    alt: "Lumbini monastery and sacred environment",
    category: "Culture",
  },
];

export const lumbini: Destination = {
  id: "lumbini",
  slug: "lumbini",
  name: "Lumbini",
  tagline: "Walk Where the Journey of Buddha Began",
  shortDescription:
    "Discover the birthplace of Lord Buddha, peaceful monasteries, sacred gardens and a timeless atmosphere of spirituality.",
  description:
    "Lumbini is one of the world's most important spiritual destinations and the sacred birthplace of Lord Buddha. With peaceful gardens, ancient archaeological remains, beautiful monasteries and sacred landmarks, Lumbini offers travelers a meaningful journey through history, spirituality and Buddhist culture.",
  heroImage: "/images/destinations/lumbini/lumbini.jpg",
  introImage: "/images/destinations/lumbini/intro.jpg",
  ctaImage: "/images/destinations/lumbini/cta.jpg",
  location: "Rupandehi, Nepal",
  region: "Lumbini Province",
  knownFor: "Birthplace of Lord Buddha, Buddhist heritage, monasteries and spiritual tourism",
  idealFor: [
    "Spiritual travelers",
    "History lovers",
    "Families",
    "Photographers",
    "Culture enthusiasts",
  ],
  recommendedDuration: "1–2 Days",
  bestTime: "October–March",
  numberOfTours: 12,
  featured: true,
  places: lumbiniPlaces,
  highlights: lumbiniHighlights,
  experiences: lumbiniExperiences,
  travelTips: lumbiniTravelTips,
  faqs: lumbiniFaqs,
  gallery: lumbiniGallery,
  seo: {
    title: "Lumbini Travel Guide | Meegin Tours & Travels",
    description:
      "Discover the spiritual heart of Lumbini, the birthplace of Lord Buddha. Explore sacred gardens, Buddhist heritage, monasteries and peaceful cultural experiences.",
  },
};
