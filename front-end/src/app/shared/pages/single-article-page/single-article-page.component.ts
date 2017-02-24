import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'app-single-article-page',
  templateUrl: './single-article-page.component.html',
  styleUrls: ['./single-article-page.component.css']
})
export class SingleArticlePageComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loadArticle();
  }

  article = {};

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  loadArticle() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articlesService.getArticleBySlug(params['slug'])
                          .subscribe(data => this.article = data.json());
    });
  }
}
