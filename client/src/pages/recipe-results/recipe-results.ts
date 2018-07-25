import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";

/**
 * Generated class for the RecipeResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-results',
  templateUrl: 'recipe-results.html',
})
export class RecipeResultsPage {
  recipes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeProvider:RecipeProvider) {
    if(this.navParams.get('recipes')){
      this.recipes = this.navParams.get('recipes');
      console.log(this.recipes);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeResultsPage');
  }

  recipeSelected(recipe){
    // this.recipeProvider.getRecipeByUri(encodeURIComponent(uri)).subscribe((res)=>{
    //     let r = res;
    //     console.log(JSON.stringify(r));
    // });
    this.navCtrl.push(RecipeDetailPage, {recipe:recipe});
  }
}
