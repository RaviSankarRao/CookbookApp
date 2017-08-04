import { EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe('Recipe 1', 'description for the recipe', 'http://www.clker.com/cliparts/V/y/8/o/h/Z/recipe-for-good-relationship.svg'),
        new Recipe('Recipe 2', 'description for the recipe', 'http://www.lakritzplanet.de/wp-content/uploads/2013/06/rezept-300x300.jpg'),
        new Recipe('Recipe 3', 'description for the recipe', 'http://www.mmovi.hu/part-images/aktualis.ico'),
        new Recipe('Recipe 4', 'description for the recipe', 'https://lh3.googleusercontent.com/-ApYH4XWO8FMop8XVVHSWNP5JRjbLy1YqXvTWhZ_DqxeMSMM5Ik4mQv0KFF5Teoa43s=w300'),
    ];

    getRecipes(): Recipe[] {
        // return this.recipes;

        // slice returns a new array, hence breaking the pass by reference of array types
        return this.recipes.slice(); 
    }
}