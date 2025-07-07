import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsGeneral } from './accounts-general';

describe('AccountsGeneral', () => {
  let component: AccountsGeneral;
  let fixture: ComponentFixture<AccountsGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsGeneral],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
