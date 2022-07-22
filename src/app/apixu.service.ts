import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
    getWeather(location: string){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=42575ad60648487ff3ec41486bafc7d4&query=' + location
      
  );
  // 'https://api.apixu.com/v1/current.json?key=42575ad60648487ff3ec41486bafc7d4&q=' + location
  // http://api.weatherstack.com/current
  //   ? access_key = YOUR_ACCESS_KEY
  //   & query = New York
   }
}
