import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected recipes:RecipeModel[] = MOCK_RECIPES;
  protected readonly recipe = signal<RecipeModel>(this.recipes[0]);   

  protected showRecipe(recipe:RecipeModel): void {
    console.log(`Show ${recipe} button clicked`);
    this.recipe.set(recipe);
    console.log(recipe.imgUrl);
    console.log(this.recipe());    
  }
  
}
