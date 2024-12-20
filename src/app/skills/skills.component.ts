import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Category {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  frontend: Category = { title: 'Frontend', skills: [] };
  backend: Category = { title: 'Backend', skills: [] };
  devOps: Category = { title: 'DevOps', skills: [] };

  categories: Category[] = [];

  constructor() {
    this.frontend.skills.push(
      'Angular',
      'Typescript',
      'Javascript',
      'HTML',
      'CSS/Sass',
      'Tailwind',
      'RxJS',
      'i18n',
      'Playwright',
      'WebAssembly (C++)'
    );
    // 'WebGL/WebGPU',
    this.backend.skills.push(
      'Java',
      'Spring Boot',
      'JUnit',
      'C#',
      'ASP.NET Core',
      'NestJS',
      'GraphQL',
      'Python',
      'Machine Learning',
      'Flask/FastAPI',
      'SQL',
      'PostgreSQL',
      'MS SQL Server'
    );
    this.devOps.skills.push(
      'Docker',
      'CI/CD',
      'Jenkins',
      'Ansible',
      'Git',
      'GitHub/GitLab',
      'Linux',
      'Bash',
      'Nginx',
      'Windows',
      'PowerShell',
      'Wireguard',
    );
    this.categories.push(this.frontend, this.backend, this.devOps);
  }
}
