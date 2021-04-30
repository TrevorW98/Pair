import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingredientsearch',
    loadChildren: () => import('./pages/home/ingredientsearch/ingredientsearch.module').then( m => m.IngredientsearchPageModule)
  },
  {
    path: 'winesearch',
    loadChildren: () => import('./pages/home/winesearch/winesearch.module').then( m => m.WinesearchPageModule)
  },
  {
    path: 'recipe-main',
    loadChildren: () => import('./pages/home/recipe-main/recipe-main.module').then( m => m.RecipeMainPageModule)
  },
  {
    path: 'recipe-search',
    loadChildren: () => import('./pages/home/recipe-main/recipe-search/recipe-search.module').then( m => m.RecipeSearchPageModule)
  },
  {
    path: 'recipe-name-results',
    loadChildren: () => import('./pages/home/recipe-main/recipe-search/recipe-name-results/recipe-name-results.module').then( m => m.RecipeNameResultsPageModule)
  },
  {
    path: 'recipe-menu-item-results',
    loadChildren: () => import('./pages/home/recipe-main/recipe-search/recipe-menu-item-results/recipe-menu-item-results.module').then( m => m.RecipeMenuItemResultsPageModule)
  },
  {
    path: 'recipe-advanced-results',
    loadChildren: () => import('./pages/home/recipe-main/recipe-search/recipe-advanced-results/recipe-advanced-results.module').then( m => m.RecipeAdvancedResultsPageModule)
  },
  {
    path: 'my-recipes',
    loadChildren: () => import('./pages/home/recipe-main/my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./pages/home/recipe-main/my-recipes/create-recipe/create-recipe.module').then( m => m.CreateRecipePageModule)
  },
  {
    path: 'recipe-info',
    loadChildren: () => import('./pages/home/recipe-main/recipe-search/recipe-info/recipe-info.module').then( m => m.RecipeInfoPageModule)
  },
  {
    path: 'wine-info',
    loadChildren: () => import('./pages/home/winesearch/wine-results/wine-info/wine-info.module').then( m => m.WineInfoPageModule)
  },
  {
    path: 'ingredient-info',
    loadChildren: () => import('./pages/home/ingredientsearch/ingredient-results/ingredient-info/ingredient-info.module').then( m => m.IngredientInfoPageModule)
  },
  {
    path: 'ingredient-results',
    loadChildren: () => import('./pages/home/ingredientsearch/ingredient-results/ingredient-results.module').then( m => m.IngredientResultsPageModule)
  },
  {
    path: 'wine-results',
    loadChildren: () => import('./pages/home/winesearch/wine-results/wine-results.module').then( m => m.WineResultsPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
