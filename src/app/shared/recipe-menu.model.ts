import { Ingredient } from "./ingredient.model";

export class Food{
    id!: number;
    price!: number;
    name!: string;
    description!:string;
    imagePath!:string;
    ingredient!: Ingredient[];
    star: number = 0;
}