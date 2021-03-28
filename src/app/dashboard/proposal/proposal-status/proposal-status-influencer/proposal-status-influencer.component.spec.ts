import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProposalStatusInfluencerComponent } from './proposal-status-influencer.component';
describe('ProposalStatusInfluencerComponent', () => {
  let component: ProposalStatusInfluencerComponent;
  let fixture: ComponentFixture<ProposalStatusInfluencerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalStatusInfluencerComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalStatusInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
