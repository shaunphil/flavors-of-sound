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
import { CategoriesService } from '../../services/categories-service/categories.service';
var CategoriesListComponent = (function () {
    function CategoriesListComponent(router, categoriesService) {
        this.router = router;
        this.categoriesService = categoriesService;
        this.categories = [];
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    CategoriesListComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) { return _this.categories = data.json(); });
    };
    CategoriesListComponent.prototype.transitionToCategory = function (slug) {
        this.router.navigate(['articles', 'categories', slug]);
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    Component({
        selector: 'categories-list',
        templateUrl: './categories-list.component.html',
        styleUrls: ['./categories-list.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        CategoriesService])
], CategoriesListComponent);
export { CategoriesListComponent };
//# sourceMappingURL=../../../../../../src/app/shared/lists/categories-list/categories-list.component.js.map