/* Edit this file to manage the studio, portfolio and pricing. No build required. */
window.VDS = {
  brand: { name: 'VISHAL DESIGN STUDIO', short: 'VDS', owner: 'Vishal', role: 'Graphic Designer', message: 'Creative Designs That Make Your Brand Stand Out.', logo: 'assets/branding/vds-logo-small.webp' },
  contact: { whatsapp: '917358428509', whatsappDisplay: '+91 7358428509', instagram: 'https://www.instagram.com/vishal_designstudio/', instagramHandle: '@vishal_designstudio', email: 'vvishal0507@gmail.com', phone: '+919884847510', phoneDisplay: '+91 9884847510' },
  seo: { title: 'VISHAL DESIGN STUDIO | Website & Graphic Design Services', description: 'Explore premium website designs, posters, social media creatives, and professional graphic design services by VISHAL DESIGN STUDIO. Contact Vishal for your next creative project.', canonicalUrl: '', socialImage: 'assets/branding/vds-logo.png' },
  pricingApproved: false,
  websitePackages: [
    { name: 'Starter Landing Page', price: 4999, description: 'A focused first impression.', features: ['1-page website', 'Modern responsive layout', 'Hero section', 'Service information', 'Contact section', 'WhatsApp enquiry button', 'Basic on-page SEO setup'] },
    { name: 'Business Website', price: 9999, description: 'Room for your business story.', featured: true, features: ['Up to 5 pages', 'Custom visual layout', 'Mobile responsive design', 'Business information sections', 'Contact enquiry functionality', 'Premium user interface'] },
    { name: 'Premium Business Pro', price: 17999, description: 'A more expressive presence.', features: ['Up to 8 pages', 'Advanced custom website design', 'Premium visual presentation', 'Multiple business sections', 'Responsive layouts', 'Contact and enquiry integration'] },
    { name: 'Product Catalogue Website', price: 24999, from: true, description: 'Put your products in the spotlight.', features: ['Product catalogue layouts', 'Product detail pages', 'Category sections', 'Responsive storefront presentation', 'WhatsApp product enquiries'], note: 'Catalogue only. Payment processing, inventory, secure checkout and order management require separate scoping.' }
  ],
  additionalServices: [
    {name: 'Website Redesign', price: 6999, from: true},
    {name: 'Extra Page Design', price: 1000, suffix: ' per page'},
    {name: 'UI Landing Page Design Only', price: 2999, note: 'Design deliverable only; coding and publishing are not included.'},
    {name: 'Monthly Website Maintenance', price: 1999, from: true},
    {name: 'Fast Delivery', note: 'Quoted separately'}
  ],
  graphicServices: [
    {name: 'Poster Design', price: 299, icon: 'poster', description: 'Strong headlines and thoughtful layouts for your next promotion.'},
    {name: 'Social Media Creative', price: 299, icon: 'social', description: 'On-brand visuals that bring your feed and stories together.'},
    {name: 'Advertisement Design', price: 499, icon: 'ad', description: 'Clear, compelling creatives for products and campaigns.'},
    {name: 'YouTube Thumbnail', price: 349, icon: 'play', description: 'Expressive thumbnail designs built around your video.'},
    {name: 'Flyer Design', price: 499, icon: 'flyer', description: 'Beautifully arranged information for events and businesses.'},
    {name: 'Business Card Design', price: 599, icon: 'card', description: 'A considered introduction to you and your brand.'}
  ],
  websites: [
    {id:'creative-agency',name:'Creative Digital Agency',industry:'Creative & Digital',description:'Confident typography, lavender accents and an expressive studio presentation.'},
    {id:'real-estate',name:'Form & Field',industry:'Real Estate',description:'An airy property discovery concept with an understated luxury aesthetic.'},
    {id:'restaurant',name:'Saffron & Sage',industry:'Restaurant / Café',description:'Warm editorial storytelling that celebrates food and the dining experience.'},
    {id:'fashion',name:'ÉLAN Studio',industry:'Fashion / E-Commerce',description:'A refined storefront concept with fashion-led imagery and clean product layouts.'},
    {id:'education',name:'BrightPath',industry:'Education / Coaching Centre',description:'An approachable learning concept with clear course and enquiry sections.'},
    {id:'healthcare',name:'Everwell Family Clinic',industry:'Healthcare / Medical Clinic',description:'A calm blue-and-white concept with a clear, reassuring information hierarchy.'},
    {id:'interior',name:'Atelier Still',industry:'Interior Design / Architecture',description:'An image-led editorial concept for thoughtfully designed spaces.'},
    {id:'beauty-salon',name:'Mira Beauty',industry:'Beauty Salon',description:'Soft blush tones and elegant type for a considered beauty experience.'},
    {id:'technology',name:'Orbitflow',industry:'Technology / SaaS',description:'A crisp workspace concept with clear product storytelling and soft blue details.'},
    {id:'personal-portfolio',name:'Aarav Mehta',industry:'Personal Brand / Portfolio',description:'A warm, personality-led portfolio with expressive editorial typography.'}
  ],
  graphics: [
    {id:'supermarket-weekend',width:1080,height:1080,name:'Weekend, freshly designed.',industry:'Supermarket',category:'Social Media',description:'A vibrant grocery offer concept for an Instagram promotion.'},
    {id:'festival-sale',width:1080,height:1080,name:'A little festive sparkle.',industry:'Festival Offers',category:'Posters',description:'Rich festive colours and bold hierarchy for a retail sale concept.'},
    {id:'salon-new-look',width:1080,height:1080,name:'New look. New you.',industry:'Beauty & Salon',category:'Posters',description:'A warm, luxurious salon promotion with a strong editorial headline.'},
    {id:'education-admissions',width:1080,height:1080,name:'The next chapter starts here.',industry:'Education',category:'Posters',description:'A clear, confident admissions campaign concept.'},
    {id:'restaurant-lunch',width:1080,height:1080,name:'Made for a delicious pause.',industry:'Restaurant & Food',category:'Posters',description:'A richly detailed lunch-combo promotional poster concept.'},
    {id:'fashion-offer',width:1080,height:1350,name:'Style, beautifully presented.',industry:'Fashion',category:'Social Media',description:'An editorial fashion offer concept with warm neutrals and spacious type.'},
    {id:'flying-cheeseburger',width:1264,height:1264,name:'Big flavour. Bold visual.',industry:'Restaurant & Food',category:'Advertisements',description:'A dynamic food visual concept for a product-led campaign.'},
    {id:'real-estate-visual',width:1264,height:1264,name:'A home in its best light.',industry:'Real Estate',category:'Advertisements',description:'A warm architectural visual concept for property presentation.'},
    {id:'fitness-visual',width:1264,height:1264,name:'Strength in every detail.',industry:'Fitness',category:'Advertisements',description:'A dramatic training-space visual concept for a fitness campaign.'},
    {id:'skincare-serum',width:1264,height:1264,name:'A softer kind of glow.',industry:'Skincare',category:'Advertisements',description:'A blush-toned product visual concept for a skincare campaign.'}
  ],
  missingGraphicAssets: ['YouTube Thumbnails', 'Flyers', 'Business Cards'],
  faq: [
    ['What design services do you offer?', 'Website design, posters, social media creatives, advertisements, YouTube thumbnails, flyers and business card design.'],
    ['Can I request a custom website?', 'Yes. Share your business goals, the sections you need and your references. We can discuss a website scope suited to your requirements.'],
    ['Can you design posters and social media creatives?', 'Yes. Share your content, brand details, preferred dimensions and visual references to discuss your design.'],
    ['How can I share my design requirements?', 'Use the enquiry form to prepare a WhatsApp message, or contact Vishal directly through WhatsApp, Instagram, email or phone.'],
    ['How much does a website cost?', 'Explore the website packages below. The listed amounts are proposed prices until confirmed; final pricing depends on your agreed requirements.'],
    ['Can I request a design similar to a portfolio concept?', 'Yes. Use Request Similar Website or Request Similar Design on a portfolio card. We will discuss an original design tailored to your brand.'],
    ['Are domain and hosting charges included?', 'Domain, third-party services, hosting upgrades and maintenance are quoted separately where applicable. Confirm the complete scope before starting.'],
    ['How can I contact VISHAL DESIGN STUDIO?', 'Choose WhatsApp, Instagram, email or phone in the contact section. Vishal will discuss your project with you directly.']
  ]
};
