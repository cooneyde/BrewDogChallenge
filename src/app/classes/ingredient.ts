export class Ingredient {

  constructor(public name: string,
              public amount: object,
              public attribute: string,
              public add?: string,
              public type?: string,
              public buttonState?: string
  ) {
  }
}
