import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkQueueItem } from './work-queue-item';

describe('WorkQueueItem', () => {
  let component: WorkQueueItem;
  let fixture: ComponentFixture<WorkQueueItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkQueueItem],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkQueueItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
