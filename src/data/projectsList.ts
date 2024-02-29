import { projectItem } from "./interfaces";
import Furniro from "../assets/images/furniro.png";
import Dashboard from "../assets/images/dashboard.png";
import BistroBliss from "../assets/images/BistroBliss.png";
import WeatherApp from "../assets/images/WeatherApp.png";
// furniro, weather app, bistro bliss, social media dashboard,2048

export const projectsList: projectItem[] = [
  {
    title: "furniro",
    tags: [
      "React.js",
      "React Redux",
      "React Query",
      "SASS",
      "Axios",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "OAuth 2.0",
    ],
    description:
      "A full stack eCommerce app with React for front end and Express.js for back end. Supports functionalities like adding and removing items from cart where all the items are persisted in local storage. Provides various filtering and sorting methods. Supports google sign-in with Auth2.0 as well as manual login. Implements payment gateway for smooth transaction",
    gitLink: "https://github.com/AnshulBh07/Furniro-eCommerce-app",
    liveLink: "https://furniro-e-commerce-app-frontend.vercel.app/",
    imageLink: Furniro,
  },
  {
    title: "dashboard app",
    tags: [
      "React.js",
      "React Redux",
      "TypeScript",
      "SASS",
      "Axios",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    description:
      "A social media dashboard that displays analytics for a single profile. Uses Chart.js v2 to map data to beautiful charts. Provides additional functionality of drafting and scheduling social media posts, while also displaying all the posts from a user. Supports usr authentication",
    gitLink: "",
    liveLink: "",
    imageLink: Dashboard,
  },
  {
    title: "bistro bliss",
    tags: [
      "React.js",
      "React Redux",
      "typeScript",
      "SASS",
      "Axios",
      "MongoDB",
      "Node.js",
      "Express.js",
      "OAuth 2.0",
      "Stripe API",
    ],
    description:
      "Welcome to Bistro Bliss, where culinary excellence meets the joy of dining! This food app is designed to take you on a gastronomic adventure, offering a delightful array of dishes that cater to every palate. This app simulates a tailor made website for a restaurant that offers a wide range of food.",
    gitLink: "",
    liveLink: "",
    imageLink: BistroBliss,
  },
  {
    title: "Weather App",
    tags: [
      "ReactJS",
      "JavaScript",
      "Axios",
      "HTML",
      "Vanilla CSS",
      "RestfulAPI",
    ],
    description:
      "Created a fully responsive weather app in React.js. Fetches the current weather data for a given city using axios from Openweathermap API. Displays weather for given city with dynamic animated icons and background.",
    gitLink:
      "https://github.com/AnshulBh07/Fully-responsive-weather-app-in-React",
    liveLink: "https://borks-responsive-weather-app.netlify.app/",
    imageLink: WeatherApp,
  },
];
