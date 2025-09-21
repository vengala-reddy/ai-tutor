/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Routes } from '@angular/router';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeList } from './recipe-list/recipe-list';
import { AddRecipeForm } from './add-recipe-form/add-recipe-form';

export const routes: Routes = [
    { path: 'recipes', component: RecipeList },
    { path: 'recipes/:id', component: RecipeDetail }, // The ':id' is a dynamic parameter
    { path: 'add-recipe', component: AddRecipeForm },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];
