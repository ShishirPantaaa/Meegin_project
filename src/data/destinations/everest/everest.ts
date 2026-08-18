import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";
import { pokhara } from "../pokhara/pokhara";
import { mustang } from "../mustang/mustang";
import { chitwan } from "../chitwan/chitwan";
import { lumbini } from "../lumbini/lumbini";
import { palpa } from "../palpa/palpa";
import { baglung } from "../baglung/baglung";
import { kathmandu } from "../kathmandu/kathmandu";
import { bandipur } from "../bandipur/bandipur";
import { ghandruk } from "../ghandruk/ghandruk";
import { annapurna } from "../annapurna/annapurna";

const everestPlaces: Place[] = [
  {
    id: "everest-base-camp",
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    category: "Trekking & Adventure",
    shortDescription:
      "Follow one of the world's most iconic trekking routes and stand beneath the mighty Everest surrounded by breathtaking Himalayan peaks.",
    description:
      "Everest Base Camp is the dream destination for travelers who want to experience the Himalayas at their most dramatic. The journey passes through Sherpa villages, suspension bridges, mountain valleys and spectacular landscapes before reaching the legendary base camp beneath Mount Everest.",
    image: "/images/destinations/everest/everest-base-camp.jpg",
    location: "Khumbu, Solukhumbu",
    duration: "12–16 Days",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-base-camp-kala-patthar",
    highlights: [
      "Everest Base Camp",
      "Himalayan trekking",
      "Sherpa villages",
      "Mountain scenery",
      "Khumbu Glacier",
      "Photography",
    ],
    travelTips: [
      {
        id: "everest-base-camp-tip-1",
        title: "Prepare physically before the trek",
        description: "The route is demanding, so a good level of fitness helps you enjoy it more comfortably.",
        category: "Fitness",
      },
      {
        id: "everest-base-camp-tip-2",
        title: "Acclimatize properly",
        description: "A slow pace and gradual altitude gain are important in the high Himalayas.",
        category: "Health",
      },
      {
        id: "everest-base-camp-tip-3",
        title: "Stay hydrated",
        description: "Regular water intake helps keep energy levels steady during long trekking days.",
        category: "Health",
      },
      {
        id: "everest-base-camp-tip-4",
        title: "Carry suitable trekking clothing",
        description: "Layered clothing helps as the day warms and cools in mountain zones.",
        category: "Travel",
      },
      {
        id: "everest-base-camp-tip-5",
        title: "Check weather and trail conditions",
        description: "Conditions can change quickly, so prepare for varying mountain weather.",
        category: "Weather",
      },
      {
        id: "everest-base-camp-tip-6",
        title: "Use experienced local trekking guidance",
        description: "A knowledgeable guide helps with route planning and high-altitude awareness.",
        category: "Safety",
      },
    ],
    gallery: [
      {
        id: "everest-base-camp-g1",
        src: "/images/destinations/everest/everest-base-camp-1.jpg",
        alt: "Everest Base Camp mountain trail",
        category: "Trekking",
      },
      {
        id: "everest-base-camp-g2",
        src: "/images/destinations/everest/everest-base-camp-2.jpg",
        alt: "Everest Base Camp glacier view",
        category: "Mountain",
      },
      {
        id: "everest-base-camp-g3",
        src: "/images/destinations/everest/everest-base-camp-3.jpg",
        alt: "Everest Base Camp iconic Himalayan scene",
        category: "Landscape",
      },
    ],
  },
  {
    id: "namche-bazaar",
    slug: "namche-bazaar",
    name: "Namche Bazaar",
    category: "Culture & Mountain Village",
    shortDescription:
      "Explore the vibrant mountain gateway of the Everest region, surrounded by dramatic peaks and rich Sherpa culture.",
    description:
      "Namche Bazaar is the colorful heart of the Khumbu region and an important stop for trekkers heading toward Everest. Its curved mountain streets, local shops, cafés, bakeries and Sherpa hospitality create a unique Himalayan atmosphere surrounded by spectacular mountain scenery.",
    image: "/images/destinations/everest/namche-bazaar.jpg",
    location: "Khumbu, Solukhumbu",
    duration: "1–2 Days",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-sherpa-cultural",
    highlights: [
      "Sherpa culture",
      "Mountain town",
      "Himalayan views",
      "Local markets",
      "Trekking experience",
      "Photography",
    ],
    travelTips: [
      {
        id: "namche-bazaar-tip-1",
        title: "Allow time for acclimatization",
        description: "A few rest days in the town help travelers adjust better to altitude.",
        category: "Health",
      },
      {
        id: "namche-bazaar-tip-2",
        title: "Walk slowly at altitude",
        description: "A steady pace makes the route easier to manage in Himalayan conditions.",
        category: "Safety",
      },
      {
        id: "namche-bazaar-tip-3",
        title: "Explore local shops responsibly",
        description: "Support local businesses and enjoy the atmosphere respectfully.",
        category: "Culture",
      },
      {
        id: "namche-bazaar-tip-4",
        title: "Stay hydrated",
        description: "Fluid intake remains important even during rest days in town.",
        category: "Health",
      },
      {
        id: "namche-bazaar-tip-5",
        title: "Respect local culture",
        description: "A calm and respectful approach helps you enjoy the town more fully.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "namche-bazaar-g1",
        src: "/images/destinations/everest/namche-bazaar-1.jpg",
        alt: "Namche Bazaar mountain town",
        category: "Village",
      },
      {
        id: "namche-bazaar-g2",
        src: "/images/destinations/everest/namche-bazaar-2.jpg",
        alt: "Namche Bazaar sherpa cultural scene",
        category: "Culture",
      },
      {
        id: "namche-bazaar-g3",
        src: "/images/destinations/everest/namche-bazaar-3.jpg",
        alt: "Namche Bazaar Himalayan view",
        category: "Mountain",
      },
    ],
  },
  {
    id: "tengboche-monastery",
    slug: "tengboche-monastery",
    name: "Tengboche Monastery",
    category: "Culture & Spirituality",
    shortDescription:
      "Experience the peaceful spirituality of the Himalayas at one of the most important monasteries in the Everest region.",
    description:
      "Tengboche Monastery sits in a spectacular Himalayan setting surrounded by forests and towering peaks. The monastery offers travelers a peaceful cultural experience while providing an opportunity to appreciate the spiritual traditions of the Sherpa community.",
    image: "/images/destinations/everest/tengboche-monastery.jpg",
    location: "Tengboche, Khumbu",
    duration: "1–2 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-sherpa-cultural",
    highlights: [
      "Buddhist culture",
      "Himalayan monastery",
      "Mountain scenery",
      "Sherpa heritage",
      "Peaceful atmosphere",
    ],
    travelTips: [
      {
        id: "tengboche-monastery-tip-1",
        title: "Dress respectfully",
        description: "Modest clothing is appropriate when visiting spiritual sites.",
        category: "Culture",
      },
      {
        id: "tengboche-monastery-tip-2",
        title: "Maintain a quiet environment",
        description: "A calm and respectful attitude helps preserve the peaceful atmosphere.",
        category: "Culture",
      },
      {
        id: "tengboche-monastery-tip-3",
        title: "Follow monastery rules",
        description: "Listening to local guidance helps ensure a respectful visit.",
        category: "Culture",
      },
      {
        id: "tengboche-monastery-tip-4",
        title: "Ask before taking photographs",
        description: "This is especially important during prayer or ceremonies.",
        category: "Photography",
      },
      {
        id: "tengboche-monastery-tip-5",
        title: "Respect religious ceremonies",
        description: "A quiet attitude helps maintain the dignity of the place.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "tengboche-monastery-g1",
        src: "/images/destinations/everest/tengboche-monastery-1.jpg",
        alt: "Tengboche Monastery mountain view",
        category: "Monastery",
      },
      {
        id: "tengboche-monastery-g2",
        src: "/images/destinations/everest/tengboche-monastery-2.jpg",
        alt: "Tengboche Monastery spiritual setting",
        category: "Culture",
      },
    ],
  },
  {
    id: "kala-patthar",
    slug: "kala-patthar",
    name: "Kala Patthar",
    category: "Mountain Viewpoint & Trekking",
    shortDescription:
      "Climb to one of the most spectacular viewpoints in the Everest region for unforgettable sunrise views of Everest and the surrounding peaks.",
    description:
      "Kala Patthar is famous for its breathtaking panoramic Himalayan views. The climb rewards travelers with an extraordinary mountain panorama, making it one of the most memorable experiences for trekkers exploring the Everest region.",
    image: "/images/destinations/everest/kala-patthar.jpg",
    location: "Khumbu, Solukhumbu",
    duration: "Half Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-base-camp-kala-patthar",
    highlights: [
      "Everest views",
      "Sunrise",
      "Himalayan panorama",
      "Trekking",
      "Photography",
    ],
    travelTips: [
      {
        id: "kala-patthar-tip-1",
        title: "Start early for sunrise",
        description: "Sunrise is the best time to admire the mountain glow and the wide panorama.",
        category: "Travel",
      },
      {
        id: "kala-patthar-tip-2",
        title: "Dress warmly",
        description: "Cold air and wind can be strong before the sun rises higher.",
        category: "Weather",
      },
      {
        id: "kala-patthar-tip-3",
        title: "Acclimatize properly",
        description: "The climb can feel more demanding at higher altitude, so take it steadily.",
        category: "Health",
      },
      {
        id: "kala-patthar-tip-4",
        title: "Walk slowly at high altitude",
        description: "Your pace matters more than speed on steep, high mountain routes.",
        category: "Safety",
      },
      {
        id: "kala-patthar-tip-5",
        title: "Check weather conditions",
        description: "Clearer conditions make the view dramatically better and easier to enjoy.",
        category: "Weather",
      },
    ],
    gallery: [
      {
        id: "kala-patthar-g1",
        src: "/images/destinations/everest/kala-patthar-1.jpg",
        alt: "Kala Patthar sunrise over Everest",
        category: "Sunrise",
      },
      {
        id: "kala-patthar-g2",
        src: "/images/destinations/everest/kala-patthar-2.jpg",
        alt: "Kala Patthar panoramic mountain view",
        category: "Viewpoint",
      },
      {
        id: "kala-patthar-g3",
        src: "/images/destinations/everest/kala-patthar-3.jpg",
        alt: "Kala Patthar Everest region scenery",
        category: "Mountain",
      },
    ],
  },
  {
    id: "lukla",
    slug: "lukla",
    name: "Lukla",
    category: "Mountain Gateway",
    shortDescription:
      "Begin your Everest adventure from the famous mountain gateway of Lukla, surrounded by dramatic hills and Himalayan landscapes.",
    description:
      "Lukla is one of the most recognizable gateways to the Everest region. For many travelers, the journey through Lukla marks the beginning of an unforgettable Himalayan adventure toward Namche Bazaar, Everest Base Camp and the surrounding mountain destinations.",
    image: "/images/destinations/everest/lukla.jpg",
    location: "Lukla, Solukhumbu",
    duration: "1 Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-base-camp-kala-patthar",
    highlights: [
      "Everest gateway",
      "Mountain scenery",
      "Sherpa culture",
      "Trekking starting point",
      "Local village experience",
    ],
    travelTips: [
      {
        id: "lukla-tip-1",
        title: "Keep travel plans flexible",
        description: "Mountain weather can affect flights and ground conditions.",
        category: "Weather",
      },
      {
        id: "lukla-tip-2",
        title: "Carry essential items in your daypack",
        description: "A small daybag helps because mountain travel conditions can shift quickly.",
        category: "Travel",
      },
      {
        id: "lukla-tip-3",
        title: "Respect local communities",
        description: "Observe local customs and move through the village thoughtfully.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "lukla-g1",
        src: "/images/destinations/everest/lukla-1.jpg",
        alt: "Lukla mountain gateway",
        category: "Gateway",
      },
      {
        id: "lukla-g2",
        src: "/images/destinations/everest/lukla-2.jpg",
        alt: "Lukla village with mountain backdrop",
        category: "Village",
      },
    ],
  },
  {
    id: "sagarmatha-national-park",
    slug: "sagarmatha-national-park",
    name: "Sagarmatha National Park",
    category: "Nature & Wildlife",
    shortDescription:
      "Explore a spectacular protected Himalayan landscape filled with mountains, forests, wildlife and unforgettable trekking trails.",
    description:
      "Sagarmatha National Park protects some of the world's most dramatic mountain landscapes. Its forests, valleys, glaciers and high Himalayan terrain create a remarkable environment where travelers can experience both natural beauty and the cultural heritage of the Khumbu region.",
    image: "/images/destinations/everest/sagarmatha-national-park.jpg",
    location: "Solukhumbu, Nepal",
    duration: "Multiple Days",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Himalayan landscapes",
      "Wildlife",
      "Forest trails",
      "Glaciers",
      "Mountain scenery",
      "Trekking",
    ],
    travelTips: [
      {
        id: "sagarmatha-national-park-tip-1",
        title: "Follow park regulations",
        description: "Park rules are important for preserving the landscape and route integrity.",
        category: "Environment",
      },
      {
        id: "sagarmatha-national-park-tip-2",
        title: "Do not litter",
        description: "A clean trail helps protect the region's mountain environment.",
        category: "Environment",
      },
      {
        id: "sagarmatha-national-park-tip-3",
        title: "Respect wildlife",
        description: "Keep a respectful distance and enjoy the surroundings quietly.",
        category: "Wildlife",
      },
      {
        id: "sagarmatha-national-park-tip-4",
        title: "Stay on established trails",
        description: "Following marked paths helps reduce disturbance and keeps the route safer.",
        category: "Safety",
      },
      {
        id: "sagarmatha-national-park-tip-5",
        title: "Follow local environmental guidelines",
        description: "This helps protect the park as a natural and cultural treasure.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "sagarmatha-national-park-g1",
        src: "/images/destinations/everest/sagarmatha-national-park-1.jpg",
        alt: "Sagarmatha National Park glacier landscape",
        category: "Park",
      },
      {
        id: "sagarmatha-national-park-g2",
        src: "/images/destinations/everest/sagarmatha-national-park-2.jpg",
        alt: "Sagarmatha National Park natural scenery",
        category: "Nature",
      },
      {
        id: "sagarmatha-national-park-g3",
        src: "/images/destinations/everest/sagarmatha-national-park-3.jpg",
        alt: "Sagarmatha National Park mountain forest trail",
        category: "Trekking",
      },
    ],
  },
  {
    id: "gokyo-lakes",
    slug: "gokyo-lakes",
    name: "Gokyo Lakes",
    category: "Nature & High-Altitude Adventure",
    shortDescription:
      "Discover a series of striking turquoise lakes surrounded by some of the most beautiful mountain scenery in the Everest region.",
    description:
      "The Gokyo Lakes offer a spectacular alternative experience in the Everest region. Surrounded by rugged mountains and alpine landscapes, these beautiful lakes create an unforgettable setting for trekkers, photographers and travelers seeking a quieter Himalayan adventure.",
    image: "/images/destinations/everest/gokyo-lakes.jpg",
    location: "Gokyo Valley, Solukhumbu",
    duration: "2–4 Days within the trek",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Turquoise alpine lakes",
      "Himalayan scenery",
      "Trekking",
      "Gokyo Valley",
      "Photography",
    ],
    travelTips: [
      {
        id: "gokyo-lakes-tip-1",
        title: "Acclimatize gradually",
        description: "A slower pace helps travelers adapt to the altitude more comfortably.",
        category: "Health",
      },
      {
        id: "gokyo-lakes-tip-2",
        title: "Carry warm clothing",
        description: "The valley can feel especially cold in the early morning and evening.",
        category: "Weather",
      },
      {
        id: "gokyo-lakes-tip-3",
        title: "Stay hydrated",
        description: "A steady water intake is important during higher-elevation trekking.",
        category: "Health",
      },
      {
        id: "gokyo-lakes-tip-4",
        title: "Check weather conditions",
        description: "Mountain conditions can change quickly and affect views and route comfort.",
        category: "Weather",
      },
      {
        id: "gokyo-lakes-tip-5",
        title: "Follow established trekking trails",
        description: "This keeps the route safer and helps conserve the surrounding environment.",
        category: "Safety",
      },
    ],
    gallery: [
      {
        id: "gokyo-lakes-g1",
        src: "/images/destinations/everest/gokyo-lakes-1.jpg",
        alt: "Gokyo Lakes turquoise mountain lake",
        category: "Lake",
      },
      {
        id: "gokyo-lakes-g2",
        src: "/images/destinations/everest/gokyo-lakes-2.jpg",
        alt: "Gokyo Lakes valley view",
        category: "Landscape",
      },
      {
        id: "gokyo-lakes-g3",
        src: "/images/destinations/everest/gokyo-lakes-3.jpg",
        alt: "Gokyo Lakes alpine scenery",
        category: "Mountain",
      },
    ],
  },
  {
    id: "gokyo-ri",
    slug: "gokyo-ri",
    name: "Gokyo Ri",
    category: "Mountain Viewpoint & Trekking",
    shortDescription:
      "Climb above the Gokyo Valley for a breathtaking Himalayan panorama featuring Everest and surrounding peaks.",
    description:
      "Gokyo Ri is one of the most rewarding viewpoints in the Everest region. The climb provides spectacular views across the Gokyo Valley, surrounding mountains and some of the world's highest peaks, creating an unforgettable Himalayan experience.",
    image: "/images/destinations/everest/gokyo-ri.jpg",
    location: "Gokyo Valley, Solukhumbu",
    duration: "Half Day",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Himalayan panorama",
      "Everest views",
      "Sunrise",
      "Trekking",
      "Gokyo Valley",
      "Photography",
    ],
    travelTips: [
      {
        id: "gokyo-ri-tip-1",
        title: "Start early",
        description: "Early trekking helps you catch the best light and a calmer climb.",
        category: "Travel",
      },
      {
        id: "gokyo-ri-tip-2",
        title: "Acclimatize properly",
        description: "Higher elevation climbs are easier when you have adapted gradually.",
        category: "Health",
      },
      {
        id: "gokyo-ri-tip-3",
        title: "Carry warm clothing",
        description: "Cold air and wind increase quickly on the climb.",
        category: "Weather",
      },
      {
        id: "gokyo-ri-tip-4",
        title: "Stay hydrated",
        description: "Hydration and steady pacing are both valuable at altitude.",
        category: "Health",
      },
      {
        id: "gokyo-ri-tip-5",
        title: "Avoid rushing at high altitude",
        description: "A steadier ascent is more comfortable and safer.",
        category: "Safety",
      },
    ],
    gallery: [
      {
        id: "gokyo-ri-g1",
        src: "/images/destinations/everest/gokyo-ri-1.jpg",
        alt: "Gokyo Ri panoramic Himalayan sunrise",
        category: "Sunrise",
      },
      {
        id: "gokyo-ri-g2",
        src: "/images/destinations/everest/gokyo-ri-2.jpg",
        alt: "Gokyo Ri mountain viewpoint",
        category: "Viewpoint",
      },
    ],
  },
  {
    id: "khumjung-village",
    slug: "khumjung-village",
    name: "Khumjung Village",
    category: "Culture & Village Life",
    shortDescription:
      "Experience traditional Sherpa village life in a peaceful Himalayan settlement surrounded by spectacular mountain landscapes.",
    description:
      "Khumjung is a beautiful Sherpa village where travelers can experience local traditions, mountain architecture and community life. Surrounded by dramatic Himalayan scenery, the village offers a more intimate look at the culture and lifestyle of the Everest region.",
    image: "/images/destinations/everest/khumjung-village.jpg",
    location: "Khumjung, Solukhumbu",
    duration: "1–2 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Sherpa culture",
      "Traditional village",
      "Mountain scenery",
      "Local lifestyle",
      "Photography",
    ],
    travelTips: [
      {
        id: "khumjung-village-tip-1",
        title: "Respect local homes",
        description: "A calm approach helps you enjoy village life respectfully.",
        category: "Culture",
      },
      {
        id: "khumjung-village-tip-2",
        title: "Ask before photographing people",
        description: "It is polite to check before taking someone’s photo.",
        category: "Photography",
      },
      {
        id: "khumjung-village-tip-3",
        title: "Walk quietly through residential areas",
        description: "This helps keep the village atmosphere peaceful and comfortable.",
        category: "Culture",
      },
      {
        id: "khumjung-village-tip-4",
        title: "Support local businesses responsibly",
        description: "Buying locally helps support the community and its culture.",
        category: "Culture",
      },
    ],
    gallery: [
      {
        id: "khumjung-village-g1",
        src: "/images/destinations/everest/khumjung-village-1.jpg",
        alt: "Khumjung Village Sherpa settlement",
        category: "Village",
      },
      {
        id: "khumjung-village-g2",
        src: "/images/destinations/everest/khumjung-village-2.jpg",
        alt: "Khumjung Village mountain landscape",
        category: "Mountain",
      },
    ],
  },
  {
    id: "everest-view-hotel",
    slug: "everest-view-hotel",
    name: "Everest View Hotel",
    category: "Mountain Viewpoint",
    shortDescription:
      "Enjoy spectacular Himalayan scenery from a famous viewpoint overlooking Everest and the surrounding mountain peaks.",
    description:
      "The Everest View Hotel is renowned for its spectacular mountain setting and panoramic views. It offers travelers a memorable opportunity to pause during their Everest journey and enjoy the surrounding Himalayan landscape in a peaceful setting.",
    image: "/images/destinations/everest/everest-view-hotel.jpg",
    location: "Syangboche, Khumbu",
    duration: "1–3 Hours",
    bestTime: "March–May and September–November",
    featured: true,
    tourAvailable: true,
    highlights: [
      "Everest views",
      "Himalayan panorama",
      "Mountain scenery",
      "Photography",
      "Scenic stop",
    ],
    travelTips: [
      {
        id: "everest-view-hotel-tip-1",
        title: "Check current access conditions",
        description: "Conditions can vary depending on local weather and route status.",
        category: "Weather",
      },
      {
        id: "everest-view-hotel-tip-2",
        title: "Allow time for acclimatization",
        description: "A slower pace helps you enjoy the mountain environment more comfortably.",
        category: "Health",
      },
      {
        id: "everest-view-hotel-tip-3",
        title: "Carry warm clothing",
        description: "The mountain air is often cooler than it looks from below.",
        category: "Weather",
      },
      {
        id: "everest-view-hotel-tip-4",
        title: "Respect the local environment",
        description: "Keep the area clean and leave the mountain setting undisturbed.",
        category: "Environment",
      },
    ],
    gallery: [
      {
        id: "everest-view-hotel-g1",
        src: "/images/destinations/everest/everest-view-hotel.jpg",
        alt: "Everest View Hotel mountain panorama",
        category: "Viewpoint",
      },
      {
        id: "everest-view-hotel-g2",
        src: "/images/destinations/everest/gokyo-lakes-1.jpg",
        alt: "Everest View Hotel scenic area",
        category: "Mountain",
      },
    ],
  },
];

