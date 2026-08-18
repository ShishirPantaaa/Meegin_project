import type { Destination, Place, Experience, FaqItem, TravelTip, GalleryImage, Highlight } from "@/types";

// ============================================================================
// BHAKTAPUR PLACES — 10 Key Attractions
// ============================================================================

const bhaktapurPlaces: Place[] = [
    {
        id: "bhaktapur-durbar-square",
        slug: "bhaktapur-durbar-square",
        name: "Bhaktapur Durbar Square",
        category: "Heritage & Culture",
        shortDescription:
            "A UNESCO World Heritage Site at the heart of this ancient medieval city.",
        description:
            "Bhaktapur Durbar Square is the cultural and historical centerpiece of the city — a UNESCO World Heritage Site filled with ancient temples, royal courtyards and remarkable Newari architecture. The square contains the 55-Window Palace, the Golden Gate, the National Art Gallery and dozens of beautifully carved shrines, all telling the story of a civilization that flourished for more than a millennium. Walking through its stone-paved lanes offers an immersive glimpse into Nepal's royal past and the extraordinary craftsmanship of the Newar people.",
        image: "/images/destinations/bhaktapur/bhaktapur-durbar-square.jpg",
        location: "Bhaktapur Old City",
        duration: "2–3 Hours",
        bestTime: "September–May",
        featured: true,
        tourAvailable: true,
        tourSlug: "bhaktapur-heritage",
        highlights: [
            "UNESCO World Heritage Site",
            "55-Window Palace",
            "Golden Gate",
            "Ancient courtyards",
            "Newari architecture",
            "Photography",
        ],
        travelTips: [
            {
                id: "bds-tip-1",
                title: "Purchase entry ticket at the main gate",
                description:
                    "Foreign visitors pay an entrance fee on arrival. Keep your receipt valid all day for re-entry.",
                category: "Planning",
            },
            {
                id: "bds-tip-2",
                title: "Dress respectfully near religious sites",
                description:
                    "Cover shoulders and knees around temples and sacred shrines.",
                category: "Culture",
            },
        ],
        gallery: [
            {
                id: "bds-g1",
                src: "/images/destinations/bhaktapur/bhaktapur-durbar-square-1.jpg",
                alt: "Bhaktapur Durbar Square temples and courtyards",
                category: "Heritage",
            },
            {
                id: "bds-g2",
                src: "/images/destinations/bhaktapur/bhaktapur-durbar-square-2.jpg",
                alt: "Bhaktapur Durbar Square stone-paved lanes",
                category: "Architecture",
            },
        ],
    },
    {
        id: "nyatapola-temple",
        slug: "nyatapola-temple",
        name: "Nyatapola Temple",
        category: "Heritage & Spirituality",
        shortDescription:
            "Nepal's tallest pagoda — a five-storey masterpiece towering above Taumadhi Square.",
        description:
            "Built in 1702 during the reign of King Bhupatindra Malla, the Nyatapola Temple is the tallest pagoda structure in Nepal and one of the finest examples of Newari temple architecture anywhere in the world. Rising five tiers above Taumadhi Square, it is flanked by five pairs of legendary guardians — warriors, elephants, lions, griffins and goddesses — each said to be ten times more powerful than the one below. The temple's scale, symmetry and serenity make it one of Bhaktapur's most unforgettable sights.",
        image: "/images/destinations/bhaktapur/nyatapola-temple.jpg",
        location: "Taumadhi Square, Bhaktapur",
        duration: "1–2 Hours",
        bestTime: "September–May",
        featured: true,
        tourAvailable: true,
        highlights: [
            "Tallest pagoda in Nepal",
            "Five-storey Newari architecture",
            "Guardian statue pairs",
            "Historic Taumadhi Square",
            "Photography landmark",
        ],
        travelTips: [
            {
                id: "nyatapola-tip-1",
                title: "Visit in the morning",
                description:
                    "Early morning light illuminates the temple beautifully, ideal for photography.",
                category: "Photography",
            },
            {
                id: "nyatapola-tip-2",
                title: "Observe from Taumadhi Square",
                description:
                    "The best full view of the temple is from the open square directly in front.",
                category: "Travel",
            },
        ],
        gallery: [
            {
                id: "nyatapola-g1",
                src: "/images/destinations/bhaktapur/nyatapola-temple-1.jpg",
                alt: "Nyatapola Temple five-storey pagoda",
                category: "Heritage",
            },
            {
                id: "nyatapola-g2",
                src: "/images/destinations/bhaktapur/nyatapola-temple-2.jpg",
                alt: "Nyatapola Temple guardian statues",
                category: "Architecture",
            },
        ],
    },
    {
        id: "55-window-palace",
        slug: "55-window-palace",
        name: "55-Window Palace",
        category: "Architecture & History",
        shortDescription:
            "A royal palace famous for its extraordinary carved peacock window and 55 ornate wooden lattice windows.",
        description:
            "The 55-Window Palace is one of the most celebrated examples of Newari wood carving in the world. Constructed during the 17th century and later extended, it served as the royal residence of the Malla kings of Bhaktapur. Its eastern facade features 55 intricately carved wooden windows that display some of the finest lattice work ever produced by Newari craftsmen. The palace today houses the National Art Museum, preserving a remarkable collection of Nepali paintings, bronzes and manuscripts.",
        image: "/images/destinations/bhaktapur/55-window-palace.jpg",
        location: "Bhaktapur Durbar Square",
        duration: "1–2 Hours",
        bestTime: "September–May",
        featured: true,
        tourAvailable: true,
        highlights: [
            "55 carved wooden windows",
            "Royal Malla heritage",
            "National Art Museum",
            "Wood carving craftsmanship",
            "Photography",
        ],
        travelTips: [
            {
                id: "55wp-tip-1",
                title: "Visit the National Art Museum inside",
                description:
                    "The museum within the palace holds priceless paintings, manuscripts and bronzes.",
                category: "Culture",
            },
            {
                id: "55wp-tip-2",
                title: "Examine the carvings closely",
                description:
                    "The window details are exceptionally fine — take time to appreciate each panel.",
                category: "Heritage",
            },
        ],
        gallery: [
            {
                id: "55wp-g1",
                src: "/images/destinations/bhaktapur/55-window-palace-1.jpg",
                alt: "55-Window Palace carved wooden windows",
                category: "Architecture",
            },
            {
                id: "55wp-g2",
                src: "/images/destinations/bhaktapur/55-window-palace-2.jpg",
                alt: "55-Window Palace royal facade",
                category: "Heritage",
            },
        ],
    },
    {
        id: "golden-gate",
        slug: "golden-gate",
        name: "Golden Gate",
        category: "Heritage & Art",
        shortDescription:
            "A gilded gateway of exceptional beauty — the finest example of repousse art in all of Nepal.",
        description:
            "The Golden Gate, known locally as the Sun Dhoka, is considered the most magnificent entrance to any building in Nepal. Constructed in 1753 by King Ranjit Malla, it stands at the entrance to the 55-Window Palace and is decorated with fantastic images of gods, goddesses and mythological creatures in beaten and gilded copper. The gate's extraordinary detail and golden radiance make it one of the most photographed and admired works of art in the entire Kathmandu Valley.",
        image: "/images/destinations/bhaktapur/golden-gate.jpg",
        location: "Bhaktapur Durbar Square",
        duration: "30 Minutes",
        bestTime: "Year-round",
        featured: true,
        tourAvailable: true,
        highlights: [
            "Gilded copper repousse art",
            "Finest gateway in Nepal",
            "Mythology and deity carvings",
            "1753 Malla period creation",
            "Photography highlight",
        ],
        travelTips: [
            {
                id: "gg-tip-1",
                title: "Visit in daylight for best colour",
                description:
                    "The gilded copper glows warmly in afternoon light — visit before 4 PM.",
                category: "Photography",
            },
            {
                id: "gg-tip-2",
                title: "Ask a guide to explain the iconography",
                description:
                    "Each figure on the gate has cultural significance in Newari religious tradition.",
                category: "Culture",
            },
        ],
        gallery: [
            {
                id: "gg-g1",
                src: "/images/destinations/bhaktapur/golden-gate-1.jpg",
                alt: "Golden Gate gilded copper artwork",
                category: "Art",
            },
            {
                id: "gg-g2",
                src: "/images/destinations/bhaktapur/golden-gate-2.jpg",
                alt: "Golden Gate mythological carvings",
                category: "Heritage",
            },
        ],
    },

    {
        id: "dattatreya-temple",
        slug: "dattatreya-temple",
        name: "Dattatreya Temple",
        category: "Spiritual & Heritage",
        shortDescription:
            "One of the oldest temples in Bhaktapur, sacred to Hindus, Buddhists and Vaishnavites alike.",
        description:
            "The Dattatreya Temple is believed to date from 1427 and is uniquely venerated by three distinct religious traditions — Shaivites, Vaishnavites and Buddhists — making it one of the most inclusive sacred sites in Nepal. The temple's structure resembles the Kasthamandap in Kathmandu and is said to have been built using the timber of a single tree. Its open porch, carved wooden beams and erotic carvings on the struts reflect the full sophistication of Newari religious architecture. Two famous Malla wrestlers guard the entrance stairway.",
        image: "/images/destinations/bhaktapur/dattatreya-temple.jpg",
        location: "Dattatreya Square, Bhaktapur",
        duration: "30–60 Minutes",
        bestTime: "Year-round",
        featured: true,
        tourAvailable: true,
        highlights: [
            "1427 AD religious site",
            "Hindu, Buddhist & Vaishnavite worship",
            "Malla wrestler guardians",
            "Carved wooden architecture",
            "Cultural significance",
        ],
        travelTips: [
            {
                id: "dt-tip-1",
                title: "Dress modestly",
                description:
                    "The temple is an active place of worship — dress and behave respectfully.",
                category: "Culture",
            },
            {
                id: "dt-tip-2",
                title: "Note the strut carvings",
                description:
                    "The carved erotic struts have religious symbolism specific to Newari Tantric tradition.",
                category: "Heritage",
            },
        ],
        gallery: [
            {
                id: "dt-g1",
                src: "/images/destinations/bhaktapur/dattatreya-temple-1.jpg",
                alt: "Dattatreya Temple facade and entrance",
                category: "Spiritual",
            },
            {
                id: "dt-g2",
                src: "/images/destinations/bhaktapur/dattatreya-temple-2.jpg",
                alt: "Dattatreya Temple Malla wrestler guardians",
                category: "Heritage",
            },
        ],
    },
    {
        id: "pottery-square",
        slug: "pottery-square",
        name: "Pottery Square",
        category: "Arts & Crafts",
        shortDescription:
            "Watch traditional potters shape clay wheels in one of Bhaktapur's most characteristic open squares.",
        description:
            "Pottery Square — locally known as Chakupat — is a living working space where traditional Newari potters have shaped clay using hand-turned wheels for centuries. Hundreds of sun-dried pots, water vessels, oil lamps and terracotta figures are displayed across the open square at all times of day, creating an earthy, photogenic scene that feels completely untouched by mass tourism. Visitors can watch the entire process from raw clay to finished product, and purchase handmade pieces directly from the artisans.",
        image: "/images/destinations/bhaktapur/pottery-square.jpg",
        location: "Bhaktapur Old City",
        duration: "1 Hour",
        bestTime: "Year-round",
        featured: true,
        tourAvailable: true,
        highlights: [
            "Working traditional pottery wheels",
            "Centuries-old craft tradition",
            "Clay pots drying in the sun",
            "Photography opportunity",
            "Buy directly from artisans",
        ],
        travelTips: [
            {
                id: "ps-tip-1",
                title: "Ask before photographing artisans",
                description:
                    "Potters are welcoming but a polite request before photographing goes a long way.",
                category: "Photography",
            },
            {
                id: "ps-tip-2",
                title: "Buy a piece as a souvenir",
                description:
                    "Small terracotta items and traditional oil lamps make excellent handmade keepsakes.",
                category: "Community",
            },
        ],
        gallery: [
            {
                id: "ps-g1",
                src: "/images/destinations/bhaktapur/pottery-square-1.jpg",
                alt: "Pottery Square traditional potters at the wheel",
                category: "Crafts",
            },
            {
                id: "ps-g2",
                src: "/images/destinations/bhaktapur/pottery-square-2.jpg",
                alt: "Pottery Square clay pots drying under the sun",
                category: "Culture",
            },
        ],
    },
    {
        id: "taumadhi-square",
        slug: "taumadhi-square",
        name: "Taumadhi Square",
        category: "Heritage & Culture",
        shortDescription:
            "A vibrant historic square dominated by the soaring Nyatapola Temple and flanked by traditional architecture.",
        description:
            "Taumadhi Square is one of the most atmospheric public spaces in all of Nepal. Dominated by the five-storey Nyatapola Temple on one side and the three-storey Bhairavnath Temple on the other, the square bustles with local life, religious activity and, during festivals, joyful public celebrations. The surrounding traditional buildings, tea houses and shops create a perfectly preserved medieval streetscape that transports visitors to another era. This is where Bhaktapur's famous Bisket Jatra festival — the Nepal New Year celebration — reaches its dramatic climax.",
        image: "/images/destinations/bhaktapur/taumadhi-square.jpg",
        location: "Central Bhaktapur Old City",
        duration: "1–2 Hours",
        bestTime: "Year-round (Festival season: April)",
        featured: true,
        tourAvailable: true,
        highlights: [
            "Nyatapola Temple",
            "Bhairavnath Temple",
            "Medieval streetscape",
            "Bisket Jatra festival venue",
            "Local culture and daily life",
        ],
        travelTips: [
            {
                id: "ts-tip-1",
                title: "Visit Bisket Jatra in April",
                description:
                    "Bhaktapur's New Year festival at Taumadhi Square is one of Nepal's most exciting cultural events.",
                category: "Culture",
            },
            {
                id: "ts-tip-2",
                title: "Visit at sunrise or sunset",
                description:
                    "The square takes on a magical quality in the golden hours — the best time for photography.",
                category: "Photography",
            },
        ],
        gallery: [
            {
                id: "ts-g1",
                src: "/images/destinations/bhaktapur/taumadhi-square-1.jpg",
                alt: "Taumadhi Square with Nyatapola Temple",
                category: "Heritage",
            },
            {
                id: "ts-g2",
                src: "/images/destinations/bhaktapur/taumadhi-square-2.jpg",
                alt: "Taumadhi Square local life and atmosphere",
                category: "Culture",
            },
        ],
    },
    {
        id: "bhairavnath-temple",
        slug: "bhairavnath-temple",
        name: "Bhairavnath Temple",
        category: "Spiritual & Heritage",
        shortDescription:
            "A powerful three-storey pagoda dedicated to Bhairav, the fierce deity of Bhaktapur.",
        description:
            "The Bhairavnath Temple stands directly opposite the Nyatapola Temple at Taumadhi Square and is dedicated to Bhairav — the fierce and protective form of Lord Shiva who is considered the guardian deity of Bhaktapur. Originally a single-storey structure, the temple was enlarged over the centuries to its current three-storey pagoda form, and its interior contains a remarkable image of Bhairav kept largely hidden from public view. The temple comes to life during the annual Bisket Jatra festival, when it becomes the focal point of elaborate processions and community celebrations.",
        image: "/images/destinations/bhaktapur/bhairavnath-temple.jpg",
        location: "Taumadhi Square, Bhaktapur",
        duration: "30–60 Minutes",
        bestTime: "Year-round (Festival: April)",
        featured: true,
        tourAvailable: true,
        highlights: [
            "Guardian deity of Bhaktapur",
            "Three-storey pagoda",
            "Bisket Jatra processions",
            "Sacred Bhairav imagery",
            "Taumadhi Square setting",
        ],
        travelTips: [
            {
                id: "bt-tip-1",
                title: "Observe respectfully from outside",
                description:
                    "The inner sanctum is not open to all visitors — appreciate the exterior craftsmanship.",
                category: "Culture",
            },
            {
                id: "bt-tip-2",
                title: "Time your visit with Bisket Jatra",
                description:
                    "April's festival brings the square and temple to extraordinary life with music and processions.",
                category: "Planning",
            },
        ],
        gallery: [
            {
                id: "bt-g1",
                src: "/images/destinations/bhaktapur/bhairavnath-temple-1.jpg",
                alt: "Bhairavnath Temple three-storey pagoda at Taumadhi",
                category: "Spiritual",
            },
            {
                id: "bt-g2",
                src: "/images/destinations/bhaktapur/bhairavnath-temple-2.jpg",
                alt: "Bhairavnath Temple during festival",
                category: "Culture",
            },
        ],
    },
    {
        id: "siddha-pokhari",
        slug: "siddha-pokhari",
        name: "Siddha Pokhari",
        category: "Nature & Heritage",
        shortDescription:
            "A royal ceremonial pond and quiet garden reflecting Bhaktapur's peaceful heritage at its western edge.",
        description:
            "Siddha Pokhari, also known as Tamdi Pokhari, is a large, historic stepped pond located just outside the old city walls. Built during the Malla period as a royal bathing and ceremonial pool, the pond is surrounded by terraced stone steps, mature trees and a peaceful garden that offers a welcome contrast to the busy historic squares inside the old city. Local residents use the area for morning walks and meditation, and the pond's calm waters reflect the surrounding trees and sky, creating a tranquil and photogenic setting.",
        image: "/images/destinations/bhaktapur/siddha-pokhari.jpg",
        location: "Western edge of Bhaktapur",
        duration: "30–60 Minutes",
        bestTime: "Early morning, Year-round",
        featured: true,
        tourAvailable: false,
        highlights: [
            "Historic Malla-period pond",
            "Stepped stone terraces",
            "Peaceful garden setting",
            "Local morning life",
            "Photography reflection shots",
        ],
        travelTips: [
            {
                id: "sp-tip-1",
                title: "Visit at sunrise for peaceful reflections",
                description:
                    "The early morning calm turns the pond into a perfect mirror — ideal for photography.",
                category: "Photography",
            },
            {
                id: "sp-tip-2",
                title: "Combine with the old city walk",
                description:
                    "Siddha Pokhari is a short walk from Bhaktapur Durbar Square and makes a relaxing end to a heritage walk.",
                category: "Travel",
            },
        ],
        gallery: [
            {
                id: "sp-g1",
                src: "/images/destinations/bhaktapur/siddha-pokhari-1.jpg",
                alt: "Siddha Pokhari historic pond and stepped terraces",
                category: "Heritage",
            },
            {
                id: "sp-g2",
                src: "/images/destinations/bhaktapur/siddha-pokhari-2.jpg",
                alt: "Siddha Pokhari peaceful morning reflections",
                category: "Nature",
            },
        ],
    },
];

