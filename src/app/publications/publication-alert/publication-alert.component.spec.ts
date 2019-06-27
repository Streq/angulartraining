import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationAlertComponent } from './publication-alert.component';

describe('PublicationAlertComponent', () => {
  let component: PublicationAlertComponent;
  let fixture: ComponentFixture<PublicationAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
