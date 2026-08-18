import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const baglungPlaces: Place[] = [
  {
    id: "panchakot-dham",
    slug: "panchakot-dham",
    name: "Panchakot Dham",
    category: "Culture & Spirituality",
    shortDescription:
      "Discover a peaceful hilltop destination where spirituality, Himalayan views and beautiful landscapes come together.",
    description:
      "Panchakot Dham is a peaceful cultural and spiritual destination near Baglung Bazaar. Set among beautiful hills, the area provides an opportunity to experience local religious traditions while enjoying impressive views toward the surrounding Himalayan ranges.",
    image: "/images/destinations/baglung/panchakot-dham.webp",
    location: "Panchakot, Baglung",
    duration: "2–4 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Spiritual experience",
      "Himalayan views",
      "Hilltop scenery",
      "Local culture",
      "Photography",
      "Peaceful environment",
    ],
    travelTips: [
      {
        id: "panchakot-tip-1",
        title: "Dress respectfully",
        description: "Respect religious traditions",
        category: "Culture",
      },
      {
        id: "panchakot-tip-2",
        title: "Visit during clear weather",
        description: "Best mountain views in early morning",
        category: "Weather",
      },
      {
        id: "panchakot-tip-3",
        title: "Keep the area clean",
        description: "Maintain the peaceful environment",
        category: "Responsible Travel",
      },
    ],
    gallery: [
      {
        id: "panchakot-g1",
        src: "/images/destinations/baglung/panchakot-dham-1.jpg",
        alt: "Panchakot Dham hilltop",
        category: "Viewpoint",
      },
      {
        id: "panchakot-g2",
        src: "/images/destinations/baglung/panchakot-dham-2.jpg",
        alt: "Panchakot Dham cultural site",
        category: "Culture",
      },
      {
        id: "panchakot-g3",
        src: "/images/destinations/baglung/panchakot-dham-3.jpg",
        alt: "Panchakot Dham Himalayan views",
        category: "Landscape",
      },
    ],
  },
  {
    id: "baglung-kalika-bhagawati-temple",
    slug: "baglung-kalika-bhagawati-temple",
    name: "Baglung Kalika Bhagawati Temple",
    category: "Culture & Pilgrimage",
    shortDescription:
      "Visit one of Baglung's most important religious landmarks, surrounded by forest, tradition and the spiritual atmosphere of the Kali Gandaki region.",
    description:
      "Baglung Kalika Bhagawati Temple is one of the region's best-known religious destinations. Dedicated to Kalika Bhagawati, the temple attracts devotees and visitors throughout the year and becomes especially vibrant during major religious festivals. Its cultural importance makes it a meaningful stop for travelers interested in Nepal's spiritual heritage.",
    image: "/images/destinations/baglung/kalika-bhagawati-temple.jpg",
    location: "Baglung, Gandaki Province",
    duration: "1–2 Hours",
    bestTime: "Throughout the year",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Religious heritage",
      "Traditional architecture",
      "Local culture",
      "Festival celebrations",
      "Photography opportunities",
      "Spiritual significance",
    ],
    travelTips: [
      {
        id: "temple-tip-1",
        title: "Dress respectfully",
        description: "Wear appropriate clothing for religious sites",
        category: "Culture",
      },
      {
        id: "temple-tip-2",
        title: "Follow temple rules",
        description: "Respect worship times and restrictions",
        category: "Culture",
      },
      {
        id: "temple-tip-3",
        title: "Ask before photographing",
        description: "Be respectful of religious activities",
        category: "Photography",
      },
      {
        id: "temple-tip-4",
        title: "Maintain peaceful environment",
        description: "Keep noise levels low",
        category: "Respect",
      },
    ],
    gallery: [
      {
        id: "temple-g1",
        src: "/images/destinations/baglung/kalika-bhagawati-temple-1.jpg",
        alt: "Baglung Kalika Bhagawati Temple exterior",
        category: "Spiritual",
      },
      {
        id: "temple-g2",
        src: "/images/destinations/baglung/kalika-bhagawati-temple-2.jpg",
        alt: "Baglung Kalika Bhagawati Temple interior",
        category: "Religious",
      },
      {
        id: "temple-g3",
        src: "/images/destinations/baglung/kalika-bhagawati-temple-3.jpg",
        alt: "Baglung Kalika Bhagawati Temple details",
        category: "Architecture",
      },
    ],
  },
  {
    id: "dhorpatan",
    slug: "dhorpatan",
    name: "Dhorpatan",
    category: "Nature & Adventure",
    shortDescription:
      "Escape into the dramatic highlands of western Nepal, where wide alpine landscapes, mountains and traditional communities create a truly different experience.",
    description:
      "Dhorpatan is a spectacular high-altitude destination surrounded by mountains, forests and open alpine meadows. Its remote atmosphere, distinctive landscapes and local communities make it an excellent destination for travelers seeking nature, adventure and an experience far from crowded tourist routes.",
    image: "/images/destinations/baglung/dhorpatan.jpg",
    location: "Dhorpatan, Baglung",
    duration: "3–5 Days",
    bestTime: "March–April and October–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Alpine landscapes",
      "Mountain scenery",
      "Trekking opportunities",
      "Traditional communities",
      "Photography paradise",
      "Wildlife environment",
      "Remote wilderness",
    ],
    travelTips: [
      {
        id: "dhorpatan-tip-1",
        title: "Prepare for changing weather",
        description: "Mountain weather can change rapidly",
        category: "Weather",
      },
      {
        id: "dhorpatan-tip-2",
        title: "Carry warm clothing",
        description: "Temperatures can be cool at high altitude",
        category: "Packing",
      },
      {
        id: "dhorpatan-tip-3",
        title: "Plan transportation carefully",
        description: "Road conditions vary seasonally",
        category: "Travel",
      },
      {
        id: "dhorpatan-tip-4",
        title: "Respect local communities",
        description: "Ask permission before visiting homes",
        category: "Culture",
      },
      {
        id: "dhorpatan-tip-5",
        title: "Follow environmental guidelines",
        description: "Leave no trace, pack out all waste",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "dhorpatan-g1",
        src: "/images/destinations/baglung/dhorpatan-1.jpg",
        alt: "Dhorpatan alpine landscape",
        category: "Landscape",
      },
      {
        id: "dhorpatan-g2",
        src: "/images/destinations/baglung/dhorpatan-2.jpg",
        alt: "Dhorpatan mountain views",
        category: "Mountain",
      },
      {
        id: "dhorpatan-g3",
        src: "/images/destinations/baglung/dhorpatan-3.jpg",
        alt: "Dhorpatan natural scenery",
        category: "Nature",
      },
    ],
  },
  {
    id: "dhorpatan-hunting-reserve",
    slug: "dhorpatan-hunting-reserve",
    name: "Dhorpatan Hunting Reserve",
    category: "Wildlife & Nature",
    shortDescription:
      "Explore one of Nepal's most distinctive protected landscapes, known for alpine terrain, forests and diverse Himalayan wildlife.",
    description:
      "Dhorpatan Hunting Reserve is a remarkable protected area in western Nepal featuring forests, grasslands and high mountain landscapes. The reserve provides habitat for a variety of wildlife and offers adventurous travelers an opportunity to experience a remote Himalayan environment.",
    image: "/images/destinations/baglung/dhorpatan-hunting-reserve.jpg",
    location: "Baglung, Myagdi and Rukum East",
    duration: "2–5+ Days",
    bestTime: "March–April and October–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Himalayan wildlife",
      "Alpine grasslands",
      "Mountain landscapes",
      "Nature photography",
      "Trekking routes",
      "Remote wilderness",
      "Conservation area",
    ],
    travelTips: [
      {
        id: "reserve-tip-1",
        title: "Follow reserve regulations",
        description: "Respect protected area rules",
        category: "Safety",
      },
      {
        id: "reserve-tip-2",
        title: "Respect wildlife",
        description: "Keep distance from animals",
        category: "Wildlife",
      },
      {
        id: "reserve-tip-3",
        title: "Do not litter",
        description: "Preserve the natural environment",
        category: "Environment",
      },
      {
        id: "reserve-tip-4",
        title: "Use authorized local guidance",
        description: "Guides know the terrain and wildlife",
        category: "Travel",
      },
      {
        id: "reserve-tip-5",
        title: "Check access and weather conditions",
        description: "Conditions change seasonally",
        category: "Planning",
      },
    ],
    gallery: [
      {
        id: "reserve-g1",
        src: "/images/destinations/baglung/dhorpatan-hunting-reserve-1.jpg",
        alt: "Dhorpatan Hunting Reserve landscape",
        category: "Wildlife",
      },
      {
        id: "reserve-g2",
        src: "/images/destinations/baglung/dhorpatan-hunting-reserve-2.jpg",
        alt: "Dhorpatan Hunting Reserve nature",
        category: "Nature",
      },
      {
        id: "reserve-g3",
        src: "/images/destinations/baglung/dhorpatan-hunting-reserve-3.jpg",
        alt: "Dhorpatan Hunting Reserve terrain",
        category: "Landscape",
      },
    ],
  },
  {
    id: "kali-gandaki-river",
    slug: "kali-gandaki-river",
    name: "Kali Gandaki River",
    category: "Nature & Adventure",
    shortDescription:
      "Experience the powerful landscapes of the Kali Gandaki corridor, where deep river valleys, hills and Himalayan scenery create unforgettable views.",
    description:
      "The Kali Gandaki River is an important natural feature of the region and forms part of a spectacular landscape through western Nepal. The river corridor offers opportunities for scenic drives, photography, cultural exploration and adventure experiences while connecting travelers with several major Himalayan destinations.",
    image: "/images/destinations/baglung/kali-gandaki-river.jpg",
    location: "Baglung, Gandaki Province",
    duration: "Half Day–1 Day",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "River landscape views",
      "Mountain scenery",
      "Photography opportunities",
      "Scenic drives",
      "Adventure activities",
      "Natural beauty",
    ],
    travelTips: [
      {
        id: "river-tip-1",
        title: "Follow local safety guidance",
        description: "Rivers can be dangerous",
        category: "Safety",
      },
      {
        id: "river-tip-2",
        title: "Check weather conditions",
        description: "Water levels vary with season",
        category: "Weather",
      },
      {
        id: "river-tip-3",
        title: "Avoid fast-moving water",
        description: "Do not approach dangerous sections",
        category: "Safety",
      },
      {
        id: "river-tip-4",
        title: "Keep natural areas clean",
        description: "Leave no trace on river banks",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "river-g1",
        src: "/images/destinations/baglung/kali-gandaki-river-1.jpg",
        alt: "Kali Gandaki River landscape",
        category: "Landscape",
      },
      {
        id: "river-g2",
        src: "/images/destinations/baglung/kali-gandaki-river-2.jpg",
        alt: "Kali Gandaki River valley",
        category: "Nature",
      },
    ],
  },
  {
    id: "baglung-suspension-bridge",
    slug: "baglung-suspension-bridge",
    name: "Baglung Suspension Bridge",
    category: "Adventure & Scenic Experience",
    shortDescription:
      "Walk high above the river valley and experience the dramatic scenery that has made Baglung famous as Nepal's land of suspension bridges.",
    description:
      "Baglung is widely recognized for its impressive suspension bridges and dramatic river landscapes. Crossing one of these bridges offers travelers a simple but memorable experience, combining beautiful views of the valley with a sense of adventure.",
    image: "/images/destinations/baglung/baglung-suspension-bridge.jpg",
    location: "Baglung, Gandaki Province",
    duration: "30 Minutes–1 Hour",
    bestTime: "Throughout the year, subject to weather",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Suspension bridge crossing",
      "River valley views",
      "Photography moments",
      "Adventure experience",
      "Local landscape",
      "Unique perspective",
    ],
    travelTips: [
      {
        id: "bridge-tip-1",
        title: "Follow bridge safety rules",
        description: "Respect posted safety guidelines",
        category: "Safety",
      },
      {
        id: "bridge-tip-2",
        title: "Avoid overcrowding",
        description: "Bridges have capacity limits",
        category: "Safety",
      },
      {
        id: "bridge-tip-3",
        title: "Be careful with children",
        description: "Supervise young travelers closely",
        category: "Safety",
      },
      {
        id: "bridge-tip-4",
        title: "Check weather conditions",
        description: "High winds may affect safety",
        category: "Weather",
      },
      {
        id: "bridge-tip-5",
        title: "Respect local pedestrians",
        description: "This is a working crossing",
        category: "Respect",
      },
    ],
    gallery: [
      {
        id: "bridge-g1",
        src: "/images/destinations/baglung/baglung-suspension-bridge-1.jpg",
        alt: "Baglung Suspension Bridge",
        category: "Adventure",
      },
      {
        id: "bridge-g2",
        src: "/images/destinations/baglung/baglung-suspension-bridge-2.jpg",
        alt: "Baglung Suspension Bridge valley view",
        category: "Viewpoint",
      },
      {
        id: "bridge-g3",
        src: "/images/destinations/baglung/baglung-suspension-bridge-3.jpg",
        alt: "Baglung Suspension Bridge experience",
        category: "Experience",
      },
    ],
  },
  {
    id: "shaligram-museum",
    slug: "shaligram-museum",
    name: "Shaligram Museum",
    category: "Culture & History",
    shortDescription:
      "Discover the cultural and religious significance of Shaligram stones while exploring an important part of the heritage of the Kali Gandaki region.",
    description:
      "The Shaligram Museum offers travelers an opportunity to learn about the cultural, religious and natural significance associated with Shaligram stones found in the Kali Gandaki region. It provides an interesting experience for visitors who want to understand the traditions and heritage connected with the river.",
    image: "/images/destinations/baglung/shaligram-museum.jpg",
    location: "Baglung, Gandaki Province",
    duration: "1–2 Hours",
    bestTime: "Throughout the year",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Cultural heritage",
      "Shaligram stones",
      "Religious significance",
      "Local history",
      "Educational experience",
      "Unique collection",
    ],
    travelTips: [
      {
        id: "museum-tip-1",
        title: "Respect museum rules",
        description: "Follow posted guidelines",
        category: "Respect",
      },
      {
        id: "museum-tip-2",
        title: "Do not touch exhibits",
        description: "Unless explicitly permitted",
        category: "Respect",
      },
      {
        id: "museum-tip-3",
        title: "Ask before photography",
        description: "Some exhibits may prohibit photos",
        category: "Photography",
      },
      {
        id: "museum-tip-4",
        title: "Take time to learn",
        description: "Read descriptions to understand heritage",
        category: "Education",
      },
    ],
    gallery: [
      {
        id: "museum-g1",
        src: "/images/destinations/baglung/shaligram-museum-1.jpg",
        alt: "Shaligram Museum collection",
        category: "Culture",
      },
      {
        id: "museum-g2",
        src: "/images/destinations/baglung/shaligram-museum-2.jpg",
        alt: "Shaligram Museum exhibits",
        category: "Heritage",
      },
    ],
  },
  {
    id: "galkot-durbar",
    slug: "galkot-durbar",
    name: "Galkot Durbar",
    category: "History & Heritage",
    shortDescription:
      "Step into the history of Galkot and explore a heritage site connected with the region's historic hill kingdoms.",
    description:
      "Galkot Durbar offers a glimpse into the historical heritage of western Nepal. The site is associated with the former Galkot kingdom and provides travelers with an opportunity to explore the region's history while enjoying the surrounding hill landscapes.",
    image: "/images/destinations/baglung/galkot-durbar.jpg",
    location: "Galkot, Baglung",
    duration: "1–2 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Historical heritage",
      "Traditional architecture",
      "Hill landscapes",
      "Local culture",
      "Photography opportunities",
      "Kingdom history",
    ],
    travelTips: [
      {
        id: "durbar-tip-1",
        title: "Respect historic structures",
        description: "Preserve ancient buildings",
        category: "Heritage",
      },
      {
        id: "durbar-tip-2",
        title: "Avoid damaging surfaces",
        description: "Do not touch or lean on old walls",
        category: "Respect",
      },
      {
        id: "durbar-tip-3",
        title: "Follow local access rules",
        description: "Respect site restrictions",
        category: "Rules",
      },
      {
        id: "durbar-tip-4",
        title: "Combine with village exploration",
        description: "Explore the surrounding area",
        category: "Experience",
      },
    ],
    gallery: [
      {
        id: "durbar-g1",
        src: "/images/destinations/baglung/galkot-durbar-1.jpg",
        alt: "Galkot Durbar structure",
        category: "Heritage",
      },
      {
        id: "durbar-g2",
        src: "/images/destinations/baglung/galkot-durbar-2.jpg",
        alt: "Galkot Durbar landscape",
        category: "Landscape",
      },
    ],
  },
  {
    id: "bhakunde",
    slug: "bhakunde",
    name: "Bhakunde",
    category: "Nature & Viewpoint",
    shortDescription:
      "Escape into peaceful hills and enjoy beautiful views toward the Dhaulagiri and Annapurna mountain ranges.",
    description:
      "Bhakunde is a peaceful hill destination offering beautiful natural surroundings and impressive Himalayan views. Its quiet atmosphere, village landscapes and open viewpoints make it an attractive choice for travelers who want to experience a slower and more authentic side of Nepal.",
    image: "/images/destinations/baglung/bhakunde.jpg",
    location: "Baglung, Gandaki Province",
    duration: "Half Day–1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Himalayan views",
      "Village landscapes",
      "Natural beauty",
      "Photography opportunities",
      "Short hiking trails",
      "Peaceful environment",
    ],
    travelTips: [
      {
        id: "bhakunde-tip-1",
        title: "Visit during clear weather",
        description: "Best mountain views in clear conditions",
        category: "Weather",
      },
      {
        id: "bhakunde-tip-2",
        title: "Wear comfortable walking shoes",
        description: "Terrain can be uneven",
        category: "Packing",
      },
      {
        id: "bhakunde-tip-3",
        title: "Respect local communities",
        description: "Ask permission before entering villages",
        category: "Culture",
      },
      {
        id: "bhakunde-tip-4",
        title: "Keep the environment clean",
        description: "Leave no trace",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "bhakunde-g1",
        src: "/images/destinations/baglung/bhakunde-1.jpg",
        alt: "Bhakunde Himalayan views",
        category: "Landscape",
      },
      {
        id: "bhakunde-g2",
        src: "/images/destinations/baglung/bhakunde-2.jpg",
        alt: "Bhakunde village landscape",
        category: "Village",
      },
      {
        id: "bhakunde-g3",
        src: "/images/destinations/baglung/bhakunde-3.jpg",
        alt: "Bhakunde nature",
        category: "Nature",
      },
    ],
  },
  {
    id: "gaja-daha",
    slug: "gaja-daha",
    name: "Gaja Daha",
    category: "Nature & Scenic Destination",
    shortDescription:
      "Discover a peaceful natural escape surrounded by the hills and rural landscapes of Baglung.",
    description:
      "Gaja Daha is a quiet natural destination that offers travelers a chance to slow down and enjoy the peaceful landscapes of Baglung. Surrounded by hills and local scenery, it can be included as a relaxing stop during a wider exploration of the district.",
    image: "/images/destinations/baglung/gaja-daha.jpg",
    location: "Baglung District, Nepal",
    duration: "1–3 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Natural scenery",
      "Peaceful environment",
      "Local landscapes",
      "Photography opportunities",
      "Short nature visit",
      "Rural atmosphere",
    ],
    travelTips: [
      {
        id: "gaja-tip-1",
        title: "Check local access conditions",
        description: "Some areas may be seasonal",
        category: "Planning",
      },
      {
        id: "gaja-tip-2",
        title: "Keep the area clean",
        description: "Preserve the natural beauty",
        category: "Environment",
      },
      {
        id: "gaja-tip-3",
        title: "Respect local communities",
        description: "Be courteous to residents",
        category: "Culture",
      },
      {
        id: "gaja-tip-4",
        title: "Carry water and essentials",
        description: "Limited services available",
        category: "Packing",
      },
    ],
    gallery: [
      {
        id: "gaja-g1",
        src: "/images/destinations/baglung/gaja-daha-1.jpg",
        alt: "Gaja Daha natural landscape",
        category: "Nature",
      },
      {
        id: "gaja-g2",
        src: "/images/destinations/baglung/gaja-daha-2.jpg",
        alt: "Gaja Daha rural scenery",
        category: "Rural",
      },
    ],
  },
];

const baglungHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Spectacular Himalayan Views",
    description:
      "Enjoy breathtaking vistas of the Dhaulagiri and Annapurna mountain ranges from multiple viewpoints.",
  },
  {
    id: "h2",
    title: "Sacred Temples and Spirituality",
    description:
      "Visit the historic Baglung Kalika Bhagawati Temple and experience local religious traditions.",
  },
  {
    id: "h3",
    title: "Alpine Adventures",
    description: "Explore the dramatic highlands of Dhorpatan and its unique protected landscape.",
  },
  {
    id: "h4",
    title: "Dramatic Suspension Bridges",
    description: "Walk across impressive bridges with stunning river valley views.",
  },
  {
    id: "h5",
    title: "Kali Gandaki River Experiences",
    description: "Experience the powerful landscapes of this important river corridor.",
  },
  {
    id: "h6",
    title: "Traditional Village Experiences",
    description:
      "Encounter authentic communities and rural life in the peaceful hills of Baglung.",
  },
  {
    id: "h7",
    title: "Cultural and Heritage Sites",
    description: "Explore historic Galkot, the Shaligram Museum and local heritage.",
  },
  {
    id: "h8",
    title: "Nature and Wildlife",
    description: "Discover pristine mountain environments and the Dhorpatan Hunting Reserve.",
  },
];

