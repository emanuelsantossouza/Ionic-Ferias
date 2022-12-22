import { IFilmeApi, IListaFilme } from './../models/IFilmeApi.models';
import { FilmeService } from './../services/filme.service';
import { Router } from '@angular/router';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.models';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes ';

  listaFilmes: IFilme[] = [
    {
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg',
      nome: 'Avatar: O Caminho da Água (2022)',
      lancamente: '15/12/2022',
      duracao: '3h 12m',
      classificacao: 83,
      genero: ['Ficção científica', 'Ação', ' Aventura'],
      pagina: '/avatar'
    },

    {
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg',
      nome: 'Wandinha (2022)',
      lancamente: '23/12/2022',
      duracao: 'Temporada 1 | 8 episódios',
      classificacao: 88,
      genero: ['Sci-Fi & Fantasy', 'Mistério', 'Comédia'],
      pagina: '/wandinha'
    },
    {
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6tb0qiqLN9szHPA4i0kY38oaWew.jpg',
      nome: 'Pantera Negra: Wakanda para Sempre (2022)',
      lancamente: '10/11/2022',
      duracao: '2h 42m',
      classificacao: 75,
      genero: ['Ação', 'Aventura', 'Ficção', 'científica'],
      pagina: '/pantera-negra'
    },
    {
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jTrXwK56EoLHHxfBkpwGdfmy2uh.jpg',
      nome: 'Top Gun: Maverick (2022)',
      lancamente: '26/05/2022',
      duracao: '2h 11m',
      classificacao: 83,
      genero: ['Ação', 'Drama'],
      pagina: 'top-gun'
    }

  ];

  listaMovies: IListaFilme | undefined;

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaMovies = dados;
      });
    }
  }

  exbirFilme(filme: IFilmeApi) {
    this.dadosService.guardaDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Sim, Favoritar',
          role: 'confirm',
          handler: () => {
            this.ApresentarComOToast();
          },
        },
      ],
    });

    await alert.present();
  }


  async ApresentarComOToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 1500,
      color: 'tertiary'
    });

    await toast.present();
  }
}
