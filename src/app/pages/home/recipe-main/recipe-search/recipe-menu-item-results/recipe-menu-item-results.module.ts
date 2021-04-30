import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeMenuItemResultsPageRoutingModule } from './recipe-menu-item-results-routing.module';

import { RecipeMenuItemResultsPage } from './recipe-menu-item-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeMenuItemResultsPageRoutingModule
  ],
  declarations: [RecipeMenuItemResultsPage]
})
export class RecipeMenuItemResultsPageModule {}
