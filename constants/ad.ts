const adData = [
  {
    id: 1,
    title: "Bird Watching Adventures",
    description:
      "Discover the diverse species of birds in their natural habitat.",
    cta: "Book Now",
    image:
      "https://images.unsplash.com/photo-1490718720478-364a07a997cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfDF8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1613033075264-1a7cd93d7f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Majestic Red Swans",
    description: "Experience the elegance and beauty of red swans in the wild.",
    cta: "Learn More",
    image:
      "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHxlbnwwfDF8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1593179876203-8512bff5861e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Parrot Paradise",
    description: "Get up close with vibrant parrots in their lush environment.",
    cta: "Buy Tickets",
    image:
      "https://images.unsplash.com/photo-1511823794984-b87716139b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHxlbnwwfDF8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmVzdHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "Lion Safaris",
    description: "Join us for an unforgettable lion safari adventure.",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1511216113906-8f57bb83e776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfDF8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1521706862577-47b053587f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Python Expeditions",
    description: "Explore the world of pythons in their natural surroundings.",
    cta: "Sign Up",
    image:
      "https://images.unsplash.com/photo-1533567767427-38bb7cbc0409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHl0aG9ufGVufDB8MXwwfHx8MA%3D%3D",
    background:
      "https://images.unsplash.com/photo-1496150458551-140441714f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FuZCUyMGRhcmt8ZW58MHwwfDB8fHww",
  },
  {
    id: 6,
    title: "Frog Habitats",
    description: "Discover the unique habitats of various frog species.",
    cta: "Discover More",
    image:
      "https://images.unsplash.com/photo-1613779814142-d88c07f61aaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyb2d8ZW58MHwxfDB8fHww",
    background:
      "https://images.unsplash.com/photo-1516528387618-afa90b13e000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwanVuZ2xlfGVufDB8MHwwfHx8MA%3D%3Dg",
  },
  {
    id: 7,
    title: "Polar Bear Expeditions",
    description: "Witness the majestic polar bears in their icy domain.",
    cta: "Get Started",
    image:
      "https://images.unsplash.com/photo-1597164507717-c46f576fe1d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9sYXIlMjBiZWFyfGVufDB8MXwwfHx8MA%3D%3D",
    background:
      "https://images.unsplash.com/photo-1523563464664-10033cd39ec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGRhcmt8ZW58MHwwfDB8fHww",
  },
  {
    id: 8,
    title: "Penguin Encounters",
    description: "Meet the charming penguins in their natural habitat.",
    cta: "Join Now",
    image:
      "https://images.unsplash.com/photo-1475874619827-b5f0310b6e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuZ3VpbnxlbnwwfDF8MHx8fDA%3D",
    background:
      "https://images.unsplash.com/photo-1515606174663-ad8323c6895e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwZGFya3xlbnwwfDB8MHx8fDA%3D",
  },
];

export default adData;
