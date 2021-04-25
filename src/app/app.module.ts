import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListViewComponent } from './list-view/list-view.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';
import { NewsPostComponent } from './news-post/news-post.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListViewComponent,
    FooterComponent,
    CommentComponent,
    NewsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
