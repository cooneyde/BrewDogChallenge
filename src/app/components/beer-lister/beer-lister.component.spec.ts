import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BeerListerComponent} from './beer-lister.component';
import {BeerDetailService} from '../../../services/beer-detail/beer-detail.service';
import {of} from 'rxjs';
import {BeerDetails} from '../../classes/beer-details';
import {BeerListerService} from '../../../services/beer-lister/beer-lister.service';
import {BeerSummaryTileComponent} from '../beer-summary-tile/beer-summary-tile.component';


describe('BeerListerComponent', () => {
  let component: BeerListerComponent;
  let fixture: ComponentFixture<BeerListerComponent>;

  const testBeer1: BeerDetails = new BeerDetails(
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

  const beerList: BeerDetails[] = [testBeer1];


  class MockDataService {
    getBeers() {
      return of([beerList]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerListerComponent, BeerSummaryTileComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [{provide: BeerListerService, useClass: MockDataService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
