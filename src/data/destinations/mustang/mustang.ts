import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const mustangPlaces: Place[] = [
  {
    id: "muktinath-temple",
    slug: "muktinath",
    name: "Muktinath Temple",
    category: "Pilgrimage & Culture",
    shortDescription:
      "A sacred Himalayan pilgrimage destination surrounded by spectacular mountain landscapes.",
    description:
      "Muktinath Temple is one of the most revered pilgrimage sites in Nepal, deeply important to both Hindus and Buddhists. Perched high within the Himalayas, it is famous for its sacred water spouts, the peaceful temple complex and the extraordinary mountain surroundings that create a deeply spiritual atmosphere. Pilgrims visit to seek blessings, purification and a rare connection to the sacred landscape of the Annapurna region. Its high-altitude setting, spiritual significance and dramatic natural scenery make it one of the most memorable destinations in Mustang.",
    image: "/images/destinations/mustang/muktinath.jpg",
    location: "Muktinath, Mustang",
    duration: "Half Day – 1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Muktinath Temple",
      "Sacred water spouts",
      "Hindu and Buddhist heritage",
      "Himalayan mountain views",
      "Traditional surroundings",
    ],
    travelTips: [
      {
        id: "muktinath-tip-1",
        title: "Start early",
        description: "Early morning visits are calmer and more comfortable before the strongest daytime sun.",
        category: "Planning",
      },
      {
        id: "muktinath-tip-2",
        title: "Carry warm clothing",
        description: "Temperatures can drop sharply at altitude even during warm seasons.",
        category: "Weather",
      },
      {
        id: "muktinath-tip-3",
        title: "Respect religious customs",
        description: "Follow local practices and remain mindful of temple etiquette and sacred spaces.",
        category: "Culture",
      },
      {
        id: "muktinath-tip-4",
        title: "Carry water and sun protection",
        description: "The sunlight is intense at high altitude, so hydration and sun protection are essential.",
        category: "Health",
      },
    ],
    gallery: [
      {
        id: "muktinath-g1",
        src: "/images/destinations/mustang/muktinath-1.jpg",
        alt: "Muktinath Temple in Mustang",
        category: "Pilgrimage",
      },
      {
        id: "muktinath-g2",
        src: "/images/destinations/mustang/muktinath-2.jpg",
        alt: "Sacred Himalayan pilgrimage setting",
        category: "Landscape",
      },
      {
        id: "muktinath-g3",
        src: "/images/destinations/mustang/muktinath-3.jpg",
        alt: "Muktinath temple surroundings and mountains",
        category: "Mountain",
      },
    ],
  },
  {
    id: "lo-manthang-place",
    slug: "lo-manthang",
    name: "Lo Manthang",
    category: "Heritage & Culture",
    shortDescription:
      "Explore the ancient walled city and cultural heart of Upper Mustang.",
    description:
      "Lo Manthang is the historic capital of Upper Mustang, a remarkable walled city shaped by centuries of tradition, spiritual heritage and Tibetan-influenced culture. Its narrow streets, traditional homes, ancient monasteries and imposing walls create an atmosphere unlike anywhere else in Nepal. The settlement sits within a breathtaking Himalayan landscape where open valleys, dramatic cliffs and ancient architecture combine to deliver one of the most culturally rich and visually unforgettable experiences in the region. Travelers are drawn here for both its heritage and the feeling of stepping into a living historic kingdom.",
    image: "/images/destinations/mustang/lo-manthang.jpg",
    location: "Upper Mustang",
    duration: "1–2 Days",
    bestTime: "May–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Ancient walled city",
      "Traditional architecture",
      "Historic monasteries",
      "Local culture",
      "Upper Mustang landscapes",
    ],
    travelTips: [
      {
        id: "lo-manthang-tip-1",
        title: "Respect local customs",
        description: "The village has strong cultural traditions, so mindful behavior is appreciated.",
        category: "Culture",
      },
      {
        id: "lo-manthang-tip-2",
        title: "Dress appropriately",
        description: "Modest clothing is recommended, especially when visiting monasteries and religious sites.",
        category: "Culture",
      },
      {
        id: "lo-manthang-tip-3",
        title: "Carry warm layers",
        description: "The region is dry and cool, particularly in the evening and early morning.",
        category: "Weather",
      },
      {
        id: "lo-manthang-tip-4",
        title: "Travel with local arrangements",
        description: "Procedures and local guidance help make the journey smoother and more informative.",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "lo-manthang-g1",
        src: "/images/destinations/mustang/lo-manthang-1.jpg",
        alt: "Lo Manthang walled city in Upper Mustang",
        category: "Heritage",
      },
      {
        id: "lo-manthang-g2",
        src: "/images/destinations/mustang/lo-manthang-2.jpg",
        alt: "Historic architecture in Lo Manthang",
        category: "Culture",
      },
      {
        id: "lo-manthang-g3",
        src: "/images/destinations/mustang/lo-manthang-3.jpg",
        alt: "Upper Mustang landscape near Lo Manthang",
        category: "Landscape",
      },
    ],
  },
  {
    id: "kagbeni-place",
    slug: "kagbeni",
    name: "Kagbeni",
    category: "Village & Heritage",
    shortDescription:
      "Walk through an ancient Himalayan village where traditional culture meets dramatic mountain landscapes.",
    description:
      "Kagbeni is one of the most atmospheric villages in Mustang, known for its ancient architecture, terraced slopes and close connection to the Kali Gandaki River. As a traditional settlement on the edge of Upper Mustang, it offers a vivid mix of local culture, old homes, prayer flags and a gateway atmosphere that immediately connects visitors to the region's heritage. Kagbeni also serves as an important stop for travelers moving deeper into Mustang, where the landscape opens into dramatic valleys, mountain views and a strong sense of historic continuity.",
    image: "/images/destinations/mustang/kagbeni.jpg",
    location: "Kagbeni, Mustang",
    duration: "Half Day – 1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Ancient village streets",
      "Kali Gandaki River",
      "Traditional architecture",
      "Monastery",
      "Gateway to Upper Mustang",
    ],
    travelTips: [
      {
        id: "kagbeni-tip-1",
        title: "Explore on foot",
        description: "The village is best enjoyed by walking through its narrow streets and open spaces.",
        category: "Exploration",
      },
      {
        id: "kagbeni-tip-2",
        title: "Respect local homes",
        description: "Many homes are private residences, so be considerate when photographing or entering spaces.",
        category: "Culture",
      },
      {
        id: "kagbeni-tip-3",
        title: "Carry water",
        description: "The dry mountain air can be dehydrating even during cooler periods.",
        category: "Health",
      },
      {
        id: "kagbeni-tip-4",
        title: "Protect from sun and wind",
        description: "Sunscreen, sunglasses and a wind layer make the visit more comfortable.",
        category: "Weather",
      },
    ],
    gallery: [
      {
        id: "kagbeni-g1",
        src: "/images/destinations/mustang/kagbeni-1.jpg",
        alt: "Kagbeni village in Mustang",
        category: "Village",
      },
      {
        id: "kagbeni-g2",
        src: "/images/destinations/mustang/kagbeni-2.jpg",
        alt: "Kali Gandaki valley near Kagbeni",
        category: "Landscape",
      },
    ],
  },
  {
    id: "jomsom-place",
    slug: "jomsom",
    name: "Jomsom",
    category: "Gateway & Adventure",
    shortDescription:
      "The lively gateway to Mustang surrounded by dramatic Himalayan scenery.",
    description:
      "Jomsom is the main gateway to Mustang and a hub for travelers exploring the region's villages, passes and sacred sites. It sits within the Kali Gandaki Valley, where dramatic cliffs, dry landscapes and huge mountain horizons combine to create a visually unforgettable setting. The town is known for its mountain views, local culture, short stays and easy access to nearby attractions such as Marpha, Kagbeni and Muktinath. Whether you are passing through or staying overnight, Jomsom offers a practical and scenic base for discovering Mustang.",
    image: "/images/destinations/mustang/jomsom.jpg",
    location: "Jomsom, Mustang",
    duration: "1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Kali Gandaki Valley",
      "Himalayan scenery",
      "Mustang gateway",
      "Local culture",
      "Nearby attractions",
    ],
    travelTips: [
      {
        id: "jomsom-tip-1",
        title: "Prefer morning travel",
        description: "Morning travel is often more comfortable and allows better visibility in mountain valleys.",
        category: "Travel",
      },
      {
        id: "jomsom-tip-2",
        title: "Carry wind-resistant clothing",
        description: "The valley can be dry, windy and cooler than expected.",
        category: "Weather",
      },
      {
        id: "jomsom-tip-3",
        title: "Stay hydrated",
        description: "High altitude and dry air make consistent hydration especially important.",
        category: "Health",
      },
    ],
    gallery: [
      {
        id: "jomsom-g1",
        src: "/images/destinations/mustang/jomsom-1.jpg",
        alt: "Jomsom valley and Himalayan countryside",
        category: "Gateway",
      },
      {
        id: "jomsom-g2",
        src: "/images/destinations/mustang/jomsom-2.jpg",
        alt: "Jomsom mountain scenery",
        category: "Landscape",
      },
    ],
  },
  {
    id: "marpha-village",
    slug: "marpha",
    name: "Marpha Village",
    category: "Village & Culture",
    shortDescription:
      "A charming traditional village famous for whitewashed houses, apple orchards and Thakali culture.",
    description:
      "Marpha is a classic Mustang village famous for its whitewashed houses, stone-paved streets and the beautiful apple orchards that surround the settlement. The village is deeply rooted in Thakali culture, with warm hospitality, distinctive food traditions and a relaxed atmosphere that contrasts with the more dramatic high-altitude landscapes of the region. The combination of heritage architecture, peaceful surroundings and mountain scenery makes Marpha an especially rewarding place to slow down and experience local life in Upper Mustang.",
    image: "/images/destinations/mustang/marpha.jpg",
    location: "Marpha, Mustang",
    duration: "Half Day – 1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Traditional houses",
      "Apple orchards",
      "Thakali culture",
      "Stone-paved streets",
      "Mountain scenery",
    ],
    travelTips: [
      {
        id: "marpha-tip-1",
        title: "Explore on foot",
        description: "The village is best experienced by walking and observing its narrow streets and homes.",
        category: "Exploration",
      },
      {
        id: "marpha-tip-2",
        title: "Experience local food",
        description: "Try local flavors and regional specialties in the village and surrounding lodges.",
        category: "Food",
      },
      {
        id: "marpha-tip-3",
        title: "Respect local homes",
        description: "This is a living village, so please be thoughtful and keep a respectful distance.",
        category: "Culture",
      },
      {
        id: "marpha-tip-4",
        title: "Allow time for photography",
        description: "The whitewashed houses and valley views offer excellent photo opportunities throughout the day.",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "marpha-g1",
        src: "/images/destinations/mustang/marpha-1.jpg",
        alt: "Marpha village houses and mountain setting",
        category: "Village",
      },
      {
        id: "marpha-g2",
        src: "/images/destinations/mustang/marpha-2.jpg",
        alt: "Traditional Marpha village street",
        category: "Heritage",
      },
    ],
  },
  {
    id: "dhumba-lake-place",
    slug: "dhumba-lake",
    name: "Dhumba Lake",
    category: "Nature",
    shortDescription:
      "A peaceful turquoise lake surrounded by the rugged landscapes of Mustang.",
    description:
      "Dhumba Lake offers one of Mustang's most tranquil natural settings, with bright turquoise water, a quiet atmosphere and dramatic surrounding landscapes. The lake is a favorite stop for travelers seeking a short scenic excursion away from the busier trekking routes, combining peace, striking photography and an authentic sense of high-altitude natural beauty. In clear weather, the surrounding ridges and mountain forms create unforgettable views that reflect the raw calm of the region.",
    image: "/images/destinations/mustang/dhumba-lake.jpg",
    location: "Near Jomsom, Mustang",
    duration: "Half Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Turquoise lake",
      "Mountain scenery",
      "Peaceful surroundings",
      "Photography",
      "Short scenic trip",
    ],
    travelTips: [
      {
        id: "dhumba-tip-1",
        title: "Carry water",
        description: "The high-altitude environment is dry, so staying hydrated is important.",
        category: "Health",
      },
      {
        id: "dhumba-tip-2",
        title: "Carry sun protection",
        description: "Open mountain air can intensify UV exposure even on cooler days.",
        category: "Weather",
      },
      {
        id: "dhumba-tip-3",
        title: "Keep the area clean",
        description: "Help preserve the peaceful environment for future visitors and local communities.",
        category: "Responsible travel",
      },
      {
        id: "dhumba-tip-4",
        title: "Visit during clear weather",
        description: "Clear skies provide the best views and allow the lake to stand out in all its color.",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "dhumba-g1",
        src: "/images/destinations/mustang/dhumba-lake-1.jpg",
        alt: "Dhumba Lake turquoise waters",
        category: "Nature",
      },
      {
        id: "dhumba-g2",
        src: "/images/destinations/mustang/dhumba-lake-2.jpg",
        alt: "Lake and mountain scenery in Mustang",
        category: "Landscape",
      },
    ],
  },
  {
    id: "chhoser-caves-place",
    slug: "chhoser-caves",
    name: "Chhoser Caves",
    category: "History & Adventure",
    shortDescription:
      "Discover mysterious ancient caves carved into the dramatic cliffs of Upper Mustang.",
    description:
      "The Chhoser Caves are one of the most intriguing historical and geological features of Upper Mustang, offering a glimpse into the region's ancient human history. Carved into the cliffs, these caves hold stories of early habitation, spiritual traditions and a way of life closely tied to the harsh but beautiful territory of the Himalayas. Their formation, remote setting and mysterious character attract travelers looking for something more adventurous and deeply rooted in the cultural legacy of Mustang. The caves stand as a powerful reminder of how resilient communities once lived in this extraordinary landscape.",
    image: "/images/destinations/mustang/chhoser-caves.jpg",
    location: "Chhoser, Upper Mustang",
    duration: "Half Day – 1 Day",
    bestTime: "May–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Ancient caves",
      "Cliff landscapes",
      "Historic settlements",
      "Himalayan architecture",
      "Adventure",
    ],
    travelTips: [
      {
        id: "chhoser-tip-1",
        title: "Follow local guides",
        description: "Local guidance is important for safety and for understanding the historical context of the caves.",
        category: "Safety",
      },
      {
        id: "chhoser-tip-2",
        title: "Be careful on steep terrain",
        description: "The surrounding paths and caves can be uneven, so wear secure footwear.",
        category: "Safety",
      },
      {
        id: "chhoser-tip-3",
        title: "Wear suitable footwear",
        description: "Steady shoes help with rocky paths and cliffside terrain.",
        category: "Equipment",
      },
      {
        id: "chhoser-tip-4",
        title: "Respect historic sites",
        description: "Please preserve the caves and surrounding areas as culturally significant places.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "chhoser-g1",
        src: "/images/destinations/mustang/chhoser-caves-1.jpg",
        alt: "Ancient cave cliffs of Chhoser",
        category: "History",
      },
      {
        id: "chhoser-g2",
        src: "/images/destinations/mustang/chhoser-caves-2.jpg",
        alt: "Upper Mustang cave landscape",
        category: "Adventure",
      },
    ],
  },
  {
    id: "ghemi-village",
    slug: "ghemi",
    name: "Ghemi Village",
    category: "Culture & Heritage",
    shortDescription:
      "A traditional Upper Mustang village surrounded by dramatic Himalayan landscapes.",
    description:
      "Ghemi Village is a striking example of the enduring traditions of Upper Mustang, where local heritage, spiritual sites and rugged Himalayan scenery come together in a peaceful setting. The village is known for its traditional architecture, community traditions and the sense of cultural continuity that remains visible in everyday life. With nearby mani walls, prayer structures and a strong local rhythm, Ghemi offers visitors a genuine look into rural Mustang life and the profound connection between culture and landscape.",
    image: "/images/destinations/mustang/ghemi.jpg",
    location: "Ghemi, Upper Mustang",
    duration: "Half Day",
    bestTime: "May–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Ghemi village",
      "Mani wall",
      "Traditional architecture",
      "Local culture",
      "Mountain landscapes",
    ],
    travelTips: [
      {
        id: "ghemi-tip-1",
        title: "Respect religious structures",
        description: "Prayer structures and local spiritual spaces should be treated with care and reverence.",
        category: "Culture",
      },
      {
        id: "ghemi-tip-2",
        title: "Follow local customs",
        description: "Local ways of life are important to the cultural character of the village.",
        category: "Culture",
      },
      {
        id: "ghemi-tip-3",
        title: "Carry water",
        description: "The village sits in a dry, high-altitude climate where hydration matters.",
        category: "Health",
      },
      {
        id: "ghemi-tip-4",
        title: "Use sun protection",
        description: "Strong alpine sun can be intense even when the air feels cool.",
        category: "Weather",
      },
    ],
    gallery: [
      {
        id: "ghemi-g1",
        src: "/images/destinations/mustang/ghemi-1.jpg",
        alt: "Ghemi village in Upper Mustang",
        category: "Village",
      },
      {
        id: "ghemi-g2",
        src: "/images/destinations/mustang/ghemi-2.jpg",
        alt: "Traditional architecture in Ghemi",
        category: "Culture",
      },
    ],
  },
  {
    id: "tsarang-village",
    slug: "tsarang",
    name: "Tsarang Village",
    category: "Heritage & Monastery",
    shortDescription:
      "A historic Upper Mustang settlement filled with traditional architecture, monasteries and Himalayan heritage.",
    description:
      "Tsarang is a historic Upper Mustang settlement that captures the true spirit of the region's heritage, with traditional houses, sacred spaces and a strong cultural identity shaped by its mountain setting. The village is closely tied to the journey toward Lo Manthang and offers travelers a memorable viewpoint into the historic rhythm of Mustang life. Surrounded by dramatic Himalayan scenery, Tsarang stands out for its preserved architecture, religious heritage and the feeling of traveling through a living landscape shaped by centuries of tradition.",
    image: "/images/destinations/mustang/tsarang.jpg",
    location: "Tsarang, Upper Mustang",
    duration: "Half Day – 1 Day",
    bestTime: "May–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "mustang-cultural-expedition",
    highlights: [
      "Tsarang village",
      "Historic monastery",
      "Traditional architecture",
      "Himalayan scenery",
      "Upper Mustang culture",
    ],
    travelTips: [
      {
        id: "tsarang-tip-1",
        title: "Dress respectfully at monasteries",
        description: "Monastic spaces require modest, respectful dress and quiet behavior.",
        category: "Culture",
      },
      {
        id: "tsarang-tip-2",
        title: "Follow photography rules",
        description: "Respect signage and local guidance when taking photographs in sacred locations.",
        category: "Photography",
      },
      {
        id: "tsarang-tip-3",
        title: "Explore the village on foot",
        description: "Walking helps you notice the details of architecture, daily routines and the landscape.",
        category: "Exploration",
      },
      {
        id: "tsarang-tip-4",
        title: "Respect local traditions",
        description: "The village is culturally significant, so respecting local customs makes a big difference.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "tsarang-g1",
        src: "/images/destinations/mustang/tsarang-1.jpg",
        alt: "Tsarang village and Himalayan surroundings",
        category: "Village",
      },
      {
        id: "tsarang-g2",
        src: "/images/destinations/mustang/tsarang-2.jpg",
        alt: "Historic heritage in Tsarang",
        category: "Heritage",
      },
    ],
  },
  {
    id: "dhakmar",
    slug: "dhakmar",
    name: "Dhakmar",
    category: "Culture & Remote Living",
    shortDescription: "A remote village of mountain heritage.",
    description:
      "Dhakmar offers one of the most striking examples of remote village life in Mustang, surrounded by dramatic rock formations, arid slopes and open Himalayan views. The village is known for its distinct architecture, strong local traditions and cultural atmosphere that feel untouched by mass tourism. It is an excellent destination for travelers interested in discovering hidden communities, monastery traditions and the slower pace of life in remote parts of Nepal. The landscape around Dhakmar is dramatic and deeply scenic, making it a rewarding stop for photographers and explorers alike.",
    image: "/images/destinations/mustang/dhakmar.jpg",
    location: "Upper Mustang",
    duration: "1–2 days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: false,
    highlights: ["Dramatic rock formations", "Arid slopes", "Distinct architecture", "Strong local traditions", "Remote village life"]
  },
  {
    id: "chhoser-cave",
    slug: "chhoser-cave",
    name: "Chhoser Cave",
    category: "Adventure & Discovery",
    shortDescription: "A hidden natural and spiritual landmark.",
    description:
      "Chhoser Cave is one of the lesser-known gems of Mustang, combining geological intrigue with the cultural landscape of the region. Located in a rugged and remote environment, the cave offers travelers a chance to explore an unusual site shaped by natural forces over time. It is especially interesting for those seeking a deeper connection to the region’s natural history and hidden wonders beyond the major trekking routes. The experience adds a sense of discovery to a Mustang itinerary and complements the broader story of remote Himalayan exploration.",
    image: "/images/destinations/mustang/chhoser.jpg",
    location: "Upper Mustang",
    duration: "1–2 hours",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: false,
    highlights: ["Cave exploration", "Geological intrigue", "Remote environment"]
  },
  {
    id: "ghami-village",
    slug: "ghami-village",
    name: "Ghami Village",
    category: "Village Life",
    shortDescription: "A quiet village in the heart of Mustang.",
    description:
      "Ghami Village captures the essence of remote Himalayan life with its quiet lanes, traditional homes, prayer settings and broad mountain views. As you walk through the settlement, you get a sense of the region's resilience and cultural continuity shaped by harsh terrain and deep spiritual traditions. The village is a wonderful place to pause, interact with local communities and enjoy the stark beauty of the surrounding landscape. For travelers looking for a genuine Himalayan experience beyond caravan routes and busy tourist areas, Ghami offers that rare calm and authenticity.",
    image: "/images/destinations/mustang/ghami-village.jpg",
    location: "Upper Mustang",
    duration: "1 day",
    bestTime: "April–June, September–October",
    featured: true,
    tourAvailable: false,
    highlights: ["Quiet lanes", "Traditional homes", "Prayer settings", "Broad mountain views"]
  }
];

const mustangHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Upper Mustang heritage",
    description: "Journey through one of Nepal's most preserved Himalayan kingdoms.",
  },
  {
    id: "h2",
    title: "Sacred pilgrimage",
    description: "Visit Muktinath and discover profound spiritual traditions in the Himalayas.",
  },
  {
    id: "h3",
    title: "Historic villages",
    description: "Explore Lo Manthang, Kagbeni, Marpha and other culturally rich settlements.",
  },
  {
    id: "h4",
    title: "Desert-like landscapes",
    description: "Experience the dramatic Himalayan scenery and high-altitude terrain of Mustang.",
  },
];

const mustangExperiences: Experience[] = [
  {
    id: "e1",
    title: "Upper Mustang Trek",
    description: "Travel through one of the most culturally rich Himalayan regions in Nepal.",
    icon: "🥾",
  },
  {
    id: "e2",
    title: "Pilgrimage to Muktinath",
    description: "Visit a sacred site important to both Hindus and Buddhists.",
    icon: "🙏",
  },
  {
    id: "e3",
    title: "Monastery visits",
    description: "Explore historic Buddhist spaces and local spiritual traditions.",
    icon: "🏯",
  },
  {
    id: "e4",
    title: "Mountain photography",
    description: "Capture dramatic cliffs, valley views and traditional villages in unique light.",
    icon: "📷",
  },
];

const mustangTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best season",
    description: "March–May and September–November are ideal for stable weather and comfortable travel.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Altitude awareness",
    description: "Mustang sits at high altitude, so gradual acclimatization is important for comfort.",
    category: "Health",
  },
  {
    id: "t3",
    title: "Warm layers",
    description: "Even sunny days can feel cold in the evenings and at high elevations.",
    category: "Weather",
  },
  {
    id: "t4",
    title: "Local guidance",
    description: "Hiring local support helps you navigate routes, customs and cultural expectations smoothly.",
    category: "Planning",
  },
];

const mustangFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Do I need a permit to visit Mustang?",
    answer: "For Upper Mustang, a special permit is required. Lower Mustang areas are easier to access, but planning is still important.",
  },
  {
    id: "faq2",
    question: "What is the best time to visit Mustang?",
    answer: "March–May and September–November are the most favorable times for comfortable weather, clear views and smooth travel.",
  },
  {
    id: "faq3",
    question: "Is Mustang suitable for trekking?",
    answer: "Yes. Mustang is ideal for travelers who enjoy high-altitude trekking, cultural journeys and dramatic landscapes.",
  },
  {
    id: "faq4",
    question: "Can I visit Mustang without a long trek?",
    answer: "Yes. Many destinations such as Jomsom, Kagbeni, Marpha and Muktinath can be explored with flexible itineraries and local arrangements.",
  },
];

const mustangGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/mustang/hero.jpg",
    alt: "High-altitude Mustang landscape",
    category: "Landscape",
  },
  {
    id: "g2",
    src: "/images/destinations/mustang/intro.jpg",
    alt: "Historic Mustang architecture and valley",
    category: "Culture",
  },
  {
    id: "g3",
    src: "/images/destinations/mustang/cta.jpg",
    alt: "Mustang mountain journey",
    category: "Adventure",
  },
];

export const mustang: Destination = {
  id: "mustang",
  slug: "mustang",
  name: "Mustang",
  tagline: "Discover Nepal's Hidden Himalayan Kingdom",
  shortDescription:
    "Explore dramatic Himalayan landscapes, ancient villages, sacred sites and the timeless culture of Mustang.",
  description:
    "Mustang is one of Nepal's most fascinating Himalayan destinations, known for its dramatic desert-like landscapes, ancient Tibetan-influenced culture, historic villages, monasteries and spectacular mountain scenery. From the sacred pilgrimage site of Muktinath to the ancient walled city of Lo Manthang, Mustang offers travelers an unforgettable journey through landscapes and traditions that have remained remarkably preserved for generations.",
  heroImage: "/images/destinations/mustang/hero.jpg",
  introImage: "/images/destinations/mustang/intro.jpg",
  ctaImage: "/images/destinations/mustang/cta.jpg",
  location: "Gandaki Province, Nepal",
  region: "Western Nepal",
  knownFor:
    "Himalayan landscapes, ancient culture, monasteries, traditional villages and Upper Mustang",
  idealFor: [
    "Adventure seekers",
    "Photographers",
    "Pilgrims",
    "Trekking enthusiasts",
    "Culture lovers",
    "Nature enthusiasts",
  ],
  recommendedDuration: "4–8 Days",
  bestTime: "March–May and September–November",
  numberOfTours: 12,
  featured: true,
  places: mustangPlaces,
  highlights: mustangHighlights,
  experiences: mustangExperiences,
  travelTips: mustangTravelTips,
  faqs: mustangFaqs,
  gallery: mustangGallery,
  seo: {
    title: "Mustang Travel Guide | Meegin Tours & Travels",
    description:
      "Explore the hidden kingdom of Mustang with local heritage, high-altitude landscapes, sacred pilgrimage sites and unforgettable Himalayan adventures.",
  },
};
