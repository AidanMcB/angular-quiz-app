import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionItem, QuizState } from '../quiz.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() public question: QuestionItem;
  @Input() public quizState: QuizState;
  @Output() public selectedAnswer: EventEmitter<any> = new EventEmitter();

  public questionStatus: string = 'question-card';

  constructor() { }

  ngOnInit(): void {
  }

  public ngOnChanges(change: any): void {
    if(this.quizState.isSubmitted){
      this.questionStatus = this.question.isCorrect ? 'question-card correct' : 'question-card incorrect';
    }
  }

  public chooseAnswer(answer: any):void{
    this.question.selectedAnswer = answer;
    this.question.isCorrect = this.question.selectedAnswer == this.question.correctAnswer ? true : false;
  }

  public updateAnswerClass(answer: string):string{
  if(this.quizState.isSubmitted){
    if(answer != this.question.correctAnswer && answer == this.question.selectedAnswer){
      return 'answer incorrect';
    }else if (answer == this.question.correctAnswer){
      return 'answer correct';
    }
  }
    return 'answer';
  }


}
