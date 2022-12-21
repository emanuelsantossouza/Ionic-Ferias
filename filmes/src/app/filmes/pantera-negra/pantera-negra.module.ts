import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanteraNegraPageRoutingModule } from './pantera-negra-routing.module';

import { PanteraNegraPage } from './pantera-negra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanteraNegraPageRoutingModule
  ],
  declarations: [PanteraNegraPage]
})
export class PanteraNegraPageModule {}
