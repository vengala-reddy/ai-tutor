import { Component, computed, inject, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  protected readonly route = inject(ActivatedRoute);
  protected readonly recipeService = inject(Recipe);  
  protected readonly recipe = signal<RecipeModel | undefined>(undefined);
  protected readonly servingsCount = signal<number>(1);
  protected readonly ingredients  = computed(() => {
    const recipe = this.recipe();
    if (!recipe) {
      return [];
    }
    return recipe?.ingredients.map(ingredient => {
      return {
        name: ingredient.name,
        quantity: ingredient.quantity * this.servingsCount(),
        unit: ingredient.unit,
      };
    });
  });

  constructor() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.recipe.set(this.recipeService.getRecipeById(id));
    });
  }

  protected incrementServings(): void {
    this.servingsCount.update(count => count + 1);
  }

  protected decrementServings(): void {
    this.servingsCount.update(count => count - 1);
  }
}
