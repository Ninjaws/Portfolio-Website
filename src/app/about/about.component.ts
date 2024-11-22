import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IconItem {
  icon: string,
  text: string
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  iconItems: IconItem[] = [];

  constructor() {
    this.iconItems.push({icon: "bi-globe", text: "Dutch, English"});
    this.iconItems.push({icon: "bi-geo-alt-fill", text: "Limburg, The Netherlands"});
    this.iconItems.push({icon: "bi-cake2-fill", text: "28 years old"});
    // this.iconItems.push({icon: "bi-file-person-fill", text: "View my CV"});
  }

  getAge(): number {
    const birthdate: Date = new Date(1995, 11, 15);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }

    return age;
  }

}
