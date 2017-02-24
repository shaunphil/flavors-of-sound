var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';
var LatestComponent = (function () {
    function LatestComponent(router, articlesService) {
        this.router = router;
        this.articlesService = articlesService;
        this.articles = [];
    }
    LatestComponent.prototype.ngOnInit = function () {
        this.loadArticles();
    };
    LatestComponent.prototype.loadArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (data) { return _this.articles = data.json(); });
    };
    LatestComponent.prototype.transitionToArticle = function (slug) {
        this.router.navigate(['articles', slug]);
    };
    return LatestComponent;
}());
LatestComponent = __decorate([
    Component({
        selector: 'latest-list',
        templateUrl: './latest.component.html',
        styleUrls: ['./latest.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ArticlesService])
], LatestComponent);
export { LatestComponent };
//# sourceMappingURL=../../../../../../src/app/shared/lists/latest/latest.component.js.map