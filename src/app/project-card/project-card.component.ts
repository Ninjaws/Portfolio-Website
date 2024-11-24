import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  links: { address: string; type: 'source' | 'demo' | 'link' }[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styles: ``,
})
export class ProjectCardComponent {
  @Input() project!: Project;

  @ViewChild('description') descriptionElement!: ElementRef;
  isTruncated = false;
  isExpanded = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkIfTruncated();
    this.cdr.detectChanges();
  }

  checkIfTruncated() {
    const element = this.descriptionElement.nativeElement;
    this.isTruncated = element.scrollHeight > element.offsetHeight;
  }

  getTextHeight() {
    return `${this.descriptionElement.nativeElement.scrollHeight}px`;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.isTruncated = false;
    } else {
      this.isTruncated = true;
    }
    this.cdr.detectChanges();
  }
}
