import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EndCampaignModalComponent } from './end-campaign-modal.component';
describe('EndCampaignModalComponent', () => {
  let component: EndCampaignModalComponent;
  let fixture: ComponentFixture<EndCampaignModalComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndCampaignModalComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EndCampaignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
