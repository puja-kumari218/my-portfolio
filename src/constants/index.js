import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  devtown,
  divisor,
  dash,
  sail,

  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,

  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Web Content Writer ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Traine",
    company_name: "Divisor",
    icon: divisor,
    iconBg: "#383E56",
    date: "April 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using HTML,CSS,JS and other related technologies.",

    ],
  },
  {
    title: "Vocational Training ",
    company_name: "STEEL AUTHORITY OF INDIA LIMITED- SAIL    ",
    icon: sail,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      " Project Based Training Where Develop an Mobile App.",
      "App Was Based On Women Safety.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Technologies Used: Java, XML.      ",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "DevTown    ",
    icon: devtown,
    iconBg: "#E6DEDD",
    date: "March 2022 - October 2022",
    points: [
      "Developed a responsive static Zomato clone website that consists of multiple pages such as Home, About, Contact, Account, and Cart. By using media queries, the website can be accessible on devices such as mobile, tablet, and desktop.",
      "Developed a Book Keeping API CRUD App where we can perform create, read, update, and delete tasks on Book details, Author details,and Publication details.      ",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Dashboard",
    description:
      "Create a React Admin Dashboard",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "charts",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dash,
    source_code_link: "https://github.com/puja-kumari218/dashboard",
  },

  {
    name: "Countdown Timer",
    description:
      "countdown timer using HTML,SCSS and Javascript,I wiill add a time date countdown using js that will update every second and display the days hours minutes and seconds.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/puja-kumari218/CountDown",
  },
  {
    name: "Booking Website",
    description:
      "Create booking website for Hotel,Cars,Flight.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/puja-kumari218/BookingPage",
  },
];

export { services, technologies, experiences, projects };
