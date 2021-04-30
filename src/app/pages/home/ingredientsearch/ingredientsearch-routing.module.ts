import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientsearchPage } from './ingredientsearch.page';

const routes: Routes = [
  {
    path: '',
    component: IngredientsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsearchPageRoutingModule {}
