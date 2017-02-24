var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var ArticlesService = (function () {
    function ArticlesService(http) {
        this.http = http;
        this.articlesURL = 'http://localhost:3000/api/articles/';
    }
    ArticlesService.prototype.getArticles = function () {
        return this.http.get(this.articlesURL)
            .map(function (response) { return response; });
    };
    ArticlesService.prototype.getArticleBySlug = function (slug) {
        return this.http.get(this.articlesURL + slug)
            .map(function (response) { return response; });
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ArticlesService);
export { ArticlesService };
//# sourceMappingURL=../../../../../../src/app/shared/services/articles-service/articles.service.js.map