const baglungExperiences: Experience[] = [
  {
    id: "e1",
    title: "Spiritual Pilgrimage",
    description:
      "Visit sacred temples and experience the spiritual traditions of western Nepal's communities.",
    icon: "🙏",
  },
  {
    id: "e2",
    title: "Mountain Trekking",
    description: "Trek through spectacular alpine landscapes and remote mountain terrain.",
    icon: "⛰️",
  },
  {
    id: "e3",
    title: "Cultural Immersion",
    description: "Experience authentic village life and traditional hill communities.",
    icon: "🏘️",
  },
  {
    id: "e4",
    title: "Adventure Activities",
    description: "Cross suspension bridges, explore reserves and enjoy outdoor adventures.",
    icon: "🌉",
  },
  {
    id: "e5",
    title: "Photography Journey",
    description:
      "Capture stunning landscapes, cultural moments and Himalayan mountain vistas.",
    icon: "📷",
  },
  {
    id: "e6",
    title: "Nature Exploration",
    description: "Discover pristine natural environments and protected wildlife areas.",
    icon: "🌿",
  },
];

const baglungTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "March–May and September–November offer the most pleasant weather and clear Himalayan views.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Getting Around",
    description: "Local guides enhance cultural experiences, safety and navigation through the district.",
    category: "Travel",
  },
  {
    id: "t3",
    title: "Cultural Respect",
    description: "Follow customs at temples, ask permission before photographing, and respect local communities.",
    category: "Culture",
  },
  {
    id: "t4",
    title: "Prepare for Adventures",
    description: "For Dhorpatan and trekking, bring appropriate gear, warm clothing and hiking equipment.",
    category: "Packing",
  },
  {
    id: "t5",
    title: "Photography Tips",
    description:
      "Early morning and golden hour provide the best light for landscape and cultural photography.",
    category: "Photography",
  },
  {
    id: "t6",
    title: "Essential Packing",
    description:
      "Carry water, sun protection, comfortable walking shoes, camera, warm layers and basic first aid.",
    category: "Packing",
  },
  {
    id: "t7",
    title: "Road Conditions",
    description: "Roads in Baglung can be challenging; check weather and accessibility before traveling.",
    category: "Travel",
  },
  {
    id: "t8",
    title: "Responsible Tourism",
    description:
      "Keep environments clean, respect wildlife, follow protected area regulations and support local communities.",
    category: "Responsible Travel",
  },
];

const baglungFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "What is Baglung known for?",
    answer:
      "Baglung is famous for its sacred temples (especially Baglung Kalika Bhagawati Temple), dramatic suspension bridges, spectacular highland landscapes of Dhorpatan, the Kali Gandaki River, traditional villages, and authentic western Nepal experiences.",
  },
  {
    id: "faq2",
    question: "How many days should I spend in Baglung?",
    answer:
      "2–4 days is ideal to explore temples, villages, viewpoints and local culture. For Dhorpatan trekking or extended adventures, 4–5+ days is recommended.",
  },
  {
    id: "faq3",
    question: "Is Baglung suitable for families?",
    answer:
      "Yes, Baglung offers accessible activities for families including temple visits, bazaar exploration, village walks, short hikes and scenic viewpoints with beautiful mountain views.",
  },
  {
    id: "faq4",
    question: "What makes Dhorpatan special?",
    answer:
      "Dhorpatan is Nepal's only protected hunting reserve, featuring spectacular high-altitude landscapes, diverse ecosystems, trekking opportunities, wildlife viewing and authentic mountain experiences.",
  },
  {
    id: "faq5",
    question: "What is the best time to visit Baglung?",
    answer:
      "March–May and September–November offer the best weather. October–April is ideal for clear mountain views and comfortable trekking conditions.",
  },
  {
    id: "faq6",
    question: "Is Baglung off the typical tourist path?",
    answer:
      "Yes, Baglung offers authentic experiences away from crowded tourist centers, making it ideal for travelers seeking genuine cultural immersion and natural beauty.",
  },
  {
    id: "faq7",
    question: "What are the main attractions in Baglung?",
    answer:
      "Key attractions include Baglung Kalika Bhagawati Temple, Panchakot Dham, Dhorpatan highlands, Kali Gandaki River, suspension bridges, Galkot heritage site, Shaligram Museum and traditional villages.",
  },
  {
    id: "faq8",
    question: "Are tours available in Baglung?",
    answer:
      "Yes, Meegin Tours & Travels offers carefully designed tour packages for various Baglung attractions and experiences. Contact us for customized itineraries.",
  },
];

const baglungGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/baglung/hero.jpg",
    alt: "Baglung destination hero image",
    category: "Hero",
  },
  {
    id: "g2",
    src: "/images/destinations/baglung/kalika-bhagawati-temple.jpg",
    alt: "Baglung Kalika Bhagawati Temple",
    category: "Spiritual",
  },
  {
    id: "g3",
    src: "/images/destinations/baglung/panchakot-dham.jpg",
    alt: "Panchakot Dham hilltop views",
    category: "Viewpoint",
  },
  {
    id: "g4",
    src: "/images/destinations/baglung/dhorpatan.jpg",
    alt: "Dhorpatan highland landscape",
    category: "Adventure",
  },
  {
    id: "g5",
    src: "/images/destinations/baglung/galkot-durbar.jpg",
    alt: "Galkot Durbar heritage site",
    category: "Heritage",
  },
  {
    id: "g6",
    src: "/images/destinations/baglung/kali-gandaki-river.jpg",
    alt: "Kali Gandaki River landscape",
    category: "Nature",
  },
  {
    id: "g7",
    src: "/images/destinations/baglung/baglung-suspension-bridge.jpg",
    alt: "Baglung Suspension Bridge",
    category: "Adventure",
  },
  {
    id: "g8",
    src: "/images/destinations/baglung/bhakunde.jpg",
    alt: "Bhakunde mountain views",
    category: "Viewpoint",
  },
];

