import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  dadoIzquierdo = '../assets/img/dice1.png';
  dadoDerecho = '../assets/img/dice4.png';
  number1: number = 1;
  number2: number = 2;

  tirarDados(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1
    this.dadoIzquierdo = '../assets/img/dice' + this.number1 + '.png';
    this.dadoDerecho = '../assets/img/dice' + this.number2 + '.png';    
  }
}
