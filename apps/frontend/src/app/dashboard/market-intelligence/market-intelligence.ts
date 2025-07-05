import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-market-intelligence',
  imports: [CommonModule, UiCard],
  templateUrl: './market-intelligence.html',
  styleUrl: './market-intelligence.scss',
})
export class MarketIntelligence {
  intelligence = [
    { color: 'dot-red', message: 'Rate hardening in Cyber market - +15% YoY' },
    { color: 'dot-yellow', message: 'New capacity entering Marine market' },
    { color: 'dot-blue', message: 'Environmental regulatory changes in CA' },
  ];
}
