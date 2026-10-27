import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

const annapurnaPlaces: Place[] = [
  {
    id: "annapurna-base-camp",
    slug: "annapurna-base-camp",
    name: "Annapurna Base Camp",
    category: "Trekking & Adventure",
    shortDescription:
      "Stand beneath the magnificent Annapurna mountain range and experience one of Nepal's most unforgettable trekking destinations.",
    description:
      "Annapurna Base Camp (ABC) takes travelers deep into the heart of the Annapurna Sanctuary, surrounded by towering 7,000 to 8,000-meter peaks. The journey climbs from lush rhododendron forests and terraced landscapes up to a dramatic alpine amphitheater. It is a world-class trekking experience combining traditional Gurung villages, cascading waterfalls, and spectacular panoramic mountain views.",
    image: "/images/destinations/annapurna/annapurna-base-camp.jpg",
    location: "Annapurna Sanctuary",
    duration: "7–12 Days",
    bestTime: "September–November, March–May",
    featured: true,
    tourAvailable: true,
    tourSlug: "annapurna-base-camp",
    highlights: [
      "Spectacular 360-degree mountain panorama",
      "World-class Himalayan trekking",
      "Annapurna Sanctuary",
      "Sunrise over Machhapuchhre (Fishtail)",
      "Traditional Gurung and Magar villages",
    ],
    travelTips: [
      {
        id: "abc-tip-1",
        title: "Trekking Physicality",
        description: "The trail involves thousands of stone stairs. Cardiovascular preparation beforehand is highly recommended.",
        category: "Fitness",
      },
      {
        id: "abc-tip-2",
        title: "Pace your ascent",
        description: "Although ABC is lower than Everest Base Camp (at 4,130m), altitude sickness is still a risk. Take your time.",
        category: "Health",
      },
    ],
    gallery: [
      { id: "abc-g1", src: "/images/destinations/annapurna/annapurna-base-camp-1.jpg", alt: "Annapurna Base Camp Himalayan panorama", category: "Mountain" },
      { id: "abc-g2", src: "/images/destinations/annapurna/annapurna-base-camp-2.jpg", alt: "Sunrise over Annapurna I", category: "Sunrise" },
    ],
  },
  {
    id: "annapurna-circuit",
    slug: "annapurna-circuit",
    name: "Annapurna Circuit",
    category: "High-Altitude Trekking",
    shortDescription:
      "Journey completely around the Annapurna massif on one of the world's most legendary trekking trails.",
    description:
      "The Annapurna Circuit offers an extraordinary geographic and cultural shift over its long route. Starting in green subtropical valleys, trekkers climb steadily into the arid, Tibetan-influenced landscapes of Manang and Mustang. This epic journey tests endurance but rewards with unmatched diversity in climate, culture, and spectacular Himalayan vistas along the Marsyangdi and Kali Gandaki river valleys.",
    image: "/images/destinations/annapurna/annapurna-circuit.jpg",
    location: "Annapurna Region",
    duration: "12–18 Days",
    bestTime: "October–November, April–May",
    featured: true,
    tourAvailable: true,
    tourSlug: "annapurna-circuit",
    highlights: [
      "Diverse climatic zones",
      "Crossing the Thorong La Pass",
      "Tibetan-Buddhist culture in Manang",
      "Kali Gandaki Gorge, the world's deepest",
      "Dramatic changing scenery",
    ],
    travelTips: [
      {
        id: "circuit-tip-1",
        title: "Prepare for high altitude",
        description: "The circuit reaches 5,416m. Strict adherence to acclimatization days is mandatory.",
        category: "Health",
      },
      {
        id: "circuit-tip-2",
        title: "Layered clothing",
        description: "You will start in warm, humid weather and end up in freezing alpine conditions.",
        category: "Weather",
      },
    ]
  },
  {
    id: "thorong-la-pass",
    slug: "thorong-la-pass",
    name: "Thorong La Pass",
    category: "High Mountain Pass",
    shortDescription:
      "Challenge yourself by crossing the highest navigable pass on the Annapurna Circuit at 5,416 meters.",
    description:
      "Thorong La Pass is the physical and emotional climax of the Annapurna Circuit. Connecting the village of Manang with the sacred site of Muktinath, crossing this pass requires a strenuous, pre-dawn start to avoid high afternoon winds. Reaching the prayer-flag-draped summit provides an overwhelming sense of achievement and sweeping views of the barren Mustang region to the west.",
    image: "/images/destinations/annapurna/thorong-la-pass.jpg",
    location: "Between Manang and Mustang",
    duration: "1 Day (Crossing)",
    bestTime: "October–November, March–May",
    featured: true,
    tourAvailable: true,
    tourSlug: "annapurna-circuit",
    highlights: [
      "5,416m (17,769 ft) elevation",
      "Views stretching into Mustang",
      "Incredible physical achievement",
      "Iconic prayer flag summit",
    ],
    travelTips: [
      {
        id: "thorong-tip-1",
        title: "Start before dawn",
        description: "Winds pick up rapidly after 10 AM, making the pass highly dangerous in the afternoon.",
        category: "Safety",
      },
      {
        id: "thorong-tip-2",
        title: "Microspikes may be necessary",
        description: "In early spring or late autumn, the descent towards Muktinath can be icy.",
        category: "Gear",
      },
    ]
  },
  {
    id: "tilicho-lake",
    slug: "tilicho-lake",
    name: "Tilicho Lake",
    category: "Alpine Lake & Adventure",
    shortDescription:
      "Hike to one of the highest lakes in the world, renowned for its striking turquoise waters and glacial surroundings.",
    description:
      "Sitting at an elevation of 4,919 meters, Tilicho Lake is a breathtaking side trip from the main Annapurna Circuit. The glacial lake is completely surrounded by towering icy peaks, including Tilicho Peak. The trek to the lake from Manang traverses massive scree slopes and challenging rocky paths, making it a thrilling addition for fit trekkers.",
    image: "/images/destinations/annapurna/tilicho-lake.jpg",
    location: "Manang District",
    duration: "2–3 Days diversion from Circuit",
    bestTime: "September–November, April–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Turquoise glacial waters",
      "One of the world's highest lakes",
      "Challenging scree slope trekking",
      "Unbelievable alpine reflections",
    ],
    travelTips: [
      {
        id: "tilicho-tip-1",
        title: "Watch for rockfalls",
        description: "The trail from Siri Kharka crosses a steep landslide area requiring extreme caution.",
        category: "Safety",
      },
    ]
  },
  {
    id: "ghorepani",
    slug: "ghorepani",
    name: "Ghorepani Village",
    category: "Mountain Village",
    shortDescription:
      "A vibrant, blue-roofed mountain settlement famously known as the gateway to the Poon Hill viewpoint.",
    description:
      "Situated at 2,874 meters, Ghorepani is a bustling hub for trekkers. Historically a rest stop for ancient trading caravans where horses drank water, the village is now filled with cozy teahouses. Surrounded by dense, magnificent rhododendron forests, it offers a lively trekking atmosphere and stellar views right from your dining hall window.",
    image: "/images/destinations/annapurna/ghorepani.jpg",
    location: "Myagdi District",
    duration: "1–2 Days",
    bestTime: "March–May (Rhododendron blooms), Sept–Nov",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Lively trekking hub",
      "Gateway to Poon Hill",
      "Spring rhododendron forests",
      "Cozy mountain teahouses",
    ],
    travelTips: [
      {
        id: "ghorepani-tip-1",
        title: "Book teahouses early",
        description: "During peak season, this village fills up quickly. Guides can help secure space.",
        category: "Planning",
      },
    ]
  },
  {
    id: "poon-hill",
    slug: "poon-hill",
    name: "Poon Hill",
    category: "Viewpoint & Short Trek",
    shortDescription:
      "Experience a legendary Himalayan sunrise stretching across the Annapurna and Dhaulagiri mountain ranges.",
    description:
      "A short, steep hike from Ghorepani leads to Poon Hill (3,210m), undoubtedly Nepal's most famous accessible viewpoint. Before dawn, hundreds of trekkers ascend the stone steps to watch the golden morning light strike the massive peaks of Dhaulagiri, Annapurna South, and Machhapuchhre. It encapsulates the Himalayan experience in just a few days of walking.",
    image: "/images/destinations/annapurna/poon-hill.jpg",
    location: "Above Ghorepani",
    duration: "3–5 Days (Round trip from Pokhara)",
    bestTime: "October–April",
    featured: true,
    tourAvailable: true,
    tourSlug: "ghorepani-poon-hill",
    highlights: [
      "Incredible golden sunrise",
      "Expansive Dhaulagiri panorama",
      "Accessible trekking route",
      "Short duration required",
    ],
    travelTips: [
      {
        id: "poon-tip-1",
        title: "Bring a headlamp",
        description: "The 45-minute climb from Ghorepani begins in total darkness.",
        category: "Gear",
      },
    ]
  },
  {
    id: "manang",
    slug: "manang",
    name: "Manang",
    category: "Cultural Settlement",
    shortDescription:
      "A striking, Tibetan-influenced high-altitude settlement serving as the crucial acclimatization hub for the Circuit.",
    description:
      "Manang marks the topographical shift from the green lower valleys to the dry, barren trans-Himalayan plateau. At 3,519 meters, it is a vital stop for trekkers resting before the Thorong La pass. The village is rich in Tibetan Buddhist culture, featuring ancient monasteries, stone houses, and stunning views of Annapurna Gangapurna and its glacial lake right across the valley.",
    image: "/images/destinations/annapurna/manang.jpg",
    location: "Manang District",
    duration: "2 Days (Minimum for acclimatization)",
    bestTime: "September–November, April–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Tibetan Buddhist monasteries",
      "Essential acclimatization stop",
      "Gangapurna Lake views",
      "Unique dry-terrain architecture",
    ],
    travelTips: [
      {
        id: "manang-tip-1",
        title: "Do an acclimatization hike",
        description: "Climb up to the '100 Rupee Lama' cave or Praken Gompa on your rest day to help adjust to altitude.",
        category: "Health",
      },
    ]
  },
  {
    id: "muktinath",
    slug: "muktinath",
    name: "Muktinath",
    category: "Spiritual Pilgrimage",
    shortDescription:
      "A profoundly sacred site for both Hindus and Buddhists, set against the arid, windswept landscapes of Mustang.",
    description:
      "Muktinath is the sanctuary at the end of the Thorong La pass descent. Regarded as a holy site of salvation, the temple complex features 108 waterspouts where pilgrims bathe, and an eternal flame sustained by natural gas. The surrounding dramatic, desert-like terrain of the lower Mustang valley makes this spiritual destination exceptionally visually striking.",
    image: "/images/destinations/annapurna/muktinath.jpg",
    location: "Mustang District",
    duration: "1 Day",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "108 sacred water spouts",
      "Jwala Mai eternal flame temple",
      "Shared Hindu/Buddhist devotion",
      "Gateway to Mustang",
    ],
    travelTips: [
      {
        id: "mukti-tip-1",
        title: "Respect local customs",
        description: "Remove shoes before entering temples and do not photograph temple interiors.",
        category: "Culture",
      },
    ]
  },
  {
    id: "tatopani",
    slug: "tatopani",
    name: "Tatopani",
    category: "Relaxation & Nature",
    shortDescription:
      "A soothing resting point famous for its natural hot springs alongside the rushing Kali Gandaki River.",
    description:
      "After the grueling descent from Thorong La or Poon Hill down the Kali Gandaki Valley, Tatopani (which literally translates to 'hot water') provides welcome relief. Trekkers congregate at the natural communal hot spring pools to soothe aching muscles. The village has a warm, subtropical climate, surrounded by citrus trees and lush flora.",
    image: "/images/destinations/annapurna/tatopani.jpg",
    location: "Myagdi District",
    duration: "1–2 Days",
    bestTime: "October–May",
    featured: true,
    tourAvailable: false,
    highlights: [
      "Natural hot spring pools",
      "Subtropical environment",
      "Recovery along the trail",
      "Fresh local citrus fruits",
    ],
    travelTips: [
      {
        id: "tato-tip-1",
        title: "Bring a swimsuit",
        description: "Bathing in the hot springs requires modest swimwear.",
        category: "Packing",
      },
    ]
  },
  {
    id: "chhomrong",
    slug: "chhomrong",
    name: "Chhomrong",
    category: "Mountain Village",
    shortDescription:
      "A major Gurung settlement serving as the pivotal gateway and last permanent village before entering the Annapurna Sanctuary.",
    description:
      "Perched tightly onto the side of a massive mountain ridge, Chhomrong is a large, vibrant Gurung village. Boasting arguably the best close-up views of Annapurna South and Machhapuchhre in the lower region, the village is famous for its steep stone staircases. Every trekker heading to Annapurna Base Camp must pass through—and descend—Chhomrong.",
    image: "/images/destinations/annapurna/chhomrong.jpg",
    location: "Kaski District",
    duration: "1 Day",
    bestTime: "September–May",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Classic Gurung architecture",
      "Incredible Machhapuchhre views",
      "The gateway to the Sanctuary",
      "Famous local bakeries",
    ],
    travelTips: [
      {
        id: "chhom-tip-1",
        title: "Prepare for stairs",
        description: "The village requires descending hundreds of stone steps—which you will have to climb back up on your return.",
        category: "Trekking",
      },
    ]
  }
];

