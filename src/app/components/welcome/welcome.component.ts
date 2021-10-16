import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
  public readonly angularLogo = '../../../assets/angular-logo.svg';

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
  }

  public startQuiz(category: CategoryItem): void{
    this.router.navigate(['/quiz', { category: category.paramName, categoryName: category.name }]);
  }

  public ngOnDestroy(): void {
    this.destroyGlobalSub$.next();
  }

}
