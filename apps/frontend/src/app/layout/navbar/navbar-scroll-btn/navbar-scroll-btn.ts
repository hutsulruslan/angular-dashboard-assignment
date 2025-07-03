import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar-scroll-btn',
  imports: [CommonModule, FaIconComponent],
  templateUrl: './navbar-scroll-btn.html',
  styleUrl: './navbar-scroll-btn.scss',
})
export class NavbarScrollBtn {
  @Input() direction: 'left' | 'right' = 'right';
  @Input() onClick!: () => void;
}
