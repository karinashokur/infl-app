import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentsSponsorComponent } from './payments-sponsor.component';
describe('PaymentsSponsorComponent', () => {
  let component: PaymentsSponsorComponent;
  let fixture: ComponentFixture<PaymentsSponsorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsSponsorComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
