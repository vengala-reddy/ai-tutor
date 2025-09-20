/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, computed, signal, Signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title: Signal<string> = signal('My Recipe Box');
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
    console.log(this.recipe());    
  }
  protected incrementServings(): void {
    this.servingsCount.update(count => count + 1);
  }

  protected decrementServings(): void {
    this.servingsCount.update(count => count - 1);
  }

  
}
