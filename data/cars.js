// =====================================================
// FLEET — cars, categories aur rates yahan se badlein
// Prices AED mein, per day.
//
// Har car: engine, doors, accel (0-100 seconds), drive, fuel, luggage (bags)
// focus: (optional) photo ka kaun sa hissa dikhe, jaise focus: "center bottom"
// gallery: detail page ki extra photos. Asli photos mile to yahan daalein,
// jaise gallery: ["/cars/g63-front.jpg", "/cars/g63-inside.jpg"]
//
// PHOTOS: Unsplash se free (commercial use allowed) photos hain.
// Ye "representative" photos hain, exact gaari ki nahi.
// Client ki asli photo mile to "public/cars/" mein daal kar
// image: "/cars/naam.jpg" likh dein.
// =====================================================

// Unsplash photo ka link banata hai (size ke saath)
export const photo = (id, w = 900) =>
  id.startsWith("/") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const categories = [
  { name: "Sports", image: "photo-1675426513824-25a43c3ae0ba", text: "Track-bred power for the open road" },
  { name: "Exotic", image: "photo-1612825173281-9a193378527e", text: "Rare supercars that turn every head" },
  { name: "Luxury", image: "photo-1740098160485-d098fbf42814", text: "First-class comfort for special days" },
  { name: "SUV", image: "photo-1648413653819-7c0fd93e8e6a", text: "Space and presence for every trip" },
  { name: "Convertible", image: "photo-1611900713725-864f48309d67", text: "Roof down, Dubai sunshine in" },
  { name: "Economy", image: "photo-1734554381974-56e06a32453c", text: "Smart, stylish and budget friendly" },
];

