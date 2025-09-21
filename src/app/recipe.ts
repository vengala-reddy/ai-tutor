import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class Recipe {
  protected recipes:RecipeModel[] = MOCK_RECIPES;
  public getRecipes(): RecipeModel[] {
    return this.recipes;
  }
}
