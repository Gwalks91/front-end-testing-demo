import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstDropdownComponent } from './first-dropdown/first-dropdown.component';
import { BlogPostCreationComponent } from './blog-post-creation/blog-post-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDropdownComponent,
    BlogPostCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
