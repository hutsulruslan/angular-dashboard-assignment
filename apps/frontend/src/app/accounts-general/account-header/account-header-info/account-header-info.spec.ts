import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountHeaderInfo } from './account-header-info';

describe('AccountHeaderInfo', () => {
  let component: AccountHeaderInfo;
  let fixture: ComponentFixture<AccountHeaderInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHeaderInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountHeaderInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
