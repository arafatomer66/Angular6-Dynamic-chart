import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { DataFetchService } from './services/data-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './components/chart/chart.component';





@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
