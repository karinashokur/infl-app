import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingAComponent } from './onboarding-a.component';
describe('OnboardingAComponent', () => {
  let component: OnboardingAComponent;
  let fixture: ComponentFixture<OnboardingAComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingAComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
