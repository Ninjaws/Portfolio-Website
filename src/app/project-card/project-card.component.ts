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
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkIfTruncated();
    this.cdr.detectChanges(); // Notify Angular of the changes after view initialization
  }

  // Check if the description is being cut off
  checkIfTruncated() {
    const element = this.descriptionElement.nativeElement;
    this.isTruncated = element.scrollHeight > element.offsetHeight;
    console.log(this.isTruncated);
  }

  // Toggle expand/collapse
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.isTruncated = false;
    } else {
      this.isTruncated = true;
    }
    this.cdr.detectChanges(); // Notify Angular of the changes after toggling
  }
  

}
