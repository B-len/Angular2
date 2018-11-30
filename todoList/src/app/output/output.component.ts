import {Component, Input, OnInit} from '@angular/core';
import {InputComponent} from 'src/app/input/input.component';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
    @Input() preguntas;
    ngOnInit(): void {

    }

}