// ============================================================================
// HIGHLIGHTS
// ============================================================================

const bhaktapurHighlights: Highlight[] = [
    {
        id: "h1",
        title: "UNESCO World Heritage Site",
        description:
            "Bhaktapur's Durbar Square and historic old city are recognized by UNESCO for their outstanding cultural and architectural significance.",
    },
    {
        id: "h2",
        title: "Nepal's Tallest Pagoda Temple",
        description:
            "The five-storey Nyatapola Temple has stood since 1702 and remains the most impressive pagoda structure anywhere in the Kathmandu Valley.",
    },
    {
        id: "h3",
        title: "World-Class Wood Carving",
        description:
            "From the Golden Gate to the Peacock Window and the 55-Window Palace, Bhaktapur's wood carving tradition has no equal in Nepal.",
    },
    {
        id: "h4",
        title: "Living Pottery Tradition",
        description:
            "In Pottery Square, traditional Newari potters still shape clay by hand on wooden wheels, exactly as their ancestors have done for centuries.",
    },
    {
        id: "h5",
        title: "Authentic Newari Culture",
        description:
            "Bhaktapur remains the most authentically preserved medieval Newari city in Nepal, where traditional customs, festivals and architecture remain deeply alive.",
    },
    {
        id: "h6",
        title: "Festivals & Living Heritage",
        description:
            "Bisket Jatra (Nepali New Year), Indra Jatra and other festivals transform the city's historic squares into spectacular celebrations of community and tradition.",
    },
    {
        id: "h7",
        title: "Traditional Cuisine",
        description:
            "Bhaktapur is the home of Juju Dhau (king curd) and traditional Newari food — flavors you will not find anywhere else in Nepal.",
    },
    {
        id: "h8",
        title: "Photography Paradise",
        description:
            "Every alley, rooftop, courtyard and temple offers extraordinary photographic opportunities from dawn to dusk.",
    },
];

