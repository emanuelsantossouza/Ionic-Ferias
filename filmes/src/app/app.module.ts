import { DadosService } from './services/dados.service';
import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DadosService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }



