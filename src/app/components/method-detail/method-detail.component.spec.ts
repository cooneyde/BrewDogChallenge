import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MethodDetailComponent} from './method-detail.component';
import {StepCompleteComponent} from '../step-complete/step-complete.component';

describe('MethodDetailComponent', () => {
  let component: MethodDetailComponent;
  let fixture: ComponentFixture<MethodDetailComponent>;

  const testMethod = {
    'temp': {
      'value': 69,
      'unit': 'celsius'
    },
    'duration': 105,
    'name': 'mash_temp',
    'buttonState': 'IDLE'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MethodDetailComponent, StepCompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDetailComponent);
    component = fixture.componentInstance;
    component.item = testMethod;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
