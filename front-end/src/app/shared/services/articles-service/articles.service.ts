import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticlesService {
  private articlesURL = 'http://localhost:3000/api/articles/';

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get(this.articlesURL)
                    .map( (response: Response) => response);
  }

  getArticleBySlug(slug) {
    return this.http.get(this.articlesURL + slug)
                    .map( (response: Response) => response);
  }
}
