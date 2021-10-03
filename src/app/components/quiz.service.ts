import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { CategoryItem } from "./welcome/welcome.interface";

@Injectable()
export class QuizService {


  constructor(private _httpClient: HttpClient) {}

  public getCategories(): any {
    return this._httpClient.get('https://opentdb.com/api_category.php');
  }

  public getQuestions(): void {
    return;
  }
}
