export interface Destination {
  id: string
  name: string
  type: "Heritage" | "Adventure" | "Cultural" | "Nature"
  description: string
  image: string
  location: string
}

export interface Hotel {
  id: string
  name: string
  location: string
  rating: number
  pricePerNight: number
  image: string
  amenities: string[]
}

export interface Guide {
  id: string
  name: string
  location: string
  languages: string[]
  rating: number
  image: string
  experience: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  activities: string[]
}

export interface Itinerary {
  id: string
  destination: string
  days: number
  title: string
  description: string
  dailyPlan: ItineraryDay[]
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Taj Mahal, Agra",
    type: "Heritage",
    description:
      "The epitome of love and architectural marvel, this UNESCO World Heritage site is a must-visit destination showcasing Mughal grandeur.",
    image: "/Taj.jpeg",
    location: "Agra, Uttar Pradesh",
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    type: "Nature",
    description:
      "Serene network of lagoons, lakes, and canals offering peaceful houseboat experiences through lush tropical landscapes.",
    image: "/kerala.jpeg",
    location: "Alleppey, Kerala",
  },
  {
    id: "3",
    name: "Rajasthan Desert Safari",
    type: "Adventure",
    description:
      "Experience the golden sands of Thar Desert with camel safaris, cultural performances, and starlit camping.",
    image: "/desert.jpeg",
    location: "Jaisalmer, Rajasthan",
  },
  {
    id: "4",
    name: "Varanasi Ghats",
    type: "Cultural",
    description:
      "Ancient spiritual city on the banks of Ganges, offering profound cultural experiences and traditional ceremonies.",
    image: "/varanasi.jpeg",
    location: "Varanasi, Uttar Pradesh",
  },
]

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "The Oberoi Amarvilas",
    location: "Agra, Uttar Pradesh",
    rating: 5,
    pricePerNight: 25000,
    image: "/oberoi.webp",
    amenities: ["Taj Mahal View", "Spa", "Fine Dining", "Pool"],
  },
  {
    id: "2",
    name: "Kumarakom Lake Resort",
    location: "Kumarakom, Kerala",
    rating: 4.5,
    pricePerNight: 15000,
    image: "/kumarakom-lake-resort.jpg",
    amenities: ["Lake View", "Ayurveda Spa", "Backwater Access", "Traditional Cuisine"],
  },
  {
    id: "3",
    name: "Suryagarh Palace",
    location: "Jaisalmer, Rajasthan",
    rating: 4.8,
    pricePerNight: 20000,
    image: "/suryagarh.avif",
    amenities: ["Desert View", "Cultural Shows", "Camel Safari", "Royal Dining"],
  },
]

export const guides: Guide[] = [
  {
    id: "1",
    name: "Raju Kumar",
    location: "Agra, Uttar Pradesh",
    languages: ["Hindi", "English", "French"],
    rating: 4.9,
    image: "/man.jpg",
    experience: "15 years of heritage tourism expertise",
  },
  {
    id: "2",
    name: "Kaju Kumar",
    location: "Kerala",
    languages: ["Malayalam", "English", "German"],
    rating: 4.8,
    image: "/man2.webp",
    experience: "12 years specializing in backwater and cultural tours",
  },
]

export const itineraries: Itinerary[] = [
  {
    id: "1",
    destination: "Agra",
    days: 3,
    title: "Golden Triangle Heritage Tour",
    description:
      "Explore the magnificent Mughal heritage of Agra with visits to iconic monuments and cultural experiences.",
    dailyPlan: [
      {
        day: 1,
        title: "Arrival & Taj Mahal",
        description: "Begin your journey with the world-famous Taj Mahal",
        activities: ["Airport pickup", "Hotel check-in", "Taj Mahal sunset visit", "Welcome dinner"],
      },
      {
        day: 2,
        title: "Agra Fort & Local Culture",
        description: "Discover the grandeur of Mughal architecture and local traditions",
        activities: [
          "Agra Fort exploration",
          "Local market visit",
          "Traditional craft workshop",
          "Cultural performance",
        ],
      },
      {
        day: 3,
        title: "Fatehpur Sikri & Departure",
        description: "Visit the abandoned Mughal city before departure",
        activities: ["Fatehpur Sikri tour", "Local cuisine experience", "Shopping for souvenirs", "Departure transfer"],
      },
    ],
  },
  {
    id: "2",
    destination: "Kerala",
    days: 5,
    title: "Backwater Bliss Experience",
    description: "Immerse yourself in the tranquil beauty of Kerala backwaters with authentic cultural experiences.",
    dailyPlan: [
      {
        day: 1,
        title: "Arrival in God's Own Country",
        description: "Welcome to Kerala with traditional hospitality",
        activities: ["Airport pickup", "Houseboat check-in", "Welcome coconut water", "Sunset cruise"],
      },
      {
        day: 2,
        title: "Backwater Exploration",
        description: "Navigate through serene canals and villages",
        activities: ["Village visit", "Traditional fishing", "Ayurvedic massage", "Local cuisine cooking class"],
      },
      {
        day: 3,
        title: "Spice Plantation Tour",
        description: "Discover Kerala's famous spice gardens",
        activities: ["Spice plantation visit", "Elephant sanctuary", "Traditional lunch", "Cultural dance show"],
      },
      {
        day: 4,
        title: "Beach & Relaxation",
        description: "Unwind at pristine Kerala beaches",
        activities: ["Beach visit", "Water sports", "Seafood lunch", "Sunset photography"],
      },
      {
        day: 5,
        title: "Departure",
        description: "Farewell with beautiful memories",
        activities: ["Final breakfast", "Souvenir shopping", "Airport transfer", "Departure"],
      },
    ],
  },
]
