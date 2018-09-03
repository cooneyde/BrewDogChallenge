import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../classes/ingredient';

@Component({
  selector: 'app-ingredients-detail-card',
  templateUrl: './ingredients-detail-card.component.html',
  styleUrls: ['./ingredients-detail-card.component.css']
})
export class IngredientsDetailCardComponent implements OnInit {

  constructor() { }
  public kIngredient = 'ingredient';
  public unitsMap = {
    celsius: '˚C',
    fahrenheit: '˚F',
    grams: 'g',
    kilograms: 'kg'
  };

  @Input() item: Ingredient;
  @Input() list: Ingredient[];
  @Input() iterator: number;

  ngOnInit() {
  }

}
