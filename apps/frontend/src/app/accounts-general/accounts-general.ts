import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHeader } from './account-header/account-header';
import { PerfomanceMetrics } from './perfomance-metrics/perfomance-metrics';
import { Policies } from './policies/policies';
import { AccountStatus } from './account-status/account-status';
import { Compliance } from './compliance/compliance';
import { AccountDetails } from './account-details/account-details';
import { Communication } from './communication/communication';
import { PoliciesTable } from './policies-table/policies-table';

@Component({
  selector: 'app-accounts-general',
  imports: [
    CommonModule,
    AccountHeader,
    PerfomanceMetrics,
    Policies,
    AccountStatus,
    Compliance,
    AccountDetails,
    Communication,
    PoliciesTable,
  ],
  templateUrl: './accounts-general.html',
  styleUrl: './accounts-general.scss',
})
export class AccountsGeneral {}
