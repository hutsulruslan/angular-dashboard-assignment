import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-portfolio-goals',
  imports: [CommonModule, UiCard],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {}
