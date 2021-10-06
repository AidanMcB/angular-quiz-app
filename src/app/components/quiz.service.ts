import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { CategoryItem } from "./welcome/welcome.interface";

@Injectable()
export class QuizService {

  constructor(private _httpClient: HttpClient) {}

  public getCategories(): any {
    return this._httpClient.get('https://opentdb.com/api_category.php');
  }

  public getQuestions(category?: string): any {
    return this._httpClient.get(`https://api.trivia.willfry.co.uk/questions?categories=${category}&limit=10`);
  }

}