const annapurnaHighlights: Highlight[] = [
  {
    id: "ah1",
    title: "Stand in the Annapurna Sanctuary",
    description: "Experience the jaw-dropping amphitheater of glaciers and towering 8,000m peaks at Annapurna Base Camp.",
  },
  {
    id: "ah2",
    title: "Watch the golden hour at Poon Hill",
    description: "Wake before dawn to witness arguably the most famous and breathtaking Himalayan sunrise in the world.",
  },
  {
    id: "ah3",
    title: "Conquer the mighty Thorong La",
    description: "Challenge your physical limits by crossing the 5,416-meter pass on the epic Annapurna Circuit.",
  },
  {
    id: "ah4",
    title: "Trek the world's deepest gorge",
    description: "Follow the Kali Gandaki river valley, plunging deeply between the Dhaulagiri and Annapurna massifs.",
  },
  {
    id: "ah5",
    title: "Glimpse Tibetan culture in Manang",
    description: "Wander through stone villages and ancient monasteries in the trans-Himalayan rain shadow.",
  },
];

const annapurnaExperiences: Experience[] = [
  {
    id: "ae1",
    title: "Multi-Day Trekking",
    description: "From 3-day introductory hikes to 20-day high-altitude circuits across diverse terrain.",
    icon: "🥾",
  },
  {
    id: "ae2",
    title: "Cultural Immersion",
    description: "Stay in independent teahouses and meet the warm Gurung, Magar, and Thakali people.",
    icon: "🏘️",
  },
  {
    id: "ae3",
    title: "High-Altitude Achievement",
    description: "Safely navigate passes over 5,000m featuring sweeping views of dry alpine deserts.",
    icon: "🏔️",
  },
  {
    id: "ae4",
    title: "Nature Photography",
    description: "Capture blooming rhododendrons, steep valleys, rushing rivers, and snow-capped peaks.",
    icon: "📷",
  },
];

