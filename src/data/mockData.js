export const categories = [
  { id: 'sherwani', name: 'Sherwani', image: '/images/sherwani-1.jpg' },
  { id: 'prince-coat', name: 'Prince Coat', image: '/images/prince-coat-1.jpg' },
  { id: 'waistcoat', name: 'Waistcoat', image: '/images/waistcoat-1.jpg' },
  { id: 'suit', name: 'Suit', image: '/images/suit-1.jpg' },
  { id: 'tuxedo', name: 'Tuxedo', image: '/images/tuxedo-1.jpg' },
  { id: 'safari-jacket', name: 'Safari Jacket', image: '/images/suit-2.jpg' },
  { id: 'lehenga', name: 'Lehenga', image: '/images/sherwani-2.jpg' },
  { id: 'bridal-maxi', name: 'Bridal Maxi', image: '/images/suit-2.jpg' },
  { id: 'formal-gown', name: 'Formal Gown', image: '/images/prince-coat-2.jpg' },
  { id: 'shalwar-kameez', name: 'Shalwar Kameez', image: '/images/sherwani-2.jpg' },
  { id: 'luxury-pret', name: 'Luxury Pret', image: '/images/suit-2.jpg' },
  { id: 'coords', name: 'Co-ord Sets', image: '/images/waistcoat-1.jpg' },
];

export const occasions = [
  { id: 'all', name: 'All' },
  { id: 'nikkah', name: 'Nikkah' },
  { id: 'barat', name: 'Barat' },
  { id: 'walima', name: 'Walima' },
  { id: 'bridal', name: 'Bridal' },
  { id: 'grooms-party', name: "Wedding Party" },
  { id: 'guest-wear', name: 'Guest Wear' },
  { id: 'formal-wear', name: 'Formal Wear' },
  { id: 'everyday-wear', name: 'Everyday Wear' },
];

