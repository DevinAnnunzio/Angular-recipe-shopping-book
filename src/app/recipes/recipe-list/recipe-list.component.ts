import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test recipe", "test desc", "https://m.media-amazon.com/images/I/61+FjwbQ3gL._AC_UF894,1000_QL80_.jpg")
  ]

}
