import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city: string;
  country: string;

  constructor(private storage:Storage, public navCtrl:NavController, private router:Router) {
    this.storage.get('location').then((val) => {
      if(val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      } else {
        this.city = 'Tallinn';
        this.country = 'ee';
      }
    });
   }

  ngOnInit() {
  }

  saveForm(){
    let location = {
      city: this.city,
      country: this.country
    }
    this.storage.set('location', JSON.stringify(location));
    this.router.navigateByUrl('/tabs/tab1');
  }

}
