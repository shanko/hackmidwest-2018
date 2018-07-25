import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {
  recipe:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeProvider: RecipeProvider) {
    if(this.navParams.get('recipe')){
      this.recipe = this.navParams.get('recipe');
      console.log(this.recipe);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailPage');
  }

  saveRecipe(){

  }

  deleteRecipe(){

  }

}
