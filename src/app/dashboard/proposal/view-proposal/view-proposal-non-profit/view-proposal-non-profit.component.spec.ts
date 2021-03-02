import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProposalNonProfitComponent } from './view-proposal-non-profit.component';
describe('ViewProposalNonProfitComponent', () => {
  let component: ViewProposalNonProfitComponent;
  let fixture: ComponentFixture<ViewProposalNonProfitComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalNonProfitComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalNonProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
