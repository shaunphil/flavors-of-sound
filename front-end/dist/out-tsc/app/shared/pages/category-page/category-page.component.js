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
var CategoryPageComponent = (function () {
    function CategoryPageComponent() {
        this.category = {
            name: "Some Category"
        };
    }
    CategoryPageComponent.prototype.ngOnInit = function () { };
    return CategoryPageComponent;
}());
CategoryPageComponent = __decorate([
    Component({
        selector: 'category-page',
        templateUrl: './category-page.component.html',
        styleUrls: ['./category-page.component.css']
    }),
    __metadata("design:paramtypes", [])
], CategoryPageComponent);
export { CategoryPageComponent };
//# sourceMappingURL=../../../../../../src/app/shared/pages/category-page/category-page.component.js.map