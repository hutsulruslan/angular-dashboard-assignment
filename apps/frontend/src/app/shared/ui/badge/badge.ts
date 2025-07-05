import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  @Input() text!: string;

  @Input() background = 'bg-[#1B2B64]';

  @Input() textColor = 'text-white';

  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  @Input() shape: 'pill' | 'square' = 'pill';

  @Input() class = '';

  get sizeClass(): string {
    switch (this.size) {
      case 'lg':
        return 'text-16 px-12 py-6';
      case 'md':
        return 'text-14 px-10 py-4';
      default:
        return 'text-12 px-8 py-2';
    }
  }

  get shapeClass(): string {
    return this.shape === 'pill' ? 'rounded-full' : 'rounded-md';
  }
}
