import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./filmes/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'wandinha',
    loadChildren: () => import('./filmes/wandinha/wandinha.module').then( m => m.WandinhaPageModule)
  },
  {
    path: 'pantera-negra',
    loadChildren: () => import('./filmes/pantera-negra/pantera-negra.module').then( m => m.PanteraNegraPageModule)
  },
  {
    path: 'top-gun',
    loadChildren: () => import('./filmes/top-gun/top-gun.module').then( m => m.TopGunPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
