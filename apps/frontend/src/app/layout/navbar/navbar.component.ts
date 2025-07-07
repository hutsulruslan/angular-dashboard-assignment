import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavItem } from './models/nav-item.model';
import { NavbarScrollBtn } from './navbar-scroll-btn/navbar-scroll-btn';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NavbarItemComponent, NavbarScrollBtn],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private http = inject(HttpClient);
  private router = inject(Router);

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  navItems: NavItem[] = [];
  showScrollButtons = false;

  private routeSub!: Subscription;

  ngAfterViewInit() {
    this.listenToRouteChanges();
    this.updateScrollButtonsVisibility();
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  listenToRouteChanges() {
    this.routeSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.loadNavItems());
  }

  loadNavItems() {
    const currentRoute = this.router.url;

    const fileName = currentRoute.startsWith('/accounts')
      ? 'nav-items-accounts.json'
      : 'nav-items-dashboard.json';

    this.http
      .get<NavItem[]>(`mock/navigation/${fileName}`)
      .subscribe((items) => {
        this.navItems = items.map((item) => ({
          ...item,
          isActive: item.route === currentRoute,
        }));
      });
  }

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

  updateScrollButtonsVisibility() {
    const el = this.scrollContainer.nativeElement;
    this.showScrollButtons = el.scrollWidth > el.clientWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollButtonsVisibility();
  }
}
