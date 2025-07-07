import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertItem } from './models/account-header-alert';
import { AccountHeaderInfoModel } from './models/account-header-info.model';
import { AccountHeaderInfo } from './account-header-info/account-header-info';
import { AccountHeaderAlert } from './account-header-alert/account-header-alert';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-header',
  imports: [CommonModule, AccountHeaderInfo, AccountHeaderAlert],
  templateUrl: './account-header.html',
  styleUrl: './account-header.scss',
})
export class AccountHeader implements OnInit {
  private http = inject(HttpClient);

  info!: AccountHeaderInfoModel;
  alerts: AlertItem[] = [];

  ngOnInit() {
    this.http
      .get<AccountHeaderInfoModel>(
        'mock/accounts-general/account-header-info.json'
      )
      .subscribe((data) => (this.info = data));

    this.http
      .get<AlertItem[]>('mock/accounts-general/account-header-alerts.json')
      .subscribe((data) => (this.alerts = data));
  }
}
