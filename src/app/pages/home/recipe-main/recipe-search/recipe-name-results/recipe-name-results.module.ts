import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeNameResultsPageRoutingModule } from './recipe-name-results-routing.module';

import { RecipeNameResultsPage } from './recipe-name-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeNameResultsPageRoutingModule
  ],
  declarations: [RecipeNameResultsPage]
})
export class RecipeNameResultsPageModule {}
