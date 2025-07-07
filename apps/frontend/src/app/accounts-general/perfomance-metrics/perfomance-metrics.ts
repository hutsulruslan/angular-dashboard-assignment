import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCard } from '../../shared/ui/ui-card/ui-card';

@Component({
  selector: 'app-perfomance-metrics',
  imports: [CommonModule, UiCard],
  templateUrl: './perfomance-metrics.html',
  styleUrl: './perfomance-metrics.scss',
})
export class PerfomanceMetrics {}
