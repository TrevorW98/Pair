import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeAdvancedResultsPage } from './recipe-advanced-results.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeAdvancedResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeAdvancedResultsPageRoutingModule {}
