import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { QuizService } from '../quiz.service';
import { QuestionItem, QuizState } from './quiz.interface';
import { QuizComponentDefaultState } from './quiz.models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public categoryName: string;
  public quizQuestions: any = [];
  public isLoading: boolean = false;
  public isUnfinished: boolean = true;
  public isSubmitted: boolean = false;

  public quizState$ = new BehaviorSubject<QuizState>(QuizComponentDefaultState);

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _quizService: QuizService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.isLoading = true;
    this.categoryName = this._ActivatedRoute.snapshot.paramMap.get('categoryName') || '';
    const category = this._ActivatedRoute.snapshot.paramMap.get('category') || '';
    this._quizService.getQuestions(category).subscribe((questionItems: QuestionItem[]) => {
      this._parsePossibleAnswers(questionItems);
      this.isLoading = false;
    });
  }

  private _parsePossibleAnswers(questionItems: any):void {
    questionItems.forEach((item: QuestionItem) => {
      let randomIndex = Math.floor(Math.random() * 3);
      item.allPossibleAnswers = item.incorrectAnswers;
      item.allPossibleAnswers?.splice(randomIndex, 0, item.correctAnswer)
      this.quizQuestions.push(item)
    });
  }

  public submitQuiz(): void {
    if(!this.isSubmitted){
      if(this.quizQuestions.every( (x:any )=> x.selectedAnswer?.length > 0 )){
        const correctAnswers = this.quizQuestions.filter( (question: any) => question.isCorrect == true).length;
        this.quizState$.next({isSubmitted: true, score: correctAnswers, isModalHidden: false});
        this.isSubmitted = true;
      }
    } else{
      this.resetQuiz();
    }
  }

  private resetQuiz(): void {
    this.quizState$.next(QuizComponentDefaultState);
    this.router.navigate(['/',]);
  }

}
