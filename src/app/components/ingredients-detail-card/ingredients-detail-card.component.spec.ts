import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsDetailCardComponent } from './ingredients-detail-card.component';
import {StepCompleteComponent} from '../step-complete/step-complete.component';
import {IngredientListBuilder} from '../../classes/ingredient-list-builder';
import {Ingredient} from '../../classes/ingredient';

describe('IngredientsDetailCardComponent', () => {
  let component: IngredientsDetailCardComponent;
  let fixture: ComponentFixture<IngredientsDetailCardComponent>;

  const testIngredient: Ingredient  = new Ingredient('Extra Pale', {value: 9.69, unit: 'kilograms'}, '', 'middle', 'hops', 'IDLE');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsDetailCardComponent, StepCompleteComponent],
      providers: [IngredientListBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDetailCardComponent);
    component = fixture.componentInstance;
    component.item = testIngredient;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to render the name of a single ingredient', () => {

    const compiled = fixture.debugElement.nativeElement;
    const detailElements = compiled.querySelectorAll('.text-container');

    expect(detailElements.length).toEqual(1);
    expect(detailElements[0].textContent).toContain('hops: Extra Pale');

  });

  it('should be able to render the weight of a single ingredient', () => {

    const compiled = fixture.debugElement.nativeElement;
    const detailElements = compiled.querySelectorAll('.icon-container');

    expect(detailElements.length).toEqual(1);
    expect(detailElements[0].textContent).toContain('9.69 kg');

  });

  it('should have a weight icon', () => {
    const compiled = fixture.debugElement.nativeElement;
    const detailElements = compiled.querySelectorAll('.icon-container');

    expect(detailElements.length).toEqual(1);
  });
});
