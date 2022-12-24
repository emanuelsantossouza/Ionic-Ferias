import { IListaGenero } from './../models/IGenero.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private Key = '?api_key=3a1be762cd00f764c58adac9955a6e56';

  constructor(private http: HttpClient,
    private toastController: ToastController) { }

  buscarGenero(): Observable<IListaGenero> {
    const url = `${this.apiURL}genre/movie/list${this.Key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url)
}

}
