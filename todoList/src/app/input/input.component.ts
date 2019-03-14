import {Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input' ,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
    @Output() newQuestion = new EventEmitter<string>();
    miPregunta = '';
    cogePregunta() {
        if (this.miPregunta.trim()) {
            this.newQuestion.emit(this.miPregunta.trim());
            this.miPregunta = '';
        }
    }

}
