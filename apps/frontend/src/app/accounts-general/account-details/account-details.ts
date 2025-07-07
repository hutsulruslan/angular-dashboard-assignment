import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { Sidebar } from './sidebar/sidebar';
import { WinnabilityOverview } from './winnability-overview/winnability-overview';
import { WinnabilityIncrease } from './winnability-increase/winnability-increase';
import { WinnabilityDecrease } from './winnability-decrease/winnability-decrease';
import { WinnabilityRecommendations } from './winnability-recommendations/winnability-recommendations';

@Component({
  selector: 'app-account-details',
  imports: [
    CommonModule,
    UiCard,
    Sidebar,
    WinnabilityOverview,
    WinnabilityIncrease,
    WinnabilityDecrease,
    WinnabilityRecommendations,
  ],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss',
})
export class AccountDetails {}
