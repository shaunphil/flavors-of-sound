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
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles-service/articles.service';
var SingleArticlePageComponent = (function () {
    function SingleArticlePageComponent(articlesService, activatedRoute) {
        this.articlesService = articlesService;
        this.activatedRoute = activatedRoute;
        this.article = {};
        this.loadArticle();
    }
    SingleArticlePageComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    SingleArticlePageComponent.prototype.loadArticle = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.articlesService.getArticleBySlug(params['slug'])
                .subscribe(function (data) { return _this.article = data.json(); });
        });
    };
    return SingleArticlePageComponent;
}());
SingleArticlePageComponent = __decorate([
    Component({
        selector: 'app-single-article-page',
        templateUrl: './single-article-page.component.html',
        styleUrls: ['./single-article-page.component.css']
    }),
    __metadata("design:paramtypes", [ArticlesService,
        ActivatedRoute])
], SingleArticlePageComponent);
export { SingleArticlePageComponent };
//# sourceMappingURL=../../../../../../src/app/shared/pages/single-article-page/single-article-page.component.js.map