import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-winnability-overview',
  imports: [CommonModule, UiCard],
  templateUrl: './winnability-overview.html',
  styleUrl: './winnability-overview.scss',
})
export class WinnabilityOverview {}
