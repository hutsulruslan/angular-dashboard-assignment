import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { UiCard } from '../../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-winnability-decrease',
  imports: [CommonModule, FaIconComponent, UiCard],
  templateUrl: './winnability-decrease.html',
  styleUrl: './winnability-decrease.scss',
})
export class WinnabilityDecrease {}
