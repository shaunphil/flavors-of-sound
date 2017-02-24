webpackJsonp([0,3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    ArticlesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ArticlesService);
    return ArticlesService;
    var _a;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/articles.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__(711),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/about-page.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlesPageComponent = (function () {
    function ArticlesPageComponent() {
    }
    ArticlesPageComponent.prototype.ngOnInit = function () { };
    ArticlesPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'articles-page',
            template: __webpack_require__(712),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], ArticlesPageComponent);
    return ArticlesPageComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/articles-page.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryPageComponent = (function () {
    function CategoryPageComponent() {
        this.category = {
            name: "Some Category"
        };
    }
    CategoryPageComponent.prototype.ngOnInit = function () { };
    CategoryPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'category-page',
            template: __webpack_require__(713),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryPageComponent);
    return CategoryPageComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/category-page.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(714),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/home-page.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsPageComponent = (function () {
    function ProductsPageComponent() {
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    ProductsPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-products-page',
            template: __webpack_require__(715),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsPageComponent);
    return ProductsPageComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/products-page.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleArticlePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    SingleArticlePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-single-article-page',
            template: __webpack_require__(716),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SingleArticlePageComponent);
    return SingleArticlePageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/single-article-page.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    ThankYouPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-thank-you-page',
            template: __webpack_require__(717),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], ThankYouPageComponent);
    return ThankYouPageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/thank-you-page.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categoriesURL = 'http://localhost:3000/api/categories/';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesURL)
            .map(function (response) { return response; });
    };
    CategoriesService.prototype.getCategoryBySlug = function (slug) {
        return this.http.get(this.categoriesURL + slug)
            .map(function (response) { return response; });
    };
    CategoriesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], CategoriesService);
    return CategoriesService;
    var _a;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/categories.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailSignupService = (function () {
    function EmailSignupService(http) {
        this.http = http;
        this.signupEndpoint = "http://localhost:3000/api/temp-users";
    }
    EmailSignupService.prototype.signupUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(this.signupEndpoint, user, options)
            .map(function (response) { return response; });
    };
    EmailSignupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], EmailSignupService);
    return EmailSignupService;
    var _a;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/email-signup.service.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(699),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_nav_bar_nav_bar_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* rootRouter */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_pages_home_page_home_page_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_pages_articles_page_articles_page_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_pages_products_page_products_page_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pages_about_page_about_page_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_pages_single_article_page_single_article_page_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pages_category_page_category_page_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pages_thank_you_page_thank_you_page_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouter; });








var rootRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_pages_home_page_home_page_component__["a" /* HomePageComponent */]
    }, {
        path: 'articles',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_pages_articles_page_articles_page_component__["a" /* ArticlesPageComponent */]
    }, {
        path: 'articles/:slug',
        component: __WEBPACK_IMPORTED_MODULE_5__shared_pages_single_article_page_single_article_page_component__["a" /* SingleArticlePageComponent */]
    }, {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_pages_products_page_products_page_component__["a" /* ProductsPageComponent */]
    }, {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__shared_pages_about_page_about_page_component__["a" /* AboutPageComponent */]
    }, {
        path: 'thank-you',
        component: __WEBPACK_IMPORTED_MODULE_7__shared_pages_thank_you_page_thank_you_page_component__["a" /* ThankYouPageComponent */]
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'articles/categories/:category',
        component: __WEBPACK_IMPORTED_MODULE_6__shared_pages_category_page_category_page_component__["a" /* CategoryPageComponent */]
    }, {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]);
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/app.routes.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_signup_service_email_signup_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailSignupComponent = (function () {
    function EmailSignupComponent(emailSignupService) {
        this.emailSignupService = emailSignupService;
        this.user = {
            firstName: null,
            email: null
        };
        this.error = false;
        this.errorMessage = "";
        this.userHasSubscribed = false;
    }
    EmailSignupComponent.prototype.subscribeUser = function () {
        var _this = this;
        this.emailSignupService.signupUser(this.user)
            .subscribe(function (data) {
            var message = data.json().message;
            console.log("Message: " + message);
            _this.updateUIWithMessage(message);
        });
    };
    EmailSignupComponent.prototype.updateUIWithMessage = function (message) {
        if (message === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* msg */].SUCCESS) {
            this.user.firstName = '';
            this.user.email = '';
            this.userHasSubscribed = true;
            this.error = false;
        }
        else if (message === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* msg */].USER_ALREADY_EXISTS) {
            this.error = true;
            this.errorMessage = ("Looks like you've already signed up with that email! Emails are sent about once a week.");
            this.userHasSubscribed = false;
        }
        else if (message === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* msg */].INVALID_NAME) {
            this.error = true;
            this.errorMessage = ("Please enter your first name, nickname, or some other name that you'd like us to call you.");
            this.userHasSubscribed = false;
        }
        else if (message === __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* msg */].INVALID_EMAIL) {
            this.error = true;
            this.errorMessage = ("Make sure you've typed your email address correctly");
            this.userHasSubscribed = false;
        }
    };
    EmailSignupComponent.prototype.ngOnInit = function () { };
    EmailSignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'email-signup',
            template: __webpack_require__(700),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_email_signup_service_email_signup_service__["a" /* EmailSignupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_email_signup_service_email_signup_service__["a" /* EmailSignupService */]) === 'function' && _a) || Object])
    ], EmailSignupComponent);
    return EmailSignupComponent;
    var _a;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/email-signup.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return msg; });
var msg = {
    SUCCESS: 'Success',
    USER_ALREADY_EXISTS: 'User already exists',
    INVALID_NAME: 'Invalid name',
    INVALID_EMAIL: 'Invalid email',
    TEMP_USER_NOT_FOUND: 'Temp user not found'
};

