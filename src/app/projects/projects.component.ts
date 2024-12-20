import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Project, ProjectCardComponent } from "../project-card/project-card.component";


@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() {
    this.projects.push({
      title: 'Quiz App',
      year: '2024',
      description:
        'A little quiz game, using questions from the Open Trivia Database. This API only allows one request per 5 seconds. ' + 
        '\n\nTo combat this, the app collects the questions in its own database. ' +  
        'To ensure the data stays fresh, it repeats this process regularly, by creating a backup table, and then swapping it with the active one once it is finished.',
      image: 'Quiz.jpeg',
      technologies: [
        'Angular',
        'Tailwind',
        'Spring Boot',
        'Docker',
        'Linux',
        'Nginx',
        'Gitea Workflows'
      ],
      links: [{type: 'source', address: 'https://github.com/Ninjaws/Quiz'}, {type: 'link', address: 'https://quiz.ianvink.nl'}]
    });
    this.projects.push({
      title: 'Mobile-First ERP Solution',
      year: '2021-2024',
      description:
        `This is a comprehensive ERP solution that includes modules for a variety of functions, such as:

          • Declarations (Cost, Time, Travel, Sick Leave, and Holidays)
          • HRM (Employee Management, Contracts)
          • Sales (Relations, Contacts, Leads, Deals, Aftersales)
          • Project Management
          • Administration (Permission and User Management)
            …and much more.
          \nThe entire application is multilingual, and each component is designed to be fully responsive, ensuring a smooth experience on both large and small screens.
          \nThe application undergoes thorough testing, including unit tests, integration tests, and end-to-end tests. Deployments are rolled out in stages to catch potential bugs before going live.`,
      image: 'Classified.png',
      technologies: [
        'Angular',
        'Sass',
        'i18n',
        'Playwright',
        'Java EE',
        'JUnit',
        'PostgreSQL',
        'Linux',
        'Jenkins',
        'Nginx',
        'UML',
        'Scrum',
        'Kanban'
      ],
      links: [],
    });
    this.projects.push({
      title: 'AI Supplier Identification',
      year: '2021',
      description:
        'An application that combines key-value detection and multiclass-classification, to identify the correct supplier for an invoice. It uses online machine learning to keep improving itself as the user provides feedback.',
      image: 'Supplier Recognition.png',
      technologies: [
        'Angular (Typescript, HTML, CSS)',
        'ASP.NET Core (C#)',
        'MS SQL Server',
        'Python',
        'Machine Learning',
      ],
      links: [],
    });
    this.projects.push({
      title: 'Seabed Modification Tool',
      year: '2019-2020',
      description:
        'A tool for editing the seabed mesh in a maritime simulator. The collision map is automatically updated, enabling ships to interact with the modified terrain.'+
        '\n\nThis tool allows instructors to quickly create new environments for the training of ship crews.',
      image: 'Seabed Modification.png',
      technologies: ['Unigine (C#)', 'AGX Dynamics (C++)', 'Qt Creator'],
      links: [],
    });
    this.projects.push({
      title: 'Microcontroller Tetris',
      year: '2019',
      description:
      'Tetris written in C, visualized on dot-matrix displays, with the score visible on a 7-segment display and a menu system visible on the ATMega128.',
      image: 'Microcontroller Tetris.png',
      technologies: [
        'C',
        'ATmega128',
        '7-segment display',
        'Dot-matrix displays',
        'Group project',
      ],
      links: [{type:'source', address: 'https://github.com/Ninjaws/Microcontrollers-Tetris'}, {type:'demo', address:'https://youtu.be/UnNgNyXE9ZY'}]
    });
    this.projects.push({
      title: 'Augmented Reality Game',
      year: '2019',
      description:
      'The game uses computer vision to track a red ball, which serves as the controller. A system has been created for the rigging and animations for the player character and the opponents. The math for OpenGL is written by hand.',
      image: 'AR Game.png',
      technologies: ['C++', 'OpenCV', 'OpenGL', 'IrrKlang', 'Group project'],
      links: [{type:'source', address:'https://github.com/Ninjaws/AR-Applicatie'}, {type:'demo', address: 'https://youtu.be/fHJQNnytocc'}]
    });
    this.projects.push({
      title: 'Flow Field Pathfinding Algorithm',
      year: '2018',
      description:
        'The application uses a vector field to direct particles towards a target. The vectors are calculated using a heatmap, which centers on the position of the target.'+ 
        '\n\nThe particles collide with the environment, which can be edited and saved/loaded using the GUI.',
      image: 'Flow Field Pathfinding Algorithm.png',
      technologies: ['Java', 'Swing', 'IntelliJ'],
      links: [{type:'source', address:'https://github.com/Ninjaws/2D-Computer-Graphics/tree/master/EindOpdracht/Pathfinding'}, {type:'demo', address: 'https://youtu.be/7rvWAWpkYus'}]
    });
    this.projects.push({
      title: 'Jelly Rescue',
      year: '2015',
      description:
        'A platformer written in C++, with saving/loading, tile- and collisionmaps, enemy AI, collectibles and state management to switch between multiple screens (game, menu, victory, etc.)'+
        '\n\nRewritten in 2024 using WebAssembly (Emscripten) and raylib, to make it playable in the browser!',
      image: 'Jelly Game.png',
      technologies: ['C++', 'WebAssembly', 'SFML2.0', 'Platformer', 'Visual Studio', 'Docker'],
      links: [{type:'source', address:'https://github.com/Ninjaws/WebJelly-Rescue'}, {type:'demo', address: 'https://youtu.be/jCUnqbxuySI'}, {type:'link', address: 'https://jelly.ianvink.nl'}]
    });
    // this.projects.push({
    //   title: 'Your dream project here?',
    //   year: '',
    //   description:
    //     '',
    //   image: 'Empty.png',
    //   technologies: [],
    // });
  }
}
