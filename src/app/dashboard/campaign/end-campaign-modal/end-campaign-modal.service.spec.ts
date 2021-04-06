import { TestBed } from '@angular/core/testing';
import { EndCampaignModalService } from './end-campaign-modal.service';
describe('EndCampaignModalService', () => {
  let service: EndCampaignModalService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndCampaignModalService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
