var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';
var ArticleListComponent = (function () {
    function ArticleListComponent(router, articlesService) {
        this.router = router;
        this.articlesService = articlesService;
        this.articles = [];
        this.displayedArticles = [];
        this.numberOfAdditionalClicks = 0;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.loadArticles();
    };
    ArticleListComponent.prototype.loadArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (data) {
            _this.articles = data.json();
            _this.adjustListToWindowSize(window.innerWidth);
        });
    };
    ArticleListComponent.prototype.loadMoreButtonClicked = function () {
        this.numberOfAdditionalClicks += 1;
        this.adjustListToWindowSize(window.innerWidth);
    };
    ArticleListComponent.prototype.onWindowResize = function (event) {
        var newWidth = event.target.innerWidth;
        this.adjustListToWindowSize(newWidth);
    };
    ArticleListComponent.prototype.adjustListToWindowSize = function (width) {
        var numberOfItemsToDisplay;
        if (width > 830) {
            numberOfItemsToDisplay = 3 + this.numberOfAdditionalClicks * 3;
        }
        else if (width > 550) {
            numberOfItemsToDisplay = 4 + this.numberOfAdditionalClicks * 4;
        }
        else {
            numberOfItemsToDisplay = 3 + this.numberOfAdditionalClicks * 3;
        }
        this.displayedArticles = this.articles.slice(0, numberOfItemsToDisplay);
    };
    return ArticleListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], ArticleListComponent.prototype, "title", void 0);
ArticleListComponent = __decorate([
    Component({
        selector: 'article-list',
        templateUrl: './article-list.component.html',
        styleUrls: ['./article-list.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ArticlesService])
], ArticleListComponent);
export { ArticleListComponent };
//# sourceMappingURL=../../../../../../src/app/shared/lists/article-list/article-list.component.js.map