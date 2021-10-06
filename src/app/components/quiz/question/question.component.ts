import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() public question: any;
  @Output() public selectedAnswer: EventEmitter<any> = new EventEmitter();

  public selectedAnswerValue: string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.question)
  }

  public chooseAnswer(question: any):void{
    console.log()
    this.selectedAnswer.emit(question)
  }

}
