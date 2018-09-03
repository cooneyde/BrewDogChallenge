import {Ingredient} from './ingredient';
import {isArray, isObject} from 'util';


const initialState = 'IDLE';
const sortingMap = {
  start: 1,
  middle: 2,
  end: 3
};

export class IngredientListBuilder {

  constructor() {
  }


  /**
   * Orders the hops on their add value, hops are sorted by start, middle, end
   * @param hopsList  Flattened list of hops
   */
  static orderHops(hopsList) {

    hopsList = hopsList.sort((a, b) => sortingMap[a.add] - sortingMap[b.add]);
    return hopsList;
  }


  /**
   * Flattens the Ingredients object from the BrewDog API into an Array of Ingredient Objects
   * @param ingredientsList
   */
  static buildListOfIngredients(ingredientsList) {

    let list: Ingredient[] = [];

    ingredientsList.hops = this.orderHops(ingredientsList.hops);

    Object.keys(ingredientsList).forEach((type) => {

      const typeObject = ingredientsList[type];

      if (isArray(typeObject)) {
        typeObject.forEach((item) => {

          let ingredient: Ingredient = item;
          ingredient.type = type;
          ingredient.buttonState = initialState;

          list.push(ingredient);

        });
      } else if (isObject(typeObject)) {

        let ingredient: Ingredient = typeObject;
        ingredient.type = type;
        ingredient.buttonState = initialState;
        list.push(ingredient);
      } else {

        let ingredient = new Ingredient(typeObject, null, null, null, type, initialState);
        list.push(ingredient);
      }
    });
    return list;
  }


  /**
   * Scans ingredient objects which have the add parameter set to start or middle to determine if their child can be set to done, e.g.
   * checks all add=start items have their buttonStates set to DONE before an add=middle item's state may change
   * @param ingredientsList       Array of Ingredient Objects
   * @param currentIngredientIt   Current iterator in the ingredientsList for the target object
   * @param type
   */
  static checkParentIngredientStates(ingredientsList, currentIngredientIt, type) {

    let returned = true;
    if (currentIngredientIt > 0 && type === 'hops') {

      const currentIngredientAddOrder = ingredientsList[currentIngredientIt].add;

      if (currentIngredientAddOrder === 'start') {
        returned = true;
      } else if (currentIngredientAddOrder === 'middle') {

        let buttonStates = [];
        const filteredIngredientsList = ingredientsList.filter(item => item.add === 'start');
        filteredIngredientsList.forEach(item => buttonStates.push(item.buttonState));
        returned = buttonStates.every((item) => item === 'DONE');

      } else if (currentIngredientAddOrder === 'end') {

        let buttonStates = [];
        const filteredIngredientsList = ingredientsList.filter(item => item.add === 'middle');
        filteredIngredientsList.forEach(item => buttonStates.push(item.buttonState));
        returned = buttonStates.every((item) => item === 'DONE');
      }

    }
    return returned;
  }

}
