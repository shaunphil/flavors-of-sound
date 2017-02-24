import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomePageComponent }     from './shared/pages/home-page/home-page.component';
import { ArticlesPageComponent } from './shared/pages/articles-page/articles-page.component';
import { ProductsPageComponent } from './shared/pages/products-page/products-page.component';
import { AboutPageComponent }    from './shared/pages/about-page/about-page.component';
import { SingleArticlePageComponent } from './shared/pages/single-article-page/single-article-page.component';
import { CategoryPageComponent } from './shared/pages/category-page/category-page.component';
import { ThankYouPageComponent } from './shared/pages/thank-you-page/thank-you-page.component';

export const rootRouter: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'home',
    component: HomePageComponent
  }, {
    path: 'articles',
    component: ArticlesPageComponent
  }, {
    path: 'articles/:slug',
    component: SingleArticlePageComponent
  }, {
    path: 'products',
    component: ProductsPageComponent
  }, {
    path: 'about',
    component: AboutPageComponent
  }, {
    path: 'thank-you',
    component: ThankYouPageComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'articles/categories/:category',
    component: CategoryPageComponent
  }, {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]);