// ============================================================================
// EXPERIENCES
// ============================================================================

const bhaktapurExperiences: Experience[] = [
    {
        id: "e1",
        title: "Heritage Square Walking Tours",
        description:
            "Explore Durbar Square, Taumadhi Square and Dattatreya Square with cultural insights from experienced local guides who bring history to life.",
        icon: "🏛️",
    },
    {
        id: "e2",
        title: "Pottery & Craft Discovery",
        description:
            "Watch master potters shape clay at Pottery Square and explore the traditional artisan workshops of Bhaktapur's craft community.",
        icon: "🎨",
    },
    {
        id: "e3",
        title: "Temple & Architecture Walks",
        description:
            "Discover the Nyatapola Temple, Golden Gate, 55-Window Palace and countless carved shrines that make Bhaktapur an open-air museum of Newari art.",
        icon: "⛩️",
    },
    {
        id: "e4",
        title: "Photography Experiences",
        description:
            "Capture medieval temples, ancient streets, traditional potters, morning light on ponds and the timeless atmosphere of Nepal's most photogenic city.",
        icon: "📸",
    },
    {
        id: "e5",
        title: "Newari Food & Culinary Culture",
        description:
            "Taste Juju Dhau (the famous king curd), traditional beaten rice snacks and local tea-house cuisine in the heart of the old city.",
        icon: "🍲",
    },
    {
        id: "e6",
        title: "Festival & Community Life",
        description:
            "Experience Bhaktapur's vibrant festival calendar — from Bisket Jatra to Indra Jatra — where the squares fill with music, processions and celebration.",
        icon: "🎉",
    },
];

