import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  results: any;
  location:{
    city:string,
    country:string
  }
  constructor(private apiService:ApiService, private storage: Storage) {}

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Tallinn',
          country: 'ee'
        }
      }

      this.results = this.apiService.getWeather(this.location.city, this.location.country);
      this.results.subscribe(res => {
        console.log(res);
        this.results = res;
      })
    });
  }

}
