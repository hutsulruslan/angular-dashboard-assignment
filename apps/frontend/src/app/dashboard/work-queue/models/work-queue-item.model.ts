export type WorkQueueStatus = 'New' | 'Pending Review' | 'Completed';

export interface WorkQueueItemModel {
  originator: {
    initials: string;
    name: string;
  };
  clientName: string;
  clientLine: string;
  type: string;
  status: WorkQueueStatus;
  created: string;
}
