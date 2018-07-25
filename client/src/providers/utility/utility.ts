import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController} from "ionic-angular";

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityProvider {
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello UtilityProvider Provider');
  }

  createLoading(message:string){
    return this.loadingCtrl.create({
      content: message
    });
  }

}
