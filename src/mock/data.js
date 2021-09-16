import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andrew Truong | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio Site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Andrew Truong',
  subtitle: "I'm a Full Stack Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi! I am a Full Stack Developer based in Houston, TX.  I am currently a Software Developer at BeSmartee where I maintain their web application.  Outside of that, I do freelance projects for those in need of a site for their business or personal use.',
  paragraphTwo:
    'Checkout my work and I would love to get together and discuss how I can help build the best site for you!',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1hkNCu2-6rj6p1T_VdIsyrBYBl0xIRSZM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dentalaccesstexas.jpg',
    title: 'Dental Access Texas',
    info: 'The official website for Dental Access based in Arlington, Texas.',
    info2: 'This web application was built using React.',
    url: 'http://www.dentalaccesstexas.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rockitgear.jpg',
    title: 'Rock It Gear',
    info: 'A personal project of mine. It is an ecommerce site for selling rock climbing gear.',
    info2: 'This web application was made using ASP.net Webforms.',
    url: '',
    repo: 'https://github.com/ComputerScientistAndrew/RockItGear', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mvcmovies.jpg',
    title: 'MVC Movies',
    info: 'Another personal project of mine.  This is an IMDb clone where users can create watchlists for movies they would like to watch.',
    info2: 'This web application was made using ASP.net MVC.',
    url: '',
    repo: 'https://github.com/ComputerScientistAndrew/MvcMovies', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'andrewtruong829@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/computerscientistandrew',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andrew-truong-39088790 ',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ComputerScientistAndrew',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
