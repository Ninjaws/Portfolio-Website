import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  links: {address: string, type: 'source' | 'demo' | 'link'}[];
  // source?: string;
  // demo?: string;
  // link?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styles: ``
})
export class ProjectCardComponent {

  @Input() project!: Project; 

  @ViewChild('description') descriptionElement!: ElementRef;
  isExpanded = false;
  isTruncated = false;
  isTextVisible = true;
  fullHeight: string = '13rem';
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkIfTruncated();
    this.cdr.detectChanges(); // Notify Angular of the changes after view initialization
  }

  // Check if the description is being cut off
  checkIfTruncated() {
    const element = this.descriptionElement.nativeElement;
    this.fullHeight = `${this.descriptionElement.nativeElement.scrollHeight}px`;
    console.log(this.fullHeight);
    this.isTruncated = element.scrollHeight > element.offsetHeight;
  }

  // Toggle expand/collapse
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.isTruncated = false;
      this.isTextVisible = false;
      setTimeout(() => {
        this.isTextVisible = true;
      }, 500)
    } else {
      this.isTruncated = true;
    }
    this.cdr.detectChanges(); // Notify Angular of the changes after toggling
  }
  

}
