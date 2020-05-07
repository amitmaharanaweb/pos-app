import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingdashboardComponent } from './billingdashboard.component';

describe('BillingdashboardComponent', () => {
  let component: BillingdashboardComponent;
  let fixture: ComponentFixture<BillingdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
