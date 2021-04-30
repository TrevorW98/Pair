import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineInfoPage } from './wine-info.page';

const routes: Routes = [
  {
    path: '',
    component: WineInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WineInfoPageRoutingModule {}
