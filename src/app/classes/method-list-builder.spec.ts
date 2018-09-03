import {TestBed} from '@angular/core/testing';
import {isArray} from 'util';
import {MethodListBuilder} from './method-list-builder';

describe('Method List Builder Service', () => {

  const testMethod = {
    'mash_temp': [
      {
        'temp': {
          'value': 69,
          'unit': 'celsius'
        },
        'duration': 105
      }
    ],
    'fermentation': {
      'temp': {
        'value': 21,
        'unit': 'celsius'
      }
    },
    'twist': 'Aged in whisky barrels with raspberries, tayberries and blackberries'
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
      declarations: []
    });

  });


  it('should be able to create a list of methods', () => {

    const methodList = MethodListBuilder.buildMethodList(testMethod);

    expect(isArray(methodList)).toBeTruthy();

    methodList.forEach((method) => {

      if (method.name !== 'twist') {
        expect(method.buttonState).toEqual('IDLE');
      } else {
        expect(method.buttonState).toBeNull();
      }
    });
  });


});
