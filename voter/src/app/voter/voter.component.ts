import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: "voter" ,
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {
    hasVoted = false;
@Input() name: string;
@Output()voted = new EventEmitter<boolean>();
vote(agree: boolean) {
    if (!this.hasVoted) {
        this.voted.emit(agree);
        this.hasVoted = true;
    }

    }
}
