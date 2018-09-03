import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {BeerSummaryTileComponent} from './beer-summary-tile.component';
import {BeerDetails} from '../../classes/beer-details';
import {Routes} from '@angular/router';
import {BlankComponentComponent} from '../blank-component/blank-component.component';

describe('BeerSummaryTileComponent', () => {
  let component: BeerSummaryTileComponent;
  let fixture: ComponentFixture<BeerSummaryTileComponent>;


  // @ts-ignore
  const testBeer: BeerDetails = new BeerDetails(1,
    'Buzz',
    'A Real Bitter Experience',
    '09/2007',
    'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    'https://images.punkapi.com/v2/keg.png',
    4.5);

  const routes: Routes = [
    {path: '', component: BlankComponentComponent},
    {path: 'beerDetail/:id', component: BlankComponentComponent}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerSummaryTileComponent, BlankComponentComponent],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSummaryTileComponent);
    component = fixture.componentInstance;
    component.beer = testBeer;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
