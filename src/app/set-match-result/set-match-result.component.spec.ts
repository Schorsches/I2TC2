import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMatchResultComponent } from './set-match-result.component';

describe('SetMatchResultComponent', () => {
  let component: SetMatchResultComponent;
  let fixture: ComponentFixture<SetMatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMatchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