// ============================================================================
// TRAVEL TIPS
// ============================================================================

const bhaktapurTravelTips: TravelTip[] = [
    {
        id: "t1",
        title: "Best Time to Visit",
        description:
            "September–May is ideal for comfortable temperatures and clear skies. October–November is considered the peak season for heritage tourism.",
        category: "Weather",
    },
    {
        id: "t2",
        title: "Entry Fee",
        description:
            "Foreign visitors pay an entry fee at the main gate of Bhaktapur Old City. Keep your receipt — it is valid all day for re-entry to the heritage zone.",
        category: "Planning",
    },
    {
        id: "t3",
        title: "Getting There from Kathmandu",
        description:
            "Bhaktapur is approximately 13 km from Kathmandu city center. Taxis take 45–60 minutes; local micro-buses depart from Ratna Park and are an affordable option.",
        category: "Transport",
    },
    {
        id: "t4",
        title: "Respect Cultural Customs",
        description:
            "Dress modestly with covered shoulders and knees. Remove shoes before entering temple interiors and follow posted rules at religious sites.",
        category: "Culture",
    },
    {
        id: "t5",
        title: "Walking is the Best Way to Explore",
        description:
            "The old city is best explored on foot. The key squares — Durbar, Taumadhi and Dattatreya — are all within easy walking distance of each other.",
        category: "Travel",
    },
    {
        id: "t6",
        title: "Try Juju Dhau",
        description:
            "Don't leave Bhaktapur without tasting Juju Dhau — the famous king curd made with full-fat buffalo milk, sold in traditional clay pots throughout the old city.",
        category: "Food",
    },
];

