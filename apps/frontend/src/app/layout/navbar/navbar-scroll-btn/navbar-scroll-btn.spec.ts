import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarScrollBtn } from './navbar-scroll-btn';

describe('NavbarScrollBtn', () => {
  let component: NavbarScrollBtn;
  let fixture: ComponentFixture<NavbarScrollBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarScrollBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarScrollBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
