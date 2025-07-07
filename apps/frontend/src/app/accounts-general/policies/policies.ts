import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { HttpClient } from '@angular/common/http';
import { Policy } from './models/policy.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-policies',
  imports: [CommonModule, UiCard, FontAwesomeModule],
  templateUrl: './policies.html',
  styleUrl: './policies.scss',
})
export class Policies implements OnInit {
  policies: Policy[] = [];

  private http = inject(HttpClient);

  ngOnInit() {
    this.http
      .get<Policy[]>('mock/accounts-general/policies.json')
      .subscribe((data) => (this.policies = data));
  }
}
