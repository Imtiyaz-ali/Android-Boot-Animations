import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewComponent } from './views/view/view.component';
import { AboutComponent } from './about/about/about.component';
@NgModule({
  declarations: [
    AppComponent,

    BodyComponent,
     ViewComponent,
     AboutComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
