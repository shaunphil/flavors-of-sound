import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  private categoriesURL = 'http://localhost:3000/api/categories/';

  constructor(private http: Http) { }

  getCategories() {
    return this.http.get(this.categoriesURL)
                    .map( (response: Response) => response);
  }

  getCategoryBySlug(slug) {
    return this.http.get(this.categoriesURL + slug)
                    .map( (response: Response) => response);
  }
}
