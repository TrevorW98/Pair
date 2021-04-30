import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeMainPage } from './recipe-main.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeMainPageRoutingModule {}
