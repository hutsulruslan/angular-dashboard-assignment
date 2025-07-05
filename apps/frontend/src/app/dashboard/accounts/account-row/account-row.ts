import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModel } from '../models/account.model';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { StatusIndicator } from '../../../shared/ui/status-indicator/status-indicator';
import { Badge } from '../../../shared/ui/badge/badge';

@Component({
  selector: 'app-account-row',
  imports: [CommonModule, FaIconComponent, StatusIndicator, Badge],
  templateUrl: './account-row.html',
  styleUrl: './account-row.scss',
})
export class AccountRow {
  @Input() item!: AccountModel;

  getLossRatioColor(value: number): { bg: string; text: string } {
    if (value < 35) {
      return { bg: 'bg-green-500', text: 'text-white' };
    } else if (value <= 50) {
      return { bg: 'bg-yellow-300', text: 'text-black' };
    } else {
      return { bg: 'bg-red-500', text: 'text-white' };
    }
  }
}
