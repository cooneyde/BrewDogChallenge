import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BeerDetailComponent} from './beer-detail.component';
import {BeerDetails} from '../../classes/beer-details';
import {of} from 'rxjs';
import {BeerDetailService} from '../../../services/beer-detail/beer-detail.service';
import {BeerDetailCardComponent} from '../beer-detail-card/beer-detail-card.component';
import {StepCompleteComponent} from '../step-complete/step-complete.component';
import {IngredientListBuilder} from '../../classes/ingredient-list-builder';
import {IngredientsDetailCardComponent} from '../ingredients-detail-card/ingredients-detail-card.component';
import {MethodDetailComponent} from '../method-detail/method-detail.component';
import {MethodListBuilder} from '../../classes/method-list-builder';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  const testBeer: BeerDetails = new BeerDetails(
    1,
    'A Real Bitter Experience',
    'Buzz',
    '09/2007',
    'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    'https://images.punkapi.com/v2/keg.png',
    4.5,
    41.5,
    1010,
    1041.7,
    15,
    15,
    4.4,
    76,
    {
      'value': 20,
      'unit': 'liters'
    },
    {
      'value': 25,
      'unit': 'liters'
    },
    {
      'mash_temp': [
        {
          'temp': {
            'value': 69,
            'unit': 'celsius'
          },
          'duration': null
        }
      ],
      'fermentation': {
        'temp': {
          'value': 18,
          'unit': 'celsius'
        }
      },
      'twist': null
    },
    {
      'malt': [
        {
          'name': 'Maris Otter Extra Pale',
          'amount': {
            'value': 3.25,
            'unit': 'kilograms'
          }
        },
        {
          'name': 'Caramalt',
          'amount': {
            'value': 0.2,
            'unit': 'kilograms'
          }
        },
        {
          'name': 'Munich',
          'amount': {
            'value': 0.4,
            'unit': 'kilograms'
          }
        }
      ],
      'hops': [
        {
          'name': 'Amarillo',
          'amount': {
            'value': 13.8,
            'unit': 'grams'
          },
          'add': 'start',
          'attribute': 'bitter'
        },
        {
          'name': 'Simcoe',
          'amount': {
            'value': 13.8,
            'unit': 'grams'
          },
          'add': 'start',
          'attribute': 'bitter'
        },
        {
          'name': 'Amarillo',
          'amount': {
            'value': 26.3,
            'unit': 'grams'
          },
          'add': 'end',
          'attribute': 'flavour'
        },
        {
          'name': 'Motueka',
          'amount': {
            'value': 18.8,
            'unit': 'grams'
          },
          'add': 'end',
          'attribute': 'flavour'
        }
      ],
      'yeast': 'Wyeast 1056 - American Ale™'
    },
    [
      'Fresh crab with lemon',
      'Garlic butter dipping sauce',
      'Goats cheese salad',
      'Creamy lemon bar doused in powdered sugar'
    ],
    'Be careful not to collect too much w1ort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
    'Sam Mason <samjbmason>'
  );

  class MockDataService {
    getSingleBeerById() {
      return of([testBeer]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerDetailComponent,
        BeerDetailCardComponent,
        StepCompleteComponent,
        IngredientsDetailCardComponent,
        MethodDetailComponent],
      imports: [
        RouterTestingModule
      ],

      providers: [
        {provide: BeerDetailService, useClass: MockDataService},
        IngredientListBuilder,
        MethodListBuilder]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
