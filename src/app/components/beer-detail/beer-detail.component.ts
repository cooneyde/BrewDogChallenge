import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BeerDetailService} from '../../../services/beer-detail/beer-detail.service';
import {BeerDetails} from '../../classes/beer-details';
import {Ingredient} from '../../classes/ingredient';
import {IngredientListBuilder} from '../../classes/ingredient-list-builder';
import {MethodListBuilder} from '../../classes/method-list-builder';
import {Method} from '../../classes/method';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css']
})


export class BeerDetailComponent implements OnInit {

  public id = 0;
  public beerDetail: BeerDetails;
  public ingredientsList: Ingredient[];
  public methodList: Method[];
  private beerDetailSubscription;

  constructor(public route: ActivatedRoute,
              public beerDetailService: BeerDetailService) {
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getBeerDetails(this.id);
    });
  }


  /**
   * Retrieves a single beer from the GetBeer Service, and populates beer detail, ingredients and method objects
   * @param id: String - ID of the beer being searched for
   */
  getBeerDetails(id) {

    this.beerDetailSubscription = this.beerDetailService.getSingleBeerById(id).subscribe(result => {

      this.beerDetail = result[0];
      this.ingredientsList = IngredientListBuilder.buildListOfIngredients(this.beerDetail.ingredients);
      this.methodList = MethodListBuilder.buildMethodList(this.beerDetail.method);
    }, err => {

      // TODO implement error handling
      console.log('An error occurred in retrieving beer details: ' + err);
    });
  }
}
