import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NutritionProvider} from "../../providers/nutrition/nutrition";
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipeResultsPage} from "../recipe-results/recipe-results";
import {UtilityProvider} from "../../providers/utility/utility";

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  r:any;
  item:any;
  nutritionData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public nutrition:NutritionProvider, public recipeProvider: RecipeProvider, public util:UtilityProvider) {
    if(this.navParams.get('item')){
      this.item = this.navParams.get('item');
    }
  }

  ionViewDidLoad() {
    this.getNutritionFacts(this.item);
  }
  getNutritionFacts(item){
    this.nutrition.getNutritionData(this.item).subscribe(
      (res)=>{
        let pre = res["foods"][0];
        this.nutritionData = this.processNutrition(pre);
        // console.log(res);
    },
      (err)=>{

      });
  }
  getRecipes(item){

    let loading = this.util.createLoading('Looking For Recipes...');
    loading.present();

    this.recipeProvider.getRecipesForItem(item).subscribe((res)=>{
      this.r = res["hits"];
      loading.dismiss();
      this.navCtrl.push(RecipeResultsPage, {recipes:this.r});
    });
  }

  processNutrition(data){
    let processedData = {
      calories: data["nf_calories"] || 'N/A',
      protein: data["nf_protein"] || 'N/A',
      carbohydrates: data["nf_total_carbohydrate"] || 'N/A',
      fat: data["nf_total_fat"] || 'N/A',
      sugar: data["nf_sugars"] || 'N/A',
    };
    console.log(processedData);
    return processedData;
  }
}
