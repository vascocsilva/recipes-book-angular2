import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Bacalhau à Brás', 'Very very good', 'https://www.pingodoce.pt/wp-content/uploads/2016/03/617x370_bacalhau.jpg', [
      new Ingredient('bacalhau', 2),
      new Ingredient('batas fritas', 10)
    ]),
    new Recipe('Francesinha', 'Awesome', 'https://www.esnporto.org/sites/default/files/events/images/francesinha3.jpg', [
      new Ingredient('gordura', 100),
      new Ingredient('banha', 200)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
