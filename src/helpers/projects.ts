import colorSorter from '../public/images/colorSorter.png';
import toDoList from '../public/images/toDoList.png';
import asteroidGame from '../public/images/asteroidGame.png';

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  projectLink: string;
  projectLinkInGithub: string;
};

export const projects: Project[] = [
  {
    title: 'Color Sorter',
    description: 'This is a basic project made using Javascript, css and html. It uses a color sorting algorithm made by Tomek dev',
    imageSrc: colorSorter,
    imageAlt: 'Color Sorter',
    projectLink: 'https://color-sorter.vercel.app/',
    projectLinkInGithub: 'https://github.com/Luyz-Castelo/Color-Sorter',
  },
  {
    title: 'Todo List',
    description: 'A basic Todo List project made using React and Material-ui',
    imageSrc: toDoList,
    imageAlt: 'Todo List',
    projectLink: 'https://todo-list-lemon-eta.vercel.app/',
    projectLinkInGithub: 'https://github.com/Luyz-Castelo/todo-list',
  },
  {
    title: 'Asteroid Game',
    description: 'A game inspired by Space Invaders. Made using the Javascript and the library Phaser3. Made with TalesAmaral and devJcdzn',
    imageSrc: asteroidGame,
    imageAlt: 'Asteroid Game',
    projectLink: 'https://asteroid-game.vercel.app/',
    projectLinkInGithub: 'https://github.com/Luyz-Castelo/Asteroid-Game',
  },
];