const annapurnaTravelTips: TravelTip[] = [
  {
    id: "at1",
    title: "Understand the Seasons",
    description: "Autumn (Oct-Nov) offers the clearest skies. Spring (Mar-May) provides slightly warmer weather and stunning trailside rhododendrons.",
    category: "Weather",
  },
  {
    id: "at2",
    title: "Teahouse Trekking",
    description: "The Annapurna region popularized 'teahouse trekking'. You do not need to camp; comfortable lodges and hot meals are available daily.",
    category: "Accommodation",
  },
  {
    id: "at3",
    title: "Permits Required",
    description: "You must obtain an Annapurna Conservation Area Project (ACAP) permit and a TIMS card before entering the trails.",
    category: "Planning",
  },
  {
    id: "at4",
    title: "Acclimatization is Key",
    description: "Never climb more than 500 meters of sleeping altitude per day once above 3,000m to prevent Acute Mountain Sickness (AMS).",
    category: "Health",
  },
];

const annapurnaFaqs: FaqItem[] = [
  {
    id: "af1",
    question: "Do I need previous trekking experience to visit Annapurna?",
    answer: "No. While high fitness helps, routes like Ghorepani Poon Hill are highly accessible for trekking beginners. Harder routes like the Circuit or Base Camp just require stamina and determination.",
  },
  {
    id: "af2",
    question: "Is altitude sickness a real threat?",
    answer: "Yes, on treks exceeding 3,000 meters like ABC and the Circuit. Our itineraries strictly include acclimatization days and our guides monitor health daily.",
  },
  {
    id: "af3",
    question: "Do I need to carry all my gear?",
    answer: "You can hire porters to carry your main duffel. Trekkers typically carry a daypack with water, daily layers, and a camera.",
  },
  {
    id: "af4",
    question: "What is the food like on the trail?",
    answer: "The teahouses offer diverse menus including Dal Bhat (the staple lentil and rice dish), momos, noodles, pasta, and even apple pie in the Mustang region.",
  },
];

