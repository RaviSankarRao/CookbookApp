import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Recipe 1', 'description for the recipe', 'http://www.hurontitle.com/recipecard1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
