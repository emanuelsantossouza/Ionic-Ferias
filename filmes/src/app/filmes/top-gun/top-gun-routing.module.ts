import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopGunPage } from './top-gun.page';

const routes: Routes = [
  {
    path: '',
    component: TopGunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopGunPageRoutingModule {}
