import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  href: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [];
  isMenuOpen = false;

  constructor() {
    this.menuItems.push({name:"About", href: "#about"});
    this.menuItems.push({name:"Skills", href: "#skills"});
    this.menuItems.push({name:"Projects", href: "#projects"});
    this.menuItems.push({name:"Contact", href: "#contact"});
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
