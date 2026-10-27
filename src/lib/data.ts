export const siteConfig = {
  name: "MEegin Tours & Travels",
  description:
    "Explore breathtaking destinations, unforgettable experiences and carefully designed journeys across Nepal.",
  url: "https://meegintravels.com",
  email: "meegin.toursandtravel@gmail.com",
  phone: "+977-985-7078691",
};

export const navLinks = [
  { title: "Destinations", href: "/destinations" },
  { title: "Tours", href: "/tours" },
  { title: "Ticketing", href: "/ticketing" },
  { title: "About", href: "/about" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const destinations = [
  {
    slug: "pokhara",
    name: "Pokhara",
    description: "Lakeside adventures, mountain views and peaceful valley stays.",
    tours: 12,
    image:
      "/images/destinations/pokhara/pokhara_intro.jpg",
  },
  {
    slug: "mustang",
    name: "Mustang",
    description: "Ancient Himalayan kingdom, desert plateaus and cultural high trails.",
    tours: 12,
    image:
      "/images/destinations/mustang/muk.jpg",
  },
  {
    slug: "chitwan",
    name: "Chitwan",
    description: "Wildlife safaris, river cruises and jungle lodges in southern Nepal.",
    tours: 12,
    image:
      "/images/destinations/chitwan/bird-watching.jpg",
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    description: "Sacred pilgrimage site, serene gardens and cultural heritage.",
    tours: 12,
    image:
      "/images/destinations/lumbini/lumbini.jpg",
  },
  {
    slug: "baglung",
    name: "Baglung",
    description: "Hillside escapes, mountain passes and rural Nepal discoveries.",
    tours: 12,
    image:
      "/images/destinations/baglung/kalika-bhagawati-temple.jpg",
  },
  {
    slug: "palpa",
    name: "Palpa",
    description: "Historic palaces, terraced valleys and a tranquil hill town experience.",
    tours: 12,
    image:
      "/images/destinations/palpa/images.jpg",
  },
  {
    slug: "kathmandu",
    name: "Kathmandu",
    description: "Heritage temples, lively bazaars and cultural city adventures.",
    tours: 12,
    image:
      "/images/destinations/kathmandu/intro.jpg",
  },
  {
    slug: "everest-region",
    name: "Everest Region",
    description: "Iconic Himalayan trekking, Sherpa culture and mountain panoramas.",
    tours: 12,
    image:
      "/images/destinations/everest/everest-base-camp.jpg",
  },
  {
    slug: "annapurna-region",
    name: "Annapurna Region",
    description: "World-class trails, alpine lakes and stunning mountain scenery.",
    tours: 12,
    image:
      "/images/destinations/annapurna/annapurna-viewpoints.jpg",
  },
];

export const tours = [
  {
    id: "tour-pokhara-1",
    slug: "pokhara-adventure",
    title: "Pokhara Adventure",
    destination: "Pokhara",
    destinationSlug: "pokhara",
    duration: "4 Days / 3 Nights",
    shortDescription: "Discover lakes, waterfalls and Himalayan viewpoints with comfort and style.",
    description: "A perfect blend of lake activities, mountain views, and cultural experiences around Nepal's adventure capital.",
    image: "/images/destinations/pokhara/lakeside.jpg",
    price: 18500,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 38,
    highlights: [
      "Sunrise boat ride on Phewa Lake",
      "World Peace Pagoda visit",
      "Sarangkot mountain view",
    ],
    featured: true,
  },
  {
    id: "tour-mustang-1",
    slug: "mustang-cultural-expedition",
    title: "Mustang Cultural Expedition",
    destination: "Mustang",
    destinationSlug: "mustang",
    duration: "5 Days / 4 Nights",
    shortDescription: "Explore ancient villages, high desert landscapes and traditional Mustang heritage.",
    description: "An immersive cultural journey through Nepal's remote Himalayan kingdom with visits to Lo Manthang and sacred pilgrimage sites.",
    image: "/images/destinations/mustang/mustang.jpg",
    price: 39900,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 24,
    highlights: [
      "Lo Manthang village tour",
      "Tiji Festival highlights",
      "Himalayan desert scenery",
    ],
    featured: true,
  },
  {
    id: "tour-chitwan-1",
    slug: "chitwan-wildlife-safari",
    title: "Chitwan Wildlife Safari",
    destination: "Chitwan",
    destinationSlug: "chitwan",
    duration: "3 Days / 2 Nights",
    shortDescription: "Safari through jungle trails, river canoe rides and village experiences.",
    description: "Experience Nepal's premier wildlife destination with jungle safaris, river activities, and cultural immersion in Tharu village life.",
    image: "/images/destinations/chitwan/chitwan-national-park.jpg",
    price: 14900,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 18,
    highlights: [
      "Jungle safari and birdwatching",
      "Canoe ride on Rapti River",
      "Tharu cultural program",
    ],
    featured: true,
  },
];

export const faqs = [
  {
    question: "Do I need a visa to travel to Nepal?",
    answer:
      "Most travelers can obtain a Nepal visa on arrival or apply in advance online. Check the latest embassy guidelines before departure.",
  },
  {
    question: "How do I book a custom trip?",
    answer:
      "Use our custom trip form or contact our travel team with your dates, budget and preferences, and we will design your Nepal journey.",
  },
  {
    question: "What is the best season for trekking in Nepal?",
    answer:
      "The best seasons are spring (March to May) and autumn (September to November) for clear skies and comfortable trekking conditions.",
  },
];

export const testimonials = [
  {
    name: "Asha Gurung",
    location: "Kathmandu, Nepal",
    rating: 5,
    message:
      "MEegin's customized itinerary made our family trip smooth, safe and unforgettable. The guides were friendly and the hotels were excellent.",
    date: "June 2026",
  },
  {
    name: "Rajesh Thapa",
    location: "Pokhara, Nepal",
    rating: 4.9,
    message:
      "The Pokhara adventure package felt premium and well-paced. The local insights and transport coordination were top-notch.",
    date: "May 2026",
  },
];

export const galleryImages = [
  { id: "g1", category: "Pokhara", src: "/images/destinations/pokhara/pokhara_intro.jpg", alt: "Phewa Lake reflection" },
  { id: "g2", category: "Mustang", src: "/images/destinations/mustang/muk.jpg", alt: "Mustang high desert" },
  { id: "g3", category: "Chitwan", src: "/images/destinations/chitwan/bird-watching.jpg", alt: "Elephant safari in Chitwan" },
  { id: "g4", category: "Lumbini", src: "/images/destinations/lumbini/lumbini.jpg", alt: "Maya Devi Temple gardens" },
  { id: "g5", category: "Himalayas", src: "/images/destinations/annapurna/annapurna-viewpoints.jpg", alt: "Snowy Himalayan peaks" },
  { id: "g6", category: "Culture", src: "/images/destinations/kathmandu/culture.png", alt: "Nepali traditional ceremony" },
  { id: "g7", category: "Adventure", src: "/images/destinations/everest/cta.jpg", alt: "Trekking in Nepal" },
];
