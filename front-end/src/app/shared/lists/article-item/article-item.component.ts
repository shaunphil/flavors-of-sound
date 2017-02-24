import { Component, OnInit } from '@angular/core';
import { Article } from '../../classes/Article';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})

export class ArticleItemComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  transitionToArticle(slug) {
    this.router.navigate(['articles', slug]);
  }
}
