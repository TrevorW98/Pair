import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientResultsPage } from './ingredient-results.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientResultsPageRoutingModule {}
