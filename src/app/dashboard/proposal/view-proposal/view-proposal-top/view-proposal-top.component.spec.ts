import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProposalTopComponent } from './view-proposal-top.component';
describe('ViewProposalTopComponent', () => {
  let component: ViewProposalTopComponent;
  let fixture: ComponentFixture<ViewProposalTopComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposalTopComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposalTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
