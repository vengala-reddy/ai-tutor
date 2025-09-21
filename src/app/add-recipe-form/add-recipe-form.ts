import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../recipe';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-recipe-form',
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-recipe-form.html',
  styleUrl: './add-recipe-form.css'
})
export class AddRecipeForm {
  private readonly fb = inject(FormBuilder);
  private readonly recipeService = inject(Recipe);
  private readonly router = inject(Router);

  protected readonly recipeForm = this.fb.group({
    name: ['', Validators.required]
  });

  protected handleSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }
    this.recipeService.addRecipe(this.recipeForm.value.name as string);
    console.log(this.recipeForm.value);
    this.recipeForm.reset();
    this.router.navigate(['/recipes']);
  }

}
