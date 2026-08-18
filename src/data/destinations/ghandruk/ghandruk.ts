import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const ghandrukPlaces: Place[] = [
  {
    id: "ghandruk-village",
    slug: "ghandruk-village",
    name: "Ghandruk Village",
    category: "Culture & Heritage",
    shortDescription:
      "Walk through a beautiful Himalayan village where traditional Gurung homes, stone streets and mountain views come together.",
    description:
      "Ghandruk Village is the heart of the Ghandruk experience. Traditional stone houses, narrow paths, terraced hills and welcoming local communities create an authentic Himalayan atmosphere that allows travelers to experience the beauty of village life.",
    image: "/images/destinations/ghandruk/ghandruk-village.jpg",
    location: "Ghandruk, Kaski",
    duration: "2–4 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Traditional Gurung culture",
      "Stone-paved streets",
      "Mountain scenery",
      "Village life",
      "Local hospitality",
      "Photography",
    ],
    travelTips: [
      {
        id: "ghandruk-village-tip-1",
        title: "Respect local homes and traditions",
        description: "A quiet and respectful attitude helps you enjoy the village atmosphere.",
        category: "Culture",
      },
      {
        id: "ghandruk-village-tip-2",
        title: "Ask before photographing people",
        description: "Most locals appreciate a polite approach.",
        category: "Photography",
      },
      {
        id: "ghandruk-village-tip-3",
        title: "Explore the village on foot",
        description: "Walking helps you discover the charm of the streets and surroundings.",
        category: "Travel",
      },
      {
        id: "ghandruk-village-tip-4",
        title: "Keep the village clean",
        description: "Help preserve the beauty of the community and its heritage.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "ghandruk-village-g1",
        src: "/images/destinations/ghandruk/ghandruk-village-1.jpg",
        alt: "Ghandruk village stone houses",
        category: "Village",
      },
      {
        id: "ghandruk-village-g2",
        src: "/images/destinations/ghandruk/ghandruk-village-2.jpg",
        alt: "Ghandruk village street view",
        category: "Culture",
      },
      {
        id: "ghandruk-village-g3",
        src: "/images/destinations/ghandruk/ghandruk-village-3.jpg",
        alt: "Ghandruk village mountainscape",
        category: "Landscape",
      },
    ],
  },
  {
    id: "ghandruk-viewpoint",
    slug: "ghandruk-viewpoint",
    name: "Ghandruk Viewpoint",
    category: "Nature & Mountain Views",
    shortDescription:
      "Wake up to spectacular Himalayan scenery and enjoy unforgettable views of the Annapurna range from Ghandruk.",
    description:
      "Ghandruk offers magnificent mountain viewpoints where travelers can admire the dramatic Himalayan landscape. On clear mornings, the surrounding peaks create an unforgettable backdrop for sunrise, photography and peaceful moments in the mountains.",
    image: "/images/destinations/ghandruk/ghandruk-viewpoint.jpg",
    location: "Ghandruk, Kaski",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Annapurna views",
      "Sunrise",
      "Mountain scenery",
      "Photography",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "ghandruk-viewpoint-tip-1",
        title: "Start early for sunrise",
        description: "The morning light adds warmth and clarity to the mountain views.",
        category: "Weather",
      },
      {
        id: "ghandruk-viewpoint-tip-2",
        title: "Check weather conditions",
        description: "Clear weather offers the best Himalayan visibility.",
        category: "Weather",
      },
      {
        id: "ghandruk-viewpoint-tip-3",
        title: "Carry warm clothing",
        description: "Mountain air can be cool even during the day.",
        category: "Travel",
      },
      {
        id: "ghandruk-viewpoint-tip-4",
        title: "Bring a camera",
        description: "The views are especially rewarding for photography lovers.",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "ghandruk-viewpoint-g1",
        src: "/images/destinations/ghandruk/ghandruk-viewpoint-1.jpg",
        alt: "Ghandruk viewpoint Annapurna range",
        category: "Mountain",
      },
      {
        id: "ghandruk-viewpoint-g2",
        src: "/images/destinations/ghandruk/ghandruk-viewpoint-2.jpg",
        alt: "Ghandruk sunrise Himalayan view",
        category: "Viewpoint",
      },
    ],
  },
  {
    id: "ghandruk-gurung-museum",
    slug: "ghandruk-gurung-museum",
    name: "Ghandruk Gurung Museum",
    category: "Culture & Heritage",
    shortDescription:
      "Discover the traditions, clothing, tools and cultural heritage of the Gurung community.",
    description:
      "The Ghandruk Gurung Museum provides visitors with an opportunity to learn more about the traditions and lifestyle of the Gurung community. Exhibits and cultural objects help tell the story of the people who have shaped the identity of this Himalayan village.",
    image: "/images/destinations/ghandruk/ghandruk-gurung-museum.jpg",
    location: "Ghandruk, Kaski",
    duration: "1–2 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Gurung heritage",
      "Traditional clothing",
      "Cultural artifacts",
      "Local history",
      "Educational experience",
    ],
    travelTips: [
      {
        id: "gurung-museum-tip-1",
        title: "Respect museum rules",
        description: "Follow local guidance and keep the space quiet.",
        category: "Culture",
      },
      {
        id: "gurung-museum-tip-2",
        title: "Do not touch exhibits unless permitted",
        description: "This helps preserve cultural objects and materials.",
        category: "Heritage",
      },
      {
        id: "gurung-museum-tip-3",
        title: "Ask before taking photographs",
        description: "It is best to confirm local guidelines first.",
        category: "Photography",
      },
      {
        id: "gurung-museum-tip-4",
        title: "Take time to learn about local culture",
        description: "The stories behind the exhibits add real depth to the visit.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "gurung-museum-g1",
        src: "/images/destinations/ghandruk/ghandruk-gurung-museum-1.jpg",
        alt: "Gurung museum exhibits",
        category: "Culture",
      },
      {
        id: "gurung-museum-g2",
        src: "/images/destinations/ghandruk/ghandruk-gurung-museum-2.jpg",
        alt: "Ghandruk Gurung Museum heritage display",
        category: "Heritage",
      },
    ],
  },
  {
    id: "old-ghandruk-village",
    slug: "old-ghandruk-village",
    name: "Old Ghandruk Village",
    category: "Culture & Village Life",
    shortDescription:
      "Step deeper into Ghandruk's traditional character through old stone houses, narrow lanes and timeless village scenery.",
    description:
      "Old Ghandruk offers travelers a closer look at the traditional character of the village. Walking through its stone-built homes and peaceful lanes reveals the architectural heritage and everyday lifestyle that make Ghandruk so distinctive.",
    image: "/images/destinations/ghandruk/old-ghandruk-village.jpg",
    location: "Ghandruk, Kaski",
    duration: "1–3 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Traditional houses",
      "Gurung culture",
      "Village architecture",
      "Local lifestyle",
      "Photography",
    ],
    travelTips: [
      {
        id: "old-ghandruk-tip-1",
        title: "Respect private homes",
        description: "Keep your visit quiet and mindful of local life.",
        category: "Culture",
      },
      {
        id: "old-ghandruk-tip-2",
        title: "Avoid entering private areas without permission",
        description: "A respectful approach is always appreciated.",
        category: "Respect",
      },
      {
        id: "old-ghandruk-tip-3",
        title: "Ask before photography",
        description: "This helps preserve comfort and privacy for residents.",
        category: "Photography",
      },
      {
        id: "old-ghandruk-tip-4",
        title: "Walk carefully on stone paths",
        description: "The village lanes can be uneven and compact.",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "old-ghandruk-g1",
        src: "/images/destinations/ghandruk/old-ghandruk-village-1.jpg",
        alt: "Old Ghandruk stone village",
        category: "Village",
      },
      {
        id: "old-ghandruk-g2",
        src: "/images/destinations/ghandruk/old-ghandruk-village-2.jpg",
        alt: "Old Ghandruk traditional lane",
        category: "Culture",
      },
    ],
  },
  {
    id: "komrong-danda",
    slug: "komrong-danda",
    name: "Komrong Danda",
    category: "Trekking & Mountain Views",
    shortDescription:
      "Enjoy a peaceful Himalayan ridge experience surrounded by dramatic mountain landscapes and open skies.",
    description:
      "Komrong Danda is a scenic ridge destination offering a beautiful mountain environment for travelers exploring the Ghandruk area. The open landscapes, peaceful trails and Himalayan surroundings make it an attractive stop for trekkers and nature lovers.",
    image: "/images/destinations/ghandruk/komrong-danda.jpg",
    location: "Near Ghandruk, Kaski",
    duration: "Half Day – 1 Day",
    bestTime: "September–November and March–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Mountain views",
      "Trekking",
      "Ridge landscapes",
      "Nature",
      "Photography",
    ],
    travelTips: [
      {
        id: "komrong-tip-1",
        title: "Wear trekking shoes",
        description: "The ridge paths are easier to enjoy with supportive footwear.",
        category: "Travel",
      },
      {
        id: "komrong-tip-2",
        title: "Carry water",
        description: "Hydration matters during uphill walking and warm afternoons.",
        category: "Travel",
      },
      {
        id: "komrong-tip-3",
        title: "Check weather conditions",
        description: "Mountain visibility changes quickly with the climate.",
        category: "Weather",
      },
      {
        id: "komrong-tip-4",
        title: "Follow established trails",
        description: "This helps protect the landscape and keeps the walk safer.",
        category: "Safety",
      },
    ],
    gallery: [
      {
        id: "komrong-g1",
        src: "/images/destinations/ghandruk/komrong-danda-1.jpg",
        alt: "Komrong Danda ridge view",
        category: "Mountain",
      },
      {
        id: "komrong-g2",
        src: "/images/destinations/ghandruk/komrong-danda-2.jpg",
        alt: "Komrong Danda trekking landscape",
        category: "Trekking",
      },
    ],
  },
  {
    id: "tadapani",
    slug: "tadapani",
    name: "Tadapani",
    category: "Trekking & Nature",
    shortDescription:
      "Journey through beautiful forests and mountain trails toward one of the popular stops in the Annapurna trekking region.",
    description:
      "Tadapani is a scenic destination surrounded by lush forests and dramatic Himalayan landscapes. Its location along popular trekking routes makes it an exciting destination for travelers who want to combine nature, mountain scenery and trekking adventure.",
    image: "/images/destinations/ghandruk/tadapani.jpg",
    location: "Tadapani, Kaski",
    duration: "Half Day – 1 Day",
    bestTime: "September–November and March–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Forest trails",
      "Himalayan scenery",
      "Trekking",
      "Sunrise views",
      "Nature photography",
    ],
    travelTips: [
      {
        id: "tadapani-tip-1",
        title: "Carry sufficient water",
        description: "Longer trekking routes can be demanding in the mountain air.",
        category: "Travel",
      },
      {
        id: "tadapani-tip-2",
        title: "Wear proper trekking footwear",
        description: "Trail surfaces are easier when supported by stable shoes.",
        category: "Travel",
      },
      {
        id: "tadapani-tip-3",
        title: "Prepare for changing weather",
        description: "Layers help as conditions shift between morning and afternoon.",
        category: "Weather",
      },
      {
        id: "tadapani-tip-4",
        title: "Travel responsibly on mountain trails",
        description: "Stay aware of the environment and leave no trace.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "tadapani-g1",
        src: "/images/destinations/ghandruk/tadapani-1.jpg",
        alt: "Tadapani forest trail",
        category: "Nature",
      },
      {
        id: "tadapani-g2",
        src: "/images/destinations/ghandruk/tadapani-2.jpg",
        alt: "Tadapani mountain scenery",
        category: "Mountain",
      },
      {
        id: "tadapani-g3",
        src: "/images/destinations/ghandruk/tadapani-3.jpg",
        alt: "Tadapani sunrise viewpoint",
        category: "Viewpoint",
      },
    ],
  },
  {
    id: "kimche",
    slug: "kimche",
    name: "Kimche",
    category: "Gateway & Scenic Village",
    shortDescription:
      "Begin your Ghandruk adventure from the peaceful mountain surroundings of Kimche.",
    description:
      "Kimche is an important access point for travelers heading toward Ghandruk and nearby trekking destinations. The surrounding hills, villages and mountain scenery make the journey itself part of the Himalayan experience.",
    image: "/images/destinations/ghandruk/kimche.jpg",
    location: "Kimche, Kaski",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Mountain landscapes",
      "Village scenery",
      "Trekking gateway",
      "Local life",
      "Photography",
    ],
    travelTips: [
      {
        id: "kimche-tip-1",
        title: "Check road conditions",
        description: "Travel conditions can vary with weather and seasonal changes.",
        category: "Travel",
      },
      {
        id: "kimche-tip-2",
        title: "Prepare trekking essentials",
        description: "Even a short journey can benefit from the right gear and water.",
        category: "Travel",
      },
      {
        id: "kimche-tip-3",
        title: "Carry water",
        description: "Staying hydrated helps during even moderate walks.",
        category: "Travel",
      },
      {
        id: "kimche-tip-4",
        title: "Respect local communities",
        description: "Travel calmly and keep the natural surroundings peaceful.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "kimche-g1",
        src: "/images/destinations/ghandruk/kimche-1.jpg",
        alt: "Kimche mountain road",
        category: "Scenic",
      },
      {
        id: "kimche-g2",
        src: "/images/destinations/ghandruk/kimche-2.jpg",
        alt: "Kimche village landscape",
        category: "Village",
      },
    ],
  },
  {
    id: "jhinu-danda",
    slug: "jhinu-danda",
    name: "Jhinu Danda",
    category: "Nature & Wellness",
    shortDescription:
      "Enjoy a beautiful Himalayan village experience surrounded by forested hills, trekking trails and natural landscapes.",
    description:
      "Jhinu Danda is a popular stop in the Annapurna region, known for its peaceful mountain environment and trekking atmosphere. It provides travelers with a relaxing opportunity to enjoy nature while exploring the surrounding Himalayan trails.",
    image: "/images/destinations/ghandruk/jhinu-danda.jpg",
    location: "Jhinu Danda, Kaski",
    duration: "Half Day – 1 Day",
    bestTime: "September–November and March–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Mountain village",
      "Trekking",
      "Forest landscapes",
      "Natural surroundings",
      "Relaxation",
    ],
    travelTips: [
      {
        id: "jhinu-tip-1",
        title: "Wear comfortable trekking shoes",
        description: "Trail conditions are easier to manage with the right footwear.",
        category: "Travel",
      },
      {
        id: "jhinu-tip-2",
        title: "Carry water",
        description: "A refillable bottle is useful on longer hikes.",
        category: "Travel",
      },
      {
        id: "jhinu-tip-3",
        title: "Follow local trail guidance",
        description: "Trail knowledge helps you stay safe and enjoy the route fully.",
        category: "Safety",
      },
      {
        id: "jhinu-tip-4",
        title: "Respect the natural environment",
        description: "Keep the trails and landscape clean and peaceful.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "jhinu-g1",
        src: "/images/destinations/ghandruk/jhinu-danda-1.jpg",
        alt: "Jhinu Danda mountain village",
        category: "Village",
      },
      {
        id: "jhinu-g2",
        src: "/images/destinations/ghandruk/jhinu-danda-2.jpg",
        alt: "Jhinu Danda forest trail",
        category: "Nature",
      },
    ],
  },
  {
    id: "modi-khola-valley",
    slug: "modi-khola-valley",
    name: "Modi Khola Valley",
    category: "Nature & Scenic Landscape",
    shortDescription:
      "Discover peaceful river valleys, green hills and dramatic Himalayan landscapes around the Modi Khola region.",
    description:
      "The Modi Khola Valley offers a beautiful combination of rivers, forests, villages and mountain scenery. Its changing landscapes provide a refreshing experience for travelers exploring the natural beauty surrounding Ghandruk and the Annapurna region.",
    image: "/images/destinations/ghandruk/modi-khola-valley.jpg",
    location: "Annapurna Region",
    duration: "Half Day – 1 Day",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "River valley",
      "Green hills",
      "Mountain scenery",
      "Nature",
      "Photography",
    ],
    travelTips: [
      {
        id: "modi-tip-1",
        title: "Follow safe walking routes",
        description: "Choose paths that are appropriate for the terrain and weather.",
        category: "Safety",
      },
      {
        id: "modi-tip-2",
        title: "Check weather conditions",
        description: "Mountain scenery is best enjoyed when the weather is stable.",
        category: "Weather",
      },
      {
        id: "modi-tip-3",
        title: "Carry water",
        description: "Stay hydrated while walking through the valley lanes and trails.",
        category: "Travel",
      },
      {
        id: "modi-tip-4",
        title: "Avoid disturbing wildlife",
        description: "Respect the natural environment and keep a calm, careful pace.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "modi-g1",
        src: "/images/destinations/ghandruk/modi-khola-valley-1.jpg",
        alt: "Modi Khola valley scenery",
        category: "Nature",
      },
      {
        id: "modi-g2",
        src: "/images/destinations/ghandruk/modi-khola-valley-2.jpg",
        alt: "Modi Khola green mountain valley",
        category: "Landscape",
      },
    ],
  },
  {
    id: "ghandruk-landruk-trail",
    slug: "ghandruk-landruk-trail",
    name: "Ghandruk–Landruk Trail",
    category: "Trekking & Adventure",
    shortDescription:
      "Walk through forests, terraced hills and traditional mountain villages on a scenic Himalayan trail.",
    description:
      "The Ghandruk–Landruk trail offers a rewarding trekking experience through beautiful mountain landscapes and traditional settlements. The journey combines forest paths, terraced hills, village scenery and spectacular views, making it an excellent way to experience the Annapurna region on foot.",
    image: "/images/destinations/ghandruk/ghandruk-landruk-trail.jpg",
    location: "Ghandruk–Landruk, Kaski",
    duration: "Half Day – 1 Day",
    bestTime: "September–November and March–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Himalayan trekking",
      "Forest trails",
      "Traditional villages",
      "Terraced hills",
      "Mountain views",
      "Photography",
    ],
    travelTips: [
      {
        id: "trail-tip-1",
        title: "Wear proper trekking footwear",
        description: "Stable shoes help on mixed terrain and uneven slopes.",
        category: "Travel",
      },
      {
        id: "trail-tip-2",
        title: "Carry enough water",
        description: "Even short hikes can feel longer in mountain conditions.",
        category: "Travel",
      },
      {
        id: "trail-tip-3",
        title: "Check weather conditions",
        description: "Mountain weather can change quickly across the day.",
        category: "Weather",
      },
      {
        id: "trail-tip-4",
        title: "Stay on marked trails",
        description: "This keeps the walk safe and the environment protected.",
        category: "Safety",
      },
    ],
    gallery: [
      {
        id: "trail-g1",
        src: "/images/destinations/ghandruk/ghandruk-landruk-trail-1.jpg",
        alt: "Ghandruk Landruk trail forest path",
        category: "Trekking",
      },
      {
        id: "trail-g2",
        src: "/images/destinations/ghandruk/ghandruk-landruk-trail-2.jpg",
        alt: "Ghandruk Landruk trail terraced hills",
        category: "Landscape",
      },
      {
        id: "trail-g3",
        src: "/images/destinations/ghandruk/ghandruk-landruk-trail-3.jpg",
        alt: "Ghandruk Landruk trail village scenery",
        category: "Village",
      },
    ],
  },
];

const ghandrukHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Experience authentic Gurung village culture",
    description: "Discover the traditions, hospitality and everyday rhythm of one of Nepal's most beautiful mountain communities.",
  },
  {
    id: "h2",
    title: "Walk through traditional stone-paved streets",
    description: "Explore the quiet alleys and heritage charm that give Ghandruk its distinctive personality.",
  },
  {
    id: "h3",
    title: "Enjoy spectacular Annapurna mountain views",
    description: "Look toward the towering Annapurna range and let the landscape lift your sense of wonder.",
  },
  {
    id: "h4",
    title: "Visit the Ghandruk Gurung Museum",
    description: "Learn more about the Gurung community, its traditions and the stories behind local heritage.",
  },
  {
    id: "h5",
    title: "Experience local homestays",
    description: "Stay close to community life and enjoy a warm, personal Himalayan welcome.",
  },
  {
    id: "h6",
    title: "Explore beautiful Himalayan viewpoints",
    description: "Sunrise, sunset and panoramic scenery create memorable moments across the valley.",
  },
  {
    id: "h7",
    title: "Walk through terraced hills and forests",
    description: "Enjoy peaceful moments in one of the most scenic parts of the Annapurna region.",
  },
  {
    id: "h8",
    title: "Explore nearby trekking routes",
    description: "Use Ghandruk as a beautiful base for walking, mountain adventure and natural discovery.",
  },
  {
    id: "h9",
    title: "Experience traditional food and hospitality",
    description: "Savor local flavors and enjoy the warmth of Gurung hospitality in a welcoming setting.",
  },
  {
    id: "h10",
    title: "Enjoy peaceful sunrise and sunset views",
    description: "The changing light makes each day in Ghandruk feel calm, memorable and deeply scenic.",
  },
];

