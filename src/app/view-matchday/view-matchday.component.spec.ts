import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatchdayComponent } from './view-matchday.component';

describe('ViewMatchdayComponent', () => {
  let component: ViewMatchdayComponent;
  let fixture: ComponentFixture<ViewMatchdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMatchdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatchdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
