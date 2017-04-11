import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe("Dumy","dumy","http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/a/3a/a3ac2583-4bf3-5a43-b71a-8ae061279d43/555de70049716.image.gif");
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
