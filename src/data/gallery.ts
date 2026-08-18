export type GalleryImageItem = {
    id: string;
    src: string;
    title: string;
    location: string;
    category: string;
    description?: string;
};

export const galleryImages: GalleryImageItem[] = [
    // Pokhara
    {
        id: "pokhara-phewa-lake",
        src: "/images/destinations/pokhara/pokhara_intro.jpg",
        title: "Serenity of Phewa Lake",
        location: "Pokhara, Nepal",
        category: "Pokhara",
        description: "A peaceful morning view of Phewa Lake reflecting the Annapurna range."
    },
    {
        id: "pokhara-sarangkot",
        src: "/images/destinations/pokhara/sarangkot.jpg",
        title: "Sarangkot Sunrise",
        location: "Pokhara, Nepal",
        category: "Nature",
        description: "Breathtaking sunrise colors over the Himalayan peaks."
    },

    // Mustang
    {
        id: "mustang-landscape",
        src: "/images/destinations/mustang/upper-mustang-tour.jpg",
        title: "Upper Mustang Desert",
        location: "Mustang, Nepal",
        category: "Mustang",
        description: "The rugged, arid landscape of the ancient Mustang kingdom."
    },
    {
        id: "mustang-culture",
        src: "/images/destinations/mustang/lo-manthangg.jpg",
        title: "Lo Manthang Gates",
        location: "Mustang, Nepal",
        category: "Culture",
    },

    // Chitwan
    {
        id: "chitwan-safari",
        src: "/images/destinations/chitwan/chitwan-tour.jpg",
        title: "Jungle Safari",
        location: "Chitwan, Nepal",
        category: "Chitwan",
        description: "Exploring the dense forests of Chitwan National Park."
    },
    {
        id: "chitwan-wildlife",
        src: "/images/destinations/chitwan/chitwan-national-park.jpg",
        title: "One-Horned Rhino",
        location: "Chitwan National Park, Nepal",
        category: "Wildlife",
    },

    // Lumbini
    {
        id: "lumbini-temple",
        src: "/images/destinations/lumbini/lumbini.jpg",
        title: "Maya Devi Temple",
        location: "Lumbini, Nepal",
        category: "Lumbini",
        description: "The sacred birthplace of Lord Buddha."
    },

    // Kathmandu
    {
        id: "kathmandu-durbar",
        src: "/images/destinations/kathmandu/patan-durbar-square.jpg",
        title: "Kathmandu Durbar Square",
        location: "Kathmandu, Nepal",
        category: "Kathmandu",
        description: "Ancient temples and palaces in the heart of the capital."
    },
    {
        id: "kathmandu-boudhanath",
        src: "/images/destinations/kathmandu/kathmandu.jpg",
        title: "Boudhanath Stupa",
        location: "Kathmandu, Nepal",
        category: "Culture",
    },

    // Himalayas & Trekking
    {
        id: "annapurna-base-camp",
        src: "/images/destinations/annapurna/annapurna-viewpoints.jpg",
        title: "Annapurna Base Camp",
        location: "Annapurna Region, Nepal",
        category: "Annapurna",
        description: "Surrounded by majestic 8,000m peaks."
    },
    {
        id: "everest-trail",
        src: "/images/destinations/everest/everest-base-camp.jpg",
        title: "Trekking to Everest",
        location: "Everest Region, Nepal",
        category: "Everest",
    },
    {
        id: "adventure-trek",
        src: "/images/destinations/annapurna/poon-hill.jpg",
        title: "Himalayan Trails",
        location: "Nepal",
        category: "Adventure",
    },

    // Other beautiful towns
    {
        id: "bandipur-street",
        src: "/images/destinations/bandipur/bazaar-2.jpg",
        title: "Bandipur Heritage Street",
        location: "Bandipur, Nepal",
        category: "Bandipur",
    },
    {
        id: "palpa-tansen",
        src: "/images/destinations/palpa/images.jpg",
        title: "Tansen Bazaar",
        location: "Palpa, Nepal",
        category: "Palpa",
    },
    {
        id: "bhaktapur-pottery",
        src: "/images/destinations/bhaktapur/pottery-square-2.jpg",
        title: "Pottery Square",
        location: "Bhaktapur, Nepal",
        category: "Bhaktapur",
    },
    {
        id: "ghandruk-village",
        src: "/images/destinations/ghandruk/ghandruk-village.jpg",
        title: "Ghandruk Village",
        location: "Ghandruk, Nepal",
        category: "Ghandruk",
        description: "Traditional Gurung village against the backdrop of Annapurna South."
    },
];

export const galleryCategories = [
    "All",
    "Pokhara",
    "Mustang",
    "Chitwan",
    "Lumbini",
    "Kathmandu",
    "Palpa",
    "Baglung",
    "Bandipur",
    "Ghandruk",
    "Annapurna",
    "Everest",
    "Bhaktapur",
    "Culture",
    "Nature",
    "Adventure",
    "Wildlife",
];
