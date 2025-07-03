import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-indicator',
  imports: [CommonModule],
  templateUrl: './status-indicator.html',
  styleUrl: './status-indicator.scss',
})
export class StatusIndicator {
  @Input() status!: string;

  get color(): string {
    switch (this.status) {
      case 'New':
        return 'bg-blue-400';
      case 'Pending Review':
        return 'bg-yellow-400';
      case 'Completed':
        return 'bg-green-400';
      default:
        return 'bg-white/40';
    }
  }
}
