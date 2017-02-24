var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { SingleArticlePageComponent } from './pages/single-article-page/single-article-page.component';
import { ArticlesService } from './services/articles-service/articles.service';
import { CategoriesService } from './services/categories-service/categories.service';
import { EmailSignupService } from './services/email-signup-service/email-signup.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MostPopularComponent } from './lists/most-popular/most-popular.component';
import { LatestComponent } from './lists/latest/latest.component';
import { ArticleItemComponent } from './lists/article-item/article-item.component';
import { CategoryItemComponent } from './lists/category-item/category-item.component';
import { CategoriesListComponent } from './lists/categories-list/categories-list.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { EmailSignupComponent } from './bits/email-signup/email-signup.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { HomeHeaderComponent } from './headers/home-header/home-header.component';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            CommonModule,
            FormsModule,
            HttpModule,
            RouterModule
        ],
        declarations: [
            ArticlesPageComponent,
            SingleArticlePageComponent,
            HomePageComponent,
            MostPopularComponent,
            LatestComponent,
            ArticleItemComponent,
            CategoryItemComponent,
            CategoriesListComponent,
            CategoryPageComponent,
            EmailSignupComponent,
            ThankYouPageComponent,
            HomeHeaderComponent,
        ],
        providers: [
            ArticlesService,
            CategoriesService,
            EmailSignupService
        ],
        exports: [
            ArticlesPageComponent,
            SingleArticlePageComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=../../../../src/app/shared/shared.module.js.map