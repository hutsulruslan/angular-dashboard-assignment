import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkQueue } from './work-queue/work-queue';
import { PortfolioGoals } from './portfolio-goals/portfolio-goals';
import { QuickActions } from './quick-actions/quick-actions';
import { MarketIntelligence } from './market-intelligence/market-intelligence';
import { Accounts } from './accounts/accounts';

@Component({
  selector: 'app-dashboard.component',
  imports: [
    CommonModule,
    WorkQueue,
    PortfolioGoals,
    QuickActions,
    MarketIntelligence,
    Accounts,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
