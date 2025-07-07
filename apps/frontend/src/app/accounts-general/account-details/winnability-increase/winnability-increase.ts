import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { UiCard } from '../../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-winnability-increase',
  imports: [CommonModule, FaIconComponent, UiCard],
  templateUrl: './winnability-increase.html',
  styleUrl: './winnability-increase.scss',
})
export class WinnabilityIncrease {}
