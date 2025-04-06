import image1 from '../images/image.png';
import image2 from '../images/Image2.png';

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
    category: "Game Development",
    workOn: "Individual",
  },
  // Add more projects as needed
];