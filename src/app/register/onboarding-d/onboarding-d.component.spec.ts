import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingDComponent } from './onboarding-d.component';
describe('OnboardingDComponent', () => {
  let component: OnboardingDComponent;
  let fixture: ComponentFixture<OnboardingDComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingDComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
