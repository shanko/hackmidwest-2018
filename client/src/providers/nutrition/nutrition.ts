import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NutritionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NutritionProvider {
  nutritionUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
  constructor(public http: HttpClient) {
    console.log('Hello NutritionProvider Provider');
  }

  getNutritionData(food){
    let body = {
      "query":`${food.name}`,
      "timezone": "US/Central"
    };
    console.log(food.name);
    return this.http.post(this.nutritionUrl, body, {headers: new HttpHeaders(
      {
        "Content-Type":"application/json",
        "x-app-id":"cc39272d",
        "x-app-key":"0893626187ab75d1c6b839acd3006ee4"})});
  }

}
