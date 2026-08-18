export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    location?: string;
    readTime: string;
    date: string;
    featured?: boolean;
    content: string;
};

export const blogCategories = [
    "All",
    "Destinations",
    "Travel Tips",
    "Trekking",
    "Culture & Heritage",
    "Adventure",
    "Wildlife",
    "Food & Culture",
    "Travel Planning"
];

export const blogPosts: BlogPost[] = [
    {
        id: "best-of-nepal",
        slug: "discover-the-best-of-nepal",
        title: "Discover the Best of Nepal: Mountains, Culture & Adventure",
        excerpt: "From peaceful lakes and ancient cities to dramatic Himalayan landscapes, Nepal offers unforgettable experiences for every traveler.",
        image: "/images/destinations/everest/sagarmatha-national-park.jpg",
        category: "Travel Planning",
        location: "Nepal",
        readTime: "8 min read",
        date: "August 15, 2026",
        featured: true,
        content: "Nepal is a country of contrasts. From the towering peaks of the Himalayas to the dense, wildlife-rich jungles of Chitwan, there is an adventure waiting for every type of traveler.\n\nIn this guide, we explore the top destinations that make Nepal a world-class travel destination. Whether you are seeking spiritual awakening in Lumbini, adrenaline-pumping treks in the Annapurna region, or a peaceful retreat by the lakes of Pokhara, Nepal has it all.\n\n### The Himalayan Call\nFor trekkers, Nepal is synonymous with the Himalayas. The Everest Base Camp and Annapurna Circuit treks are bucket-list experiences. But even if you prefer a less strenuous journey, regions like Poon Hill or panoramic flights offer breathtaking views without the physical toll.\n\n### Cultural Riches\nKathmandu Valley, with its three ancient cities—Kathmandu, Patan, and Bhaktapur—is a living museum. Durbar Squares, narrow alleys, and centuries-old temples tell the story of a rich architectural and cultural heritage.\n\n### Wildlife Safaris\nDown in the Terai plains, Chitwan and Bardia National Parks offer excellent opportunities to spot one-horned rhinoceros, Bengal tigers, and diverse bird species. It's a completely different side of Nepal, characterized by warm weather and dense jungles.\n\nPlan your trip carefully, respecting the local culture and environment, and you will leave with memories that last a lifetime."
    },
    {
        id: "pokhara-guide",
        slug: "complete-pokhara-travel-guide",
        title: "Complete Pokhara Travel Guide",
        excerpt: "Explore Phewa Lake, Sarangkot, World Peace Pagoda, Davis Falls and the natural beauty of Pokhara.",
        image: "/images/destinations/pokhara/pokhara_intro.jpg",
        category: "Destinations",
        location: "Pokhara",
        readTime: "6 min read",
        date: "August 10, 2026",
        content: "Pokhara is Nepal's number one adventure and leisure destination. A gateway to the Annapurna region, this city offers the perfect blend of natural beauty and thrilling activities.\n\n### Top Attractions\n- **Phewa Lake:** Rent a colorful wooden boat and paddle across the serene waters. Don't miss the Tal Barahi Temple located on a small island in the lake.\n- **Sarangkot:** Wake up early and drive up to Sarangkot for a spectacular sunrise over the Annapurna and Dhaulagiri mountain ranges.\n- **World Peace Pagoda:** A beautiful white stupa situated on a ridge overlooking the lake and city, offering peace and panoramic views.\n\n### Adventure Awaits\nPokhara is famous for paragliding. Taking off from Sarangkot and flying alongside eagles with the Himalayas in the background is an unforgettable experience."
    },
    {
        id: "mustang-guide",
        slug: "mustang-travel-guide",
        title: "Mustang Travel Guide",
        excerpt: "Discover the dramatic landscapes, ancient villages, monasteries and Himalayan culture of Mustang.",
        image: "/images/destinations/mustang/mustang.jpg",
        category: "Destinations",
        location: "Mustang",
        readTime: "7 min read",
        date: "August 5, 2026",
        content: "Mustang, previously a restricted kingdom, offers some of the most dramatic landscapes in Nepal. Divided into Lower and Upper Mustang, it is a high-altitude desert holding absolute cultural treasures.\n\n### Upper Mustang\nTrekking to Lo Manthang, the walled capital of Upper Mustang, feels like stepping back in time. The Tibetan-influenced culture, ancient monasteries, and cave dwellings make it a highly unique destination.\n\n### Lower Mustang\nMore accessible but equally stunning, Lower Mustang features destinations like Jomsom, Muktinath, and Marpha. The Kali Gandaki gorge, the deepest in the world, cuts through this region."
    },
    {
        id: "chitwan-guide",
        slug: "chitwan-travel-guide",
        title: "Chitwan Travel Guide",
        excerpt: "Experience jungle safaris, wildlife, rivers and the unique culture of southern Nepal.",
        image: "/images/destinations/chitwan/jeep-safari.jpg",
        category: "Wildlife",
        location: "Chitwan",
        readTime: "5 min read",
        date: "August 2, 2026",
        content: "Chitwan National Park is Nepal's first national park and a UNESCO World Heritage site. It's the perfect destination for nature lovers and wildlife enthusiasts.\n\n### Safari Experiences\nJeep safaris and guided jungle walks are the best ways to explore the park. Look out for the endangered one-horned rhinoceros, Royal Bengal tigers, sloth bears, and crocodiles.\n\n### Tharu Culture\nBeyond wildlife, Chitwan is home to the indigenous Tharu people. Visiting a Tharu village and witnessing their traditional stick dance provides a wonderful cultural experience."
    },
    {
        id: "lumbini-guide",
        slug: "lumbini-travel-guide",
        title: "Lumbini Travel Guide",
        excerpt: "Explore the birthplace of Lord Buddha and discover its peaceful monasteries and spiritual heritage.",
        image: "/images/destinations/lumbini/lumbini-tour.jpg",
        category: "Travel Planning",
        location: "Lumbini",
        readTime: "5 min read",
        date: "July 28, 2026",
        content: "Lumbini is one of the world's most important spiritual sites, widely recognized as the birthplace of Siddhartha Gautama, who became the Buddha.\n\n### The Sacred Garden\nThe focal point of Lumbini is the Sacred Garden, containing the exact birthplace marked by the Maya Devi Temple, the Ashoka Pillar, and the sacred pool (Puskarni).\n\n### Monastic Zone\nThe Monastic Zone is divided into the eastern (Theravada) and western (Mahayana and Vajrayana) zones. Here, you can explore striking monasteries built by countries from all over the world, including China, Thailand, Myanmar, and Germany."
    },
    {
        id: "kathmandu-guide",
        slug: "kathmandu-valley-travel-guide",
        title: "Kathmandu Valley Travel Guide",
        excerpt: "Discover ancient temples, historic squares, vibrant streets and the cultural heart of Nepal.",
        image: "/images/destinations/kathmandu/swayambhunath-stupa-1.jpg",
        category: "Culture & Heritage",
        location: "Kathmandu",
        readTime: "8 min read",
        date: "July 20, 2026",
        content: "The Kathmandu Valley is the cultural and historical heart of Nepal. It consists of three main cities: Kathmandu, Patan, and Bhaktapur, each boasting its own Durbar Square (royal palace square).\n\n### Key Highlights\n- **Swayambhunath (Monkey Temple):** Perched on a hill top, it offers fantastic views of the city.\n- **Boudhanath Stupa:** One of the largest spherical stupas in Nepal, it is the center of Tibetan Buddhism in the valley.\n- **Pashupatinath Temple:** A significant Hindu temple complex on the banks of the Bagmati River.\n\nExploring the narrow, bustling streets of Thamel or the artisanal alleys of Patan offers an intoxicating mix of sights, sounds, and smells."
    },
    {
        id: "bandipur-guide",
        slug: "bandipur-travel-guide",
        title: "Bandipur Travel Guide",
        excerpt: "Experience traditional Newari architecture, mountain views and peaceful hill-town charm.",
        image: "/images/destinations/bandipur/bazaar-2.jpg",
        category: "Destinations",
        location: "Bandipur",
        readTime: "4 min read",
        date: "July 15, 2026",
        content: "Bandipur is a beautifully preserved Newari hill town located midway between Kathmandu and Pokhara. It has escaped the modernization that has transformed other towns.\n\n### What to Expect\nThe main street is lined with traditional wooden houses, cafes, and lodges. There are no motorized vehicles allowed on the main bazaar street, giving it a delightfully peaceful atmosphere. \n\nHike up to Thani Mai viewpoint for sunset or sunrise views of the Himalayas stretching across the horizon."
    },
    {
        id: "best-places",
        slug: "best-places-to-visit-in-nepal",
        title: "Best Places to Visit in Nepal",
        excerpt: "From the Himalayas to historic cities, discover some of Nepal's most memorable destinations.",
        image: "/images/destinations/kathmandu/best-place.jpg",
        category: "Destinations",
        readTime: "9 min read",
        date: "July 10, 2026",
        content: "If you are planning a trip to Nepal, deciding where to go can be overwhelming because the country offers so much variety. Here are our top recommendations:\n\n1. **Kathmandu Valley:** For history, art, and culture.\n2. **Pokhara:** For lakes, adventure sports, and relaxation.\n3. **Chitwan National Park:** For wildlife safaris.\n4. **Everest Region:** For the ultimate trekking challenge.\n5. **Annapurna Region:** For diverse trekking routes and landscapes.\n6. **Lumbini:** For peace and Buddhist history.\n7. **Bandipur:** For a quiet, romantic hill-town escape."
    },
    {
        id: "best-time",
        slug: "best-time-to-visit-nepal",
        title: "Best Time to Visit Nepal",
        excerpt: "Understand Nepal's seasons and choose the right time for sightseeing, trekking and adventure.",
        image: "/images/destinations/kathmandu/best-time-visit.jpg",
        category: "Travel Tips",
        readTime: "5 min read",
        date: "July 5, 2026",
        content: "Understanding Nepal's climate is key to planning a successful trip. The country basically has four seasons:\n\n### Autumn (September - November)\nThis is widely considered the best time to visit. The weather is clear, dry, and mild, offering perfect conditions for trekking and breathtaking mountain views.\n\n### Spring (March - May)\nThe second best time to visit. The weather warms up, and the hills come alive with blooming rhododendrons. It's excellent for trekking and wildlife spotting.\n\n### Summer/Monsoon (June - August)\nHeavy rains make trekking difficult due to leeches and muddy trails. However, it's a great time to visit Mustang or Dolpo, which lie in the rain shadow.\n\n### Winter (December - February)\nWhile the days are often sunny and clear, the temperatures drop significantly, especially at night and at higher altitudes. It's a good time for cultural tours and lower elevation hikes."
    },
    {
        id: "trekking-guide",
        slug: "nepal-trekking-guide-for-beginners",
        title: "Nepal Trekking Guide for Beginners",
        excerpt: "Essential information for travelers planning their first Himalayan trekking experience.",
        image: "/images/destinations/annapurna/treak.jpg",
        category: "Trekking",
        readTime: "8 min read",
        date: "June 28, 2026",
        content: "Trekking in the Himalayas is a dream for many, but it can be intimidating for beginners. Here's what you need to know:\n\n### Choosing the Right Trek\nDon't start with Everest Base Camp if you've never hiked before. Options like Ghorepani Poon Hill or Mardi Himal are excellent starter treks that offer incredible views without the extreme altitude.\n\n### Packing Essentials\nLayering is essential. You'll need moisture-wicking base layers, an insulating middle layer, and a waterproof/windproof outer layer. A good, broken-in pair of trekking boots is your most important piece of gear.\n\n### Acclimatization\nAltitude sickness is a real risk. Listen to your guide, ascend slowly, stay hydrated, and never ignore symptoms like headaches or nausea."
    },
    {
        id: "travel-tips",
        slug: "nepal-travel-tips",
        title: "Nepal Travel Tips",
        excerpt: "Practical tips for transportation, accommodation, packing, communication and responsible travel.",
        image: "/images/destinations/annapurna/travels-tips.jpg",
        category: "Travel Tips",
        readTime: "7 min read",
        date: "June 20, 2026",
        content: "Traveling in Nepal is an adventure. To ensure everything goes smoothly, keep these tips in mind:\n\n### Visa and Entry\nYou can get a visa on arrival at Kathmandu's Tribhuvan International Airport (bring passport photos and cash in USD).\n\n### Money Matters\nThe local currency is the Nepalese Rupee (NPR). While ATMs are common in Kathmandu and Pokhara, carry enough cash when heading to remote areas or trekking.\n\n### Connectivity\nBuy a local SIM card (Ncell or NTC) at the airport for cheap data, but expect patchy reception in the mountains.\n\n### Responsible Travel\nCarry a reusable water bottle (bring water purification tablets), respect local customs (dress modestly), and always ask for permission before taking photographs of people."
    },
    {
        id: "nepali-food",
        slug: "traditional-nepali-food-you-should-try",
        title: "Traditional Nepali Food You Should Try",
        excerpt: "Discover popular Nepali dishes and local flavors every traveler should experience.",
        image: "/images/destinations/palpa/food.jpg",
        category: "Food & Culture",
        readTime: "5 min read",
        date: "June 12, 2026",
        content: "Nepali cuisine is heavily influenced by its neighbors, India and Tibet, but has its own unique character. Here are the must-try dishes:\n\n### Dal Bhat\nThe national dish, consisting of lentil soup (dal), rice (bhat), curried vegetables, and pickles. \"Dal bhat power, 24 hour!\" is a popular phrase among trekkers.\n\n### Momos\nThese delicious steamed or fried dumplings (filled with meat or vegetables) are ubiquitous and addictive.\n\n### Sel Roti\nA traditional, sweet, ring-shaped rice bread/doughnut often prepared during festivals like Dashain and Tihar.\n\n### Newari Cuisine\nWhen in Kathmandu, try Newari dishes like Bara (lentil pancake), Chatamari (often called Nepali pizza), or Yomari (steamed dumpling with sweet filling)."
    },
    {
        id: "culture-heritage",
        slug: "nepal-culture-and-heritage",
        title: "Nepal Culture & Heritage",
        excerpt: "Explore Nepal's diverse traditions, festivals, architecture and living heritage.",
        image: "/images/destinations/kathmandu/culture.png",
        category: "Culture & Heritage",
        readTime: "6 min read",
        date: "June 5, 2026",
        content: "Nepal is a melting pot of ethnicities, languages, and religions, predominantly a blend of Hinduism and Buddhism.\n\n### Festivals\nNepal has more festivals than days in a year! Dashain and Tihar are the biggest Hindu festivals, while Holi (the festival of colors) is celebrated with much enthusiasm. For Buddhists, Buddha Jayanti and Losar (Tibetan New Year) are major events.\n\n### Architecture\nThe pagoda style of architecture is believed to have originated in Nepal, exported to China and Japan by the famous Nepali architect Araniko. The intricate wood carvings seen on windows and doors in the Kathmandu Valley are a testament to the skill of the Newar artisans."
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
    return blogPosts.find((post) => post.featured);
}
