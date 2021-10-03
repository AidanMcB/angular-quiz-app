import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CategoryItem } from '../welcome/welcome.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public quizQuestions: any = [];
  public categoryName: string;
 public test: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //listen for category item selected emit event
  }



}
