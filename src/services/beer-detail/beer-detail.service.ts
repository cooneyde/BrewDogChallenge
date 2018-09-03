import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeerDetails} from '../../app/classes/beer-details';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerDetailService {

  constructor(public http: HttpClient) {
  }


  /**
   * Retrieves a single beer from BrewDog API based on ID
   * @param id  unique identifier of beer
   */
  getSingleBeerById(id: number): Observable<any> {

    const url = 'https://api.punkapi.com/v2/beers/' + id;
    return this.http.get(url).pipe(map((data: BeerDetails[]) => data));

  }

}
