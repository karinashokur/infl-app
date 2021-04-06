import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EndCampaignComponent } from './end-campaign.component';
describe('EndCampaignComponent', () => {
  let component: EndCampaignComponent;
  let fixture: ComponentFixture<EndCampaignComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndCampaignComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EndCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
