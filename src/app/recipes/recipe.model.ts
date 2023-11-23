import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    public _id: any
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient: Ingredient[];
    public height: string;
    public price: Number;
    public star : Number;

    constructor(name:string, description:string, imagePath:string,ingredient: Ingredient[],
        _id?: any, height?: string, price?: Number, star?: Number){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
        this._id = _id;
        this.height = height;
        this.price = price;
        this.star = star
    }
}