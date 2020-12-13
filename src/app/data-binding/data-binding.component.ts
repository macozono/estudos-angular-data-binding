import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://teste.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/';
  valorAtual: string = '';
  valorSalvo: string = '';
  mouseOver: boolean = false;
  nomeDoCurso: string = 'Curso de Angular';
  valorInicial: number = 15;
  
  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao clicado');
  }

  onKeyUp(evento:KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
