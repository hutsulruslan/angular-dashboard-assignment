import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-account-status',
  imports: [CommonModule, UiCard, FaIconComponent],
  templateUrl: './account-status.html',
  styleUrl: './account-status.scss',
})
export class AccountStatus {}
