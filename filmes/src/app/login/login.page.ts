import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email?: string;
  senha?: string;


  constructor(private toastController: ToastController, private router:Router) { }



  ngOnInit() {
  }

  login() {
    if (this.email === 'admin@admi.com' && this.senha === 'admin') {
      this.router.navigateByUrl('/tabs/tabs1');
      this.presentToast('Seja bem vindo!!', 'Success')
    }

  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      color: cor
    });

    toast.present();
  }
}

