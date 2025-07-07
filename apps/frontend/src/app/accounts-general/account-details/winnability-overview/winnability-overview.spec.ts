import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnabilityOverview } from './winnability-overview';

describe('WinnabilityOverview', () => {
  let component: WinnabilityOverview;
  let fixture: ComponentFixture<WinnabilityOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnabilityOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
