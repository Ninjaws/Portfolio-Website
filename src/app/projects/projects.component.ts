import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent{
  projects: Project[] = [];

  constructor() {
    this.projects.push({
      title: 'Continuously learning Supplier-identification module',
      year: '2021',
      description:
        'An application that combines key-value detection and multiclass-classification, to identify the correct supplier for an invoice. It uses online machine learning to keep improving itself as the user provides feedback.',
      image: 'Supplier Recognition - Demo2.png',
      technologies: [
        'Angular (Typescript, HTML, CSS)',
        'ASP.NET Core (C#)',
        'MS SQL Server',
        'Python',
        'Machine Learning'
      ],
    });
    this.projects.push({
      title: 'Seabed modification tool',
      year: '2019 - 2020',
      description:
        'A tool to edit the seabed mesh of a maritime simulator. The collisionmap is also updated, to allow ships to interact with this update terrain. \nThis tool allows instructors to rapidly create new terrain, for training shipcrews',
      image: 'Seabed Modification.png',
      technologies: ['Unigine (C#)', 'AGC Dynamics (C++)', 'Qt Creator'],
    });
    this.projects.push({
      title: 'Goal-based vector field pathfinding algorithm',
      year: '2018',
      description:
        'The application uses a vector field to direct particles towards a target. The vectors are calculated using a heatmap, which centers on the position of the target. \nThe particles collide with the environment, which can be edited and saved/loaded using the GUI.',
      image: 'black2.png',//'Particle Flow - Demonstration.png', //"black.png",
      technologies: ['Java', 'Swing', 'IntelliJ'],
    });
    this.projects.push({
      title: 'Jelly Rescue',
      year: '2015',
      description:
        'A platformer written in C++, with saving/loading, tile- and collisionmaps, enemy AI, collectibles and state management to switch between multiple screens (game, menu, victory, etc.)',
      image: 'Jelly Game - demo.png',
      technologies: ['C++', 'SFML2.0', 'Platformer', 'Visual Studio'],
    });
    this.projects.push({
      title: 'Microcontroller Tetris (group project)',
      year: '2019',
      description:
        'Tetris written in C, visualized on dot-matrix displays, with the score visible on a 7-segment display and a menu system visible on the ATMega128.',
      image: 'Setup 3.png',
      technologies: [
        'C',
        'ATmega128',
        '7-segment display',
        'Dot-matrix displays',
      ],
    });
    this.projects.push({
      title: 'Augmented Reality game (group project)',
      year: '2019',
      description:
        'The game uses computer vision to track a red ball, which serves as the controller. I created a system for the rigging and animations for the player character and the opponents. The math for OpenGL has been handwritten.',
      image: 'AR Game.png',
      technologies: ['C++', 'OpenCV', 'OpenGL', 'IrrKlang'],
    });
  }
}
