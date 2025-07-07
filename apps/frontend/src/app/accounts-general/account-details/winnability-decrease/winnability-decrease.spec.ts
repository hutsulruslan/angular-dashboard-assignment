import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnabilityDecrease } from './winnability-decrease';

describe('WinnabilityDecrease', () => {
  let component: WinnabilityDecrease;
  let fixture: ComponentFixture<WinnabilityDecrease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityDecrease],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnabilityDecrease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