// ============================================================================
// FAQS
// ============================================================================

const bhaktapurFaqs: FaqItem[] = [
    {
        id: "faq1",
        question: "What is Bhaktapur famous for?",
        answer:
            "Bhaktapur is famous for its extraordinarily preserved medieval Newari culture, UNESCO World Heritage Durbar Square, the Nyatapola Temple (Nepal's tallest pagoda), traditional pottery crafts, wood carving art and the delicious local specialty Juju Dhau (king curd).",
    },
    {
        id: "faq2",
        question: "What are the most important sights in Bhaktapur?",
        answer:
            "The key sites include Bhaktapur Durbar Square, the 55-Window Palace, the Golden Gate, Nyatapola Temple, Taumadhi Square, Bhairavnath Temple, Dattatreya Square, Pottery Square and the peaceful Siddha Pokhari pond.",
    },
    {
        id: "faq3",
        question: "How many days should I spend in Bhaktapur?",
        answer:
            "One long day is enough to see the main squares and temples. Two to three days allows a more relaxed experience — including artisan workshops, morning walks and traditional food.",
    },
    {
        id: "faq4",
        question: "What is the best time of year to visit Bhaktapur?",
        answer:
            "September–May offers the most comfortable weather for walking through the old city. October–November is peak season with clear skies. April is especially exciting for the Bisket Jatra New Year festival.",
    },
    {
        id: "faq5",
        question: "Is Bhaktapur suitable for families and first-time Nepal visitors?",
        answer:
            "Yes. Bhaktapur is one of the most rewarding and accessible cultural destinations in Nepal. The old city is compact, walkable and fascinating for visitors of all ages and backgrounds.",
    },
    {
        id: "faq6",
        question: "How far is Bhaktapur from Kathmandu, and how do I get there?",
        answer:
            "Bhaktapur is about 13 km east of Kathmandu, typically 45–60 minutes by taxi depending on traffic. Local micro-buses also run regularly from Ratna Park in central Kathmandu.",
    },
    {
        id: "faq7",
        question: "Can Meegin organize a customized Bhaktapur cultural tour?",
        answer:
            "Absolutely. Our team can design a tailored Bhaktapur experience focused on heritage, photography, craft workshops, festivals or a combination — contact us to discuss your interests.",
    },
];

