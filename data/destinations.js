// Static/dummy destination data.
// The assignment explicitly says this can be hardcoded — no database needed here.

export const destinations = [
  // ---------- India ----------
  {
    id: 1,
    name: "Kerala",
    country: "India",
    category: "india",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    description:
      "Drift through the palm-fringed backwaters of Alleppey on a private houseboat, wake up to misty tea gardens in Munnar, and savour Kerala's legendary seafood along the coast.",
  },
  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    category: "india",
    price: 21999,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    description:
      "Pine-scented mountain air, snow-capped peaks, and cosy hillside cafes — explore Manali, Kasol and Spiti's high-altitude deserts on a classic Himalayan road trip.",
  },
  {
    id: 3,
    name: "Ladakh",
    country: "India",
    category: "india",
    price: 34999,
    image:
      "https://images.unsplash.com/photo-1632979720170-9a1ab1b103d3?auto=format&fit=crop&w=900&q=80",
    description:
      "Ride past turquoise lakes and ancient monasteries perched on cliff edges. Ladakh's stark, high-altitude landscapes feel like nowhere else on earth.",
  },
  {
    id: 4,
    name: "Andaman",
    country: "India",
    category: "india",
    price: 27999,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    description:
      "Powder-white beaches, coral reefs and glass-clear water. Dive at Havelock, watch the sunset at Radhanagar Beach, and unplug on India's tropical island paradise.",
  },
  {
    id: 5,
    name: "Goa",
    country: "India",
    category: "india",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    description:
      "Sun, surf and Portuguese-era charm. Laze on the beaches by day and wander spice-scented old-town lanes and beach shacks by night.",
  },

  // ---------- International ----------
  {
    id: 6,
    name: "Kenya",
    country: "Kenya",
    category: "international",
    price: 129999,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
    description:
      "Spot the Big Five at dawn in the Masai Mara, camp under an endless savannah sky, and witness the Great Migration up close with local expert guides.",
  },
  {
    id: 7,
    name: "Vietnam",
    country: "Vietnam",
    category: "international",
    price: 74999,
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    description:
      "Cruise the emerald waters of Ha Long Bay at sunset, cycle through Hoi An's lantern-lit streets, and feast on some of the world's best street food.",
  },
  {
    id: 8,
    name: "Tanzania",
    country: "Tanzania",
    category: "international",
    price: 139999,
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=900&q=80",
    description:
      "Trek across the endless plains of the Serengeti, encounter Maasai culture, and stand at the base of Kilimanjaro, Africa's tallest peak.",
  },
  {
    id: 9,
    name: "Iceland",
    country: "Iceland",
    category: "international",
    price: 154999,
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=900&q=80",
    description:
      "Chase the Northern Lights, soak in geothermal hot springs, and explore glaciers, waterfalls and black-sand beaches on the Ring Road.",
  },
  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    category: "international",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=80",
    description:
      "Ride the hill-country train through emerald tea plantations, spot leopards on safari, and unwind on the golden beaches of the south coast.",
  },
];

export const indiaDestinations = destinations.filter(
  (d) => d.category === "india"
);

export const internationalDestinations = destinations.filter(
  (d) => d.category === "international"
);

export const hotelCategories = ["Standard", "Deluxe", "Luxury"];

export const countryCodes = [
  { code: "+91", label: "IN (+91)" },
  { code: "+1", label: "US (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+254", label: "KE (+254)" },
  { code: "+65", label: "SG (+65)" },
  { code: "+61", label: "AU (+61)" },
];
