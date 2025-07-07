import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfomanceMetrics } from './perfomance-metrics';

describe('PerfomanceMetrics', () => {
  let component: PerfomanceMetrics;
  let fixture: ComponentFixture<PerfomanceMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfomanceMetrics],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfomanceMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
