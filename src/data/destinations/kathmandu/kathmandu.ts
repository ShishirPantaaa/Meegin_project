import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const kathmanduPlaces: Place[] = [
  {
    id: "kathmandu-durbar-square",
    slug: "kathmandu-durbar-square",
    name: "Kathmandu Durbar Square",
    category: "History & Heritage",
    shortDescription:
      "Walk through a living museum of palaces, temples, courtyards and centuries-old Kathmandu heritage.",
    description:
      "Kathmandu Durbar Square is a spectacular historic heart of the capital, filled with traditional architecture, temples and ancient courtyards. Walking through its historic spaces offers visitors a fascinating glimpse into Nepal's royal past, craftsmanship and Newari culture.",
    image: "/images/destinations/kathmandu/kathmandu-durbar-square.jpg",
    location: "Kathmandu",
    duration: "2–3 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historic palaces",
      "Traditional temples",
      "Newari architecture",
      "Ancient courtyards",
      "Cultural heritage",
      "Photography",
    ],
    travelTips: [
      {
        id: "durbar-tip-1",
        title: "Respect heritage structures",
        description: "Dress respectfully around religious areas",
        category: "Culture",
      },
      {
        id: "durbar-tip-2",
        title: "Explore nearby traditional streets",
        description: "Follow local site rules",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "durbar-g1",
        src: "/images/destinations/kathmandu/kathmandu-durbar-square-1.jpg",
        alt: "Kathmandu Durbar Square palaces",
        category: "Heritage",
      },
      {
        id: "durbar-g2",
        src: "/images/destinations/kathmandu/kathmandu-durbar-square-2.jpg",
        alt: "Kathmandu Durbar Square temples",
        category: "Heritage",
      },
      {
        id: "durbar-g3",
        src: "/images/destinations/kathmandu/kathmandu-durbar-square-3.jpg",
        alt: "Kathmandu Durbar Square courtyards",
        category: "Culture",
      },
    ],
  },
  {
    id: "swayambhunath-stupa",
    slug: "swayambhunath-stupa",
    name: "Swayambhunath Stupa",
    category: "Spiritual & Heritage",
    shortDescription:
      "Climb toward the iconic hilltop stupa and enjoy spiritual surroundings with sweeping views across Kathmandu.",
    description:
      "Perched on a hill overlooking Kathmandu, Swayambhunath is one of Nepal's most recognizable Buddhist landmarks. Its prayer flags, sacred architecture and panoramic city views create a memorable experience where spirituality and scenery meet.",
    image: "/images/destinations/kathmandu/swayambhunath-stupa.jpg",
    location: "Kathmandu",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Hilltop stupa",
      "Buddhist heritage",
      "Prayer flags",
      "Kathmandu views",
      "Photography",
    ],
    travelTips: [
      {
        id: "swayambhu-tip-1",
        title: "Dress respectfully",
        description: "Walk carefully around religious areas",
        category: "Culture",
      },
      {
        id: "swayambhu-tip-2",
        title: "Respect prayer rituals",
        description: "Keep the area clean",
        category: "Respect",
      },
    ],
    gallery: [
      {
        id: "swayambhu-g1",
        src: "/images/destinations/kathmandu/swayambhunath-stupa-1.jpg",
        alt: "Swayambhunath hilltop stupa",
        category: "Spiritual",
      },
      {
        id: "swayambhu-g2",
        src: "/images/destinations/kathmandu/swayambhunath-stupa-2.jpg",
        alt: "Swayambhunath prayer flags",
        category: "Heritage",
      },
    ],
  },
  {
    id: "boudhanath-stupa",
    slug: "boudhanath-stupa",
    name: "Boudhanath Stupa",
    category: "Spiritual & Culture",
    shortDescription:
      "Experience the peaceful rhythm of prayer wheels, colorful flags and one of the world's most iconic Buddhist stupas.",
    description:
      "Boudhanath is one of Kathmandu's most atmospheric landmarks and an important center of Tibetan Buddhist culture. The enormous white stupa, surrounding monasteries and peaceful circular walking route create an unforgettable spiritual experience.",
    image: "/images/destinations/kathmandu/boudhanath-stupa.jpg",
    location: "Kathmandu",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Iconic Buddhist stupa",
      "Prayer wheels",
      "Monasteries",
      "Tibetan Buddhist culture",
      "Photography",
    ],
    travelTips: [
      {
        id: "boudhanath-tip-1",
        title: "Walk around the stupa respectfully",
        description: "Observe local religious customs",
        category: "Culture",
      },
      {
        id: "boudhanath-tip-2",
        title: "Dress appropriately",
        description: "Avoid disrupting prayer activities",
        category: "Respect",
      },
    ],
    gallery: [
      {
        id: "boudhanath-g1",
        src: "/images/destinations/kathmandu/boudhanath-stupa-1.jpg",
        alt: "Boudhanath iconic stupa",
        category: "Spiritual",
      },
      {
        id: "boudhanath-g2",
        src: "/images/destinations/kathmandu/boudhanath-stupa-2.jpg",
        alt: "Boudhanath prayer wheels",
        category: "Culture",
      },
      {
        id: "boudhanath-g3",
        src: "/images/destinations/kathmandu/boudhanath-stupa-3.jpg",
        alt: "Boudhanath monasteries",
        category: "Spiritual",
      },
    ],
  },
  {
    id: "pashupatinath-temple",
    slug: "pashupatinath-temple",
    name: "Pashupatinath Temple",
    category: "Spiritual & Heritage",
    shortDescription:
      "Experience one of Nepal's most sacred Hindu temple complexes beside the peaceful Bagmati River.",
    description:
      "Pashupatinath is one of Nepal's most important Hindu pilgrimage sites and a major cultural landmark of Kathmandu. The temple complex, sacred riverbanks and surrounding shrines provide visitors with a powerful glimpse into Nepal's spiritual traditions.",
    image: "/images/destinations/kathmandu/pashupatinath-temple.jpg",
    location: "Kathmandu",
    duration: "2–3 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Sacred Hindu temple",
      "Bagmati River",
      "Religious heritage",
      "Traditional architecture",
      "Spiritual atmosphere",
    ],
    travelTips: [
      {
        id: "pashupatinath-tip-1",
        title: "Follow temple entry rules",
        description: "Dress respectfully",
        category: "Culture",
      },
      {
        id: "pashupatinath-tip-2",
        title: "Respect religious ceremonies",
        description: "Follow photography restrictions",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "pashupatinath-g1",
        src: "/images/destinations/kathmandu/pashupatinath-temple-1.jpg",
        alt: "Pashupatinath temple complex",
        category: "Spiritual",
      },
      {
        id: "pashupatinath-g2",
        src: "/images/destinations/kathmandu/pashupatinath-temple-2.jpg",
        alt: "Pashupatinath Bagmati River",
        category: "Heritage",
      },
    ],
  },
  {
    id: "patan-durbar-square",
    slug: "patan-durbar-square",
    name: "Patan Durbar Square",
    category: "Architecture & Heritage",
    shortDescription:
      "Marvel at extraordinary Newari craftsmanship, ancient temples and elegant courtyards in historic Patan.",
    description:
      "Patan Durbar Square is celebrated for its exceptional Newari architecture, intricate wood and metal craftsmanship and historic temples. It is a beautiful destination for travelers interested in art, architecture and Nepal's extraordinary cultural heritage.",
    image: "/images/destinations/kathmandu/patan-durbar-square.jpg",
    location: "Lalitpur, Kathmandu Valley",
    duration: "2–3 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Newari architecture",
      "Historic temples",
      "Traditional craftsmanship",
      "Courtyards",
      "Cultural heritage",
    ],
    travelTips: [
      {
        id: "patan-tip-1",
        title: "Respect heritage structures",
        description: "Take time to explore nearby streets",
        category: "Culture",
      },
      {
        id: "patan-tip-2",
        title: "Follow local site rules",
        description: "Support local artisans",
        category: "Community",
      },
    ],
    gallery: [
      {
        id: "patan-g1",
        src: "/images/destinations/kathmandu/patan-durbar-square-1.jpg",
        alt: "Patan Durbar Square temples",
        category: "Heritage",
      },
      {
        id: "patan-g2",
        src: "/images/destinations/kathmandu/patan-durbar-square-2.jpg",
        alt: "Patan Durbar Square architecture",
        category: "Architecture",
      },
    ],
  },
  {
    id: "bhaktapur-durbar-square",
    slug: "bhaktapur-durbar-square",
    name: "Bhaktapur Durbar Square",
    category: "History & Architecture",
    shortDescription:
      "Step into a beautifully preserved historic city filled with temples, palaces, pottery and timeless Newari charm.",
    description:
      "Bhaktapur Durbar Square offers one of the most atmospheric heritage experiences in the Kathmandu Valley. Its historic buildings, temples, traditional squares and surrounding old streets allow visitors to experience the remarkable craftsmanship and culture of the Newar community.",
    image: "/images/destinations/kathmandu/bhaktapur-durbar-square.jpg",
    location: "Bhaktapur, Kathmandu Valley",
    duration: "3–4 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historic architecture",
      "Newari culture",
      "Ancient temples",
      "Traditional squares",
      "Local crafts",
      "Photography",
    ],
    travelTips: [
      {
        id: "bhaktapur-tip-1",
        title: "Explore the surrounding old town",
        description: "Respect religious sites",
        category: "Culture",
      },
      {
        id: "bhaktapur-tip-2",
        title: "Try traditional local food",
        description: "Support local artisans",
        category: "Community",
      },
    ],
    gallery: [
      {
        id: "bhaktapur-g1",
        src: "/images/destinations/kathmandu/bhaktapur-durbar-square-1.jpg",
        alt: "Bhaktapur historic architecture",
        category: "Heritage",
      },
      {
        id: "bhaktapur-g2",
        src: "/images/destinations/kathmandu/bhaktapur-durbar-square-2.jpg",
        alt: "Bhaktapur temples",
        category: "Architecture",
      },
      {
        id: "bhaktapur-g3",
        src: "/images/destinations/kathmandu/bhaktapur-durbar-square-3.jpg",
        alt: "Bhaktapur traditional square",
        category: "Culture",
      },
    ],
  },
  {
    id: "garden-of-dreams",
    slug: "garden-of-dreams",
    name: "Garden of Dreams",
    category: "Nature & Relaxation",
    shortDescription:
      "Escape the busy city streets inside a beautifully designed garden hidden in the heart of Kathmandu.",
    description:
      "Garden of Dreams is a peaceful oasis in central Kathmandu, offering elegant gardens, fountains, quiet seating areas and beautiful architectural details. It is a perfect place to slow down after exploring the busy streets of the capital.",
    image: "/images/destinations/kathmandu/garden-of-dreams.jpg",
    location: "Thamel, Kathmandu",
    duration: "1–2 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Peaceful gardens",
      "Historic architecture",
      "Photography",
      "Relaxation",
      "Central location",
    ],
    travelTips: [
      {
        id: "garden-tip-1",
        title: "Allow time to relax",
        description: "Respect garden rules",
        category: "Relaxation",
      },
      {
        id: "garden-tip-2",
        title: "Keep the gardens clean",
        description: "Visit during comfortable weather",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "garden-g1",
        src: "/images/destinations/kathmandu/garden-of-dreams-1.jpg",
        alt: "Garden of Dreams peaceful setting",
        category: "Nature",
      },
      {
        id: "garden-g2",
        src: "/images/destinations/kathmandu/garden-of-dreams-2.jpg",
        alt: "Garden of Dreams fountains",
        category: "Architecture",
      },
    ],
  },
  {
    id: "kopan-monastery",
    slug: "kopan-monastery",
    name: "Kopan Monastery",
    category: "Spiritual & Culture",
    shortDescription:
      "Find a peaceful retreat above Kathmandu surrounded by Buddhist traditions, meditation and beautiful hill scenery.",
    description:
      "Kopan Monastery is a peaceful Buddhist center overlooking the Kathmandu Valley. Its quiet surroundings and spiritual atmosphere offer visitors an opportunity to learn about Buddhist traditions and enjoy a welcome escape from the energy of the city.",
    image: "/images/destinations/kathmandu/kopan-monastery.jpg",
    location: "Kathmandu",
    duration: "1–3 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Buddhist monastery",
      "Spiritual atmosphere",
      "Valley views",
      "Peaceful surroundings",
      "Cultural experience",
    ],
    travelTips: [
      {
        id: "kopan-tip-1",
        title: "Dress respectfully",
        description: "Maintain a quiet atmosphere",
        category: "Culture",
      },
      {
        id: "kopan-tip-2",
        title: "Follow monastery rules",
        description: "Respect meditation and prayer activities",
        category: "Respect",
      },
    ],
    gallery: [
      {
        id: "kopan-g1",
        src: "/images/destinations/kathmandu/kopan-monastery-1.jpg",
        alt: "Kopan Monastery peaceful setting",
        category: "Spiritual",
      },
      {
        id: "kopan-g2",
        src: "/images/destinations/kathmandu/kopan-monastery-2.jpg",
        alt: "Kopan Monastery valley views",
        category: "Culture",
      },
    ],
  },
  {
    id: "chandragiri-hills",
    slug: "chandragiri-hills",
    name: "Chandragiri Hills",
    category: "Nature & Adventure",
    shortDescription:
      "Rise above the Kathmandu Valley for breathtaking mountain views, fresh air and a refreshing hilltop escape.",
    description:
      "Chandragiri Hills offers travelers a refreshing escape above Kathmandu with beautiful views across the valley and surrounding Himalayan landscapes when weather conditions are clear. It is an excellent choice for visitors seeking nature, scenery and a break from the city.",
    image: "/images/destinations/kathmandu/chandragiri-hills.jpg",
    location: "Chandragiri, Kathmandu",
    duration: "Half Day – 1 Day",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Mountain views",
      "Kathmandu Valley views",
      "Hilltop scenery",
      "Nature",
      "Photography",
    ],
    travelTips: [
      {
        id: "chandragiri-tip-1",
        title: "Check weather conditions",
        description: "Carry a light jacket",
        category: "Weather",
      },
      {
        id: "chandragiri-tip-2",
        title: "Wear comfortable shoes",
        description: "Allow extra time for sightseeing",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "chandragiri-g1",
        src: "/images/destinations/kathmandu/chandragiri-hills-1.jpg",
        alt: "Chandragiri Hills mountain views",
        category: "Nature",
      },
      {
        id: "chandragiri-g2",
        src: "/images/destinations/kathmandu/chandragiri-hills-2.jpg",
        alt: "Chandragiri Hills valley scenery",
        category: "Adventure",
      },
    ],
  },
  {
    id: "thamel",
    slug: "thamel",
    name: "Thamel",
    category: "City & Culture",
    shortDescription:
      "Experience Kathmandu's energetic travel hub filled with restaurants, cafés, shops, music and vibrant streets.",
    description:
      "Thamel is the lively heart of Kathmandu's tourism scene, where travelers can discover restaurants, cafés, shops, local products and a vibrant evening atmosphere. It is a great place to experience the modern side of Kathmandu while staying close to the city's historic attractions.",
    image: "/images/destinations/kathmandu/thamel.jpg",
    location: "Kathmandu",
    duration: "2–4 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Restaurants and cafés",
      "Local shopping",
      "Travel atmosphere",
      "Nightlife",
      "Souvenirs",
      "Local experiences",
    ],
    travelTips: [
      {
        id: "thamel-tip-1",
        title: "Compare prices before purchasing",
        description: "Keep personal belongings secure",
        category: "Safety",
      },
      {
        id: "thamel-tip-2",
        title: "Explore side streets responsibly",
        description: "Support local businesses",
        category: "Community",
      },
    ],
    gallery: [
      {
        id: "thamel-g1",
        src: "/images/destinations/kathmandu/thamel-1.jpg",
        alt: "Thamel vibrant streets",
        category: "Culture",
      },
      {
        id: "thamel-g2",
        src: "/images/destinations/kathmandu/thamel-2.jpg",
        alt: "Thamel restaurants and shops",
        category: "City",
      },
      {
        id: "thamel-g3",
        src: "/images/destinations/kathmandu/thamel-3.jpg",
        alt: "Thamel local atmosphere",
        category: "Culture",
      },
    ],
  },
  {
    id: "kirtipur",
    slug: "kirtipur",
    name: "Kirtipur",
    category: "Culture & Heritage",
    shortDescription: "Discover an authentic historic hill town where traditional Newari architecture, temples, courtyards and local life remain deeply connected.",
    description: "Kirtipur offers a more relaxed cultural experience away from the busiest parts of Kathmandu. Its historic streets, temples, traditional houses and hilltop setting provide an excellent opportunity to experience Newari heritage and everyday local life.",
    image: "/images/destinations/kathmandu/kirtipur.jpg",
    location: "Kirtipur, Kathmandu Valley",
    duration: "2–4 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Newari culture",
      "Historic streets",
      "Traditional architecture",
      "Temples",
      "Local lifestyle",
      "Photography",
    ],
    travelTips: [
      {
        id: "kirtipur-tip-1",
        title: "Walk respectfully through residential areas",
        description: "Support local businesses",
        category: "Culture",
      },
      {
        id: "kirtipur-tip-2",
        title: "Ask before photographing people",
        description: "Respect temples and courtyards",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "kirtipur-g1",
        src: "/images/destinations/kathmandu/kirtipur-1.jpg",
        alt: "Kirtipur historic streets",
        category: "Heritage",
      },
      {
        id: "kirtipur-g2",
        src: "/images/destinations/kathmandu/kirtipur-2.jpg",
        alt: "Kirtipur traditional architecture",
        category: "Culture",
      },
      {
        id: "kirtipur-g3",
        src: "/images/destinations/kathmandu/kirtipur-3.jpg",
        alt: "Kirtipur temples",
        category: "Spiritual",
      },
    ],
  },
  {
    id: "asan-market",
    slug: "asan-market",
    name: "Asan Market",
    category: "Local Culture & Shopping",
    shortDescription: "Step into one of Kathmandu's most vibrant traditional marketplaces and experience the colors, sounds and flavors of everyday Nepal.",
    description: "Asan is a lively traditional market in central Kathmandu where travelers can experience the energy of local commerce and everyday city life. The narrow streets are filled with shops, spices, food, household goods and traditional products, creating a colorful cultural experience.",
    image: "/images/destinations/kathmandu/asan-market.jpg",
    location: "Central Kathmandu",
    duration: "1–2 Hours",
    bestTime: "Throughout the year",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Local market",
      "Traditional products",
      "Food and spices",
      "Local culture",
      "Street photography",
    ],
    travelTips: [
      {
        id: "asan-tip-1",
        title: "Keep valuables secure",
        description: "Be aware of crowded streets",
        category: "Safety",
      },
      {
        id: "asan-tip-2",
        title: "Ask before photographing vendors",
        description: "Respect local shoppers and businesses",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "asan-g1",
        src: "/images/destinations/kathmandu/asan-market-1.jpg",
        alt: "Asan Market vibrant stalls",
        category: "Culture",
      },
      {
        id: "asan-g2",
        src: "/images/destinations/kathmandu/asan-market-2.jpg",
        alt: "Asan Market local products",
        category: "Shopping",
      },
      {
        id: "asan-g3",
        src: "/images/destinations/kathmandu/asan-market-3.jpg",
        alt: "Asan Market street atmosphere",
        category: "Culture",
      },
    ],
  },
];

const kathmanduHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Ancient Heritage Sites",
    description: "Visit UNESCO-listed Durbar Squares and explore centuries of Newari architecture and royal history.",
  },
  {
    id: "h2",
    title: "Sacred Spiritual Landmarks",
    description: "Experience Nepal's most important Buddhist and Hindu temples, stupas and pilgrimage sites.",
  },
  {
    id: "h3",
    title: "Tibetan Culture & Monasteries",
    description: "Discover Buddhist traditions, prayer wheels and peaceful monastic communities in Boudhanath.",
  },
  {
    id: "h4",
    title: "Valley Scenery & Escape",
    description: "Rise above the city for beautiful views of the Kathmandu Valley and surrounding Himalayan peaks.",
  },
  {
    id: "h5",
    title: "Vibrant Local Culture",
    description: "Experience Thamel's energy, restaurants, local crafts and authentic Nepali atmosphere.",
  },
  {
    id: "h6",
    title: "Garden Retreats",
    description: "Find peaceful escapes like the Garden of Dreams for quiet relaxation and beautiful photography.",
  },
  {
    id: "h7",
    title: "Traditional Newari Craftsmanship",
    description: "Appreciate extraordinary wood carvings, metalwork and architectural details throughout the city.",
  },
  {
    id: "h8",
    title: "Diverse Spiritual Experiences",
    description: "From ancient rituals to modern meditation, explore Nepal's multi-faceted spiritual traditions.",
  },
  {
    id: "h9",
    title: "Photography Paradise",
    description: "Capture stunning images of historic architecture, temples, cultural scenes and beautiful landscapes.",
  },
];

