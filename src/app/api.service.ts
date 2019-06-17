import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = '889a519b94f78b3a98214d63abcb178a';
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) {}

  getWeather(city, country){
    console.log("Sisenesin getWeather funktsiooni");
    return this.http.get(this.url+city+','+country+'&appid='+this.apiKey+'&units=metric').pipe(
      map(results => {
        // console.log('RAW: ', results);
        return results;
      })
    );
  }
}



// '${this.url}${city},${country}&appid=${this.apiKey}&units=metric'