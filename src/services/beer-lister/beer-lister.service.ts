import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BeerDetails} from '../../app/classes/beer-details';

@Injectable({
  providedIn: 'root'
})
export class BeerListerService {

  constructor(public http: HttpClient) {
  }


  getBeers(url: string = 'https://api.punkapi.com/v2/beers/'): Observable<BeerDetails[]> {
    return this.http.get(url).pipe(map((data: any) => data));
  }

}
