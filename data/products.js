export const products = [
  {
    id: 1,
    name: "Roman Tile",
    category: "Tile Profiles",
    finish: "Matte",
    images: [
      "/images/Roman-1.jpeg",
      "/images/Roman-2.jpeg",
      "/images/Roman-3.jpeg",
    ],
    pricing: {
      unit: "meter",
      factory: {
        "30g": 520,
        "28g": 620,
      },
      retail: {
        "30g": { min: 580, max: 580 },
        "28g": { min: 680, max: 680 },
      },
    },
  },
  {
    id: 2,
    name: "Versatile",
    category: "Tile Profiles",
    finish: "Matte",
    images: [
      "/images/Versatile-1.jpeg",
      "/images/Versatile-2.jpeg",
      "/images/Versatile-3.jpeg",
    ],
    pricing: {
      unit: "meter",
      factory: {
        "30g": 520,
        "28g": 620,
      },
      retail: {
        "30g": { min: 580, max: 580 },
        "28g": { min: 680, max: 680 },
      },
    },
  },
  {
    id: 3,
    name: "Normal Corrugated",
    category: "Corrugated Profiles",
    finish: "Glossy",
    images: ["/images/Corrugated-1.jpeg", "/images/Corrugated-2.webp"],
    pricing: {
      unit: "meter",
      factory: {
        "30g": 410,
        "28g": 560,
      },
      retail: {
        "30g": { min: 460, max: 500 },
        "28g": { min: 620, max: 650 },
      },
    },
  },
  {
    id: 4,
    name: "Box Profile",
    category: "Box Profiles",
    finish: "Glossy",
    images: ["/images/Box-1.jpeg", "/images/Box-2.webp", "/images/Box-3.jpeg"],
    pricing: {
      unit: "meter",
      factory: {
        "30g": 410,
        "28g": 560,
      },
      retail: {
        "30g": { min: 460, max: 500 },
        "28g": { min: 620, max: 650 },
      },
    },
  },
];
