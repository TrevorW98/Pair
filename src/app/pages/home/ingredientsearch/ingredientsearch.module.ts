import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientsearchPageRoutingModule } from './ingredientsearch-routing.module';

import { IngredientsearchPage } from './ingredientsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientsearchPageRoutingModule
  ],
  declarations: [IngredientsearchPage]
})
export class IngredientsearchPageModule {}
