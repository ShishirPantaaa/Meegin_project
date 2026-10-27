import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const pokharaPlaces: Place[] = [
  {
    id: "phewa-lake",
    slug: "phewa-lake",
    name: "Phewa Lake",
    shortDescription: "Peaceful lake rides with mountain reflections and lakeside cafés.",
    description:
      "A shimmering freshwater lake framed by hills and the Annapurna range, ideal for boat rides, sunrise photography and relaxed lakeside dining. The lake is the heart of Pokhara tourism, where you can enjoy activities from quiet rowing to adventurous water sports.",
    image: "/images/destinations/pokhara/lakeside.jpg",
    location: "Pokhara",
    category: "Lakes",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "pokhara-adventure",
    highlights: [
      "Mountain reflection photography",
      "Traditional boat rowing",
      "Lakeside cafés with Himalayan views",
      "Sunset boat cruises",
    ],
  },
  {
    id: "sarangkot",
    slug: "sarangkot",
    name: "Sarangkot",
    shortDescription: "Sunrise viewpoint with Himalayan panoramas and paragliding launches.",
    description:
      "Sarangkot is a ridge-top viewpoint offering sunrise vistas over the Annapurna range and Pokhara Valley, plus paragliding takeoff sites for adventurous travelers. Early morning visits reward you with stunning light over snow-capped peaks.",
    image: "/images/destinations/pokhara/sarangkot.jpg",
    location: "Sarangkot",
    category: "Viewpoint",
    duration: "3–4 hours",
    bestTime: "September–December",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Sunrise over Annapurna range",
      "Panoramic valley views",
      "Paragliding opportunities",
      "Hiking trails",
    ],
  },
  {
    id: "world-peace-pagoda",
    slug: "world-peace-pagoda",
    name: "World Peace Pagoda",
    shortDescription: "A hilltop stupa offering serene views over the lake and valley.",
    description:
      "This white-domed pagoda sits above Phewa Lake and is a calm spiritual spot with sweeping views, meditation spaces and a gentle hillside walk. Built by Japanese Buddhist monks, it welcomes visitors of all faiths.",
    image: "/images/destinations/pokhara/world-peace-pagoda.jpg",
    location: "Phewa Lake",
    category: "Religion",
    duration: "2 hours",
    bestTime: "October–April",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Spiritual meditation",
      "360-degree valley views",
      "Peaceful walking paths",
      "Photography opportunities",
    ],
  },
  {
    id: "davis-falls",
    slug: "davis-falls",
    name: "Davis Falls",
    shortDescription: "Powerful waterfall carved into a narrow gorge with dramatic spray.",
    description:
      "Davis Falls is a scenic waterfall that plunges into a deep, narrow canyon and is best visited on a short nature walk combined with nearby caves and viewpoints. The dramatic gorge offers geological and photographic interest.",
    image: "/images/destinations/pokhara/davis-falls.jpg",
    location: "Pokhara",
    category: "Nature",
    duration: "1–2 hours",
    bestTime: "September–May",
    featured: false,
    tourAvailable: false,
    highlights: [
      "Dramatic waterfall views",
      "Gorge exploration",
      "Nature photography",
      "Nearby cave access",
    ],
  },
  {
    id: "gupteshwor-mahadev-cave",
    slug: "gupteshwor-mahadev-cave",
    name: "Gupteshwor Mahadev Cave",
    shortDescription: "Sacred cavern beneath Davis Falls with a Shiva shrine.",
    description:
      "This limestone cave is a spiritual and geological attraction near Davis Falls, featuring dramatic chambers, natural stone formations and a revered temple inside. The cave is actively worshipped by local pilgrims.",
    image: "/images/destinations/pokhara/mahendra-cave.jpg",
    location: "Pokhara",
    category: "Culture",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: false,
    tourAvailable: false,
    highlights: [
      "Cave exploration",
      "Religious significance",
      "Stalactite formations",
      "Local pilgrimage site",
    ],
  },
  {
    id: "begnas-lake",
    slug: "begnas-lake",
    name: "Begnas Lake",
    shortDescription: "Quiet lake destination for boating, fishing and countryside relaxation.",
    description:
      "Begnas Lake is a peaceful alternative to Phewa, offering boating, fishing and scenic countryside trails away from the busier lakeside area. It's ideal for a tranquil day trip.",
    image: "/images/destinations/pokhara/begnas-lake.jpg",
    location: "Begnas",
    category: "Lakes",
    duration: "2–3 hours",
    bestTime: "September–May",
    featured: false,
    tourAvailable: false,
    highlights: [
      "Quiet boating experience",
      "Fishing opportunities",
      "Nature walks",
      "Rural village atmosphere",
    ],
  },
  {
    id: "pokhara-caves",
    slug: "pokhara-caves",
    name: "Pokhara Caves",
    shortDescription: "Ancient stalactite and stalagmite formations.",
    description:
      "Explore the mysterious Pokhara Caves with their stunning natural rock formations, underground chambers and the sacred Bat Cave. These caves offer a unique geological adventure and glimpse into local history.",
    image: "/images/destinations/pokhara/pokhara-caves.jpg",
    location: "Pokhara Valley",
    category: "Adventure & Culture",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: false,
    tourAvailable: false,
    highlights: [
      "Stalactite formations",
      "Underground chambers",
      "Sacred Bat Cave",
      "Geological history",
    ]
  },
  {
    id: "international-mountain-museum",
    slug: "international-mountain-museum",
    name: "International Mountain Museum",
    shortDescription: "Explore mountain heritage and mountaineering history.",
    description:
      "Discover Nepal's mountain heritage at the International Mountain Museum, showcasing mountaineering expeditions, equipment, photographs and stories of legendary climbers. Learn about the culture and natural history of the Himalayas.",
    image: "/images/destinations/pokhara/international-mountain-museum.jpg",
    location: "Pokhara City Center",
    category: "Culture & Education",
    duration: "2–3 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Mountaineering history",
      "Himalayan culture exhibits",
      "Legendary climbers' stories",
      "Mountain geology",
    ]
  },
  {
    id: "lakeside-pokhara",
    slug: "lakeside-pokhara",
    name: "Lakeside Pokhara",
    shortDescription: "Vibrant streets with shops, restaurants and culture.",
    description:
      "Experience the heart of Pokhara's tourism at Lakeside, a bustling area filled with traditional restaurants, cafes, shops and lodges. Enjoy stunning sunset views over Phewa Lake, local cuisine, live music and the vibrant energy of Nepal's adventure capital.",
    image: "/images/destinations/pokhara/lakesideviews.jpg",
    location: "Phewa Lake Waterfront",
    category: "Culture & Dining",
    duration: "2–3 hours",
    bestTime: "September–December",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Lakeside dining",
      "Sunset viewpoints",
      "Local souvenir shopping",
      "Live music and culture"
    ]
  },
];

const pokharaHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Sunrise at Sarangkot",
    description: "Watch the Himalayas come alive at dawn from this ridge-top viewpoint.",
  },
  {
    id: "h2",
    title: "Phewa Lake Adventures",
    description: "Boat rides, paragliding, and lakeside relaxation combined.",
  },
  {
    id: "h3",
    title: "Spiritual Journey",
    description: "Visit the World Peace Pagoda and ancient temples in the valley.",
  },
  {
    id: "h4",
    title: "Adventure Activities",
    description: "Paragliding, zip-lining, and water sports throughout the region.",
  },
];

const pokharaExperiences: Experience[] = [
  {
    id: "e1",
    title: "Paragliding",
    description: "Soar above Pokhara Valley with professional instructors.",
    icon: "🪂",
  },
  {
    id: "e2",
    title: "Sunrise Hike",
    description: "Trek to Sarangkot early morning for breathtaking views.",
    icon: "🥾",
  },
  {
    id: "e3",
    title: "Lakeside Dining",
    description: "Enjoy traditional Nepali cuisine at waterfront restaurants.",
    icon: "🍽️",
  },
  {
    id: "e4",
    title: "Meditation",
    description: "Find peace at the World Peace Pagoda.",
    icon: "🧘",
  },
];

const pokharaTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "September to November offers clear skies and comfortable temperatures.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Getting Around",
    description: "Use taxis or hire a guide for convenient transportation.",
    category: "Transport",
  },
  {
    id: "t3",
    title: "Accommodation",
    description: "Lakeside hotels offer stunning views and easy access to attractions.",
    category: "Stay",
  },
  {
    id: "t4",
    title: "Local Cuisine",
    description: "Try momos, dal bhat, and fresh trout from the lake.",
    category: "Food",
  },
];

const pokharaFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "How many days should I spend in Pokhara?",
    answer: "2–5 days is ideal. This allows time for Phewa Lake activities, Sarangkot sunrise, cave visits, and relaxation.",
  },
  {
    id: "faq2",
    question: "Is paragliding safe?",
    answer: "Yes, with licensed operators. Pokhara is world-famous for paragliding with professional PARA instructors.",
  },
  {
    id: "faq3",
    question: "Can I see Mount Fishtail clearly?",
    answer: "Yes, from Sarangkot and World Peace Pagoda, especially in clear weather from September–December.",
  },
  {
    id: "faq4",
    question: "What is the best restaurant in Pokhara?",
    answer: "Lakeside areas have excellent restaurants. Try Fewa Village Resort or Café Amigos for local and international food.",
  },
];

const pokharaGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/pokhara/lakeside.jpg",
    alt: "Phewa Lake with mountain reflection",
    category: "Lake",
  },
  {
    id: "g2",
    src: "/images/destinations/pokhara/sarangkot.jpg",
    alt: "Sarangkot sunrise viewpoint",
    category: "Viewpoint",
  },
  {
    id: "g3",
    src: "/images/destinations/pokhara/world-peace-pagoda.jpg",
    alt: "White Peace Pagoda",
    category: "Temple",
  },
];

export const pokhara: Destination = {
  id: "pokhara",
  slug: "pokhara",
  name: "Pokhara",
  tagline: "Where Lakes Meet the Himalayas",
  shortDescription:
    "Lakeside gateway to the Annapurna range and Nepal's adventure capital.",
  description:
    "Pokhara is a relaxed mountain city known for lakefront charm, panoramic Himalayan views and a wide range of outdoor activities. From boating on Phewa Lake to sunrise viewpoints above the valley, Pokhara blends natural beauty with cultural and spiritual discovery. It's the perfect base for adventure seekers and those seeking mountain tranquility.",
  heroImage: "/images/destinations/pokhara/pokhara.jpg",
  introImage: "/images/destinations/pokhara/lakeside.jpg",
  ctaImage: "/images/destinations/pokhara/sarangkot.jpg",
  location: "Western Region",
  region: "Gandaki",
  knownFor: "Lakes, Mountains & Adventure",
  idealFor: [
    "Adventure seekers",
    "Nature lovers",
    "Spiritual travelers",
    "Photographers",
  ],
  recommendedDuration: "2–5 Days",
  bestTime: "September–November",
  numberOfTours: 12,
  featured: true,
  places: pokharaPlaces,
  highlights: pokharaHighlights,
  experiences: pokharaExperiences,
  travelTips: pokharaTravelTips,
  faqs: pokharaFaqs,
  gallery: pokharaGallery,
  seo: {
    title: "Pokhara Travel Guide | MEegin Tours & Travels",
    description:
      "Discover Pokhara's lakes, mountains and adventure. Plan your Nepal trip with our comprehensive guide.",
  },
};
