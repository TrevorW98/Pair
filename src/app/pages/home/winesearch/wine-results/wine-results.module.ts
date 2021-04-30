import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WineResultsPageRoutingModule } from './wine-results-routing.module';

import { WineResultsPage } from './wine-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WineResultsPageRoutingModule
  ],
  declarations: [WineResultsPage]
})
export class WineResultsPageModule {}
