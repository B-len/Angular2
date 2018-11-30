import { Component, Input} from '@angular/core';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    respuestas = ['Si', 'No', 'A veces', 'Muchas veces', 'Para nada', 'En absoluto', 'Siempre'];


    preguntas = [];
    cogePregunta(texto){
       const  respuesta = this.respuestas[Math.floor(Math.random() * this.respuestas.length)];
       const newRespuesta={
           pregunta:texto,
           respuesta:respuesta
       }
       this.preguntas.unshift(newRespuesta);

    }
}
