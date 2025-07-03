import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkQueue } from './work-queue/work-queue';

@Component({
  selector: 'app-dashboard.component',
  imports: [CommonModule, WorkQueue],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
