import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RecipeDetailPage} from "../recipe-detail/recipe-detail";
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipeResultsPage} from "../recipe-results/recipe-results";
import {UtilityProvider} from "../../providers/utility/utility";
import {FridgeProvider} from "../../providers/fridge/fridge";

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  items:any;
  savedRecipes;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeProvider:RecipeProvider, public util:UtilityProvider, public fp:FridgeProvider) {
    this.getItems();
  }

  ionViewDidLoad() {
    this.getSavedRecipes();
  }

  getSavedRecipes(){
    this.savedRecipes = this.recipeProvider.getSavedRecipes();
  }

  recipeSelected(r){
    this.navCtrl.push(RecipeDetailPage, {recipe:r});
  }

  getRecipesForAll(items){
    let loading = this.util.createLoading('Looking For Recipes...');
    loading.present();

    this.recipeProvider.getRecipesForFridge(items).subscribe((res)=>{
      let r = res["hits"];
      loading.dismiss();
      this.navCtrl.push(RecipeResultsPage, {recipes:r});
    });

  }

  getRecipesForExp(items){
    let loading = this.util.createLoading('Looking For Recipes...');
    loading.present();

    this.recipeProvider.getRecipesForExp(items).subscribe((res)=>{
      let r = res["hits"];
      loading.dismiss();
      this.navCtrl.push(RecipeResultsPage, {recipes:r});
    });
  }

  getItems(){
    this.items = this.fp.items;
    console.log('RRR' + this.items);
  }

}
