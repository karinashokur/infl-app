import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProposalInfluencerComponent } from './view-proposal-influencer.component';
describe('ViewProposalInfluencerComponent', () => {
  let component: ViewProposalInfluencerComponent;
  let fixture: ComponentFixture<ViewProposalInfluencerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalInfluencerComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
