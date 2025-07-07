import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModel } from './models/account.model';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { DataTable } from '../../shared/ui/data-table/data-table';
import { AccountRow } from './account-row/account-row';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, UiCard, DataTable, AccountRow],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
})
export class Accounts implements OnInit {
  private http = inject(HttpClient);
  accounts: AccountModel[] = [];

  ngOnInit() {
    this.http
      .get<AccountModel[]>('mock/dashboard/accounts.json')
      .subscribe((data) => {
        this.accounts = data;
      });
  }
}