export const products = [
  {
    id: 'g101',
    name: 'Bespoke Royal Sherwani',
    category: 'sherwani',
    occasions: ['barat', 'nikkah'],
    images: ['/images/sherwani-1.jpg', '/images/sherwani-2.jpg'],
    description: 'Hand-embroidered heavy jacquard sherwani cut for groom attire. Designed for presence and comfort during long ceremony hours.',
  },
  {
    id: 'g102',
    name: 'Classic Velvet Prince Coat',
    category: 'prince-coat',
    occasions: ['walima', 'nikkah', 'grooms-party'],
    images: ['/images/prince-coat-1.jpg', '/images/prince-coat-2.jpg'],
    description: 'Rich velvet prince coat with custom brass buttons and structured shoulder pads, hand-finished in our Rawalpindi shop.',
  },
  {
    id: 'g103',
    name: 'Hand-Stitched Silk Waistcoat',
    category: 'waistcoat',
    occasions: ['nikkah', 'guest-wear', 'grooms-party'],
    images: ['/images/waistcoat-1.jpg'],
    description: 'Raw silk tailored waistcoat with welt pockets and custom lining.',
  },
  {
    id: 'g104',
    name: 'Two-Piece Italian Wool Suit',
    category: 'suit',
    occasions: ['walima', 'guest-wear'],
    images: ['/images/suit-1.jpg', '/images/suit-2.jpg'],
    description: 'Precision-cut two-piece suit crafted from lightweight tropical wool for year-round wear.',
  },
  {
    id: 'g105',
    name: 'Bespoke Satin Lapel Tuxedo',
    category: 'tuxedo',
    occasions: ['walima', 'guest-wear'],
    images: ['/images/tuxedo-1.jpg', '/images/tuxedo-2.jpg'],
    description: 'Formal black-tie tuxedo with silk satin shawl collar and jetted pockets.',
  },
  {
    id: 'w101',
    name: 'Heavy Zardozi Bridal Lehenga',
    category: 'lehenga',
    occasions: ['barat', 'bridal'],
    images: ['/images/sherwani-2.jpg', '/images/sherwani-1.jpg'],
    description: 'Intricately hand-worked bridal lehenga featuring traditional zardozi, dabka, and crystal embellishments.',
  },
  {
    id: 'w102',
    name: 'Organza Walima Maxi',
    category: 'bridal-maxi',
    occasions: ['walima', 'bridal'],
    images: ['/images/suit-2.jpg', '/images/suit-1.jpg'],
    description: 'Flowing pure organza maxi gown with silver wirework and a tailored silhouette.',
  },
  {
    id: 'w103',
    name: 'Embroidered Formal Gown',
    category: 'formal-gown',
    occasions: ['wedding-party', 'guest-wear'],
    images: ['/images/prince-coat-2.jpg', '/images/prince-coat-1.jpg'],
    description: 'Elegant formal gown custom-draped and fitted to your exact measurements.',
  },
  {
    id: 'g106',
    name: 'Barat Groom Jacquard Sherwani',
    category: 'sherwani',
    occasions: ['barat'],
    images: ['/images/sherwani-2.jpg', '/images/sherwani-1.jpg'],
    description: 'Heavy zardozi embroidered maroon sherwani with matching inner kurta.',
  },
  {
    id: 'g107',
    name: 'Modern Cut Safari Jacket',
    category: 'safari-jacket',
    occasions: ['guest-wear'],
    images: ['/images/suit-2.jpg'],
    description: 'Structured safari jacket featuring four box-pleat pockets and waist belt.',
  },
  {
    id: 'g108',
    name: 'Festive Cotton Silk Shalwar Kameez',
    category: 'shalwar-kameez',
    occasions: ['nikkah', 'grooms-party', 'guest-wear'],
    images: ['/images/sherwani-1.jpg'],
    description: 'Traditional heavy cotton-silk suit with cuff sleeves and band collar.',
  },
  {
    id: 'w104',
    name: 'Silk Co-ord Set',
    category: 'coords',
    occasions: ['everyday-wear', 'guest-wear'],
    images: ['/images/waistcoat-1.jpg'],
    description: 'Chic raw silk matching separates, cut with precision for an effortless everyday drape.',
  },
  {
    id: 'w105',
    name: 'Hand-worked Luxury Pret Kameez',
    category: 'luxury-pret',
    occasions: ['formal-wear', 'guest-wear'],
    images: ['/images/suit-2.jpg'],
    description: 'Boutique luxury pret wear with delicate hand-embroidery over breathable premium fabric.',
  },
  {
    id: 'g114',
    name: 'Everyday Cotton Shalwar Kameez',
    category: 'shalwar-kameez',
    occasions: ['everyday-wear'],
    images: ['/images/sherwani-2.jpg'],
    description: 'Classic cotton shalwar kameez tailored for maximum comfort and durability for daily wear.',
  }
];

export const customizationOptions = {
  fabric: [
    { id: 'f-jacquard', name: 'Royal Jacquard', price: 0, image: '/images/sherwani-1.jpg' },
    { id: 'f-velvet', name: 'Micro Velvet', price: 0, image: '/images/prince-coat-1.jpg' },
    { id: 'f-tropical', name: 'Tropical Wool', price: 0, image: '/images/suit-1.jpg' },
    { id: 'f-silk', name: 'Raw Silk', price: 0, image: '/images/waistcoat-1.jpg' },
  ],
  color: [
    { id: 'c-maroon', name: 'Zari Maroon', hex: '#7A1F2B' },
    { id: 'c-green', name: 'Bottle Green', hex: '#1F3D2B' },
    { id: 'c-charcoal', name: 'Charcoal Thread', hex: '#2A211C' },
    { id: 'c-ivory', name: 'Ivory Chalk', hex: '#F7F4EC' },
    { id: 'c-brass', name: 'Matte Brass', hex: '#B08D57' },
  ],
  neckline: [
    { id: 'n-mandarin', name: 'Mandarin Band Collar', price: 0 },
    { id: 'n-peak', name: 'Peak Lapel', price: 0 },
    { id: 'n-notch', name: 'Notch Lapel', price: 0 },
    { id: 'n-shawl', name: 'Satin Shawl Collar', price: 0 },
  ],
  sleeves: [
    { id: 's-tailored', name: 'Tailored Fitted Sleeves', price: 0 },
    { id: 's-cuff', name: 'Buttoned Cuff Sleeves', price: 0 },
    { id: 's-straight', name: 'Straight Vent Sleeves', price: 0 },
  ],
  length: [
    { id: 'l-brass', name: 'Matte Brass Pins & Buttons', price: 0 },
    { id: 'l-fabric', name: 'Fabric Covered Buttons', price: 0 },
    { id: 'l-bone', name: 'Horn / Bone Buttons', price: 0 },
  ],
  trouser: [
    { id: 't-churidar', name: 'Churidar Pajama', price: 0 },
    { id: 't-trouser', name: 'Straight Cut Trousers', price: 0 },
    { id: 't-shalwar', name: 'Traditional Shalwar', price: 0 },
  ]
};

