import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertItem } from '../models/account-header-alert';
import { UiCard } from '../../../shared/ui/ui-card/ui-card';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-account-header-alert',
  imports: [CommonModule, UiCard, FaIconComponent],
  templateUrl: './account-header-alert.html',
  styleUrl: './account-header-alert.scss',
})
export class AccountHeaderAlert {
  @Input() alerts: AlertItem[] = [];
}
