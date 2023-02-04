export const ServiceOfferData: ServiceOfferType[] = [
  {
    image: 'browser-with-star-face.svg',
    title: 'Web Development',
    explanation: `Get ready for a platform that's not just good-looking, 
    but built to last. I'll take your idea from concept to launch, delivering 
    a scalable solution tailored to your business. Say goodbye to clumsy web 
    applications and prepare for a digital experience that will make your 
    users say WOW!`,
  },
  {
    image: 'artist.svg',
    title: 'UX/UI Design',
    explanation: `I'll take your digital dreams and turn them into pixel-perfect 
    realities that not only look good, but feel great too. I'll make sure that 
    every click, tap, and swipe is a delightful experience for your customers.
    Sit back, relax, and let the magic begin!`,
  },
  {
    image: 'robot.svg',
    title: 'IoT Platforms',
    explanation: `Step into the future with my IoT platform expertise! Let's 
    turn your ideas into cutting-edge solutions that connect the physical world 
    to the digital one. Whether you're looking to connect your devices, 
    revolutionize your business, or simply unleash your inner tech-savant, I've 
    got you covered.`,
  },
  {
    image: 'rocket.svg',
    title: 'Rapid Application Development',
    explanation: `With a focus on speed and efficiency, I'll take your ideas 
    and turn them into fully-functional, scalable solutions before you can say 
    "launch day". Perfect for proof of concepts or MVPs, my solutions will help 
    you validate your ideas and get to market faster than you ever thought 
    possible.`,
  },
  {
    image: 'strategy.svg',
    title: 'Digital Products Strategy Consulting',
    explanation: `With over 8 years of experience in the tech industry and a 
    track record of success with digital products across multiple industries, 
    I've got the expertise you need to succeed. If you're looking to 
    launch a new product, reinvigorate an existing one, or simply up your game, 
    I'll help you map out a roadmap for success.`,
  },
];

export type ServiceOfferType = {
  image: string;
  title: string;
  explanation: string;
};