// DEMO PLACEHOLDER — Confirm real starting prices with client
export const startingPrices = [
  { garment: 'Sherwani (Hand Embroidered)', price: 'Starting from Rs. 45,000' },
  { garment: 'Prince Coat', price: 'Starting from Rs. 28,000' },
  { garment: 'Two-Piece Suit', price: 'Starting from Rs. 24,000' },
  { garment: 'Three-Piece Suit', price: 'Starting from Rs. 32,000' },
  { garment: 'Waistcoat', price: 'Starting from Rs. 12,000' },
  { garment: 'Tuxedo', price: 'Starting from Rs. 30,000' },
  { garment: 'Safari Jacket', price: 'Starting from Rs. 18,000' },
  { garment: 'Shalwar Kameez Suit', price: 'Starting from Rs. 9,500' },
];

export const recentWork = [
  {
    id: 'rw1',
    title: 'Bottle green prince coat',
    category: 'prince-coat',
    caption: 'Bottle green prince coat, hand-finished lapel, Barat order — 2025.',
    image: '/images/prince-coat-1.jpg'
  },
  {
    id: 'rw2',
    title: 'Zari maroon sherwani',
    category: 'sherwani',
    caption: 'Zardozi hand-embroidery on deep maroon jacquard sherwani, fitted in-shop for Nikkah.',
    image: '/images/sherwani-1.jpg'
  },
  {
    id: 'rw3',
    title: 'Charcoal 2-piece wool suit',
    category: 'suit',
    caption: 'Italian tropical wool suit with ticket pocket detailing, twin vents.',
    image: '/images/suit-1.jpg'
  },
  {
    id: 'rw4',
    title: 'Raw silk waistcoat set',
    category: 'waistcoat',
    caption: 'Matching waistcoats for groom and 4 brothers — Commercial Market workshop.',
    image: '/images/waistcoat-1.jpg'
  },
  {
    id: 'rw5',
    title: 'Black satin shawl tuxedo',
    category: 'tuxedo',
    caption: 'Classic evening tuxedo with silk facing on lapel and trousers line.',
    image: '/images/tuxedo-1.jpg'
  },
  {
    id: 'rw6',
    title: 'Ivory Nikkah sherwani',
    category: 'sherwani',
    caption: 'Pure silk ivory sherwani with antique brass button closure.',
    image: '/images/sherwani-2.jpg'
  }
];

export const videoItems = [
  {
    id: 'v1',
    title: 'Stitching hand-piped lapels on velvet prince coat',
    caption: 'Watch the needle precision on micro-velvet fabric. Cutting table footage.',
    thumbnail: '/images/prince-coat-2.jpg',
    videoUrl: '/images/video-1.mp4'
  },
  {
    id: 'v2',
    title: 'Chalk marking pattern paper for custom sherwani chest cut',
    caption: 'Every garment starts with master tailor chalk lines directly on heavy kraft paper.',
    thumbnail: '/images/sherwani-1.jpg',
    videoUrl: '/images/video-1.mp4'
  },
  {
    id: 'v3',
    title: 'Final canvas chest piece assembly & iron press',
    caption: 'Full canvas structure ensures the jacket retains its chest roll for years.',
    thumbnail: '/images/suit-2.jpg',
    videoUrl: '/images/video-1.mp4'
  }
];

