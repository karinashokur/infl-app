import { TestBed } from '@angular/core/testing';
import { StartCampaignModalEventEmitterService } from './start-campaign-modal-event-emitter.service';
describe('StartCampaignModalEventEmitterService', () => {
  let service: StartCampaignModalEventEmitterService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartCampaignModalEventEmitterService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
