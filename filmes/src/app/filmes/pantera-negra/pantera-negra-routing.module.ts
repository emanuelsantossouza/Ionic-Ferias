import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanteraNegraPage } from './pantera-negra.page';

const routes: Routes = [
  {
    path: '',
    component: PanteraNegraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanteraNegraPageRoutingModule {}
