import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// Import MatGridListModule
import { MatGridListModule } from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyGridComponent } from './my-grid/my-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,  // Add HttpClientModule here
    MatGridListModule  // Add MatGridListModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
