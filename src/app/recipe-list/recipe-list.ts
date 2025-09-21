import { Component, computed, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected recipes:RecipeModel[] = MOCK_RECIPES;
  protected readonly recipe = signal<RecipeModel>(this.recipes[0]);
  protected servingsCount = signal(1);
  protected readonly ingredients  = computed(() => {
    const recipe = this.recipe();
    return recipe.ingredients.map(ingredient => {
      return {
        name: ingredient.name,
        quantity: ingredient.quantity * this.servingsCount(),
        unit: ingredient.unit,
      };
    });
  });

  

  protected showRecipe(recipe:RecipeModel): void {
    console.log(`Show ${recipe} button clicked`);
    this.recipe.set(recipe);
    console.log(recipe.imgUrl);
    this.servingsCount.set(1);
    console.log(this.recipe());    
  }
  protected incrementServings(): void {
    this.servingsCount.update(count => count + 1);
  }

  protected decrementServings(): void {
    this.servingsCount.update(count => count - 1);
  }
}
