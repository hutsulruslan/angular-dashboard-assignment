import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { UiCard } from '../../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-winnability-recommendations',
  imports: [CommonModule, FaIconComponent, UiCard],
  templateUrl: './winnability-recommendations.html',
  styleUrl: './winnability-recommendations.scss',
})
export class WinnabilityRecommendations {}
