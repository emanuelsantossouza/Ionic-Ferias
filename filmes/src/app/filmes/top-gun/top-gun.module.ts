import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopGunPageRoutingModule } from './top-gun-routing.module';

import { TopGunPage } from './top-gun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopGunPageRoutingModule
  ],
  declarations: [TopGunPage]
})
export class TopGunPageModule {}
