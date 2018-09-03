export class BeerDetails {


  constructor(
    public id: number,
    public name: string,
    public tagline: string,
    public first_brewed: string,
    public description: string,
    public image_url: string,
    public abv: number,
    public ibu: number,
    public target_fg: number,
    public target_og: number,
    public ebc: number,
    public srm: number,
    public ph: number,
    public attenuation_level: number,
    public volume: object,
    public boil_volume: object,
    public method: object,
    public ingredients: object,
    public food_pairing: object,
    public brewers_tips: string,
    public contributed_by: string
  ) {
  }
}
