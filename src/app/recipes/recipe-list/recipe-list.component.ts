import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bacalhau à Brás', 'Very very good', 'https://www.pingodoce.pt/wp-content/uploads/2016/03/617x370_bacalhau.jpg', []),
    new Recipe('Francesinha', 'Awesome', 'https://www.esnporto.org/sites/default/files/events/images/francesinha3.jpg', [])
  ];
  // recipe = new Recipe('Dummy', 'Dummy', 'http://www.pollosdumy.com/ribbon.png');
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
