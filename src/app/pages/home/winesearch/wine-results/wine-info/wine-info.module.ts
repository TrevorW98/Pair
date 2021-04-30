import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WineInfoPageRoutingModule } from './wine-info-routing.module';

import { WineInfoPage } from './wine-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WineInfoPageRoutingModule
  ],
  declarations: [WineInfoPage]
})
export class WineInfoPageModule {}
