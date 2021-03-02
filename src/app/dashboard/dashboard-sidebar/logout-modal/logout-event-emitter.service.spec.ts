import { TestBed } from '@angular/core/testing';
import { LogoutEventEmitterService } from './logout-event-emitter.service';
describe('LogoutEventEmitterService', () => {
  let service: LogoutEventEmitterService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutEventEmitterService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
