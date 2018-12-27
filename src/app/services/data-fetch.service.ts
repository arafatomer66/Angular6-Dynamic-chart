import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private httpclient : HttpClient) { }

  getData() {
    return this.httpclient.get("https://samples.openweathermap.org/data/2.5/history/city?q=London,UK&appid=b1b15e88fa797225412429c1c50c122a1");
  }
}
