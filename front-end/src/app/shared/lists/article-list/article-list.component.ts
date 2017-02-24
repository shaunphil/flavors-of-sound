import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() title: String;

  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) {}

  articles = [];
  displayedArticles = [];
  numberOfAdditionalClicks = 0;

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articlesService.getArticles().subscribe(data => {
      this.articles = data.json();
      this.adjustListToWindowSize(window.innerWidth);
    });
  }

  loadMoreButtonClicked() {
    this.numberOfAdditionalClicks += 1;
    this.adjustListToWindowSize(window.innerWidth);
  }

  onWindowResize(event) {
    const newWidth = event.target.innerWidth;
    this.adjustListToWindowSize(newWidth);
  }

  adjustListToWindowSize(width) {
    var numberOfItemsToDisplay;
    if (width > 830) {
      numberOfItemsToDisplay = 3 + this.numberOfAdditionalClicks * 3;
    } else if (width > 550) {
      numberOfItemsToDisplay = 4 + this.numberOfAdditionalClicks * 4;
    } else {
      numberOfItemsToDisplay = 3 + this.numberOfAdditionalClicks * 3;
    }

    this.displayedArticles = this.articles.slice(0, numberOfItemsToDisplay);
  }
}
