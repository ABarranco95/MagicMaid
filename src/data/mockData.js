import StandardImage from '../assets/Standard.jpg';
import DeepImage from '../assets/Deep.jpg';
import MovingImage from '../assets/Moving.jpg';

const servicesData = [
  {
    title: 'Standard Cleaning',
    description: 'Our standard cleaning service covers all the essential areas of your home to maintain a tidy and healthy environment. This includes dusting, vacuuming, mopping, bathroom sanitation, and kitchen cleaning.',
    imageUrl: StandardImage,
  },
  {
    title: 'Deep Cleaning',
    description: 'Our deep cleaning service provides a comprehensive and detailed clean, reaching every corner and crevice of your home. This service is perfect for homes that need a little extra attention and care.',
    imageUrl: DeepImage,
  },
  {
    title: 'Move-in/Move-out Cleaning',
    description: 'Our move-in/move-out cleaning service ensures that your new home is spotless before you move in, or your old home is left in perfect condition for the next residents. We take care of everything, from deep cleaning carpets to scrubbing kitchen appliances.',
    imageUrl: MovingImage,
  },
];



const testimonialsData = [
  {
    quote: "Magic Maid did an amazing job cleaning my house! The team was friendly and professional, and the results were fantastic.",
    author: "James Rodriguez",
    location: "Clovis, CA",
    rating: 5,
    stars: 5,
  },
  {
    quote: "I've been using Magic Maid for over a year now and they always do a great job. The cleaners are thorough and efficient, and the customer service is top-notch.",
    author: "Sarah Johnson",
    location: "Madera, CA",
    rating: 5,
    stars: 5,
  },
  {
    quote: "Magic Maid provides excellent service at a reasonable price. I highly recommend them for anyone looking for a reliable cleaning service.",
    author: "Maria Hernandez",
    location: "Fresno, CA",
    rating: 5,
    stars: 5,
  },
  // Add more testimonials here
];



export { servicesData, testimonialsData };
