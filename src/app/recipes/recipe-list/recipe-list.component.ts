import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is simply a test',
    'https://c.pxhere.com/photos/a8/83/sweet_struffoli_typical_sweet_meal_food_recipe_kitchen_dish-754482.jpg!d'),
    new Recipe('test recipe 2', 'this is simply a test',
    'https://c.pxhere.com/photos/a8/83/sweet_struffoli_typical_sweet_meal_food_recipe_kitchen_dish-754482.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
