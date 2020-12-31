import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingBComponent } from './onboarding-b.component';
describe('OnboardingBComponent', () => {
  let component: OnboardingBComponent;
  let fixture: ComponentFixture<OnboardingBComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingBComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
