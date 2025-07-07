import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesTableRow } from './policies-table-row';

describe('PoliciesTableRow', () => {
  let component: PoliciesTableRow;
  let fixture: ComponentFixture<PoliciesTableRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesTableRow],
    }).compileComponents();

    fixture = TestBed.createComponent(PoliciesTableRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
