import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-compliance',
  imports: [CommonModule, UiCard, FaIconComponent],
  templateUrl: './compliance.html',
  styleUrl: './compliance.scss',
})
export class Compliance {}
