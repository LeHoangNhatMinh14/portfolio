import image1 from '../images/image.png';
import image2 from '../images/Image2.png';
import image3 from '../images/image3.png'

export const projects = [
  {
    id: 1,
    title: "Office reservation project",
    description: "This is a office reservation project me and my group made for the company Driessen in semester 3",
    technologies: ["React", "Java", "MySQL","Docker"],
    image: image1,
    backEndgithubUrl: "https://github.com/LeHoangNhatMinh14/office-reservation-system",
    category: "Web Application",
    workOn: "Group",
  },
  {
    id: 2,
    title: "Guessing Game project",
    description: "This is a guessing game individual project that I made for semester 3",
    technologies: ["React", "Java", "MySQL","Docker"],
    image: image2,
    backEndgithubUrl: "https://github.com/LeHoangNhatMinh14/guessing-game-semester-3",
    frontEndgithubURL: "https://github.com/LeHoangNhatMinh14/guessing-game-semester-3-fe",
    category: "Web Application",
    workOn: "Individual",
  },
  {
    id: 3,
    title: "Book Review project",
    description: "This is a web application and a desktop application that I made for me second attempt of my 2nd semester",
    technologies: ["C#","Sql Server","ASP.Net"],
    backEndgithubUrl: "https://github.com/LeHoangNhatMinh14/individual-retake",
    category: "Web Application",
    workOn: "Individual",
  },
  {
    id: 4,
    title: "Media Bazaar",
    description: "This is a web application and a desktop application that me and my group made in the second attept of my 2nd semester",
    technologies: ["C#","Sql Server","ASP.Net"],
    backEndgithubUrl: "https://github.com/LeHoangNhatMinh14/media-bazaar-2024",
    category: "Web Application",
    workOn: "Individual",
  },
  {
    id: 5,
    title: "Final Pursuit",
    description: "This is a game where I made in a group of 2 people in semester 4",
    technologies: ["C#","Unity"],
    image: image3,
    backEndgithubUrl: "https://github.com/LeHoangNhatMinh14/FinalPursuit",
    itchIowebGame: "https://lehoangnhatminh14.itch.io/final-pursuit",
    category: "Game",
    workOn: "Individual",
  },
];