import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly recipesService = inject(Recipe);
  protected recipes:RecipeModel[] = this.recipesService.getRecipes();
  protected readonly recipe = signal<RecipeModel>(this.recipes[0]);   
  protected readonly searchTerm = signal<string>('');
  protected readonly filteredRecipes = computed(() => {
    const search = this.searchTerm();
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()));
  });

  protected showRecipe(recipe:RecipeModel): void {
    console.log(`Show ${recipe} button clicked`);
    this.recipe.set(recipe);
    console.log(recipe.imgUrl);
    console.log(this.recipe());    
  }
  
}
