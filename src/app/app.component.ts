import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
    // Se puede hacer manteniento los input de tipo text: cambiar de number a string en la class y parseando en el metodo
    //this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void {
    this.resultado = this.numero1 / this.numero2;
  }
}
