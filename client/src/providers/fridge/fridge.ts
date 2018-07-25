import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject} from "rxjs/Subject";

/*
  Generated class for the FridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FridgeProvider {
  public itemsUpdated = new Subject<any>();
  url = 'https://coolfridge.herokuapp.com/photo?pic=fruit12.jpg';
  items:any = [];
  // testItems = [
  //
  //     {
  //       id: "cetje4s2pjznc8cjiumu",
  //       url: "http://res.cloudinary.com/msts-smartfridge/image/upload/v1532229408/cetje4s2pjznc8cjiumu.jpg",
  //       name: "Banana",
  //       score: 0.9782,
  //       timestamp: "2018-07-21 22:16:49 -0500"
  //     },
  //
  //     {
  //       id: "i35ejj5u0etjywnu3azb",
  //       url: "http://res.cloudinary.com/msts-smartfridge/image/upload/v1532229415/i35ejj5u0etjywnu3azb.jpg",
  //       name: "Bell Pepper",
  //       score: 0.9916,
  //       timestamp: "2018-07-21 22:16:55 -0500"
  //     },
  //
  //     {
  //       id: "dhhpjyfawxumdedkmqdp",
  //       url: "http://res.cloudinary.com/msts-smartfridge/image/upload/v1532229422/dhhpjyfawxumdedkmqdp.jpg",
  //       name: "Broccoli",
  //       score: 0.9852,
  //       timestamp: "2018-07-21 22:17:03 -0500"
  //     },
  //
  //     {
  //       id: "xtmzjrwzkdkrmif1j2eq",
  //       url: "http://res.cloudinary.com/msts-smartfridge/image/upload/v1532229430/xtmzjrwzkdkrmif1j2eq.jpg",
  //       name: "Corn",
  //       score: 0.9928,
  //       timestamp: "2018-07-21 22:17:11 -0500"
  //     }
  // ];

  constructor(public http: HttpClient) {
    console.log('Hello FridgeProvider Provider');
  }

  getAllItems(){
    // return [];
    // return this.testItems;
    return this.http.get(this.url);
  }

  publishItems(data) {
    this.itemsUpdated.next(data);
  }

  getDaysForItem(){
    
  }
}