const ghandrukExperiences: Experience[] = [
  {
    id: "e1",
    title: "Village Heritage Walk",
    description: "Explore the stone streets, homes and cultural rhythm of Ghandruk's traditional village life.",
    icon: "🚶",
  },
  {
    id: "e2",
    title: "Mountain View Sunrise",
    description: "Watch the Annapurna skyline glow at dawn and enjoy unforgettable Himalayan scenery.",
    icon: "🌅",
  },
  {
    id: "e3",
    title: "Gurung Culture Experience",
    description: "Visit the museum and connect with local traditions, hospitality and community life.",
    icon: "🏡",
  },
  {
    id: "e4",
    title: "Trekking Adventure",
    description: "Take on scenic trails, ridge walks and beautiful Himalayan routes around Ghandruk.",
    icon: "🥾",
  },
];

const ghandrukTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "September–November and March–May are ideal for clear skies, comfortable walking and scenic views.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Respect Local Culture",
    description: "Ghandruk is a lived-in village, so a calm, respectful attitude goes a long way.",
    category: "Culture",
  },
  {
    id: "t3",
    title: "Wear Comfortable Footwear",
    description: "Stone paths and mountain trails are easier to enjoy with supportive shoes.",
    category: "Travel",
  },
  {
    id: "t4",
    title: "Carry Water and Layers",
    description: "A light jacket and water bottle make the hill walks more comfortable and enjoyable.",
    category: "Travel",
  },
];

const ghandrukFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Is Ghandruk good for a peaceful Himalayan getaway?",
    answer: "Yes, it is known for its calm village atmosphere, mountain views and authentic Gurung culture.",
  },
  {
    id: "faq2",
    question: "What is the best season to visit Ghandruk?",
    answer: "September–November and March–May offer the best balance of weather, visibility and walking comfort.",
  },
  {
    id: "faq3",
    question: "Can I enjoy Ghandruk without trekking long distances?",
    answer: "Yes, the village, viewpoints and local cultural sites are enjoyable even without full trek days.",
  },
  {
    id: "faq4",
    question: "What makes Ghandruk special?",
    answer: "Its traditional Gurung heritage, mountain scenery and welcoming village life make it one of the region's most memorable stops.",
  },
];

const ghandrukGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/ghandruk/hero.jpg",
    alt: "Ghandruk Himalayan village landscape",
    category: "Village",
  },
  {
    id: "g2",
    src: "/images/destinations/ghandruk/ghandruk-village-1.jpg",
    alt: "Ghandruk village stone houses",
    category: "Culture",
  },
  {
    id: "g3",
    src: "/images/destinations/ghandruk/ghandruk-viewpoint-1.jpg",
    alt: "Ghandruk Annapurna mountain view",
    category: "Mountain",
  },
];

