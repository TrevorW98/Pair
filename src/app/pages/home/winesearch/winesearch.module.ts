import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinesearchPageRoutingModule } from './winesearch-routing.module';

import { WinesearchPage } from './winesearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinesearchPageRoutingModule
  ],
  declarations: [WinesearchPage]
})
export class WinesearchPageModule {}
