import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StartCampaignModalComponent } from './start-campaign-modal.component';
describe('StartCampaignModalComponent', () => {
  let component: StartCampaignModalComponent;
  let fixture: ComponentFixture<StartCampaignModalComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignModalComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
