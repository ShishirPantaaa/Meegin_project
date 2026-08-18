import type { Tour } from "@/types";

export const tours: Tour[] = [
  // ============================================================================
  // POKHARA TOURS
  // ============================================================================
  {
    id: "pokhara-001",
    slug: "pokhara-adventure",
    title: "Pokhara Lake & Mountain Adventure",
    destination: "Pokhara",
    destinationSlug: "pokhara",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Experience Pokhara's lakes, mountains, and adventure activities.",
    image: "/images/destinations/pokhara/lakeside.jpg",
    price: 299,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 245,
    highlights: [
      "Phewa Lake boat rides",
      "Sarangkot sunrise",
      "World Peace Pagoda",
      "Paragliding optional",
    ],
    featured: true,
  },
  {
    id: "pokhara-002",
    slug: "pokhara-paragliding-thrill",
    title: "Pokhara Paragliding Experience",
    destination: "Pokhara",
    destinationSlug: "pokhara",
    duration: "2 Days / 1 Night",
    shortDescription:
      "Soar above Pokhara Valley on an unforgettable paragliding adventure.",
    image: "/images/destinations/pokhara/sarangkot.jpg",
    price: 199,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 189,
    highlights: [
      "Tandem paragliding flights",
      "Professional instructors",
      "Valley views",
      "Safety gear included",
    ],
    featured: true,
  },
  {
    id: "pokhara-003",
    slug: "pokhara-spiritual-journey",
    title: "Pokhara Spiritual & Cultural Tour",
    destination: "Pokhara",
    destinationSlug: "pokhara",
    duration: "2 Days / 1 Night",
    shortDescription: "Explore Pokhara's temples, meditation sites, and spiritual culture.",
    image: "/images/destinations/pokhara/world-peace-pagoda.jpg",
    price: 149,
    currency: "NPR",
    rating: 4.6,
    reviewCount: 156,
    highlights: [
      "World Peace Pagoda",
      "Temple visits",
      "Meditation sessions",
      "Local spirituality",
    ],
    featured: false,
  },

  // ============================================================================
  // MUSTANG TOURS
  // ============================================================================
  {
    id: "mustang-001",
    slug: "mustang-cultural-expedition",
    title: "Mustang Upper Kingdom Trek",
    destination: "Mustang",
    destinationSlug: "mustang",
    duration: "5 Days / 4 Nights",
    shortDescription: "Trek to the walled city of Lo Manthang in remote Upper Mustang.",
    image: "/images/destinations/mustang/trake.jpg",
    price: 1299,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 87,
    highlights: [
      "Lo Manthang walled city",
      "Permit required",
      "Tibetan monasteries",
      "Desert landscape",
    ],
    featured: true,
  },
  {
    id: "mustang-002",
    slug: "mustang-muktinath-pilgrimage",
    title: "Muktinath Pilgrimage Trek",
    destination: "Mustang",
    destinationSlug: "mustang",
    duration: "4 Days / 3 Nights",
    shortDescription:
      "Sacred pilgrimage to the 108 water spouts of Muktinath temple.",
    image: "/images/destinations/mustang/muk.jpg",
    price: 599,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 142,
    highlights: [
      "108 sacred water spouts",
      "Pilgrimage experience",
      "High altitude temple",
      "Spiritual journey",
    ],
    featured: false,
  },

  // ============================================================================
  // CHITWAN TOURS
  // ============================================================================
  {
    id: "chitwan-001",
    slug: "chitwan-safari-adventure",
    title: "Chitwan Wildlife Safari Experience",
    destination: "Chitwan",
    destinationSlug: "chitwan",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Jungle safaris to spot tigers, rhinos, and 450+ bird species.",
    image: "/images/destinations/chitwan/chitwan-national-park.jpg",
    price: 449,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 312,
    highlights: [
      "Tiger and rhino safaris",
      "Elephant interactions",
      "Birdwatching",
      "Jungle lodge stay",
    ],
    featured: true,
  },
  {
    id: "chitwan-002",
    slug: "chitwan-cultural-wildlife",
    title: "Chitwan Culture & Wildlife Combined",
    destination: "Chitwan",
    destinationSlug: "chitwan",
    duration: "4 Days / 3 Nights",
    shortDescription:
      "Safari adventures combined with Tharu village cultural experiences.",
    image: "/images/destinations/chitwan/tharu-village.jpg",
    price: 549,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 198,
    highlights: [
      "Safari tours",
      "Tharu village visit",
      "Cultural performances",
      "River activities",
    ],
    featured: false,
  },

  // ============================================================================
  // LUMBINI TOURS
  // ============================================================================
  {
    id: "lumbini-001",
    slug: "lumbini-pilgrimage",
    title: "Lumbini Sacred Pilgrimage",
    destination: "Lumbini",
    destinationSlug: "lumbini",
    duration: "2 Days / 1 Night",
    shortDescription:
      "Visit Buddha's birthplace and walk among 2,500-year-old sacred sites.",
    image: "/images/destinations/lumbini/lumbini-spiritual-tour.jpg",
    price: 199,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 276,
    highlights: [
      "Maya Devi Temple",
      "Sacred Garden",
      "Ashoka Pillar",
      "Meditation spaces",
    ],
    featured: true,
  },
  {
    id: "lumbini-002",
    slug: "lumbini-spiritual-retreat",
    title: "Lumbini Spiritual Retreat",
    destination: "Lumbini",
    destinationSlug: "lumbini",
    duration: "4 Days / 3 Nights",
    shortDescription:
      "Extended meditation and spiritual journey at Buddhism's holiest site.",
    image: "/images/destinations/lumbini/lumbini.jpg",
    price: 399,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 112,
    highlights: [
      "Extended meditation",
      "Monk interaction",
      "Temple ceremonies",
      "Spiritual guidance",
    ],
    featured: false,
  },

  // ============================================================================
  // PALPA TOURS
  // ============================================================================
  {
    id: "palpa-001",
    slug: "palpa-heritage-town",
    title: "Palpa Tansen Historic Town Tour",
    destination: "Palpa",
    destinationSlug: "palpa",
    duration: "2 Days / 1 Night",
    shortDescription:
      "Explore Tansen's 18th-century bazaar and traditional craftsmanship.",
    image: "/images/destinations/palpa/ranighat-palace.jpg",
    price: 149,
    currency: "NPR",
    rating: 4.6,
    reviewCount: 89,
    highlights: [
      "Historic bazaar",
      "Metal craft shops",
      "Temple visits",
      "Valley viewpoints",
    ],
    featured: false,
  },
  {
    id: "palpa-002",
    slug: "palpa-hilltown-escape",
    title: "Palpa Hilltown Escape",
    destination: "Palpa",
    destinationSlug: "palpa",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Relaxing hill town experience with culture, nature, and heritage.",
    image: "/images/destinations/palpa/images.jpg",
    price: 249,
    currency: "NPR",
    rating: 4.5,
    reviewCount: 67,
    highlights: [
      "Town exploration",
      "Hiking trails",
      "Local cuisine",
      "Peaceful atmosphere",
    ],
    featured: false,
  },

  // ============================================================================
  // BAGLUNG TOURS
  // ============================================================================
  {
    id: "baglung-001",
    slug: "baglung-off-beaten-path",
    title: "Baglung Off-Beaten Path Adventure",
    destination: "Baglung",
    destinationSlug: "baglung",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Authentic Nepal experience away from tourist crowds in rural Baglung.",
    image: "/images/destinations/baglung/kalika-bhagawati-temple.jpg",
    price: 279,
    currency: "NPR",
    rating: 4.5,
    reviewCount: 56,
    highlights: [
      "Rural village tourism",
      "Temple visits",
      "Mountain views",
      "Local hospitality",
    ],
    featured: false,
  },

  // ============================================================================
  // BHAKTAPUR TOURS
  // ============================================================================
  {
    id: "bhaktapur-001",
    slug: "bhaktapur-heritage-tour",
    title: "Bhaktapur Heritage Tour",
    destination: "Bhaktapur",
    destinationSlug: "bhaktapur",
    duration: "1 Day",
    shortDescription: "Explore the ancient city of devotees, its durbar square, and pottery square.",
    image: "/images/destinations/bhaktapur/bhaktapur-hero.jpg",
    price: 99,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 312,
    highlights: [
      "Bhaktapur Durbar Square",
      "Pottery Square",
      "Nyatapola Temple",
      "Local Newari Cuisine",
    ],
    featured: true,
  },
  {
    id: "bhaktapur-002",
    slug: "bhaktapur-culture-crafts",
    title: "Bhaktapur Culture & Crafts",
    destination: "Bhaktapur",
    destinationSlug: "bhaktapur",
    duration: "2 Days / 1 Night",
    shortDescription: "Immerse yourself in Newari culture, traditional crafts, and ancient architecture.",
    image: "/images/destinations/bhaktapur/taumadhi-square-2.jpg",
    price: 122,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 145,
    highlights: [
      "Woodcarving workshops",
      "Pottery making",
      "Overnight stay in heritage home",
      "Evening temple walks",
    ],
    featured: false,
  },

  // ============================================================================
  // KATHMANDU TOURS
  // ============================================================================
  {
    id: "kathmandu-001",
    slug: "kathmandu-heritage-temples",
    title: "Kathmandu Heritage & Temples",
    destination: "Kathmandu",
    destinationSlug: "kathmandu",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "UNESCO temples, ancient palaces, and spiritual sites of Kathmandu.",
    image: "/images/destinations/kathmandu/intro.jpg",
    price: 249,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 487,
    highlights: [
      "Durbar Square",
      "Swayambhunath",
      "Boudhanath",
      "Pashupatinath",
    ],
    featured: true,
  },
  {
    id: "kathmandu-002",
    slug: "kathmandu-city-cultural-tour",
    title: "Kathmandu City Cultural Tour",
    destination: "Kathmandu",
    destinationSlug: "kathmandu",
    duration: "2 Days / 1 Night",
    shortDescription: "Explore Kathmandu's vibrant culture, markets, and urban life.",
    image: "/images/destinations/kathmandu/culture.jpg",
    price: 179,
    currency: "NPR",
    rating: 4.6,
    reviewCount: 234,
    highlights: [
      "Thamel district",
      "Local markets",
      "Street food",
      "Cultural sites",
    ],
    featured: false,
  },
  {
    id: "kathmandu-003",
    slug: "kathmandu-valley-overview",
    title: "Kathmandu Valley Overview",
    destination: "Kathmandu",
    destinationSlug: "kathmandu",
    duration: "4 Days / 3 Nights",
    shortDescription:
      "Complete Kathmandu Valley experience including Durbar Square, temples, and gardens.",
    image: "/images/destinations/kathmandu/view.jpg",
    price: 349,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 312,
    highlights: [
      "All major temples",
      "UNESCO sites",
      "Garden of Dreams",
      "Comprehensive coverage",
    ],
    featured: false,
  },

  // ============================================================================
  // BANDIPUR TOURS
  // ============================================================================
  {
    id: "bandipur-001",
    slug: "bandipur-heritage-escape",
    title: "Bandipur Heritage Town Escape",
    destination: "Bandipur",
    destinationSlug: "bandipur",
    duration: "2 Days / 1 Night",
    shortDescription: "Visit Nepal's best-preserved 18th-century town.",
    image: "/images/destinations/bandipur/bazaar.jpg",
    price: 129,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 156,
    highlights: [
      "Historic bazaar",
      "Temple visits",
      "Scenic walks",
      "Peaceful atmosphere",
    ],
    featured: false,
  },
  {
    id: "bandipur-002",
    slug: "bandipur-temple-trek",
    title: "Bandipur Temple Trek",
    destination: "Bandipur",
    destinationSlug: "bandipur",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Trek to hilltop temples with panoramic valley and mountain views.",
    image: "/images/destinations/bandipur/khadga-devi.jpg",
    price: 179,
    currency: "NPR",
    rating: 4.6,
    reviewCount: 98,
    highlights: [
      "Khadga Devi Temple",
      "Thani Mai Temple",
      "Hiking trails",
      "Valley views",
    ],
    featured: false,
  },

  // ============================================================================
  // GHANDRUK TOURS
  // ============================================================================
  {
    id: "ghandruk-001",
    slug: "ghandruk-village-culture",
    title: "Ghandruk Village Cultural Experience",
    destination: "Ghandruk",
    destinationSlug: "ghandruk",
    duration: "3 Days / 2 Nights",
    shortDescription:
      "Experience traditional Gurung village life with stunning mountain views.",
    image: "/images/destinations/ghandruk/ghandruk.jpg",
    price: 279,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 142,
    highlights: [
      "Village homestay",
      "Gurung culture",
      "Mountain views",
      "Local meals",
    ],
    featured: false,
  },
  {
    id: "ghandruk-002",
    slug: "ghandruk-annapurna-circuit-start",
    title: "Ghandruk - Annapurna Circuit Starting Point",
    destination: "Ghandruk",
    destinationSlug: "ghandruk",
    duration: "3 Days /2 Nights",
    shortDescription:
      "Begin the legendary Annapurna Circuit trek from Ghandruk village.",
    image: "/images/destinations/ghandruk/ghandruk-village.jpg",
    price: 1199,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 203,
    highlights: [
      "Annapurna Circuit",
      "Thorong La pass",
      "Tea house trekking",
      "16-day adventure",
    ],
    featured: true,
  },

  // ============================================================================
  // ANNAPURNA TOURS
  // ============================================================================
  {
    id: "annapurna-001",
    slug: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    destination: "Annapurna",
    destinationSlug: "annapurna",
    duration: "16 Days / 15 Nights",
    shortDescription:
      "World-famous 160km trek around Annapurna Massif with Thorong La pass.",
    image: "/images/destinations/annapurna/intro.jpg",
    price: 1399,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 578,
    highlights: [
      "Thorong La pass",
      "Base camp views",
      "Diverse landscapes",
      "Tea house lodging",
    ],
    featured: true,
  },
  {
    id: "annapurna-002",
    slug: "annapurna-base-camp",
    title: "Annapurna Base Camp Trek",
    destination: "Annapurna",
    destinationSlug: "annapurna",
    duration: "7 Days / 6 Nights",
    shortDescription:
      "Shorter trek to Annapurna Base Camp at 4,130m with stunning views.",
    image: "/images/destinations/annapurna/hero.jpg",
    price: 749,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 321,
    highlights: [
      "Base camp arrival",
      "Glacial views",
      "High altitude",
      "Mountain scenery",
    ],
    featured: true,
  },
  {
    id: "annapurna-003",
    slug: "annapurna-poon-hill",
    title: "Poon Hill Sunrise Trek",
    destination: "Annapurna",
    destinationSlug: "annapurna",
    duration: "4 Days / 3 Nights",
    shortDescription:
      "Short trek to Poon Hill for iconic Annapurna sunrise views.",
    image: "/images/destinations/annapurna/poon-hill.jpg",
    price: 449,
    currency: "NPR",
    rating: 4.8,
    reviewCount: 456,
    highlights: [
      "Sunrise from Poon Hill",
      "Rhododendron forests",
      "Short trek",
      "Photography",
    ],
    featured: true,
  },

  // ============================================================================
  // EVEREST TOURS
  // ============================================================================
  {
    id: "everest-001",
    slug: "everest-base-camp-trek",
    title: "Everest Base Camp Trek",
    destination: "Everest",
    destinationSlug: "everest",
    duration: "16 Days / 15 Nights",
    shortDescription:
      "Trek to Mount Everest Base Camp at 5,364m with Sherpa culture.",
    image: "/images/destinations/everest/everest-base-camp.jpg",
    price: 1599,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 612,
    highlights: [
      "Everest Base Camp",
      "Kala Patthar",
      "Sherpa villages",
      "High altitude adventure",
    ],
    featured: true,
  },
  {
    id: "everest-002",
    slug: "everest-base-camp-kala-patthar",
    title: "Everest Base Camp with Kala Patthar",
    destination: "Everest",
    destinationSlug: "everest",
    duration: "17 Days / 16 Nights",
    shortDescription:
      "Trek to Base Camp plus Kala Patthar for the best Everest views.",
    image: "/images/destinations/everest/kala-patthar.jpg",
    price: 1799,
    currency: "NPR",
    rating: 4.9,
    reviewCount: 487,
    highlights: [
      "Base Camp",
      "Kala Patthar (5,643m)",
      "Best Everest views",
      "Monastery visits",
    ],
    featured: true,
  },
  {
    id: "everest-003",
    slug: "everest-sherpa-cultural",
    title: "Everest Region Sherpa Cultural Trek",
    destination: "Everest",
    destinationSlug: "everest",
    duration: "12 Days / 11 Nights",
    shortDescription: "Trek through Sherpa villages and monasteries of Everest region.",
    image: "/images/destinations/everest/sherpa-cultural.jpg",
    price: 1299,
    currency: "NPR",
    rating: 4.7,
    reviewCount: 234,
    highlights: [
      "Sherpa villages",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Cultural immersion",
    ],
    featured: false,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function getToursByDestination(destinationSlug: string): Tour[] {
  return tours.filter((tour) => tour.destinationSlug === destinationSlug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((tour) => tour.featured);
}

export function getToursByPriceRange(minPrice: number, maxPrice: number): Tour[] {
  return tours.filter((tour) => tour.price >= minPrice && tour.price <= maxPrice);
}

export function getToursByRating(minRating: number): Tour[] {
  return tours.filter((tour) => tour.rating >= minRating);
}

export function sortToursByPrice(ascending = true): Tour[] {
  return [...tours].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
}

export function sortToursByRating(descending = true): Tour[] {
  return [...tours].sort((a, b) =>
    descending ? b.rating - a.rating : a.rating - b.rating
  );
}
