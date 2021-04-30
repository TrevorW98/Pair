import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeNameResultsPage } from './recipe-name-results.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeNameResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeNameResultsPageRoutingModule {}
