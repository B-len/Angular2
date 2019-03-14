import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    respuestas = [{
        name: 'si' ,
        type: 'af'
    }, {
        name: 'no' ,
        type: 'neg'
    }, {
        name : 'quizás',
        type : 'neu'
    }];

    // const result = words.filter(word => word.length > 6);


    preguntas = [];
    cogePregunta(texto) {
       const  res = this.respuestas[Math.floor(Math.random() * this.respuestas.length)];
        const respuesta = res.name;
        const tipo = res.type;
       const newRespuesta = {
           pregunta: texto,
           respuesta : respuesta,
           tipo : tipo
       };

       this.preguntas.unshift(newRespuesta);

    }

}