const everestHighlights: Highlight[] = [
  {
    id: "h1",
    title: "Trek toward the legendary Everest Base Camp",
    description: "Follow one of the most iconic Himalayan trekking routes and stand beneath the world's highest peak.",
  },
  {
    id: "h2",
    title: "Experience Sherpa culture and hospitality",
    description: "Meet local communities, explore mountain villages and enjoy warm Himalayan hospitality.",
  },
  {
    id: "h3",
    title: "Explore Namche Bazaar",
    description: "Discover the lively heart of the Everest region with mountain streets, cafés and cultural energy.",
  },
  {
    id: "h4",
    title: "Visit Tengboche Monastery",
    description: "Enjoy peaceful spiritual traditions in one of the most beautiful monastery settings in the Himalayas.",
  },
  {
    id: "h5",
    title: "Watch sunrise over Everest from Kala Patthar",
    description: "Witness a spectacular sunrise and unforgettable views of Everest and the surrounding peaks.",
  },
  {
    id: "h6",
    title: "Discover the turquoise Gokyo Lakes",
    description: "Enjoy an alpine landscape of turquoise lakes framed by dramatic peaks.",
  },
  {
    id: "h7",
    title: "Hike to Gokyo Ri",
    description: "Climb for a bigger panorama and one of the region's most memorable viewpoints.",
  },
  {
    id: "h8",
    title: "Explore traditional Khumjung Village",
    description: "Experience Sherpa daily life, heritage and mountain community culture.",
  },
  {
    id: "h9",
    title: "Experience Sagarmatha National Park",
    description: "Walk through a protected Himalayan landscape of glaciers, forests and mountain trails.",
  },
  {
    id: "h10",
    title: "Enjoy spectacular Himalayan mountain views",
    description: "From sunrise ridge lines to serene valleys, every day in the Everest region offers a visual reward.",
  },
  {
    id: "h11",
    title: "Experience the legendary Lukla mountain gateway",
    description: "Start the journey from one of the most iconic mountain entry points in Nepal.",
  },
  {
    id: "h12",
    title: "Stay in traditional Himalayan teahouses",
    description: "Experience warm hospitality, simple comforts and the rhythm of trekking life in the mountains.",
  },
];

