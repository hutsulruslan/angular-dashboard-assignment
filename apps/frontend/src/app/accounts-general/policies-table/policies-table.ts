import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { HttpClient } from '@angular/common/http';
import { PolicyModel } from './models/policy.model';
import { DataTable } from '../../shared/ui/data-table/data-table';
import { PoliciesTableRow } from './policies-table-row/policies-table-row';
import { Badge } from '../../shared/ui/badge/badge';

@Component({
  selector: 'app-policies-table',
  imports: [CommonModule, UiCard, DataTable, PoliciesTableRow, Badge],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.scss',
})
export class PoliciesTable implements OnInit {
  private http = inject(HttpClient);
  policies: PolicyModel[] = [];

  ngOnInit(): void {
    this.http
      .get<PolicyModel[]>('mock/accounts-general/policies-table.json')
      .subscribe((data) => (this.policies = data));
  }

  getTotal(field: keyof PolicyModel): number {
    return this.policies.reduce((sum, item) => {
      const val = parseFloat(item[field] || '0');
      return sum + (isNaN(val) ? 0 : val);
    }, 0);
  }

  getAverageRateChange(): string {
    const values = this.policies
      .map((item) => parseFloat(item.rateChange?.replace('%', '') || ''))
      .filter((v) => !isNaN(v));
    const avg = values.reduce((a, b) => a + b, 0) / (values.length || 1);
    return avg.toFixed(1);
  }

  getAverageLossRatio(): string {
    const values = this.policies
      .map((item) => parseFloat(item.lossRatio?.replace('%', '') || ''))
      .filter((v) => !isNaN(v));
    const avg = values.reduce((a, b) => a + b, 0) / (values.length || 1);
    return avg.toFixed(1);
  }

  getLossRatioColor(value: string | number) {
    const ratio = +value;
    if (ratio < 30) return { bg: '#22C55E', text: '#fff' };
    if (ratio < 60) return { bg: '#EAB308', text: '#000' };
    return { bg: '#DC2626', text: '#fff' };
  }
}
