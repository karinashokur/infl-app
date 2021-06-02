import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicDonationCampaignComponent } from './public-donation-campaign.component';
describe('PublicDonationCampaignComponent', () => {
  let component: PublicDonationCampaignComponent;
  let fixture: ComponentFixture<PublicDonationCampaignComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDonationCampaignComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDonationCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
