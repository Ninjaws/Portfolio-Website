import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, ContactComponent, ProjectsComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';


  ngAfterViewInit(): void {
    this.observeProjects();
  }

    /** Watches for elements tagged with a fade-in animation when the user scrolls by them */
    observeProjects() {
      let projectItems: any[] = [];
      const ups = document.querySelectorAll('.fade-in-up');
      const lefts = document.querySelectorAll('.fade-in-left'); 
      projectItems = projectItems.concat(ups);
      projectItems = [...ups, ...lefts];  

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-in-up")){
              entry.target.classList.add('fade-in-up-ani');
              entry.target.classList.remove('fade-in-up'); // Tp get rid of the opacity 0, conflicts with the scale animation
            }
            if (entry.target.classList.contains("fade-in-left")){
              entry.target.classList.add('fade-in-left-ani');
              entry.target.classList.remove('fade-in-left'); // Tp get rid of the opacity 0, conflicts with the scale animation
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2,
      });
  
      projectItems.forEach(item => {
        observer.observe(item);
      });
    }
}