const kathmanduExperiences: Experience[] = [
  {
    id: "e1",
    title: "Temple & Heritage Walking Tours",
    description: "Explore historic Durbar Squares, ancient temples and sacred religious sites with expert cultural insights.",
    icon: "🏯",
  },
  {
    id: "e2",
    title: "Buddhist Spiritual Journey",
    description: "Experience Boudhanath's prayer wheels, stupas and Tibetan monasteries with peaceful reflection.",
    icon: "🙏",
  },
  {
    id: "e3",
    title: "Local Food & Street Culture",
    description: "Taste authentic Nepali dishes, sample street food and explore Thamel's vibrant restaurants and cafés.",
    icon: "🥟",
  },
  {
    id: "e4",
    title: "Photography & Scenic Views",
    description: "Capture stunning images of temples, architecture, landscapes and cultural moments throughout Kathmandu.",
    icon: "📸",
  },
];

const kathmanduTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "September–May offers the clearest weather and most comfortable temperatures for exploring.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Respect Cultural Customs",
    description: "Dress respectfully around temples and religious sites, and follow local rules at heritage locations.",
    category: "Culture",
  },
  {
    id: "t3",
    title: "Navigation Tips",
    description: "Hire a local guide or taxi to navigate easily, or download offline maps for navigating alleys.",
    category: "Transport",
  },
  {
    id: "t4",
    title: "Air Quality Awareness",
    description: "Winter months can have higher air pollution; check daily AQI and consider N95 masks if needed.",
    category: "Health",
  },
  {
    id: "t5",
    title: "Recommended Duration",
    description: "Allow 3–5 days minimum to see major sites and truly experience Kathmandu's culture and atmosphere.",
    category: "Planning",
  },
  {
    id: "t6",
    title: "Stay Secure & Healthy",
    description: "Use common sense at night, keep valuables secure, and stay up-to-date with health precautions.",
    category: "Safety",
  },
];

const kathmanduFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Is Kathmandu safe for tourists?",
    answer: "Yes, Kathmandu is generally safe for tourists. Use common sense, avoid walking alone at night, keep valuables secure, and stay aware of your surroundings.",
  },
  {
    id: "faq2",
    question: "How many days do I need to see Kathmandu's main attractions?",
    answer: "3–4 days is ideal for seeing major sites like Durbar Squares, Boudhanath, Pashupatinath and Thamel without rushing.",
  },
  {
    id: "faq3",
    question: "Which area is best to stay in Kathmandu?",
    answer: "Thamel is convenient with many restaurants and shops; Bhaktapur offers authentic old-town atmosphere; or stay near Durbar Square for heritage exploration.",
  },
  {
    id: "faq4",
    question: "Can I visit multiple temples in one day?",
    answer: "Yes, temples are within walking or taxi distance. A local guide helps you understand their cultural significance and navigate efficiently.",
  },
  {
    id: "faq5",
    question: "What should I wear when visiting temples?",
    answer: "Dress respectfully with covered shoulders and knees. Remove shoes before entering temple interiors and follow any posted rules.",
  },
  {
    id: "faq6",
    question: "How do I get around Kathmandu?",
    answer: "Taxis, local buses and ride-sharing apps are available. Hiring a guide or taxi for the day is often convenient and informative.",
  },
];

const kathmanduGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/kathmandu/hero.jpg",
    alt: "Kathmandu heritage temples",
    category: "Heritage",
  },
  {
    id: "g2",
    src: "/images/destinations/kathmandu/durbar-square-view.jpg",
    alt: "Durbar Square historic architecture",
    category: "Heritage",
  },
  {
    id: "g3",
    src: "/images/destinations/kathmandu/boudhanath-stupa.jpg",
    alt: "Boudhanath iconic stupa",
    category: "Spiritual",
  },
  {
    id: "g4",
    src: "/images/destinations/kathmandu/valley-view.jpg",
    alt: "Kathmandu Valley panoramic view",
    category: "Nature",
  },
  {
    id: "g5",
    src: "/images/destinations/kathmandu/thamel-street.jpg",
    alt: "Thamel vibrant street atmosphere",
    category: "Culture",
  },
];

export const kathmandu: Destination = {
  id: "kathmandu",
  slug: "kathmandu",
  name: "Kathmandu",
  tagline: "Where Ancient Heritage Meets Modern Nepal",
  shortDescription:
    "Discover ancient temples, UNESCO heritage, vibrant streets, sacred stupas and the unforgettable cultural soul of Nepal.",
  description:
    "Kathmandu is the cultural and historic heart of Nepal, where centuries-old temples, magnificent stupas, traditional courtyards and lively streets come together. Home to multiple UNESCO World Heritage Sites and countless sacred landmarks, it is the perfect destination for travelers interested in history, spirituality, culture and authentic Asian experiences. Whether exploring ancient palace squares, honoring Buddhist traditions, enjoying local food or simply wandering historic alleyways, Kathmandu offers unforgettable encounters with Nepal's extraordinary heritage.",
  heroImage: "/images/destinations/kathmandu/hero.jpg",
  introImage: "/images/destinations/kathmandu/intro.jpg",
  ctaImage: "/images/destinations/kathmandu/cta.jpg",
  location: "Kathmandu Valley, Nepal",
  region: "Central Nepal",
  knownFor:
    "Ancient temples, UNESCO heritage sites, stupas, Newari culture, historic squares, monasteries and vibrant city life",
  idealFor: [
    "First-time visitors",
    "Families",
    "History lovers",
    "Culture enthusiasts",
    "Photographers",
    "Spiritual travelers",
    "International tourists",
  ],
  recommendedDuration: "2–4 Days",
  bestTime: "September–May",
  numberOfTours: 12,
  featured: true,
  places: kathmanduPlaces,
  highlights: kathmanduHighlights,
  experiences: kathmanduExperiences,
  travelTips: kathmanduTravelTips,
  faqs: kathmanduFaqs,
  gallery: kathmanduGallery,
  seo: {
    title: "Kathmandu Nepal Travel Guide | MEegin Tours & Travels",
    description:
      "Explore Kathmandu's ancient temples, UNESCO heritage sites, Durbar Squares, stupas and vibrant culture. Travel guide, tips and experiences.",
    keywords: [
      "Kathmandu",
      "Nepal",
      "travel",
      "Durbar Square",
      "Swayambhunath",
      "Boudhanath",
      "Pashupatinath",
      "heritage",
      "tourism",
      "temples",
      "culture",
    ],
  },
};
