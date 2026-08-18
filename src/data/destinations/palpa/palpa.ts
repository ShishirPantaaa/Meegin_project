import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const palpaPlaces: Place[] = [
  {
    id: "tansen-durbar",
    slug: "tansen-durbar",
    name: "Tansen Durbar",
    category: "History & Heritage",
    shortDescription:
      "Step into the historic heart of Tansen and discover Palpa's rich cultural heritage.",
    description:
      "Tansen Durbar is one of the most recognizable heritage landmarks in Tansen. Its historic character and traditional architecture reflect Palpa's rich past and make it an excellent starting point for discovering the culture and history of the town.",
    image: "/images/destinations/palpa/tansen-durbar.jpg",
    location: "Tansen, Palpa",
    duration: "1–2 Hours",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historic architecture",
      "Cultural heritage",
      "Tansen history",
      "Photography",
      "Old-town atmosphere",
    ],
    travelTips: [
      {
        id: "tansen-durbar-tip-1",
        title: "Respect heritage areas",
        description: "Explore the surrounding old streets",
        category: "Culture",
      },
      {
        id: "tansen-durbar-tip-2",
        title: "Carry a camera",
        description: "Follow local access rules",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "tansen-durbar-g1",
        src: "/images/destinations/palpa/tansen-durbar-1.jpg",
        alt: "Tansen Durbar historic architecture",
        category: "Heritage",
      },
      {
        id: "tansen-durbar-g2",
        src: "/images/destinations/palpa/tansen-durbar-2.jpg",
        alt: "Tansen Durbar cultural landmark",
        category: "Heritage",
      },
    ],
  },
  {
    id: "rani-mahal",
    slug: "rani-mahal",
    name: "Rani Mahal",
    category: "Heritage & Nature",
    shortDescription:
      "A romantic riverside palace nestled beside the Kali Gandaki, often called the Taj Mahal of Nepal.",
    description:
      "Rani Mahal is one of Palpa's most iconic landmarks, beautifully situated beside the Kali Gandaki River. Surrounded by green hills and peaceful river scenery, the palace creates a memorable combination of history, architecture and natural beauty.",
    image: "/images/destinations/palpa/rani-mahal.jpg",
    location: "Ranighat, Palpa",
    duration: "Half Day – 1 Day",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historic palace",
      "Kali Gandaki River",
      "Scenic surroundings",
      "Photography",
      "Romantic atmosphere",
    ],
    travelTips: [
      {
        id: "rani-mahal-tip-1",
        title: "Allow enough time for the journey",
        description: "Carry water and comfortable footwear",
        category: "Travel",
      },
      {
        id: "rani-mahal-tip-2",
        title: "Start early for a more relaxed visit",
        description: "Keep the surroundings clean",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "rani-mahal-g1",
        src: "/images/destinations/palpa/rani-mahal-1.jpg",
        alt: "Rani Mahal riverside palace",
        category: "Heritage",
      },
      {
        id: "rani-mahal-g2",
        src: "/images/destinations/palpa/rani-mahal-2.jpg",
        alt: "Rani Mahal and Kali Gandaki",
        category: "Nature",
      },
      {
        id: "rani-mahal-g3",
        src: "/images/destinations/palpa/rani-mahal-3.jpg",
        alt: "Rani Mahal palace surroundings",
        category: "Landscape",
      },
    ],
  },
  {
    id: "srinagar-hill",
    slug: "srinagar-hill",
    name: "Srinagar Hill",
    category: "Nature & Viewpoint",
    shortDescription:
      "Escape to a peaceful hilltop surrounded by sweeping views of Palpa's green landscapes.",
    description:
      "Srinagar Hill is one of the best-known scenic areas around Tansen. Its elevated location provides a peaceful setting for enjoying the surrounding hills, valleys and distant mountain scenery, especially during clear weather.",
    image: "/images/destinations/palpa/srinagar-hill.jpg",
    location: "Tansen, Palpa",
    duration: "Half Day",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Panoramic views",
      "Green hills",
      "Sunrise and sunset",
      "Photography",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "srinagar-hill-tip-1",
        title: "Visit during clear weather",
        description: "Carry a light jacket",
        category: "Weather",
      },
      {
        id: "srinagar-hill-tip-2",
        title: "Bring water",
        description: "Keep the viewpoint clean",
        category: "Health",
      },
    ],
    gallery: [
      {
        id: "srinagar-hill-g1",
        src: "/images/destinations/palpa/srinagar-hill-1.jpg",
        alt: "Srinagar Hill panoramic views",
        category: "Viewpoint",
      },
      {
        id: "srinagar-hill-g2",
        src: "/images/destinations/palpa/srinagar-hill-2.jpg",
        alt: "Srinagar Hill green landscapes",
        category: "Nature",
      },
    ],
  },
  {
    id: "bhagwati-temple",
    slug: "bhagwati-temple",
    name: "Bhagwati Temple",
    category: "Spiritual & Heritage",
    shortDescription:
      "Visit one of Tansen's important temples and experience a peaceful glimpse into Palpa's spiritual traditions.",
    description:
      "Bhagwati Temple is an important religious landmark in Tansen and a meaningful part of the town's cultural identity. Its traditional setting and spiritual atmosphere offer visitors an opportunity to experience local religious traditions and heritage.",
    image: "/images/destinations/palpa/bhagwati-temple.jpg",
    location: "Tansen, Palpa",
    duration: "1 Hour",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Religious heritage",
      "Traditional architecture",
      "Local culture",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "bhagwati-temple-tip-1",
        title: "Dress respectfully",
        description: "Follow temple customs",
        category: "Culture",
      },
      {
        id: "bhagwati-temple-tip-2",
        title: "Ask before taking photographs",
        description: "Respect worshippers",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "bhagwati-temple-g1",
        src: "/images/destinations/palpa/bhagwati-temple-1.jpg",
        alt: "Bhagwati Temple Tansen",
        category: "Spiritual",
      },
      {
        id: "bhagwati-temple-g2",
        src: "/images/destinations/palpa/bhagwati-temple-2.jpg",
        alt: "Bhagwati Temple architecture",
        category: "Heritage",
      },
    ],
  },
  {
    id: "amar-narayan-temple",
    slug: "amar-narayan-temple",
    name: "Amar Narayan Temple",
    category: "Architecture & Spirituality",
    shortDescription:
      "Admire an elegant historic temple and discover the artistic heritage of Tansen.",
    description:
      "Amar Narayan Temple is admired for its traditional architecture and peaceful surroundings. The temple offers travelers a beautiful glimpse into the artistic, cultural and spiritual heritage preserved in Tansen.",
    image: "/images/destinations/palpa/amar-narayan-temple.jpg",
    location: "Tansen, Palpa",
    duration: "1 Hour",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Traditional architecture",
      "Religious heritage",
      "Local craftsmanship",
      "Peaceful surroundings",
    ],
    travelTips: [
      {
        id: "amar-narayan-temple-tip-1",
        title: "Dress respectfully",
        description: "Follow temple rules",
        category: "Culture",
      },
      {
        id: "amar-narayan-temple-tip-2",
        title: "Respect local worshippers",
        description: "Ask permission before photography",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "amar-narayan-temple-g1",
        src: "/images/destinations/palpa/amar-narayan-temple-1.jpg",
        alt: "Amar Narayan Temple Tansen",
        category: "Architecture",
      },
      {
        id: "amar-narayan-temple-g2",
        src: "/images/destinations/palpa/amar-narayan-temple-2.jpg",
        alt: "Amar Narayan Temple heritage",
        category: "Spirituality",
      },
    ],
  },
  {
    id: "shreenagar-view-tower",
    slug: "shreenagar-view-tower",
    name: "Shreenagar View Tower",
    category: "Viewpoint & Nature",
    shortDescription:
      "Enjoy beautiful panoramic views across the hills and valleys surrounding Tansen.",
    description:
      "Shreenagar View Tower is a scenic viewpoint offering travelers a chance to pause above the beautiful landscapes of Palpa. On clear days, the surrounding hills, valleys and distant Himalayan scenery create a spectacular setting for photography.",
    image: "/images/destinations/palpa/shreenagar-view-tower.jpg",
    location: "Tansen, Palpa",
    duration: "1–2 Hours",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Panoramic views",
      "Hill landscapes",
      "Photography",
      "Sunrise and sunset",
      "Peaceful environment",
    ],
    travelTips: [
      {
        id: "shreenagar-view-tower-tip-1",
        title: "Check weather conditions",
        description: "Visit during clear weather",
        category: "Weather",
      },
      {
        id: "shreenagar-view-tower-tip-2",
        title: "Carry water",
        description: "Avoid littering",
        category: "Health",
      },
    ],
    gallery: [
      {
        id: "shreenagar-view-tower-g1",
        src: "/images/destinations/palpa/shreenagar-view-tower-1.jpg",
        alt: "Shreenagar View Tower panorama",
        category: "Viewpoint",
      },
      {
        id: "shreenagar-view-tower-g2",
        src: "/images/destinations/palpa/shreenagar-view-tower-2.jpg",
        alt: "Shreenagar View Tower hills",
        category: "Landscape",
      },
    ],
  },
  {
    id: "tansen-old-town",
    slug: "tansen-old-town",
    name: "Tansen Old Town",
    category: "Culture & Heritage",
    shortDescription:
      "Get lost in charming historic streets filled with traditional houses, local life and authentic Palpali culture.",
    description:
      "Tansen Old Town is one of the most charming parts of Palpa, where traditional architecture, narrow streets, local shops and everyday life come together. Walking through the old town is a simple but memorable way to experience the authentic character of Tansen.",
    image: "/images/destinations/palpa/tansen-old-town.jpg",
    location: "Tansen, Palpa",
    duration: "2–4 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historic streets",
      "Traditional houses",
      "Local markets",
      "Newari culture",
      "Photography",
    ],
    travelTips: [
      {
        id: "tansen-old-town-tip-1",
        title: "Explore slowly on foot",
        description: "Respect private homes",
        category: "Exploration",
      },
      {
        id: "tansen-old-town-tip-2",
        title: "Try local products",
        description: "Support local businesses",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "tansen-old-town-g1",
        src: "/images/destinations/palpa/tansen-old-town-1.jpg",
        alt: "Tansen Old Town streets",
        category: "Culture",
      },
      {
        id: "tansen-old-town-g2",
        src: "/images/destinations/palpa/tansen-old-town-2.jpg",
        alt: "Tansen Old Town heritage",
        category: "Heritage",
      },
      {
        id: "tansen-old-town-g3",
        src: "/images/destinations/palpa/tansen-old-town-3.jpg",
        alt: "Tansen Old Town daily life",
        category: "Culture",
      },
    ],
  },
  {
    id: "ranighat",
    slug: "ranighat",
    name: "Ranighat",
    category: "Nature & Heritage",
    shortDescription:
      "Journey through beautiful hills and river landscapes to discover one of Palpa's most memorable heritage areas.",
    description:
      "Ranighat is a scenic destination along the Kali Gandaki River and is closely associated with the historic Rani Mahal. The journey itself is part of the experience, offering travelers peaceful river views, green hills and a rewarding escape from the busy city.",
    image: "/images/destinations/palpa/ranighat.jpg",
    location: "Ranighat, Palpa",
    duration: "Half Day – 1 Day",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Kali Gandaki River",
      "Green hills",
      "Rani Mahal",
      "Scenic journey",
      "Photography",
    ],
    travelTips: [
      {
        id: "ranighat-tip-1",
        title: "Start early",
        description: "Carry water and snacks",
        category: "Planning",
      },
      {
        id: "ranighat-tip-2",
        title: "Wear comfortable footwear",
        description: "Check local travel conditions",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "ranighat-g1",
        src: "/images/destinations/palpa/ranighat-1.jpg",
        alt: "Ranighat river landscape",
        category: "Nature",
      },
      {
        id: "ranighat-g2",
        src: "/images/destinations/palpa/ranighat-2.jpg",
        alt: "Ranighat Kali Gandaki",
        category: "Heritage",
      },
    ],
  },
  {
    id: "bhairabsthan-temple",
    slug: "bhairabsthan-temple",
    name: "Bhairabsthan Temple",
    category: "Spiritual & Culture",
    shortDescription:
      "Experience the spiritual atmosphere of a historic hilltop temple surrounded by beautiful Palpa landscapes.",
    description:
      "Bhairabsthan Temple is a significant religious destination in Palpa and a place where spiritual traditions meet scenic hill landscapes. Visitors can experience the peaceful atmosphere while discovering another important part of the region's cultural heritage.",
    image: "/images/destinations/palpa/bhairabsthan-temple.jpg",
    location: "Bhairabsthan, Palpa",
    duration: "1–2 Hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Religious heritage",
      "Traditional temple",
      "Hill scenery",
      "Local culture",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "bhairabsthan-temple-tip-1",
        title: "Dress respectfully",
        description: "Follow temple customs",
        category: "Culture",
      },
      {
        id: "bhairabsthan-temple-tip-2",
        title: "Respect local traditions",
        description: "Ask before photography",
        category: "Photography",
      },
    ],
    gallery: [
      {
        id: "bhairabsthan-temple-g1",
        src: "/images/destinations/palpa/bhairabsthan-temple-1.jpg",
        alt: "Bhairabsthan Temple Palpa",
        category: "Spiritual",
      },
      {
        id: "bhairabsthan-temple-g2",
        src: "/images/destinations/palpa/bhairabsthan-temple-2.jpg",
        alt: "Bhairabsthan Temple surroundings",
        category: "Landscape",
      },
    ],
  },
  {
    id: "batase-danda",
    slug: "batase-danda",
    name: "Batase Danda",
    category: "Nature & Viewpoint",
    shortDescription:
      "A peaceful hill destination where fresh air, open landscapes and beautiful views create a perfect escape.",
    description:
      "Batase Danda is a scenic hill area where travelers can enjoy fresh mountain air and beautiful countryside views. It is a relaxing destination for travelers looking to slow down, enjoy nature and capture the beauty of Palpa's rolling hills.",
    image: "/images/destinations/palpa/batase-danda.jpg",
    location: "Palpa",
    duration: "Half Day",
    bestTime: "October–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Hill views",
      "Fresh air",
      "Nature",
      "Photography",
      "Peaceful surroundings",
    ],
    travelTips: [
      {
        id: "batase-danda-tip-1",
        title: "Visit during clear weather",
        description: "Carry water",
        category: "Weather",
      },
      {
        id: "batase-danda-tip-2",
        title: "Wear comfortable shoes",
        description: "Keep the natural environment clean",
        category: "Travel",
      },
    ],
    gallery: [
      {
        id: "batase-danda-g1",
        src: "/images/destinations/palpa/batase-danda-1.jpg",
        alt: "Batase Danda hill views",
        category: "Nature",
      },
      {
        id: "batase-danda-g2",
        src: "/images/destinations/palpa/batase-danda-2.jpg",
        alt: "Batase Danda peaceful landscape",
        category: "Viewpoint",
      },
    ],
  },
  {
    id: "tansen-old-bazaar",
    slug: "tansen-old-bazaar",
    name: "Tansen Old Bazaar",
    category: "Heritage",
    shortDescription: "Historic streets, courtyards and hill-town character.",
    description:
      "Tansen Old Bazaar captures the spirit of Palpa through its winding streets, traditional shopfronts and long-standing neighborhood life. Walking here reveals layers of Newari-influenced architecture, carved wood details, old courtyards and local marketplaces where daily routines still shape the atmosphere. Visitors can enjoy the rhythm of a historic hill town while discovering tea shops, craft outlets and viewpoints hidden between lanes. The bazaar is ideal for cultural walking, street photography and relaxed exploration.",
    image: "/images/destinations/palpa/tansen-old-bazaar.jpg",
    location: "Tansen, Palpa",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "tansen-heritage-culture-tour",
    highlights: ["Historic streets", "Newari architecture", "Local markets", "Street photography", "Carved woodwork"],
    travelTips: [
      {
        id: "tob-tip-1",
        title: "Walk slowly",
        description: "The old bazaar rewards quiet exploration on foot.",
        category: "Exploration",
      },
      {
        id: "tob-tip-2",
        title: "Visit in the morning",
        description: "Shopkeepers and local life are most active in the early hours.",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "tob-g1",
        src: "/images/destinations/palpa/tansen-old-bazaar.jpg",
        alt: "Tansen Old Bazaar heritage streets",
        category: "Heritage",
      },
    ],
  },
  {
    id: "ranighat-palace",
    slug: "ranighat-palace",
    name: "Ranighat Palace",
    category: "Architecture",
    shortDescription: "A historic riverside palace in dramatic terrain.",
    description:
      "Ranighat Palace is one of Palpa's most iconic heritage landmarks, known for its striking riverside setting and unique architectural character. The palace attracts visitors interested in history, architecture and atmospheric locations that feel distinct from urban heritage centers. A visit works best when paired with nearby viewpoints and local guidance, allowing travelers to appreciate both the built structure and the broader environment.",
    image: "/images/destinations/palpa/ranighat-palace.jpg",
    location: "Ranighat Area, Palpa",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: true,
    tourSlug: "palpa-hills-ranighat-escape",
    highlights: ["Historic palace", "Riverside setting", "Heritage architecture", "Scenic landscape"],
    travelTips: [
      {
        id: "rp-tip-1",
        title: "Start early",
        description: "The journey to Ranighat is part of the experience — allow enough travel time.",
        category: "Planning",
      },
      {
        id: "rp-tip-2",
        title: "Carry water",
        description: "The area has limited facilities, so bring adequate supplies.",
        category: "Health",
      },
    ],
    gallery: [
      {
        id: "rp-g1",
        src: "/images/destinations/palpa/ranighat-palace.jpg",
        alt: "Ranighat Palace riverside setting",
        category: "Heritage",
      },
    ],
  },
  {
    id: "ranighat-riverside-area",
    slug: "ranighat-riverside-area",
    name: "Rani Mahal Riverside Area",
    category: "Nature",
    shortDescription: "Scenic river landscapes near the palace route.",
    description:
      "The riverside surroundings near Rani Mahal offer a different side of Palpa, where broad river views, green slopes and calmer travel rhythms create a rewarding nature-focused stop. This area complements heritage sightseeing by adding open landscapes and quiet photo opportunities. Visitors often enjoy slow walks, scenic pauses and a stronger sense of place as they observe how historic landmarks and natural terrain connect in western Nepal's hill geography.",
    image: "/images/destinations/palpa/ranighat-river.jpg",
    location: "Kali Gandaki Corridor, Palpa",
    duration: "1–2 hours",
    bestTime: "October–April",
    featured: true,
    tourAvailable: false,
    highlights: ["Kali Gandaki views", "River scenery", "Nature walks", "Photography spots"],
    travelTips: [
      {
        id: "rra-tip-1",
        title: "Wear comfortable footwear",
        description: "The riverside terrain can be uneven — sturdy shoes help.",
        category: "Travel",
      },
      {
        id: "rra-tip-2",
        title: "Keep the area clean",
        description: "The river environment is delicate — carry out all waste.",
        category: "Responsibility",
      },
    ],
    gallery: [
      {
        id: "rra-g1",
        src: "/images/destinations/palpa/ranighat-river.jpg",
        alt: "Riverside landscape near Rani Mahal Palpa",
        category: "Nature",
      },
    ],
  },
  {
    id: "rishikesh-temple",
    slug: "rishikesh-temple",
    name: "Rishikesh Temple",
    category: "Spiritual",
    shortDescription: "A peaceful religious site with local significance.",
    description:
      "Rishikesh Temple is an inviting stop for travelers who want to experience Palpa's quieter spiritual spaces. The temple's setting and atmosphere encourage a slower pace, making it suitable for reflective visits alongside broader cultural sightseeing. When combined with Tansen's heritage lanes and nearby viewpoints, Rishikesh Temple adds balance to an itinerary by connecting architecture, devotion and everyday hill-town culture in a gentle and meaningful way.",
    image: "/images/destinations/palpa/rishikesh-temple.jpg",
    location: "Palpa District",
    duration: "45–60 minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
    highlights: ["Local spirituality", "Traditional temple", "Peaceful setting", "Cultural context"],
    travelTips: [
      {
        id: "rt-tip-1",
        title: "Dress respectfully",
        description: "Modest clothing is appreciated at all temple sites.",
        category: "Culture",
      },
      {
        id: "rt-tip-2",
        title: "Observe quietly",
        description: "Allow worshippers space during religious activities.",
        category: "Courtesy",
      },
    ],
    gallery: [
      {
        id: "rt-g1",
        src: "/images/destinations/palpa/rishikesh-temple.jpg",
        alt: "Rishikesh Temple in Palpa",
        category: "Spiritual",
      },
    ],
  },
  {
    id: "palpa-dhaka-textile-area",
    slug: "palpa-dhaka-textile-area",
    name: "Palpa Dhaka Textile Area",
    category: "Culture",
    shortDescription: "Traditional textile craftsmanship and local creativity.",
    description:
      "Palpa is widely associated with Dhaka textile traditions, and visiting local craft and textile areas offers a closer view of this regional identity. Travelers can learn about patterns, fabric work and the cultural significance of Dhaka in dress and local commerce while supporting artisans and small businesses. This experience is particularly appealing for visitors interested in cultural industries, handmade products and meaningful souvenirs linked to local heritage.",
    image: "/images/destinations/palpa/palpa-dhaka.jpg",
    location: "Tansen Craft Area, Palpa",
    duration: "1–2 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    tourSlug: "tansen-heritage-culture-tour",
    highlights: ["Dhaka weaving", "Local crafts", "Textile tradition", "Cultural souvenirs", "Artisan workshops"],
    travelTips: [
      {
        id: "pdta-tip-1",
        title: "Support local artisans",
        description: "Buying directly from weavers helps sustain the tradition.",
        category: "Culture",
      },
      {
        id: "pdta-tip-2",
        title: "Ask questions",
        description: "Weavers are often happy to explain their craft and patterns.",
        category: "Learning",
      },
    ],
    gallery: [
      {
        id: "pdta-g1",
        src: "/images/destinations/palpa/palpa-dhaka.jpg",
        alt: "Palpa Dhaka textile weaving tradition",
        category: "Culture",
      },
    ],
  },
];

const palpaHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Explore the historic streets of Tansen",
    description: "Discover charming Newari architecture and cultural heritage.",
  },
  {
    id: "h2",
    title: "Visit the beautiful Rani Mahal",
    description: "Experience a romantic riverside palace beside the Kali Gandaki.",
  },
  {
    id: "h3",
    title: "Enjoy panoramic views from Srinagar Hill",
    description: "Sweeping vistas of Palpa's green landscapes.",
  },
  {
    id: "h4",
    title: "Discover traditional Newari architecture",
    description: "Explore temples and heritage buildings throughout Tansen.",
  },
  {
    id: "h5",
    title: "Visit historic temples",
    description: "Experience Palpa's spiritual and cultural landmarks.",
  },
  {
    id: "h6",
    title: "Experience authentic Palpali culture",
    description: "Connect with local traditions and customs.",
  },
  {
    id: "h7",
    title: "Enjoy peaceful hill landscapes",
    description: "Relax in the tranquil mountain settings of Palpa.",
  },
  {
    id: "h8",
    title: "Explore local markets and traditional crafts",
    description: "Discover artisan work and local products.",
  },
];

const palpaExperiences: Experience[] = [
  {
    id: "e1",
    title: "Historic Tansen Exploration",
    description: "Walk through centuries-old streets with traditional Newari architecture.",
    icon: "🏛️",
  },
  {
    id: "e2",
    title: "Riverside Romance at Rani Mahal",
    description: "Experience the peaceful beauty of a historic palace beside the Kali Gandaki.",
    icon: "🏰",
  },
  {
    id: "e3",
    title: "Mountain Viewpoint Sunrise",
    description: "Watch the sun rise over Palpa's green hills from scenic viewpoints.",
    icon: "🌅",
  },
  {
    id: "e4",
    title: "Temple & Spiritual Journey",
    description: "Visit Palpa's historic temples and experience local spiritual traditions.",
    icon: "🙏",
  },
];

const palpaTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "September to May offers clear skies and comfortable temperatures.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Getting Around",
    description: "Tansen is best explored on foot. Wear comfortable walking shoes.",
    category: "Transport",
  },
  {
    id: "t3",
    title: "Accommodation",
    description: "Stay in the heart of Tansen for easy access to historic sites and temples.",
    category: "Stay",
  },
  {
    id: "t4",
    title: "Respect Local Culture",
    description: "Follow temple etiquette and respect local customs throughout your visit.",
    category: "Culture",
  },
  {
    id: "t5",
    title: "Photography Tips",
    description: "Early morning and golden hour provide the best light for photography.",
    category: "Photography",
  },
  {
    id: "t6",
    title: "Pack Smart",
    description: "Bring water, sunscreen, comfortable footwear, and a camera.",
    category: "Packing",
  },
];

const palpaFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "What is Palpa famous for?",
    answer: "Palpa is known for its historic hill town of Tansen, traditional Newari architecture, peaceful temples, the iconic Rani Mahal, scenic viewpoints and authentic Nepali heritage.",
  },
  {
    id: "faq2",
    question: "How many days should I spend in Palpa?",
    answer: "2–3 days is ideal to explore Tansen's historic streets, visit temples, enjoy viewpoints, and experience local culture.",
  },
  {
    id: "faq3",
    question: "What is the best time to visit Palpa?",
    answer: "September to May offers the best weather with clear skies and comfortable temperatures. October-April is particularly ideal for photography.",
  },
  {
    id: "faq4",
    question: "Can I see Rani Mahal and is it worth visiting?",
    answer: "Yes, Rani Mahal is highly worth visiting. It's one of Palpa's most iconic landmarks, beautifully situated beside the Kali Gandaki River with stunning natural surroundings.",
  },
  {
    id: "faq5",
    question: "What are the main attractions in Tansen?",
    answer: "Main attractions include Tansen Old Town, historic temples (Bhagwati Temple, Amar Narayan Temple), Srinagar Hill viewpoint, and local markets showcasing traditional crafts.",
  },
  {
    id: "faq6",
    question: "Is Palpa suitable for families?",
    answer: "Yes, Palpa is perfect for families. The walking trails are accessible, viewpoints are safe, and cultural experiences are enriching for all ages.",
  },
];

const palpaGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/palpa/hero.jpg",
    alt: "Palpa hero image",
    category: "Hero",
  },
  {
    id: "g2",
    src: "/images/destinations/palpa/tansen-durbar.jpg",
    alt: "Tansen Durbar historic landmark",
    category: "Heritage",
  },
  {
    id: "g3",
    src: "/images/destinations/palpa/rani-mahal.jpg",
    alt: "Rani Mahal riverside palace",
    category: "Palace",
  },
  {
    id: "g4",
    src: "/images/destinations/palpa/srinagar-hill.jpg",
    alt: "Srinagar Hill panoramic views",
    category: "Viewpoint",
  },
  {
    id: "g5",
    src: "/images/destinations/palpa/tansen-old-town.jpg",
    alt: "Tansen Old Town historic streets",
    category: "Culture",
  },
];

export const palpa: Destination = {
  id: "palpa",
  slug: "palpa",
  name: "Palpa",
  tagline: "Discover the Charm of Nepal's Historic Hills",
  shortDescription:
    "Explore historic Tansen, beautiful hilltop views, traditional Newari architecture, peaceful temples and the legendary Rani Mahal.",
  description:
    "Palpa is a beautiful hill destination in western Nepal known for its historic town of Tansen, traditional Newari architecture, peaceful temples, scenic viewpoints and the romantic Rani Mahal beside the Kali Gandaki River. With its charming streets, rich culture and beautiful Himalayan landscapes, Palpa offers a perfect combination of history, nature and authentic Nepali experiences.",
  heroImage: "/images/destinations/palpa/palpa.png",
  introImage: "/images/destinations/palpa/intro.jpg",
  ctaImage: "/images/destinations/palpa/cta.jpg",
  location: "Palpa, Lumbini Province, Nepal",
  region: "Western Nepal",
  knownFor: "Tansen, Rani Mahal, traditional Newari architecture, temples, hill views and cultural heritage",
  idealFor: [
    "History lovers",
    "Photographers",
    "Families",
    "Culture enthusiasts",
    "Nature lovers",
    "Peaceful travelers",
  ],
  recommendedDuration: "2–3 Days",
  bestTime: "September–May",
  numberOfTours: 8,
  featured: true,
  places: palpaPlaces,
  highlights: palpaHighlights,
  experiences: palpaExperiences,
  travelTips: palpaTravelTips,
  faqs: palpaFaqs,
  gallery: palpaGallery,
  seo: {
    title: "Palpa Travel Guide | Meegin Tours & Travels",
    description:
      "Discover Palpa's historic Tansen, Rani Mahal, temples and authentic Newari culture in the heart of western Nepal.",
    keywords: ["Palpa", "Tansen", "Rani Mahal", "Nepal travel", "heritage tourism"],
  },
};
