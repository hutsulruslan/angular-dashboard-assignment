import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHeaderInfoModel } from '../models/account-header-info.model';

@Component({
  selector: 'app-account-header-info',
  imports: [CommonModule],
  templateUrl: './account-header-info.html',
  styleUrl: './account-header-info.scss',
})
export class AccountHeaderInfo {
  @Input() info!: AccountHeaderInfoModel;
}