export const faqs = [
  {
    q: 'How far in advance should I book before my wedding date?',
    a: 'We recommend booking 3 to 4 weeks before your event date. During peak wedding season (November through February), we advise booking 6 weeks early to ensure dedicated fitting slots.'
  },
  {
    q: 'Do I need to pay an advance to confirm my order?',
    a: 'Yes, a 50% advance deposit confirms your order and reserves workshop cutting time. The remaining balance is paid upon final fitting and collection at our Rawalpindi shop.'
  },
  {
    q: 'Can I bring my own fabric for stitching?',
    a: 'Absolutely. You are welcome to bring your own fabric. Our master tailors will inspect the weave and weight during your fitting to ensure it suits the chosen garment cut.'
  },
  {
    q: 'Do you make outfits for the whole groom’s party?',
    a: 'Yes! We specialize in coordinating outfits for groomsmen, brothers, and fathers. You can use our "Group Order" form to submit everyone’s details together.'
  },
  {
    q: 'What if I cannot come to Rawalpindi for an in-person fitting?',
    a: 'While in-person fitting at Commercial Market is strongly recommended for the best fit, we offer guided self-measurement video tutorials. Our tailor will double-check every figure over WhatsApp before cutting.'
  },
  {
    q: 'What happens if something doesn’t fit after the first fitting?',
    a: 'First fittings are designed specifically to catch minor adjustments. We alter seams in-house at no extra cost until the garment drapes perfectly on your body.'
  }
];

export const fabricArticles = [
  {
    id: 'art1',
    title: 'Understanding Jacquard vs. Plain Weaves for Sherwanis',
    teaser: 'Jacquard weaves feature patterns woven directly into the fabric matrix rather than printed. Here is why it matters for structured wedding sherwanis.',
    body: 'For wedding sherwanis, weight and body are paramount. Plain silks can drape too loosely without heavy interfacing. Jacquard weaves, woven with gold or maroon threads, provide structural memory that holds crisp shoulder lines and clean front plackets throughout a 6-hour event.'
  },
  {
    id: 'art2',
    title: 'The Real Difference Between a Tuxedo and a Formal Suit',
    teaser: 'It is not just about the color black. The key distinction lies in satin facing on lapels, buttons, and trouser pocket trims.',
    body: 'A tuxedo features satin trim on the lapels, buttons, and along the outer trouser seam. Suits use matching coat fabric throughout. For evening Walima receptions, a subtle satin shawl lapel adds distinct elegance under hall lighting.'
  },
  {
    id: 'art3',
    title: 'Why Full Canvas Construction Outlasts Fused Jackets',
    teaser: 'Fused jackets use glue to stick interfacing to outer fabric; full canvas uses floating horsehair canvas stitched by hand.',
    body: 'Glue in fused suits degrades with dry cleaning and humidity, causing bubbling across the chest. Full canvas construction lets the fabric breathe and gradually mold to the wearer’s body shape over time.'
  }
];

// DEMO PLACEHOLDER — Replace with real Google Business embed once active
export const reviews = [
  {
    id: 'r1',
    author: 'Hamza Malik',
    rating: 5,
    date: '1 month ago',
    text: 'Got my Barat sherwani stitched here — fit was perfect on the first try. Booked 3 weeks ahead in Commercial Market, zero hassle. Highly recommended master craftsmanship.'
  },
  {
    id: 'r2',
    author: 'Tariq Abbasi',
    rating: 5,
    date: '2 months ago',
    text: 'Ordered 5 matching waistcoats for my groom party. The chalk-line fitting process showed true dedication. Fabrics and stitching quality are top tier.'
  },
  {
    id: 'r3',
    author: 'Usman Ali Khan',
    rating: 5,
    date: '3 months ago',
    text: 'Best bespoke tailor in Rawalpindi. The velvet prince coat was praised by everyone at my Walima. Will definitely return.'
  },
  {
    id: 'r4',
    author: 'Shahzaib Raza',
    rating: 5,
    date: '4 months ago',
    text: 'Brought my own tropical wool fabric for a 2-piece suit. Master tailor measured me accurately and delivered in exactly 20 days.'
  }
];
