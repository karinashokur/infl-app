import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProposalStatusNonProfitComponent } from './proposal-status-non-profit.component';
describe('ProposalStatusNonProfitComponent', () => {
  let component: ProposalStatusNonProfitComponent;
  let fixture: ComponentFixture<ProposalStatusNonProfitComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalStatusNonProfitComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalStatusNonProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
