import { CpfValidator } from './../validators/cpf-validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        telefone: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
        senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  salvarCadastro() {
    console.log('Formulario: ', this.formCadastro.valid);
  }
}
