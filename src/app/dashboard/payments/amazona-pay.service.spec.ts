import { TestBed } from '@angular/core/testing';
import { AmazonaPayService } from './amazona-pay.service';
describe('AmazonaPayService', () => {
  let service: AmazonaPayService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonaPayService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
