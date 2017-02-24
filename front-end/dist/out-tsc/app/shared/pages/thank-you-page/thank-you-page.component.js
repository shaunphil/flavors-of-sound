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
var ThankYouPageComponent = (function () {
    function ThankYouPageComponent(router) {
        this.router = router;
    }
    ThankYouPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 3000);
    };
    return ThankYouPageComponent;
}());
ThankYouPageComponent = __decorate([
    Component({
        selector: 'app-thank-you-page',
        templateUrl: './thank-you-page.component.html',
        styleUrls: ['./thank-you-page.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], ThankYouPageComponent);
export { ThankYouPageComponent };
//# sourceMappingURL=../../../../../../src/app/shared/pages/thank-you-page/thank-you-page.component.js.map