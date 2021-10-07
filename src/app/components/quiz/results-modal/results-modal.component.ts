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

}
