import { Component, Input, OnInit } from '@angular/core';
import { QuizState } from '../quiz.interface';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']
})
export class ResultsModalComponent implements OnInit {

  @Input() quizState: QuizState;

  constructor() { }

  ngOnInit(): void {
  }

  public exit(): void {
    console.log("close")
  }

  //make modal background cover the screen
  //modal should cover only a protion
  //ability to close the modal and see which ones you got wrong
  // stretch => personalized message based on how well you did


}
