import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WandinhaPage } from './wandinha.page';

const routes: Routes = [
  {
    path: '',
    component: WandinhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WandinhaPageRoutingModule {}