export const cars = [
  // ---------- SPORTS ----------
  { id: "ferrari-sf90", name: "Ferrari SF90 Stradale", brand: "Ferrari", category: "Sports", seats: 2, daily: 3999, image: "photo-1675426513824-25a43c3ae0ba", featured: true, engine: "4.0L twin-turbo V8 hybrid", doors: 2, accel: "2.5", drive: "AWD", fuel: "Hybrid", luggage: 1, gallery: ["photo-1675426513962-1db7e4c707c3", "photo-1714045220139-ea1991039054"] },
  { id: "mclaren-artura", name: "McLaren Artura", brand: "McLaren", category: "Sports", seats: 2, daily: 1999, image: "photo-1698879789886-5e8a29d453c9", featured: true, engine: "3.0L twin-turbo V6 hybrid", doors: 2, accel: "3.0", drive: "RWD", fuel: "Hybrid", luggage: 1, gallery: ["photo-1693934566114-3ddcc2dfc759", "photo-1745736215025-d8dd0d9b771e"] },
  { id: "lamborghini-huracan-tecnica", name: "Lamborghini Huracán Tecnica", brand: "Lamborghini", category: "Sports", seats: 2, daily: 2499, image: "photo-1617650728468-8581e439c864", engine: "5.2L V10", doors: 2, accel: "3.2", drive: "RWD", fuel: "Petrol", luggage: 1, gallery: [] },
  { id: "lamborghini-huracan-evo", name: "Lamborghini Huracán EVO", brand: "Lamborghini", category: "Sports", seats: 2, daily: 2499, image: "photo-1523630098575-9ddbebd3e6f3", engine: "5.2L V10", doors: 2, accel: "2.9", drive: "AWD", fuel: "Petrol", luggage: 1, gallery: [] },
  { id: "porsche-gt3-rs", name: "Porsche 911 GT3 RS", brand: "Porsche", category: "Sports", seats: 2, daily: 3499, image: "photo-1634673970798-a15ae56f6c65", engine: "4.0L flat-6", doors: 2, accel: "3.2", drive: "RWD", fuel: "Petrol", luggage: 1, gallery: [] },
  { id: "porsche-gt3", name: "Porsche 911 GT3", brand: "Porsche", category: "Sports", seats: 2, daily: 2799, image: "photo-1614162692292-7ac56d7f7f1e", engine: "4.0L flat-6", doors: 2, accel: "3.4", drive: "RWD", fuel: "Petrol", luggage: 1, gallery: ["photo-1613921568536-555645be4032"] },
  { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", brand: "Lamborghini", category: "Sports", seats: 2, daily: 8999, image: "photo-1519245659620-e859806a8d3b", engine: "6.5L V12 hybrid", doors: 2, accel: "2.5", drive: "AWD", fuel: "Hybrid", luggage: 1, gallery: [] },

  // ---------- EXOTIC ----------
  { id: "lamborghini-huracan-sto", name: "Lamborghini Huracán STO", brand: "Lamborghini", category: "Exotic", seats: 2, daily: 2799, image: "photo-1707399720709-cd14e30d5e3a", featured: true, engine: "5.2L V10", doors: 2, accel: "3.0", drive: "RWD", fuel: "Petrol", luggage: 1, gallery: [] },
  { id: "ferrari-296-gtb", name: "Ferrari 296 GTB", brand: "Ferrari", category: "Exotic", seats: 2, daily: 2699, image: "photo-1721139430306-a13f8a6a6d5a", engine: "3.0L twin-turbo V6 hybrid", doors: 2, accel: "2.9", drive: "RWD", fuel: "Hybrid", luggage: 1, gallery: ["photo-1719990915046-7c79133ec8d2"] },
  { id: "ferrari-roma-spider", name: "Ferrari Roma Spider", brand: "Ferrari", category: "Exotic", seats: 4, daily: 2699, image: "photo-1666790995628-9b55f65cdeeb", engine: "3.9L twin-turbo V8", doors: 2, accel: "3.4", drive: "RWD", fuel: "Petrol", luggage: 2, gallery: [] },
  { id: "lamborghini-aventador-svj", name: "Lamborghini Aventador SVJ Roadster", brand: "Lamborghini", category: "Exotic", seats: 2, daily: 9999, image: "photo-1612825173281-9a193378527e", engine: "6.5L V12", doors: 2, accel: "2.9", drive: "AWD", fuel: "Petrol", luggage: 1, gallery: ["photo-1600858886605-78428bb6e236"] },

  // ---------- LUXURY ----------
  { id: "rolls-royce-cullinan", name: "Rolls-Royce Cullinan", brand: "Rolls-Royce", category: "Luxury", seats: 5, daily: 2799, image: "photo-1687634366100-547fd24324f1", featured: true, engine: "6.75L twin-turbo V12", doors: 4, accel: "5.2", drive: "AWD", fuel: "Petrol", luggage: 4, gallery: [] },
  { id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", brand: "Rolls-Royce", category: "Luxury", seats: 5, daily: 3499, image: "photo-1740098160485-d098fbf42814", engine: "6.75L twin-turbo V12", doors: 4, accel: "5.4", drive: "RWD", fuel: "Petrol", luggage: 3, gallery: [] },
  { id: "rolls-royce-spectre", name: "Rolls-Royce Spectre", brand: "Rolls-Royce", category: "Luxury", seats: 4, daily: 4999, image: "photo-1631295868223-63265b40d9e4", engine: "Dual electric motors", doors: 2, accel: "4.5", drive: "AWD", fuel: "Electric", luggage: 2, gallery: [] },
  { id: "bentley-continental-gt", name: "Bentley Continental GT", brand: "Bentley", category: "Luxury", seats: 4, daily: 1999, image: "photo-1749215530415-6a4cd6b31141", engine: "4.0L twin-turbo V8", doors: 2, accel: "4.0", drive: "AWD", fuel: "Petrol", luggage: 2, gallery: ["photo-1749215530386-e011171450df"] },
  { id: "bmw-750li", name: "BMW 750Li", brand: "BMW", category: "Luxury", seats: 5, daily: 1099, image: "photo-1523983388277-336a66bf9bcd", engine: "4.4L twin-turbo V8", doors: 4, accel: "4.3", drive: "AWD", fuel: "Petrol", luggage: 3, gallery: [] },

  // ---------- SUV ----------
  { id: "mercedes-g63", name: "Mercedes-AMG G63", brand: "Mercedes", category: "SUV", seats: 5, daily: 1299, image: "photo-1648413653819-7c0fd93e8e6a", featured: true, engine: "4.0L twin-turbo V8", doors: 4, accel: "4.5", drive: "AWD", fuel: "Petrol", luggage: 4, gallery: ["photo-1648413653877-ade5eefd2f1b", "photo-1634636208509-63bcd2a1b13f"] },
  { id: "lamborghini-urus-s", name: "Lamborghini Urus S", brand: "Lamborghini", category: "SUV", seats: 5, daily: 2299, image: "photo-1748189285388-c8852b6a7ed6", featured: true, engine: "4.0L twin-turbo V8", doors: 4, accel: "3.5", drive: "AWD", fuel: "Petrol", luggage: 4, gallery: [] },
  { id: "range-rover-vogue", name: "Range Rover Vogue", brand: "Land Rover", category: "SUV", seats: 5, daily: 999, image: "photo-1563458563737-e60b1f1b345f", engine: "3.0L 6-cylinder", doors: 4, accel: "6.1", drive: "AWD", fuel: "Petrol", luggage: 4, gallery: ["photo-1740695600568-a7e54e7d3614", "photo-1767274592417-c986b7619c8c"] },
  { id: "land-rover-defender", name: "Land Rover Defender", brand: "Land Rover", category: "SUV", seats: 5, daily: 699, image: "photo-1741905358565-5ae6835ac172", engine: "3.0L 6-cylinder", doors: 4, accel: "6.1", drive: "AWD", fuel: "Petrol", luggage: 4, gallery: [] },

  // ---------- CONVERTIBLE ----------
  { id: "lamborghini-huracan-evo-spyder", name: "Lamborghini Huracán EVO Spyder", brand: "Lamborghini", category: "Convertible", seats: 2, daily: 2499, image: "photo-1611900713725-864f48309d67", engine: "5.2L V10", doors: 2, accel: "3.1", drive: "AWD", fuel: "Petrol", luggage: 1, gallery: [] },
  { id: "porsche-911-carrera-4s-cabriolet", name: "Porsche 911 Carrera 4S Cabriolet", brand: "Porsche", category: "Convertible", seats: 4, daily: 1799, image: "photo-1609679605571-4323e084c314", engine: "3.0L twin-turbo flat-6", doors: 2, accel: "3.8", drive: "AWD", fuel: "Petrol", luggage: 2, gallery: [] },
  { id: "bmw-420i-convertible", name: "BMW 420i Convertible", brand: "BMW", category: "Convertible", seats: 4, daily: 449, image: "photo-1689041570859-add702b5f134", engine: "2.0L 4-cylinder turbo", doors: 2, accel: "8.2", drive: "RWD", fuel: "Petrol", luggage: 2, gallery: [] },

  // ---------- ECONOMY ----------
  { id: "audi-a3", name: "Audi A3", brand: "Audi", category: "Economy", seats: 5, daily: 199, image: "photo-1717711081688-985a7a3e6a9f", engine: "1.4L 4-cylinder turbo", doors: 4, accel: "8.4", drive: "FWD", fuel: "Petrol", luggage: 2, gallery: [] },
  { id: "bmw-318i", name: "BMW 318i", brand: "BMW", category: "Economy", seats: 5, daily: 249, image: "photo-1734554381974-56e06a32453c", engine: "2.0L 4-cylinder turbo", doors: 4, accel: "8.4", drive: "RWD", fuel: "Petrol", luggage: 2, gallery: [] },
  { id: "mercedes-a200", name: "Mercedes-Benz A 200", brand: "Mercedes", category: "Economy", seats: 5, daily: 249, image: "photo-1609703048009-d3576872b32c", engine: "1.3L 4-cylinder turbo", doors: 4, accel: "8.2", drive: "FWD", fuel: "Petrol", luggage: 2, gallery: [] },
];

// =====================================================
// BRANDS — home page ki patti aur header ka "Car Brands" menu
// Logo lagane ke liye: logo file "public/brands/" folder mein daalein
// (jaise ferrari.png) aur yahan logo: "/brands/ferrari.png" likh dein.
// Jab tak logo nahi, pehla harf (gold badge) dikhe ga.
// "name" wohi hona chahiye jo upar cars mein "brand" likha hai.
// =====================================================
export const brands = [
  { name: "Ferrari", logo: "/brands/ferrari.png" },
  { name: "Lamborghini", logo: "/brands/lamborghini.png" },
  { name: "McLaren", logo: "/brands/mclaren.png" },
  { name: "Rolls-Royce", logo: "/brands/rolls-royce.png" },
  { name: "Porsche", logo: "/brands/porsche.png" },
  { name: "Mercedes", logo: "/brands/mercedes.png" },
  { name: "Land Rover", logo: "/brands/land-rover.png" },
  { name: "Bentley", logo: "/brands/bentley.png" },
  { name: "BMW", logo: "/brands/bmw.png" },
  { name: "Audi", logo: "/brands/audi.png" },
];

export const getCar = (id) => cars.find((c) => c.id === id);
