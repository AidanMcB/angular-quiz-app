import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { QuizService } from '../quiz.service';
import { CategoryItem } from './welcome.interface';
import quizCategories from '../../../assets/categories.json'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  public categories: CategoryItem[] = quizCategories;
  public readonly destroyGlobalSub$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
  }

  public startQuiz(category: CategoryItem): void{
    this.router.navigate(['/quiz', { category: category.paramName }]);
  }

  public ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroyGlobalSub$.next();
  }



}
//categories
//https://opentdb.com/api_category.php

//ca2b7215b1c2639d2de71d429bb28f52af1bfe8162bad41bae49b02ea50129ce
