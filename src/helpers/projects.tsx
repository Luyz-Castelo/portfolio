import colorSorter from '../public/Images/colorSorter.png'

type Project = {
  title: string,
  description: string,
  imageSrc: string,
  imageAlt: string,
  projectLink: string,
}

export const projects: Project[] = [
  {
    title: 'Color Sorter',
    description: 'This is a basic project made using Javascript, css and html. It uses a color sorting algorithm made by Tomek dev',
    imageSrc: colorSorter,
    imageAlt: 'Color Sorter',
    projectLink: 'https://github.com/Luyz-Castelo/Color-Sorter',
  },
];