const everestExperiences: Experience[] = [
  {
    id: "e1",
    title: "Everest Base Camp Trek",
    description: "Follow the legendary route to one of the most iconic destinations in the Himalayas.",
    icon: "🥾",
  },
  {
    id: "e2",
    title: "Sherpa Experience",
    description: "Discover the culture, hospitality and daily rhythm of the Khumbu region.",
    icon: "🤝",
  },
  {
    id: "e3",
    title: "Sunrise at Kala Patthar",
    description: "Watch the first light illuminate Everest and the surrounding ranges.",
    icon: "🌅",
  },
  {
    id: "e4",
    title: "Monastery Visit",
    description: "Explore peaceful Buddhist heritage in a dramatic Himalayan setting.",
    icon: "🏯",
  },
];

const everestTravelTips: TravelTip[] = [
  {
    id: "t1",
    title: "Best Time to Visit",
    description: "March–May and September–November offer the clearest weather and the most comfortable trekking conditions.",
    category: "Weather",
  },
  {
    id: "t2",
    title: "Prepare for High Altitude",
    description: "Trekking in the Everest region requires gradual acclimatization and a careful pace.",
    category: "Health",
  },
  {
    id: "t3",
    title: "Pack for Mountain Conditions",
    description: "Carry warm layers, sturdy footwear and a practical daypack for high-elevation trekking.",
    category: "Travel",
  },
  {
    id: "t4",
    title: "Check Weather and Trail Conditions",
    description: "Mountain weather and route conditions can shift quickly, so planning is essential.",
    category: "Safety",
  },
];

const everestFaqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Is Everest a difficult trek?",
    answer: "The Everest region is demanding, especially at higher elevations, so preparation, acclimatization and good planning are important.",
  },
  {
    id: "faq2",
    question: "What is the best season to visit Everest?",
    answer: "March–May and September–November are generally considered the best times for trekking and mountain views.",
  },
  {
    id: "faq3",
    question: "Can I do a shorter Everest trip?",
    answer: "Yes, shorter routes and scenic viewpoints can still offer a memorable Himalayan experience, but higher-altitude trekking still requires careful preparation.",
  },
  {
    id: "faq4",
    question: "What makes the Everest region so special?",
    answer: "Its combination of iconic peaks, Sherpa culture, monasteries, high trails and dramatic landscapes makes it one of the most unforgettable destinations in the world.",
  },
];

const everestGallery: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/destinations/everest/hero.jpg",
    alt: "Everest region Himalayan skyline",
    category: "Mountain",
  },
  {
    id: "g2",
    src: "/images/destinations/everest/namche-bazaar-1.jpg",
    alt: "Namche Bazaar mountain town",
    category: "Village",
  },
  {
    id: "g3",
    src: "/images/destinations/everest/kala-patthar-1.jpg",
    alt: "Kala Patthar sunrise over Everest",
    category: "Sunrise",
  },
];

