import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingCComponent } from './onboarding-c.component';
describe('OnboardingCComponent', () => {
  let component: OnboardingCComponent;
  let fixture: ComponentFixture<OnboardingCComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingCComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
