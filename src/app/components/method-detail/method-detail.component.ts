import {Component, Input, OnInit} from '@angular/core';
import {Method} from '../../classes/method';

@Component({
  selector: 'app-method-detail',
  templateUrl: './method-detail.component.html',
  styleUrls: ['./method-detail.component.css']
})
export class MethodDetailComponent implements OnInit {

  public kMethod = 'method';

  public unitsMap = {
    celsius: '˚C',
    fahrenheit: '˚F',
    grams: 'g',
    kilograms: 'kg'
  };

  public strings = {
    mash_temp: 'Temperature Mash',
    fermentation: 'Fermentation'
  };

  @Input() item: Method;
  @Input() list: Method[];
  @Input() iterator: number;

  constructor() {
  }

  ngOnInit() {
  }

}
