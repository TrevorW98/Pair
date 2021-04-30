import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeMainPageRoutingModule } from './recipe-main-routing.module';

import { RecipeMainPage } from './recipe-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeMainPageRoutingModule
  ],
  declarations: [RecipeMainPage]
})
export class RecipeMainPageModule {}
