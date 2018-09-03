import {Component, OnInit} from '@angular/core';
import {BeerListerService} from '../../../services/beer-lister/beer-lister.service';
import {BeerDetails} from '../../classes/beer-details';

@Component({
  selector: 'app-beer-lister',
  templateUrl: './beer-lister.component.html',
  styleUrls: ['./beer-lister.component.css']
})

export class BeerListerComponent implements OnInit {

  constructor(public beerListerService: BeerListerService) {
  }

  public beerList: BeerDetails[];
  public beerListSubscription;

  ngOnInit() {
    this.getListOfBeers();
  }


  /**
   * Retrieves list of beers from GET api/beers and sorts alphabetically by default
   */
  getListOfBeers() {

    this.beerListSubscription = this.beerListerService.getBeers().subscribe(result => {
      this.beerList = result.sort((a, b) => a.name.localeCompare(b.name));
      }, err => {

      console.log(err);
    });

  }



}
