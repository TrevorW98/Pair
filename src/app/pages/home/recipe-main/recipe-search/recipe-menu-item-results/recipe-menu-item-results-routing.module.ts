import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMenuItemResultsPage } from './recipe-menu-item-results.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeMenuItemResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeMenuItemResultsPageRoutingModule {}
