import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchendashboardComponent } from './kitchendashboard.component';

describe('KitchendashboardComponent', () => {
  let component: KitchendashboardComponent;
  let fixture: ComponentFixture<KitchendashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchendashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchendashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
