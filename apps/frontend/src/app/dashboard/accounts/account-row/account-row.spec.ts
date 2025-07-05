import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountRow } from './account-row';

describe('AccountRow', () => {
  let component: AccountRow;
  let fixture: ComponentFixture<AccountRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountRow],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
