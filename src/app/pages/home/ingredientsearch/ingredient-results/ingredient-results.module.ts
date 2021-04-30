import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngredientResultsPageRoutingModule } from './ingredient-results-routing.module';

import { IngredientResultsPage } from './ingredient-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngredientResultsPageRoutingModule
  ],
  declarations: [IngredientResultsPage]
})
export class IngredientResultsPageModule {}
