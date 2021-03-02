import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProposalSponsorComponent } from './view-proposal-sponsor.component';
describe('ViewProposalSponsorComponent', () => {
  let component: ViewProposalSponsorComponent;
  let fixture: ComponentFixture<ViewProposalSponsorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalSponsorComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