//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/messages.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(title, subtitle, author, intro, bodyHTML) {
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.intro = intro;
        this.bodyHTML = bodyHTML;
    }
    return Article;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/Article.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'footer-bar',
            template: __webpack_require__(701),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/footer.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeHeaderComponent = (function () {
    function HomeHeaderComponent() {
    }
    HomeHeaderComponent.prototype.ngOnInit = function () { };
    HomeHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'home-header',
            template: __webpack_require__(702),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeHeaderComponent);
    return HomeHeaderComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/home-header.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleArticleHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleArticleHeaderComponent = (function () {
    function SingleArticleHeaderComponent() {
    }
    SingleArticleHeaderComponent.prototype.ngOnInit = function () {
    };
    SingleArticleHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-single-article-header',
            template: __webpack_require__(703),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleArticleHeaderComponent);
    return SingleArticleHeaderComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/single-article-header.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Article__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleItemComponent = (function () {
    function ArticleItemComponent(router) {
        this.router = router;
    }
    ArticleItemComponent.prototype.ngOnInit = function () { };
    ArticleItemComponent.prototype.transitionToArticle = function (slug) {
        this.router.navigate(['articles', slug]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_Article__["a" /* Article */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__classes_Article__["a" /* Article */]) === 'function' && _a) || Object)
    ], ArticleItemComponent.prototype, "article", void 0);
    ArticleItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'article-item',
            template: __webpack_require__(704),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ArticleItemComponent);
    return ArticleItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/article-item.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], ArticleListComponent.prototype, "title", void 0);
    ArticleListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'article-list',
            template: __webpack_require__(705),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */]) === 'function' && _b) || Object])
    ], ArticleListComponent);
    return ArticleListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/article-list.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service_categories_service__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    CategoriesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'categories-list',
            template: __webpack_require__(706),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service_categories_service__["a" /* CategoriesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_categories_service_categories_service__["a" /* CategoriesService */]) === 'function' && _b) || Object])
    ], CategoriesListComponent);
    return CategoriesListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/categories-list.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryItemComponent = (function () {
    function CategoryItemComponent() {
    }
    CategoryItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], CategoryItemComponent.prototype, "category", void 0);
    CategoryItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'category-item',
            template: __webpack_require__(707),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryItemComponent);
    return CategoryItemComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/category-item.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    LatestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'latest-list',
            template: __webpack_require__(708),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */]) === 'function' && _b) || Object])
    ], LatestComponent);
    return LatestComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/latest.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostPopularComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MostPopularComponent = (function () {
    function MostPopularComponent(router, articlesService) {
        this.router = router;
        this.articlesService = articlesService;
        this.articles = [];
    }
    MostPopularComponent.prototype.ngOnInit = function () {
        this.loadArticles();
    };
    MostPopularComponent.prototype.loadArticles = function () {
        var _this = this;
        this.articlesService.getArticles().subscribe(function (data) { return _this.articles = data.json(); });
    };
    MostPopularComponent.prototype.transitionToArticle = function (slug) {
        this.router.navigate(['articles', slug]);
    };
    MostPopularComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'most-popular-list',
            template: __webpack_require__(709),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_articles_service_articles_service__["a" /* ArticlesService */]) === 'function' && _b) || Object])
    ], MostPopularComponent);
    return MostPopularComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/most-popular.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__(710),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/nav-bar.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_articles_page_articles_page_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_single_article_page_single_article_page_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_articles_service_articles_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_categories_service_categories_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_email_signup_service_email_signup_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lists_most_popular_most_popular_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lists_latest_latest_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lists_article_item_article_item_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lists_category_item_category_item_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lists_categories_list_categories_list_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_category_page_category_page_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bits_email_signup_email_signup_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_thank_you_page_thank_you_page_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__headers_home_header_home_header_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lists_article_list_article_list_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__headers_single_article_header_single_article_header_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_about_page_about_page_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_products_page_products_page_component__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__pages_articles_page_articles_page_component__["a" /* ArticlesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_single_article_page_single_article_page_component__["a" /* SingleArticlePageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__lists_most_popular_most_popular_component__["a" /* MostPopularComponent */],
                __WEBPACK_IMPORTED_MODULE_13__lists_latest_latest_component__["a" /* LatestComponent */],
                __WEBPACK_IMPORTED_MODULE_14__lists_article_item_article_item_component__["a" /* ArticleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__lists_category_item_category_item_component__["a" /* CategoryItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__lists_categories_list_categories_list_component__["a" /* CategoriesListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_category_page_category_page_component__["a" /* CategoryPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__bits_email_signup_email_signup_component__["a" /* EmailSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_thank_you_page_thank_you_page_component__["a" /* ThankYouPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__headers_home_header_home_header_component__["a" /* HomeHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__lists_article_list_article_list_component__["a" /* ArticleListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__headers_single_article_header_single_article_header_component__["a" /* SingleArticleHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_products_page_products_page_component__["a" /* ProductsPageComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_articles_service_articles_service__["a" /* ArticlesService */],
                __WEBPACK_IMPORTED_MODULE_9__services_categories_service_categories_service__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_10__services_email_signup_service_email_signup_service__["a" /* EmailSignupService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__pages_articles_page_articles_page_component__["a" /* ArticlesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_single_article_page_single_article_page_component__["a" /* SingleArticlePageComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/shared.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/environment.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/shaunwassell/Documents/node-js/music-blog/front-end/src/polyfills.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "#signup-wrap {\n  background-color: #080708;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  padding-top: 15px;\n}\n\n#signup-content {\n  margin: auto;\n  max-width: 600px;\n  padding: 15px;\n  padding-top: 0px;\n  padding-left: 125px;\n\n  background-image: url('/assets/images/ice-cream-cone.jpg');\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n#signup-header {\n  margin: 0px;\n  color: #e6e8e6;\n  text-transform: uppercase;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n#signup-header-small {\n  margin: 0px;\n  color: #2e5ed1;\n  font-weight: bold;\n}\n\n#error-message {\n  margin: 0px;\n  color: #df2935;\n  font-weight: bold;\n}\n\n.text-input {\n  background-color: #e6e8e6;\n\n  font-size: 16px;\n  font-weight: bold;\n  padding: 10px;\n  outline: none;\n  border:  none;\n\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#subscribe-button {\n  background-color: #df2935;\n  color: #e6e8e6;\n\n  border: none;\n  outline: none;\n  padding: 10px;\n\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  -webkit-transition: all ease 0.5s;\n  transition: all ease 0.5s;\n\n  cursor: pointer;\n}\n\n#subscribe-button:hover {\n  background-color: #ff2f3d;\n\n  -webkit-transition: all ease 0.5s;\n  transition: all ease 0.5s ;\n}\n\n@media only screen and (max-width: 750px) {\n  #signup-content {\n    background-image: none;\n    padding: 15px;\n    padding-top: 0px;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  #signup-content {\n    width: 100%;\n    text-align: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    box-sizing: border-box;\n  }\n\n  .text-input {\n    display: block;\n    width: 300px;\n    max-width: 100%;\n    margin-right: auto;\n    margin-left:  auto;\n    box-sizing: border-box;\n  }\n\n  #subscribe-button {\n    display: block;\n    width: 300px;\n    max-width: 100%;\n    margin-right: auto;\n    margin-left:  auto;\n  }\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: center;\n}\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "#home-header-content {\n  padding: 20px;\n}\n\n#big-text {\n  background-color: #080708;\n  color: #e6e8e6;\n\n  padding: 15px;\n  margin: 0px;\n\n  font-size: 60px;\n  letter-spacing: 1px;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  background-image: url('/assets/images/shaun-speakers-head-bw.jpg');\n  background-repeat: no-repeat;\n  background-size:   contain;\n  background-position: right bottom;\n}\n\n#small-text {\n  padding: 15px;\n  margin: 0px;\n\n  font-size: 24px;\n  font-weight: bold;\n  color: #080708;\n}\n\n#button-wrap {\n  text-align: center;\n  width: 100%;\n}\n\n#get-started-button {\n  background-color: #2e5ed1;\n  color: #e6e8e6;\n  cursor: pointer;\n\n  border:  none;\n  outline: none;\n  padding: 15px;\n\n  font-size: 25px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n\n#get-started-button:hover {\n  box-shadow: 0px 10px 15px #888888;\n  background-color: #3873ff;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n\n@media only screen and (max-width: 449px) {\n  #big-text {\n    font-size: 40px;\n    line-height: 45px;\n  }\n\n  #small-text {\n    font-size: 16px;\n  }\n\n  #get-started-button {\n    font-size: 16px;\n    padding: 10px;\n  }\n}\n\n/* For non-mobile devices */\n@media only screen and (min-width: 750px) {\n  #home-header-wrap {\n    background-image: url('/assets/images/shaun-speakers-head.gif');\n    background-repeat: no-repeat;\n    background-size:   contain;\n    background-position: center bottom;\n  }\n\n  #home-header-wrap {\n    height: 40vw;\n    background-position: right bottom;\n    margin-right: 5vw;\n  }\n\n  #home-header-content {\n    padding:   1.5vw;\n    max-width: 50%;\n  }\n\n  #big-text {\n    padding: 1.5vw;\n    width: 50vw;\n    font-size: 5vw;\n    line-height: 5.25vw;\n\n    background-image: none;\n  }\n\n  #small-text {\n    padding: 1.5vw;\n    max-width: 50vw;\n    font-size: 2vw;\n  }\n\n  #button-wrap {\n    max-width: 50vw;\n  }\n\n  #get-started-button {\n    padding: 1.5vw;\n    font-size: 2vw;\n  }\n\n  #get-started-button:hover {\n    box-shadow: 0px 1vw 1.5vw #888888;\n  }\n}\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".article-item-wrap {\n  display: inline-block;\n  width: 33%;\n  padding: 0;\n  margin:  0;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.article-item-content {\n  display: inline-block;\n  width: 200px;\n  padding: 15px;\n  margin: auto;\n}\n\n.article-item-icon {\n  border-radius: 50%;\n  width: 200px;\n}\n\n.article-item-title {\n  text-align: center;\n}\n\n.article-item-intro {\n  text-align: left;\n}\n\n.read-more-button-wrap {\n  text-align: center;\n  width: 100%;\n}\n\n.read-more-button {\n  background-color: #2e5ed1;\n  color: #e6e8e6;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n\n  border:  none;\n  outline: none;\n  padding: 10px;\n\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n\n.read-more-button:hover {\n  box-shadow: 0px 10px 15px #888888;\n  background-color: #3873ff;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n\n@media only screen and (max-width: 830px) {\n  .article-item-wrap {\n    width: 49%;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  .article-item-wrap {\n    width: 100%;\n  }\n\n  .article-item-content {\n    width: 250px;\n    max-width: 100%;\n  }\n}\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ".list-wrap {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.list-content {\n  max-width: 1000px;\n  margin: auto;\n}\n\n.list-heading {\n  text-align: center;\n  padding-bottom: 20px;\n  margin: 0px;\n  padding-top: 20px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: 2px solid #080708;\n  font-size: 24px;\n}\n\n.load-more-button {\n  background-color: #999;\n  color: #e6e8e6;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  width: 100%;\n\n  border:  none;\n  outline: none;\n  padding: 10px;\n\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n\n.load-more-button:hover {\n  box-shadow: 0px 10px 15px #888888;\n\n  -webkit-transition: all ease 0.5s;\n  transition:         all ease 0.5s;\n}\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".list-wrap {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.list-content {\n  max-width: 1000px;\n  margin: auto;\n}\n\n.list-heading {\n  text-align: left;\n  padding-bottom: 20px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-bottom: 2px solid #080708;\n}\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "#nav-bar-wrap {\n  background-color: #e6e8e6;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n#nav-bar {\n  color: #080708;\n  margin: auto;\n}\n\n#fos-logo {\n  height: 50px;\n  padding-right:  40px;\n  padding-left:   40px;\n  padding-top:    5px;\n}\n\n.nav-bar-item {\n  padding: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  -webkit-transition: all ease 0.1s;\n  transition:         all ease 0.1s;\n}\n\n.nav-bar-item:hover {\n  padding-bottom: 10px;\n}\n\n.nav-bar-item:hover:not(.nav-bar-active) {\n  border-bottom: 4px solid #2e5ed1;\n  color: #2e5ed1;\n}\n\n.nav-bar-active {\n  border-bottom: 4px solid #080708;\n  padding-bottom: 6px;\n}\n\n@media only screen and (max-width: 500px) {\n  #logo-cell {\n    display: none;\n  }\n\n  .nav-bar-item {\n    font-size: 16px;\n  }\n\n  .nav-bar-active {\n    border-bottom: 4px solid #df2935;\n    color: #df2935;\n    padding-bottom: 6px;\n  }\n}\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".about-header-wrap-wrap {\n  width: 100%;\n  background-color: #2e5ed1;\n  height: 400px;\n  position: relative;\n  z-index: -1;\n}\n\n.about-header-wrap {\n  max-width: 600px;\n  margin: auto;\n  padding: 10px;\n  position: relative;\n  height: 400px;\n}\n\n.about-header {\n  position: absolute;\n  bottom: 40px;\n  background-color: #080708;\n  color: #e6e8e6;\n  padding: 15px;\n  padding-left: 25px;\n  padding-right: 30px;\n}\n\n.about-title,\n.about-subtitle {\n  margin: 0px;\n}\n\n.about-title {\n  text-transform: uppercase;\n  font-size: 40px;\n}\n\n.about-subtitle {\n  font-size: 25px;\n  margin-bottom: 10px;\n}\n\n.body-wrap {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.about-body {\n  max-width: 600px;\n  margin: auto;\n  font-size: 20px;\n  line-height: 30px;\n  padding: 10px;\n}\n\n@media only screen and (max-width: 500px ) {\n  .about-body {\n    font-size: 16px;\n    line-height: 24px;\n    max-width: 400px;\n  }\n\n  .about-header {\n    margin: auto;\n    left: 0;\n    right: 0;\n  }\n}\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ".article-header-wrap-wrap {\n  width: 100%;\n  background-color: #2e5ed1;\n  height: 400px;\n  position: relative;\n  z-index: -1;\n}\n\n.article-header-wrap {\n  max-width: 600px;\n  margin: auto;\n  padding: 10px;\n  position: relative;\n  height: 400px;\n}\n\n.article-header {\n  position: absolute;\n  bottom: 40px;\n  background-color: #080708;\n  color: #e6e8e6;\n  padding: 15px;\n  padding-left: 25px;\n  padding-right: 30px;\n}\n\n.article-title,\n.article-subtitle,\n.article-author {\n  margin: 0px;\n}\n\n.article-title {\n  text-transform: uppercase;\n  font-size: 50px;\n}\n\n.article-subtitle {\n  font-size: 25px;\n  margin-bottom: 10px;\n}\n\n.article-author {\n  font-size: 20px;\n}\n\n.body-wrap {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.article-body {\n  max-width: 600px;\n  margin: auto;\n  font-size: 20px;\n  line-height: 30px;\n  padding: 10px;\n}\n\n.article-date {\n  text-align: center;\n  margin-bottom: 40px;\n  color: #888;\n}\n\n@media only screen and (max-width: 500px ) {\n  .article-body {\n    font-size: 16px;\n    line-height: 24px;\n    max-width: 400px;\n  }\n\n  .article-header {\n    margin: auto;\n    left: 0;\n    right: 0;\n  }\n}\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<router-outlet></router-outlet>\n<footer-bar></footer-bar>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div id=\"signup-wrap\">\n  <div id=\"signup-content\">\n    <h3 id=\"signup-header\">Get the Latest Scoop</h3>\n    <p  id=\"signup-header-small\" *ngIf=\"!error && !userHasSubscribed\">\n      Sign up for the Flavors of Sound Newsletter\n    </p>\n    <p id=\"signup-header-small\" *ngIf=\"!error && userHasSubscribed\">\n      Thank you for signing up! A confirmation email was sent to the address you provided.\n    </p>\n    <p id=\"error-message\" *ngIf=\"error\">\n      *{{ errorMessage }}\n    </p>\n    <div id=\"signup-form\">\n      <input class=\"text-input\" type=\"text\" [(ngModel)]=\"user.firstName\" placeholder=\"First Name\" />\n      <input class=\"text-input\" type=\"text\" [(ngModel)]=\"user.email\"     placeholder=\"Email Address\" />\n      <button id=\"subscribe-button\" (click)=\"subscribeUser()\">Subscribe</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<p>\n  &copy; 2017 Shaun Wassell\n</p>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div id='home-header-wrap'>\n  <div id='home-header-content'>\n    <h1 id='big-text'>Explore the Depths of Music with Me</h1>\n    <p id='small-text'>\n      Welcome to The Flavors of Sound, a blog devoted to\n      helping you send more chills down you listeners' spines.\n    </p>\n    <div id='button-wrap'>\n      <button id='get-started-button'>Get Started</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<p>\n  single-article-header works!\n</p>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div class='article-item-wrap'>\n  <div class='article-item-content'>\n    <img class='article-item-icon' src='assets/images/writing-icon.jpg' />\n    <h3 class='article-item-title'>{{ article.title }} - <span class=\"article-item-subtitle\">{{ article.subtitle }}</span></h3>\n    <p class='article-item-intro'>Once upong a tiame there was a little monkey and he was very curious and he was...</p>\n    <div class='read-more-button-wrap'>\n      <button\n        class='read-more-button'\n        (click)=\"transitionToArticle(article.slug)\">Read More...</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-wrap\" (window:resize)=\"onWindowResize($event)\">\n  <div class=\"list-content\">\n    <h3 class=\"list-heading\">{{ title }}</h3>\n    <div class=\"list-wrap\">\n      <article-item\n        *ngFor=\"let article of displayedArticles\"\n        [article]=\"article\"></article-item>\n    </div>\n    <button class=\"load-more-button\" (click)=\"loadMoreButtonClicked()\">Load More</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div id=\"list-wrap\">\n  <div id=\"list-content\">\n    <h3 id=\"categories-list-header\">Categories</h3>\n    <div class=\"list-item\" *ngFor=\"let category of categories\">\n      <category-item\n        [category]=\"category\"\n        (click)=\"transitionToCategory(category.name)\"></category-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<img id='category-icon' src='assets/images/writing-icon.jpg' />\n<div class='category-wrap'>\n  <h3 id='category-name'>{{ category.name }}</h3>\n  <p id='category-intro'>Once upong a tiame there was a little monkey</p>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div id=\"list-wrap\">\n  <div id=\"list-content\">\n    <h3 id=\"latest-header\">Latest</h3>\n    <div class=\"list-item\" *ngFor=\"let article of articles\">\n      <article-item\n        [article]=\"article\"\n        (click)=\"transitionToArticle(article.slug)\"></article-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"list-wrap\">\n  <div class=\"list-content\">\n    <h3 class=\"list-heading\">Popular Articles</h3>\n    <div class=\"list-wrap\">\n      <article-item\n        *ngFor=\"let article of articles\"\n        [article]=\"article\"\n        (click)=\"transitionToArticle(article.slug)\"></article-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-bar-wrap\">\n  <table id=\"nav-bar\">\n    <tr>\n      <td class=\"nav-bar-item\"\n        [routerLink]=\"['/home']\"\n        [routerLinkActive]=\"['nav-bar-active']\">Home</td>\n      <td class=\"nav-bar-item\"\n        [routerLink]=\"['/articles']\"\n        [routerLinkActive]=\"['nav-bar-active']\">Articles</td>\n      <td id='logo-cell'>\n        <img id='fos-logo' src='/assets/images/flavors-of-sound-cone-colors.gif' />\n      </td>\n      <td class=\"nav-bar-item\"\n        [routerLink]=\"['/products']\"\n        [routerLinkActive]=\"['nav-bar-active']\">Products</td>\n      <td class=\"nav-bar-item\"\n        [routerLink]=\"['/about']\"\n        [routerLinkActive]=\"['nav-bar-active']\">About</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"about-wrap\">\n  <div class=\"about-content\">\n    <div class=\"about-header-wrap-wrap\">\n      <div class=\"about-header-wrap\">\n        <div class=\"about-header\">\n          <h1 class=\"about-title\">What's the Point of This Blog Anyway?</h1>\n          <h3 class=\"about-subtitle\">What The Flavors of Sound Can Teach You</h3>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-wrap\">\n      <div class=\"about-body\">\n        <p>Lorem ipsum dolor <a href=\"http://google.com\">sit amet</a>, consectetur adipiscing elit. Vestibulum sed leo non dolor\n        tempor condimentum a ac lorem. Pellentesque felis erat, auctor nec felis eu, tempus mollis\n        nunc. Sed non mi facilisis, sodales mi ac, blandit lectus. Mauris efficitur tincidunt dolor,\n        eu varius est sagittis a. Morbi maximus neque odio, ut mollis dui dignissim non. Nam\n        facilisis ante quam, eget condimentum eros egestas eget. Nullam nec finibus ipsum.</p>\n\n        <p>Fusce ligula orci, varius ac blandit non, hendrerit vel turpis. Pellentesque in commodo tortor.\n        Praesent sit amet volutpat justo, at imperdiet ante. Donec imperdiet convallis lacus,\n        eget efficitur tortor egestas in. Maecenas diam augue, sollicitudin non quam id, ultrices\n        lobortis odio. Sed vitae mauris lacus. Morbi dapibus quam libero, eu convallis turpis luctus quis.\n        In nisi nisi, euismod vitae nulla at, porttitor tempor enim. Class aptent taciti sociosqu ad\n        litora torquent per conubia nostra, per inceptos himenaeos. Donec nulla tortor, placerat at\n        facilisis sed, porta a turpis. Nam suscipit erat ut ante iaculis, vel interdum massa consequat.</p>\n\n        <p>Vestibulum pretium sodales magna ac faucibus. Proin scelerisque mi vitae urna pellentesque\n        tincidunt. Aenean eget tortor rutrum, feugiat ipsum vestibulum, euismod massa. Etiam varius mollis\n        lectus in sollicitudin. Aliquam erat volutpat. Sed egestas bibendum interdum. Fusce vel aliquet\n        ipsum. Vestibulum ornare a lacus sit amet bibendum. Curabitur eget blandit libero. Donec\n        ultricies erat lorem, non dignissim orci bibendum id.</p>\n\n        <p>Morbi at dictum ante. Duis egestas metus et ex rutrum mollis. Aenean pulvinar vehicula enim,\n        ut vehicula ex tristique vitae. Cum sociis natoque penatibus et magnis dis parturient\n        montes, nascetur ridiculus mus. Integer felis risus, convallis vitae maximus at, auctor sit amet\n        mauris. Pellentesque interdum porta vulputate. Fusce nulla sem, hendrerit ut luctus eget, elementum\n        tristique ante. Sed ut rutrum neque. Duis auctor, tortor sed ullamcorper hendrerit, justo nunc\n        finibus est, sit amet finibus ex ipsum vitae est. Suspendisse gravida libero aliquet ex volutpat\n        faucibus. Aenean mattis quam vel consequat efficitur.</p>\n\n        <p>Curabitur luctus tellus vitae risus vestibulum sollicitudin at nec est. Donec rutrum aliquet\n        massa, ut hendrerit tellus facilisis quis. Sed eu vestibulum turpis. Etiam sagittis eget\n        enim eu placerat. Phasellus ut diam sapien. Phasellus et nisl varius, posuere purus vitae,\n        hendrerit elit. Phasellus gravida enim metus, quis finibus nibh auctor nec. Quisque quis mi\n        mattis, dapibus justo eget, fringilla enim. Fusce sed congue est. Proin dui eros, volutpat sed\n        lorem non, pretium interdum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>\n      </div>\n    </div>\n  </div>\n  <email-signup></email-signup>\n</div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<article-list\n  title=\"Latest\">\n</article-list>\n<article-list\n  title=\"Most Popular\">\n</article-list>\n<categories-list></categories-list>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div id=\"category-wrap\">\n  <div id=\"category-header\">\n    <h1 id=\"category-name\">{{ category.name }}</h1>\n  </div>\n  <most-popular-list></most-popular-list>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<home-header></home-header>\n<email-signup></email-signup>\n<article-list\n  title=\"Popular Articles\">\n</article-list>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<p>\n  products-page works!\n</p>\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"article-wrap\">\n  <div class=\"article-content\">\n    <div class=\"article-header-wrap-wrap\">\n      <div class=\"article-header-wrap\">\n        <div class=\"article-header\">\n          <h1 class=\"article-title\">{{ article.title }}</h1>\n          <h3 class=\"article-subtitle\">{{ article.subtitle }}</h3>\n          <p class=\"article-author\">By {{ article.author }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-wrap\">\n      <div class=\"article-body\" [innerHTML]=\"article.bodyHTML\"></div>\n      <div class=\"article-footer\">\n        <p class=\"article-date\">Posted January 4, 2016</p>\n      </div>\n    </div>\n  </div>\n  <email-signup></email-signup>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div id='thank-you-wrap'>\n  <div id='thank-you-content'>\n    <h1 id='thank-you-header'>Thank You!</h1>\n    <p id='thank-you-text'>\n      Thank you for subscribing, you will be redirected shortly...\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[734]);
//# sourceMappingURL=main.bundle.map