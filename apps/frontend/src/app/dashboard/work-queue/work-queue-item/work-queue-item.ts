import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkQueueItemModel } from '../models/work-queue-item.model';
import { StatusIndicator } from '../../../shared/ui/status-indicator/status-indicator';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-work-queue-item',
  imports: [CommonModule, StatusIndicator, FaIconComponent],
  templateUrl: './work-queue-item.html',
  styleUrl: './work-queue-item.scss',
})
export class WorkQueueItem {
  @Input() item!: WorkQueueItemModel;
}