export const baglung: Destination = {
  id: "baglung",
  slug: "baglung",
  name: "Baglung",
  tagline: "Discover Nepal Beyond the Ordinary",
  shortDescription:
    "Explore Baglung, a beautiful western Nepal destination filled with Himalayan views, dramatic river valleys, suspension bridges, sacred temples, traditional villages and unforgettable mountain adventures.",
  description:
    "Baglung offers travelers a beautiful combination of nature, culture and adventure. Located in Gandaki Province, the region is known for spectacular views of the Dhaulagiri and Annapurna ranges, the Kali Gandaki landscape, traditional communities, religious heritage and dramatic suspension bridges. From the peaceful surroundings of Panchakot and Kalika Bhagawati Temple to the high-altitude landscapes of Dhorpatan, Baglung offers an authentic side of Nepal waiting to be explored.",
  heroImage: "/images/destinations/baglung/hero.jpg",
  introImage: "/images/destinations/baglung/intro.jpg",
  ctaImage: "/images/destinations/baglung/cta.jpg",
  location: "Baglung, Gandaki Province, Nepal",
  region: "Western Nepal",
  knownFor:
    "Suspension bridges, Panchakot, Kalika Bhagawati Temple, Dhorpatan, Kali Gandaki River, Himalayan views, Galkot and traditional culture",
  idealFor: [
    "Nature lovers",
    "Cultural travelers",
    "Photographers",
    "Adventure seekers",
    "Families",
    "Couples",
    "Spiritual travelers",
  ],
  recommendedDuration: "2–5 Days",
  bestTime: "March–May and September–November",
  numberOfTours: 8,
  featured: true,
  places: baglungPlaces,
  highlights: baglungHighlights,
  experiences: baglungExperiences,
  travelTips: baglungTravelTips,
  faqs: baglungFaqs,
  gallery: baglungGallery,
  seo: {
    title: "Baglung Travel Guide | Meegin Tours & Travels",
    description:
      "Explore Baglung's sacred temples, Dhorpatan highlands, suspension bridges, traditional villages and authentic western Nepal culture. Plan your Baglung adventure.",
    keywords: [
      "Baglung",
      "Dhorpatan",
      "Kalika Bhagawati Temple",
      "Nepal travel",
      "adventure tourism",
      "mountain trekking",
      "western Nepal",
    ],
  },
};
