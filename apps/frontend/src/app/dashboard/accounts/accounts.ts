import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModel } from './models/account.model';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { DataTable } from '../../shared/ui/data-table/data-table';
import { AccountRow } from './account-row/account-row';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, UiCard, DataTable, AccountRow],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
})
export class Accounts {
  accounts: AccountModel[] = [
    {
      name: 'NAMEX Tech Solutions',
      type: 'Large Enterprise',
      line: 'D&O Liability',
      broker: 'Willis Towers',
      renewalDate: '04/16/2025',
      premium: '$2.3M',
      ratedPremium: '$2.8M',
      lossRatio: 32,
      appetite: 'HIGH',
      status: 'Active',
      triage: 180,
      winnability: { value: 4, label: 'Very Strong' },
    },
    {
      name: 'Alliance Healthcare Systems',
      type: 'Mid-Market',
      line: 'Medical Malpractice',
      broker: 'Aon Risk',
      renewalDate: '06/30/2025',
      premium: '$1.7M',
      ratedPremium: '$1.9M',
      lossRatio: 38,
      appetite: 'MEDIUM',
      status: 'Under review',
      triage: 165,
      winnability: { value: 3, label: 'Strong' },
    },
    {
      name: 'Maritime Logistics Corp',
      type: 'Shipping/Logistics',
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      renewalDate: '09/05/2025',
      premium: '$875K',
      ratedPremium: '$920K',
      lossRatio: 25,
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnability: { value: 4, label: 'Very Strong' },
    },
    {
      name: 'GreenField Energy Ltd',
      type: 'Energy Sector',
      line: 'Environmental Liability',
      broker: 'Aon Risk',
      renewalDate: '07/22/2025',
      premium: '$1.2M',
      ratedPremium: '$1.4M',
      lossRatio: 67,
      appetite: 'CAUTIOUS',
      status: 'Under review',
      triage: 158,
      winnability: { value: 2, label: 'Medium' },
    },
  ];
}
