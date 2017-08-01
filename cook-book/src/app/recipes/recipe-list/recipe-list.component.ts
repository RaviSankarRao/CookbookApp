import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Recipe 1', 'description for the recipe', 'http://www.hurontitle.com/recipecard1.jpg'),
    new Recipe('Recipe 2', 'description for the recipe', 'http://www.hurontitle.com/recipecard1.jpg'),
    new Recipe('Recipe 3', 'description for the recipe', 'http://www.hurontitle.com/recipecard1.jpg'),
    new Recipe('Recipe 4', 'description for the recipe', 'http://www.hurontitle.com/recipecard1.jpg'),
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
