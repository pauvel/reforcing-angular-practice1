import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public titulo: string = 'Contador App';
  public numero: number = 0;


  acumular(valor:number):void {
    this.numero+=valor;
  }

}