const annapurnaGallery: GalleryImage[] = [
  { id: "ag1", src: "/images/destinations/annapurna/annapurna-viewpoints.jpg", alt: "Annapurna mountain range peaks", category: "Mountain" },
  { id: "ag2", src: "/images/destinations/annapurna/treak.jpg", alt: "Suspension bridge on the trekking route", category: "Trekking" },
  { id: "ag3", src: "/images/destinations/everest/sherpa-cultural.jpg", alt: "Prayer flags flapping in the wind", category: "Culture" },
  { id: "ag4", src: "/images/destinations/annapurna/ghorepani.jpg", alt: "Rhododendron forest in full bloom", category: "Nature" },
];

export const annapurna: Destination = {
  id: "annapurna",
  slug: "annapurna",
  name: "Annapurna Region",
  tagline: "The Ultimate Himalayan Trekking Playground",
  shortDescription:
    "Explore the majestic Annapurna region, renowned for the world-famous Annapurna Base Camp, the epic Annapurna Circuit, sweeping mountain sunrises, and traditional Himalayan villages.",
  description:
    "The Annapurna Massif in north-central Nepal is globally celebrated as one of the finest trekking regions on Earth. Encompassing dramatic geographical diversity—from sub-tropical valleys filled with terraced farms to arid trans-Himalayan deserts and towering 8,000-meter icy peaks—it offers profound adventure for every traveler. Here, ancient trade routes connect isolated Gurung, Magar, and Tibetan-influenced settlements, ensuring that every mountain path provides immense cultural richness alongside unparalleled scenery.",
  heroImage: "/images/destinations/annapurna/hero.jpg",
  introImage: "/images/destinations/annapurna/intro.jpg",
  ctaImage: "/images/destinations/annapurna/cta.jpg",
  location: "Gandaki Province, Nepal",
  region: "Himalayas",
  knownFor:
    "World-class multi-day trekking, Annapurna Base Camp, the Annapurna Circuit, Poon Hill sunrise, diverse climates, and local teahouse hospitality.",
  idealFor: [
    "Adventure seekers",
    "Hikers and Trekkers",
    "Nature photographers",
    "Culture enthusiasts",
  ],
  recommendedDuration: "5–20 Days",
  bestTime: "Sept–Nov & Mar–May",
  numberOfTours: 12,
  featured: true,
  places: annapurnaPlaces,
  highlights: annapurnaHighlights,
  experiences: annapurnaExperiences,
  travelTips: annapurnaTravelTips,
  faqs: annapurnaFaqs,
  gallery: annapurnaGallery,
  seo: {
    title: "Annapurna Tours & Trekking Packages | MEegin Tours & Travels",
    description:
      "Trek the legendary Annapurna region in Nepal. Discover Annapurna Base Camp, the Annapurna Circuit, breathtaking mountain villages, and thrilling Himalayan scenery.",
    keywords: [
      "Annapurna",
      "Nepal",
      "trekking",
      "Annapurna Base Camp",
      "Annapurna Circuit",
      "Himalayan scenery",
      "mountain villages",
      "trekking experiences",
      "Poon Hill",
    ],
  },
};
