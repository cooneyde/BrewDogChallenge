import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {StepCompleteComponent} from './step-complete.component';
import {IngredientListBuilder} from '../../classes/ingredient-list-builder';

describe('StepCompleteComponent', () => {
  let component: StepCompleteComponent;
  let fixture: ComponentFixture<StepCompleteComponent>;

  const ingredientsList = [
    {
      'name': 'Extra Pale',
      'amount': {
        'value': 9.69,
        'unit': 'kilograms'
      },
      'type': 'malt',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Chocolate',
      'amount': {
        'value': 0.19,
        'unit': 'kilograms'
      },
      'type': 'malt',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Carafa Special Malt Type 3',
      'amount': {
        'value': 0.44,
        'unit': 'kilograms'
      },
      'type': 'malt',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Tomahawk',
      'amount': {
        'value': 31.25,
        'unit': 'grams'
      },
      'add': 'start',
      'attribute': 'bitter',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Magnum',
      'amount': {
        'value': 12.5,
        'unit': 'grams'
      },
      'add': 'start',
      'attribute': 'bitter',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Magnum',
      'amount': {
        'value': 12.5,
        'unit': 'grams'
      },
      'add': 'middle',
      'attribute': 'flavour',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Tomahawk',
      'amount': {
        'value': 12.5,
        'unit': 'grams'
      },
      'add': 'end',
      'attribute': 'flavour',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Centennial',
      'amount': {
        'value': 25,
        'unit': 'grams'
      },
      'add': 'end',
      'attribute': 'flavour',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Amarillo',
      'amount': {
        'value': 25,
        'unit': 'grams'
      },
      'add': 'end',
      'attribute': 'flavour',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Centennial',
      'amount': {
        'value': 25,
        'unit': 'grams'
      },
      'add': 'dry hop',
      'attribute': 'aroma',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Amarillo',
      'amount': {
        'value': 25,
        'unit': 'grams'
      },
      'add': 'dry hop',
      'attribute': 'aroma',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Tomahawk',
      'amount': {
        'value': 37.5,
        'unit': 'grams'
      },
      'add': 'dry hop',
      'attribute': 'aroma',
      'type': 'hops',
      'buttonState': 'IDLE'
    },
    {
      'name': 'Wyeast 3522 - Belgian Ardennes™',
      'amount': null,
      'attribute': null,
      'add': null,
      'type': 'yeast',
      'buttonState': 'IDLE'
    }
  ];

  const methodsList = [
    {
      'temp': {
        'value': 69,
        'unit': 'celsius'
      },
      'duration': 3,
      'name': 'mash_temp',
      'buttonState': 'IDLE'
    },
    {
      'temp': {
        'value': 21,
        'unit': 'celsius'
      },
      'name': 'fermentation',
      'buttonState': 'IDLE'
    },
    {
      'temp': {},
      'name': 'twist',
      'duration': null,
      'comment': 'Aged in whisky barrels with raspberries, tayberries and blackberries',
      'buttonState': null
    }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepCompleteComponent],
      providers: [IngredientListBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be able to mark an ingredient as DONE', fakeAsync((done) => {

    fixture = TestBed.createComponent(StepCompleteComponent);
    component = fixture.componentInstance;
    component.list = ingredientsList;
    component.itemIterator = 2;
    component.item = ingredientsList[2];
    component.elementState = ingredientsList[2].buttonState;
    component.itemType = 'ingredient';
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const button = compiled.querySelector('.btn-container img');
    button.dispatchEvent(new Event('click'));
    tick();

    fixture.detectChanges();
    expect(component.list[2].buttonState).toEqual('DONE');
  }));


  it('should not mark an ingredient as DONE which has add=end if its parents whose add=middle and add=start have not completed', fakeAsync((done) => {

    fixture = TestBed.createComponent(StepCompleteComponent);
    component = fixture.componentInstance;
    component.list = ingredientsList;
    component.itemIterator = 8;
    component.item = ingredientsList[8];
    component.elementState = ingredientsList[8].buttonState;
    component.itemType = 'ingredient';
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const button = compiled.querySelector('.btn-container img');
    button.dispatchEvent(new Event('click'));
    tick();

    fixture.detectChanges();

    expect(component.list[8].buttonState).toEqual('IDLE');
  }));


  it('should mark an method as DONE which does not have a timer', fakeAsync((done) => {

    fixture = TestBed.createComponent(StepCompleteComponent);
    component = fixture.componentInstance;
    component.list = methodsList;
    component.itemIterator = 1;
    component.item = methodsList[1];
    component.elementState = ingredientsList[1].buttonState;
    component.itemType = 'method';
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const button = compiled.querySelector('.btn-container img');
    button.dispatchEvent(new Event('click'));
    tick();

    fixture.detectChanges();

    expect(component.list[1].buttonState).toEqual('DONE');
  }));


  it('should mark a method which does have a timer as DONE after waiting 6 seconds after clicking the tick icon', fakeAsync((done) => {

    fixture = TestBed.createComponent(StepCompleteComponent);
    component = fixture.componentInstance;
    component.list = methodsList;
    component.itemIterator = 0;
    component.item = methodsList[0];
    component.seconds = 1;
    component.elementState = methodsList[0].buttonState;
    component.itemType = 'method';
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    const button = compiled.querySelector('.btn-container img');
    button.dispatchEvent(new Event('click'));
    tick(6000);

    fixture.detectChanges();

    expect(component.list[0].duration).toEqual(0);
    expect(component.list[0].buttonState).toEqual('DONE');
  }));


});
