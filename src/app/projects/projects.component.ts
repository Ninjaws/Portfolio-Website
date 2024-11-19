import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string,
  year: number,   
  description: string,
  image: string,
  technologies: string[]
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor() {
    this.projects.push({title:"Jelly Rescue", year: 2015, description: "Rescue Jellies", image:"Jelly Game - demo.png", technologies: ["C++", "SFML2.0", "Visual Studio"]});
    this.projects.push({title:"Microcontroller Tetris", year: 2019, description: "Tetris on a 7-segment display", image:"Setup 3.png", technologies: ["C", "ATmega32", "Visual Studio"]});
    this.projects.push({title:"Goal-based vector field pathfinding algorithm", year: 2018, description: "Particle simulator that can be controlled using the vector-field, and can deal with obstacles", image:"Particle Flow - Demonstration.png", technologies: ["Java", "Swing", "IntelliJ"]});

  }

}
