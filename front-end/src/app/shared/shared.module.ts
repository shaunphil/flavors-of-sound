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
import { ArticleListComponent } from './lists/article-list/article-list.component';
import { SingleArticleHeaderComponent } from './headers/single-article-header/single-article-header.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

@NgModule({
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
    ArticleListComponent,
    SingleArticleHeaderComponent,
    AboutPageComponent,
    ProductsPageComponent,
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

export class SharedModule { }
