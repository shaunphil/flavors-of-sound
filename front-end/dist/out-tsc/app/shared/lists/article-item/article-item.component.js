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
import { Article } from '../../classes/Article';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
var ArticleItemComponent = (function () {
    function ArticleItemComponent(router) {
        this.router = router;
    }
    ArticleItemComponent.prototype.ngOnInit = function () { };
    ArticleItemComponent.prototype.transitionToArticle = function (slug) {
        this.router.navigate(['articles', slug]);
    };
    return ArticleItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Article)
], ArticleItemComponent.prototype, "article", void 0);
ArticleItemComponent = __decorate([
    Component({
        selector: 'article-item',
        templateUrl: './article-item.component.html',
        styleUrls: ['./article-item.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], ArticleItemComponent);
export { ArticleItemComponent };
//# sourceMappingURL=../../../../../../src/app/shared/lists/article-item/article-item.component.js.map