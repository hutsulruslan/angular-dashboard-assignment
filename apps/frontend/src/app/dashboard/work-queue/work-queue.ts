import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkQueueItemModel } from './models/work-queue-item.model';
import { WorkQueueItem } from './work-queue-item/work-queue-item';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { DataTable } from '../../shared/ui/data-table/data-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-queue',
  imports: [CommonModule, WorkQueueItem, UiCard, DataTable],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue implements OnInit {
  tabs = ['Assigned to me', 'Pending Review', 'Referrals'];
  activeTab = 'Assigned to me';

  private http = inject(HttpClient);
  workItems: WorkQueueItemModel[] = [];

  ngOnInit() {
    this.http
      .get<WorkQueueItemModel[]>('mock/dashboard/work-queue.json')
      .subscribe((data) => {
        this.workItems = data;
      });
  }

  filteredItems(): WorkQueueItemModel[] {
    if (this.activeTab === 'Assigned to me') return this.workItems;
    return this.workItems.filter((i) => i.status === this.activeTab);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  getTabCount(tab: string): number {
    if (tab === 'Assigned to me') {
      return this.workItems.length;
    } else {
      return this.workItems.filter((i) => i.status === tab).length;
    }
  }
}
