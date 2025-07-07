import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountHeaderAlert } from './account-header-alert';

describe('AccountHeaderAlert', () => {
  let component: AccountHeaderAlert;
  let fixture: ComponentFixture<AccountHeaderAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHeaderAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountHeaderAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
