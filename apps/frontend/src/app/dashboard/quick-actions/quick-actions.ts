import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule, UiCard],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions {
  actions = [
    'New Submission',
    'Quote Builder',
    'Risks Models',
    'Documents Upload',
  ];
}
