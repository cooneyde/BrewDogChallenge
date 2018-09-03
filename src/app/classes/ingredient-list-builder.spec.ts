import {TestBed} from '@angular/core/testing';
import {IngredientListBuilder} from './ingredient-list-builder';
import {isArray} from 'util';

describe('Ingredient List Builder Service', () => {


  const testIngredientInput = {
    'malt': [
      {
        'name': 'Extra Pale',
        'amount': {
          'value': 9.69,
          'unit': 'kilograms'
        }
      },
      {
        'name': 'Chocolate',
        'amount': {
          'value': 0.19,
          'unit': 'kilograms'
        }
      },
      {
        'name': 'Carafa Special Malt Type 3',
        'amount': {
          'value': 0.44,
          'unit': 'kilograms'
        }
      }
    ],
    'hops': [
      {
        'name': 'Tomahawk',
        'amount': {
          'value': 31.25,
          'unit': 'grams'
        },
        'add': 'start',
        'attribute': 'bitter'
      },
      {
        'name': 'Magnum',
        'amount': {
          'value': 12.5,
          'unit': 'grams'
        },
        'add': 'start',
        'attribute': 'bitter'
      },
      {
        'name': 'Magnum',
        'amount': {
          'value': 12.5,
          'unit': 'grams'
        },
        'add': 'middle',
        'attribute': 'flavour'
      },
      {
        'name': 'Tomahawk',
        'amount': {
          'value': 12.5,
          'unit': 'grams'
        },
        'add': 'end',
        'attribute': 'flavour'
      },
      {
        'name': 'Centennial',
        'amount': {
          'value': 25,
          'unit': 'grams'
        },
        'add': 'end',
        'attribute': 'flavour'
      },
      {
        'name': 'Amarillo',
        'amount': {
          'value': 25,
          'unit': 'grams'
        },
        'add': 'end',
        'attribute': 'flavour'
      },
      {
        'name': 'Centennial',
        'amount': {
          'value': 25,
          'unit': 'grams'
        },
        'add': 'dry hop',
        'attribute': 'aroma'
      },
      {
        'name': 'Amarillo',
        'amount': {
          'value': 25,
          'unit': 'grams'
        },
        'add': 'dry hop',
        'attribute': 'aroma'
      },
      {
        'name': 'Tomahawk',
        'amount': {
          'value': 37.5,
          'unit': 'grams'
        },
        'add': 'dry hop',
        'attribute': 'aroma'
      }
    ],
    'yeast': 'Wyeast 3522 - Belgian Ardennes™'
  };

  const sortedIngredients = [
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
    ]
  ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
      declarations: []
    });

  });


  it('should be able to create a list of ingredients', () => {

    const ingredientList = IngredientListBuilder.buildListOfIngredients(testIngredientInput);

    expect(isArray(ingredientList)).toBeTruthy();

    ingredientList.forEach((ingredient) => {
      expect(ingredient.buttonState).toEqual('IDLE');
    });
  });


  it('should return true if the ingredient can be marked as done', () => {

    const returnedValue = IngredientListBuilder.checkParentIngredientStates(sortedIngredients, 2, sortedIngredients[2].type);
    expect(returnedValue).toEqual(true);
  });


  it('should return false if the ingredient to be marked as done is to be added at the end while all others have not been marked done', () => {

    const returnedValue = IngredientListBuilder.checkParentIngredientStates(sortedIngredients, 8, sortedIngredients[8].type);
    expect(returnedValue).toEqual(false);
  });


  it('should return false if the ingredient to be marked as done is to be added at the middle while all others have not been marked done', () => {

    const returnedValue = IngredientListBuilder.checkParentIngredientStates(sortedIngredients, 5, sortedIngredients[5].type);
    expect(returnedValue).toEqual(false);
  });


  it('should return true if the ingredient to be marked as done is to be added at the start', () => {

    const returnedValue = IngredientListBuilder.checkParentIngredientStates(sortedIngredients, 3, sortedIngredients[3].type);
    expect(returnedValue).toEqual(true);
  });


});
