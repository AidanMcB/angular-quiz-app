import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';
import { QuestionItem } from './quiz.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public quizQuestions: any = [];
  public categoryName: string;
  public loading: boolean = false;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _quizService: QuizService
  ) { }

  public ngOnInit(): void {
    this.loading = true;
    const category = this._ActivatedRoute.snapshot.paramMap.get('category') || '';
    this._quizService.getQuestions(category).subscribe((questionItems: QuestionItem[]) => {
      this._parsePossibleAnswers(questionItems);
      this.loading = false;
    })
  }

  private _parsePossibleAnswers(questionItems: any):void {
    questionItems.forEach((item: QuestionItem) => {
      let randomIndex = Math.floor(Math.random() * 3);
      item.allPossibleAnswers = item.incorrectAnswers;
      item.allPossibleAnswers?.splice(randomIndex, 0, item.correctAnswer)
      this.quizQuestions.push(item)
    });
  }

  public selectAnswer(event: any): void {
    console.log(event)
  }

  public evaulateQuiz(): void {
    //emit isAnswered from question
    // one all questions are answered, evaluation in the question component

  }

  private decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  /*
  public key: 446203417d5d0964fe52ba0f0761db3f
  private key: e7b52f24a32e3a5cc99e241dafa64db8ed94ffba

  */


}
