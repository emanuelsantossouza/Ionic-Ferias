import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WandinhaPageRoutingModule } from './wandinha-routing.module';

import { WandinhaPage } from './wandinha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WandinhaPageRoutingModule
  ],
  declarations: [WandinhaPage]
})
export class WandinhaPageModule {}
