import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Recipe 1', 'description for the recipe', 'http://www.clker.com/cliparts/V/y/8/o/h/Z/recipe-for-good-relationship.svg'),
    new Recipe('Recipe 2', 'description for the recipe', 'http://www.lakritzplanet.de/wp-content/uploads/2013/06/rezept-300x300.jpg'),
    new Recipe('Recipe 3', 'description for the recipe', 'http://www.mmovi.hu/part-images/aktualis.ico'),
    new Recipe('Recipe 4', 'description for the recipe', 'https://lh3.googleusercontent.com/-ApYH4XWO8FMop8XVVHSWNP5JRjbLy1YqXvTWhZ_DqxeMSMM5Ik4mQv0KFF5Teoa43s=w300'),
  ];

  @Output()
  public recipeDetails = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe: Recipe) {
    this.recipeDetails.emit(recipe);
  }
}
