import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from "../../shared/services/recipe-service/recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  // @Output()
  // public recipeDetails = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  showRecipeDetails(recipe: Recipe) {
    // this.recipeDetails.emit(recipe);
    this.recipeService.recipeSelected.emit(recipe);
  }
}
