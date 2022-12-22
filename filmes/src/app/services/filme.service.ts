import { HttpClient } from '@angular/common/http';
import { IListaFilme } from './../models/IFilmeApi.models';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private Key = '?api_key=3a1be762cd00f764c58adac9955a6e56';

  constructor(
    private http: HttpClient,
    private toastController: ToastController) { }


  buscarFilmes(busca: string): Observable<IListaFilme>{
    const url = `${this.apiURL}search/movie${this.Key}&language=${this.lingua}&regian=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilme>(url)
  }


  async exibirErro() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });

     toast.present();
    return null;
  }
}
