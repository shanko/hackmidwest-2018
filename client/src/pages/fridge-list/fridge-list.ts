import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FridgeProvider} from "../../providers/fridge/fridge";
import {ItemDetailPage} from "../item-detail/item-detail";
import {UtilityProvider} from "../../providers/utility/utility";

/**
 * Generated class for the FridgeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fridge-list',
  templateUrl: 'fridge-list.html',
})
export class FridgeListPage {
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fp: FridgeProvider, public util:UtilityProvider) {
    // this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FridgeListPage');
  }

  getItems(){
    let loading = this.util.createLoading('Looking in the Fridge...');
    loading.present();

    let timer = setTimeout(()=>{
      loading.setContent('Processing Images...');
    },4000);

    this.fp.getAllItems().subscribe((res)=>{
      this.items = res;
      this.items.splice(0,1);
      this.fp.items = this.items;
      clearTimeout(timer);
      loading.dismiss();
    });
  }

  formatDate(date){
    return JSON.stringify(new Date(date));
  }

  itemSelected(item){
    this.navCtrl.push(ItemDetailPage, { item: item})
  }

  takeSnapshot(){
    this.getItems();
  }

}
