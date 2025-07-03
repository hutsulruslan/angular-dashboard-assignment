import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar-item',
  imports: [CommonModule, RouterModule, FaIconComponent],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  @Input() label!: string;
  @Input() icon!: IconProp;
  @Input() isActive = false;
  @Input() route?: string;
}
