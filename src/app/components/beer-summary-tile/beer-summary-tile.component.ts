import {Component, Input, OnInit} from '@angular/core';
import {BeerDetails} from '../../classes/beer-details';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beer-summary-tile',
  templateUrl: './beer-summary-tile.component.html',
  styleUrls: ['./beer-summary-tile.component.css']
})
export class BeerSummaryTileComponent implements OnInit {

  @Input() beer: BeerDetails;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  viewBeer() {
    this.router.navigateByUrl(`/beerDetail/${this.beer.id}`);

  }
}
