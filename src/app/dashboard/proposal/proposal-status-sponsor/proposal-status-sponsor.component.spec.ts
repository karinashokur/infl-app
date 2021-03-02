import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProposalStatusSponsorComponent } from './proposal-status-sponsor.component';
describe('ProposalStatusSponsorComponent', () => {
  let component: ProposalStatusSponsorComponent;
  let fixture: ComponentFixture<ProposalStatusSponsorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalStatusSponsorComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalStatusSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
