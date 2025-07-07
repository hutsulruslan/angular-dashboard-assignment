import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnabilityRecommendations } from './winnability-recommendations';

describe('WinnabilityRecommendations', () => {
  let component: WinnabilityRecommendations;
  let fixture: ComponentFixture<WinnabilityRecommendations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityRecommendations],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnabilityRecommendations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
