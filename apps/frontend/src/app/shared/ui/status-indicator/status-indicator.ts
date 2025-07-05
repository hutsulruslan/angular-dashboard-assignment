import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-indicator',
  imports: [CommonModule],
  templateUrl: './status-indicator.html',
  styleUrl: './status-indicator.scss',
})
export class StatusIndicator {
  @Input() text!: string;

  @Input() type: 'dot' | 'badge' = 'dot';

  @Input() showText = true;

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() colorMap: Record<string, string> = {
    New: 'bg-blue-400',
    'Pending Review': 'bg-yellow-400',
    Completed: 'bg-green-400',
    HIGH: 'bg-blue-400',
    MEDIUM: 'bg-yellow-400',
    CAUTIOUS: 'bg-red-400',
    Active: 'bg-green-400',
    'Under review': 'bg-blue-400',
    Inactive: 'bg-gray-400',
    'Pending Approval': 'bg-yellow-500',
  };

  @Input() class = '';

  get color(): string {
    return this.colorMap[this.text] ?? 'bg-white/40';
  }

  get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'w-6 h-6 text-12';
      case 'lg':
        return 'w-10 h-10 text-16';
      default:
        return 'w-8 h-8 text-14';
    }
  }
}
