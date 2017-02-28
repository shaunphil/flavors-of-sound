import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticlesService {
  private articlesURL = 'http://ec2-52-40-207-198.us-west-2.compute.amazonaws.com:3000/api/articles/';

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
