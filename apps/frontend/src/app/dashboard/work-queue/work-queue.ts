import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkQueueItemModel } from './models/work-queue-item.model';
import { WorkQueueItem } from './work-queue-item/work-queue-item';
import { UiCard } from '../../shared/ui/ui-card/ui-card';
import { DataTable } from '../../shared/ui/data-table/data-table';

@Component({
  selector: 'app-work-queue',
  imports: [CommonModule, WorkQueueItem, UiCard, DataTable],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})
export class WorkQueue {
  tabs = ['Assigned to me', 'Pending Review', 'Referrals'];
  activeTab = 'Assigned to me';

  workItems: WorkQueueItemModel[] = [
    {
      originator: { initials: 'SM', name: 'Sam Masters' },
      clientName: 'NAMEX Tech Solutions',
      clientLine: 'Cyber Liability',
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/16/2025',
    },
    {
      originator: { initials: 'AW', name: 'Annalise Willis' },
      clientName: 'Maritime Logistics Corp',
      clientLine: 'Marine Cargo',
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/20/2025',
    },
    {
      originator: { initials: 'PD', name: 'Patrick Devenport' },
      clientName: 'GreenField Energy Ltd',
      clientLine: 'Environmental',
      type: 'Loss Control Request',
      status: 'New',
      created: '04/16/2025',
    },
    {
      originator: { initials: 'AK', name: 'Ana Killian' },
      clientName: 'NorthStar Financial Group',
      clientLine: 'D&O Liability',
      type: 'Underwriter Referral',
      status: 'Pending Review',
      created: '04/22/2025',
    },
    {
      originator: { initials: 'AK', name: 'Ana Killian' },
      clientName: 'Alliance Healthcare Systems',
      clientLine: 'Medical Malpractice',
      type: 'Email',
      status: 'Completed',
      created: '04/28/2025',
    },
    {
      originator: { initials: 'MK', name: 'Me' },
      clientName: 'QuantumTech Industries',
      clientLine: 'Product Liability',
      type: 'Email',
      status: 'Completed',
      created: '04/20/2025',
    },
  ];

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