// ============================================================================
// GALLERY
// ============================================================================

const bhaktapurGallery: GalleryImage[] = [
    {
        id: "g1",
        src: "/images/destinations/bhaktapur/bhaktapur-hero.jpg",
        alt: "Bhaktapur ancient city panoramic view",
        category: "Heritage",
    },
    {
        id: "g2",
        src: "/images/destinations/bhaktapur/bhaktapur-durbar-square.jpg",
        alt: "Bhaktapur Durbar Square temples and courtyards",
        category: "Heritage",
    },
    {
        id: "g3",
        src: "/images/destinations/bhaktapur/nyatapola-temple.jpg",
        alt: "Nyatapola Temple five-storey pagoda",
        category: "Architecture",
    },
    {
        id: "g4",
        src: "/images/destinations/bhaktapur/golden-gate.jpg",
        alt: "Bhaktapur Golden Gate gilded copper repousse",
        category: "Art",
    },
    {
        id: "g5",
        src: "/images/destinations/bhaktapur/pottery-square.jpg",
        alt: "Bhaktapur Pottery Square artisans at work",
        category: "Culture",
    },
    {
        id: "g6",
        src: "/images/destinations/bhaktapur/taumadhi-square.jpg",
        alt: "Taumadhi Square medieval streetscape",
        category: "Heritage",
    },
    {
        id: "g7",
        src: "/images/destinations/bhaktapur/taumadhi-square-2.jpg",
        alt: "Dattatreya Square and Peacock Window area",
        category: "Culture",
    },
    {
        id: "g8",
        src: "/images/destinations/bhaktapur/siddha-pokhari.jpg",
        alt: "Siddha Pokhari historic pond at sunrise",
        category: "Nature",
    },
];

