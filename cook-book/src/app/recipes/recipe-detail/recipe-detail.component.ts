import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../shared/models/recipe.model';
import { ShoppingListService } from '../../shared/services/shopping-list-service/shopping-list.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

  onAddToShoppingList() {
    this.shoppingListService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
