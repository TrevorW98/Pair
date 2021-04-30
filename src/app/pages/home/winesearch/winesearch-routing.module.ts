import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinesearchPage } from './winesearch.page';

const routes: Routes = [
  {
    path: '',
    component: WinesearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinesearchPageRoutingModule {}
