import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Indrajit Singh',
  subtitle: 'a NLP Researcher',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'My true story:',
  paragraphTwo:
    'I have complete faith in the focus and the energy that drives me to do greater things in life , is my pure intention and love towards executing any task. ',
  paragraphThree:
    ' Instead of just start working on something I keep my faith in creating interest and attention towards doing that',
  resume:
    'https://github.com/Indrajit-AI-Research/NLP_DataScience/blob/master/gatsby-simplefolio/src/documents/NLP_Researcher.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Text-to-Speech',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Question Answering System',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Github Bugs Prediction',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.kaggle.com/indrajitdsc/github-bugs-prediction-using-bert-model', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'indrajitsingh37@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Indrajitsingh3',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/indrajitsinghds/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/IsinghGitHub',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
