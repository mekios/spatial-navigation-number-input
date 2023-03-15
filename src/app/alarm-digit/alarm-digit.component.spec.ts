import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmDigitComponent } from './alarm-digit.component';

describe('AlarmDigitComponent', () => {
  let component: AlarmDigitComponent;
  let fixture: ComponentFixture<AlarmDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmDigitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