export const everest: Destination = {
  id: "everest",
  slug: "everest",
  name: "Everest",
  tagline: "Stand Where the World Reaches Its Greatest Heights",
  shortDescription:
    "Journey into the legendary Everest region, where towering Himalayan peaks, Sherpa culture, dramatic mountain trails and unforgettable landscapes create the ultimate Nepal adventure.",
  description:
    "The Everest region is one of Nepal's most iconic destinations, bringing travelers into the heart of the Himalayas and the homeland of the legendary Sherpa people. From the lively mountain town of Namche Bazaar and peaceful monasteries to dramatic viewpoints, high-altitude lakes and the legendary Everest Base Camp, the region offers an unforgettable combination of adventure, culture and breathtaking Himalayan scenery.",
  heroImage: "/images/destinations/everest/hero.jpg",
  introImage: "/images/destinations/everest/intro.jpg",
  ctaImage: "/images/destinations/everest/cta.jpg",
  location: "Everest Region, Solukhumbu, Nepal",
  region: "Khumbu / Everest Region",
  knownFor:
    "Mount Everest, Everest Base Camp, Namche Bazaar, Sherpa culture, Tengboche Monastery, Kala Patthar, Sagarmatha National Park, Gokyo Lakes and Himalayan trekking",
  idealFor: [
    "Trekking enthusiasts",
    "Adventure travelers",
    "Photographers",
    "Mountain lovers",
    "Nature lovers",
    "Couples",
    "Travelers seeking an unforgettable Himalayan experience",
  ],
  recommendedDuration: "8–18+ Days",
  bestTime: "March–May and September–November",
  numberOfTours: 12,
  featured: true,
  places: everestPlaces,
  highlights: everestHighlights,
  experiences: everestExperiences,
  travelTips: everestTravelTips,
  faqs: everestFaqs,
  gallery: everestGallery,
  seo: {
    title: "Everest Travel Guide | Meegin Tours & Travels",
    description:
      "Explore the Everest region with Sherpa culture, Himalayan viewpoints, trekking routes, monasteries and unforgettable mountain scenery.",
    keywords: [
      "Everest",
      "Everest Nepal",
      "Everest Base Camp",
      "Namche Bazaar",
      "Kala Patthar",
      "Gokyo Lakes",
      "Sherpa culture",
      "Khumbu",
      "Sagarmatha",
      "Himalayan trekking",
    ],
  },
};

// ============================================================================
// EXPORTS - All Destinations
// ============================================================================

export const destinations: Destination[] = [
  pokhara,
  mustang,
  chitwan,
  lumbini,
  palpa,
  baglung,
  kathmandu,
  bandipur,
  ghandruk,
  annapurna,
  everest,
];
