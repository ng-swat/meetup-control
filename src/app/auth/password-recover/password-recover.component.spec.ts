import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordReminderComponent } from './password-recover.component';

describe('PasswordReminderComponent', () => {
  let component: PasswordReminderComponent;
  let fixture: ComponentFixture<PasswordReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
