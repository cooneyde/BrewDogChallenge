import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BeerListerComponent } from './components/beer-lister/beer-lister.component';
import { BeerSummaryTileComponent } from './components/beer-summary-tile/beer-summary-tile.component';
import { BeerDetailComponent } from './components/beer-detail/beer-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import { BlankComponentComponent } from './components/blank-component/blank-component.component';
import { BeerDetailCardComponent } from './components/beer-detail-card/beer-detail-card.component';
import { IngredientsDetailCardComponent } from './components/ingredients-detail-card/ingredients-detail-card.component';
import {IngredientListBuilder} from './classes/ingredient-list-builder';
import { StepCompleteComponent } from './components/step-complete/step-complete.component';
import { MethodDetailComponent } from './components/method-detail/method-detail.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';


const routes: Routes = [
  { path: '', component: BeerListerComponent},
  { path: 'beerDetail/:id', component: BeerDetailComponent }
];


@NgModule({

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    BeerListerComponent,
    BeerSummaryTileComponent,
    BeerDetailComponent,
    BlankComponentComponent,
    BeerDetailCardComponent,
    IngredientsDetailCardComponent,
    StepCompleteComponent,
    MethodDetailComponent,
    AppHeaderComponent
  ],
  providers: [HttpClientModule, IngredientListBuilder],
  bootstrap: [AppComponent]
})

export class AppModule { }
