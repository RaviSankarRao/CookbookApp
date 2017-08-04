
import { EventEmitter } from '@angular/core';

import { Ingredient } from "app/shared/models/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredent(item: Ingredient) {
        this.ingredients.push(item);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}