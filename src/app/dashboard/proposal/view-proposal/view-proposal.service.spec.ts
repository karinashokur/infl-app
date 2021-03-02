import { TestBed } from '@angular/core/testing';
import { ViewProposalService } from './view-proposal.service';
describe('ViewProposalService', () => {
  let service: ViewProposalService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewProposalService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
