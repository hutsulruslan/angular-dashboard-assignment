import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavItem } from './models/nav-item.model';
import { NavbarScrollBtn } from './navbar-scroll-btn/navbar-scroll-btn';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NavbarItemComponent, NavbarScrollBtn],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  showScrollButtons = false;

  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: ['fas', 'house'],
      route: '/dashboard',
      isActive: true,
    },
    {
      label: 'Accounts',
      icon: ['fas', 'database'],
      route: '/accounts',
      isActive: false,
    },
    {
      label: 'Brokers',
      icon: ['fas', 'users'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Submissions',
      icon: ['fas', 'file-import'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Organizations',
      icon: ['fas', 'building'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Goals & Rules',
      icon: ['fas', 'bullseye'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
    {
      label: 'Admin',
      icon: ['fas', 'key'],
      route: '/brokers',
      isActive: false,
    },
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit() {
    this.updateScrollButtonsVisibility();
  }

  updateScrollButtonsVisibility() {
    const el = this.scrollContainer.nativeElement;
    this.showScrollButtons = el.scrollWidth > el.clientWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollButtonsVisibility();
  }
}
