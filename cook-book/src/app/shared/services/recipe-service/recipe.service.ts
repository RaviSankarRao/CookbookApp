import { EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { Ingredient } from '../../models/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe(
            'Chicken Burger', 
            'Burger with chieckn breast', 
            'http://www.clker.com/cliparts/V/y/8/o/h/Z/recipe-for-good-relationship.svg',
            [
                new Ingredient('Chicken breast', 1),
                new Ingredient('Burger bun', 2),
                new Ingredient('Tomato', 1),
                new Ingredient('Lettuce', 1)
            ]),

        new Recipe(
            'Penne Pasta', 
            'pasta....thats it', 
            'http://www.lakritzplanet.de/wp-content/uploads/2013/06/rezept-300x300.jpg',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Sauce', 1),
                new Ingredient('Veges', 1)
            ]),

        
    ];

    getRecipes(): Recipe[] {
        // return this.recipes;

        // slice returns a new array, hence breaking the pass by reference of array types
        return this.recipes.slice(); 
    }
}