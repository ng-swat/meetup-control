import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsCheckInComponent } from './participants-check-in.component';

describe('ParticipantsCheckInComponent', () => {
  let component: ParticipantsCheckInComponent;
  let fixture: ComponentFixture<ParticipantsCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantsCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
