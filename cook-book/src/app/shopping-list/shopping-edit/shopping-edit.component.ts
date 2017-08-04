import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/models/ingredient.model'
import { ShoppingListService } from "../../shared/services/shopping-list-service/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInputref: ElementRef;

  @ViewChild('amountInput')
  amountInputref: ElementRef;

  // @Output()
  // addedIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { 

  }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputref.nativeElement.value, 
    this.amountInputref.nativeElement.value);

    //this.addedIngredient.emit(newIngredient);
    this.shoppingListService.addIngredent(newIngredient);

    this.nameInputref.nativeElement.value = null;
    this.amountInputref.nativeElement.value = null;
  }
}
