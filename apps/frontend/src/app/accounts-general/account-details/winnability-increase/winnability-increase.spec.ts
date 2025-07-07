import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnabilityIncrease } from './winnability-increase';

describe('WinnabilityIncrease', () => {
  let component: WinnabilityIncrease;
  let fixture: ComponentFixture<WinnabilityIncrease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityIncrease],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnabilityIncrease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
