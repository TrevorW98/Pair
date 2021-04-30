import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineResultsPage } from './wine-results.page';

const routes: Routes = [
  {
    path: '',
    component: WineResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WineResultsPageRoutingModule {}
