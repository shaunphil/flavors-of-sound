import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { rootRouter } from './app.routes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    rootRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
