import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();
  protected readonly servingsCount = signal<number>(1);
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

  protected incrementServings(): void {
    this.servingsCount.update(count => count + 1);
  }

  protected decrementServings(): void {
    this.servingsCount.update(count => count - 1);
  }
}
