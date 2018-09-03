import {Component, HostListener, Input, OnInit} from '@angular/core';
import {BeerDetails} from '../../classes/beer-details';

@Component({
  selector: 'app-beer-detail-card',
  templateUrl: './beer-detail-card.component.html',
  styleUrls: ['./beer-detail-card.component.css']
})
export class BeerDetailCardComponent implements OnInit {

  @Input() beer: BeerDetails;


  public innerWidth: any;

  constructor() {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
