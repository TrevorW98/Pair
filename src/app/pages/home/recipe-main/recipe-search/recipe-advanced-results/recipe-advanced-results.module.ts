import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeAdvancedResultsPageRoutingModule } from './recipe-advanced-results-routing.module';

import { RecipeAdvancedResultsPage } from './recipe-advanced-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeAdvancedResultsPageRoutingModule
  ],
  declarations: [RecipeAdvancedResultsPage]
})
export class RecipeAdvancedResultsPageModule {}