// ============================================================================
// DESTINATION EXPORT
// ============================================================================

export const bhaktapur: Destination = {
    id: "bhaktapur",
    slug: "bhaktapur",
    name: "Bhaktapur",
    tagline: "Ancient City of Temples & Living Newari Culture",
    shortDescription:
        "Step into a UNESCO World Heritage city where medieval temples, traditional pottery, extraordinary wood carving and authentic Newari culture survive in remarkable completeness.",
    description:
        "Bhaktapur is one of Nepal's greatest cultural treasures — a medieval city that has resisted the passage of time with extraordinary grace. Once the royal capital of the Kathmandu Valley's mightiest Malla kingdom, it remains today the most authentically preserved Newari city in Nepal. Three remarkable historic squares — Durbar Square, Taumadhi Square and Dattatreya Square — each offer their own character, monuments and stories. The famous 55-Window Palace and its gilded Golden Gate stand alongside the towering Nyatapola Temple, twin symbols of Bhaktapur's royal ambition and artistic mastery. Beyond the temples and palaces, life here is lived in genuinely traditional ways. In Pottery Square, terracotta artisans shape clay as they always have. In the narrow alleyways of Dattatreya, wood carvers and bronze casters practice their ancient crafts. At local tea houses, Juju Dhau — the creamy king curd unique to Bhaktapur — is served in the same handmade clay bowls used for generations. For travelers who want to experience Nepal's cultural heritage not as a museum exhibit but as a living reality, Bhaktapur is an experience unlike any other.",
    heroImage: "/images/destinations/bhaktapur/bhaktapur-hero.jpg",
    introImage: "/images/destinations/bhaktapur/bhaktapur-intro.jpg",
    ctaImage: "/images/destinations/bhaktapur/taumadhi-square.jpg",
    location: "Bagmati Province, Nepal",
    region: "Central Nepal",
    knownFor:
        "UNESCO heritage squares, Nyatapola Temple, Golden Gate, 55-Window Palace, traditional pottery, wood carving and authentic Newari culture",
    idealFor: [
        "History & heritage lovers",
        "Culture enthusiasts",
        "Photographers",
        "Families with children",
        "Day trippers from Kathmandu",
        "Art & craft lovers",
        "Festival travelers",
        "First-time Nepal visitors",
    ],
    recommendedDuration: "1–3 Days",
    bestTime: "September–May",
    numberOfTours: 4,
    featured: true,
    places: bhaktapurPlaces,
    highlights: bhaktapurHighlights,
    experiences: bhaktapurExperiences,
    travelTips: bhaktapurTravelTips,
    faqs: bhaktapurFaqs,
    gallery: bhaktapurGallery,
    seo: {
        title: "Bhaktapur Tours & Travel Packages | MEegin Tours & Travels",
        description:
            "Discover Bhaktapur with MEegin Tours & Travels. Explore UNESCO heritage squares, the Nyatapola Temple, Golden Gate, traditional pottery and authentic Newari culture on a carefully designed Bhaktapur tour.",
        keywords: [
            "Bhaktapur",
            "Nepal travel",
            "Bhaktapur tours",
            "Durbar Square",
            "Nyatapola Temple",
            "Golden Gate Bhaktapur",
            "Newari culture",
            "heritage tourism Nepal",
            "UNESCO Nepal",
            "Pottery Square",
            "Juju Dhau",
            "historic Nepal",
        ],
    },
};
