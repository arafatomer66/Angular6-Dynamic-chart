import { Component } from '@angular/core';
import { DataFetchService } from './services/data-fetch.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];

  constructor(private data : DataFetchService) {

  }
}

