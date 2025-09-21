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
  public getRecipeById(id: number): RecipeModel | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  public addRecipe(recipeName: string): void {
    const maxId = Math.max(...this.recipes.map(recipe => recipe.id));
    const newRecipe: RecipeModel = {
      id: maxId + 1,
      name: recipeName,
      imgUrl: 'https://placehold.co/400x250/cccccc/333333?text=New+Recipe',
      description: 'New recipe description',
      ingredients: [],
      isFavorite: false
    };
    this.recipes.push(newRecipe);
    console.log('Recipe added!', newRecipe);
  }
}
