import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'most-popular-list',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) {}

  articles = [];

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articlesService.getArticles().subscribe(data => this.articles = data.json());
  }

  transitionToArticle(slug) {
    this.router.navigate(['articles', slug]);
  }
}