export const ghandruk: Destination = {
  id: "ghandruk",
  slug: "ghandruk",
  name: "Ghandruk",
  tagline: "Where Himalayan Views Meet Gurung Heritage",
  shortDescription:
    "Discover the timeless charm of Ghandruk, where traditional Gurung culture, stone-paved villages and breathtaking Annapurna views create an unforgettable Himalayan experience.",
  description:
    "Ghandruk is one of Nepal's most beautiful mountain villages, known for its traditional Gurung culture, stone-paved streets, welcoming communities and spectacular views of the Annapurna and surrounding Himalayan peaks. Surrounded by green hills and mountain landscapes, Ghandruk offers travelers a perfect combination of culture, nature, village life and trekking adventure.",
  heroImage: "/images/destinations/ghandruk/hero.jpg",
  introImage: "/images/destinations/ghandruk/intro.jpg",
  ctaImage: "/images/destinations/ghandruk/cta.jpg",
  location: "Ghandruk, Kaski, Gandaki Province, Nepal",
  region: "Annapurna Region",
  knownFor:
    "Gurung culture, traditional stone houses, Annapurna mountain views, trekking, village walks, homestays and Himalayan landscapes",
  idealFor: [
    "Trekking enthusiasts",
    "Families",
    "Couples",
    "Photographers",
    "Nature lovers",
    "Culture enthusiasts",
    "Travelers seeking authentic Himalayan experiences",
  ],
  recommendedDuration: "1–3 Days",
  bestTime: "September–November and March–May",
  numberOfTours: 12,
  featured: true,
  places: ghandrukPlaces,
  highlights: ghandrukHighlights,
  experiences: ghandrukExperiences,
  travelTips: ghandrukTravelTips,
  faqs: ghandrukFaqs,
  gallery: ghandrukGallery,
  seo: {
    title: "Ghandruk Travel Guide | Meegin Tours & Travels",
    description:
      "Explore Ghandruk's Gurung culture, scenic Himalayan trails, traditional village life and Annapurna region viewpoints.",
    keywords: [
      "Ghandruk",
      "Ghandruk Nepal",
      "Annapurna",
      "Gurung culture",
      "mountain village",
      "Himalayan trekking",
      "Ghandruk travel",
      "Nepal village heritage",
    ],
  },
};
