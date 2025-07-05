import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  imports: [CommonModule],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard {
  @Input() class = '';
}
