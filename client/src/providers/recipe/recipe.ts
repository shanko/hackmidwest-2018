import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {
  recipeUrl = 'https://api.edamam.com/search?app_id=51c47d28&app_key=add69a068b6cf10b6345c1b18b543724';
  constructor(public http: HttpClient) {
    console.log('Hello RecipeProvider Provider');
  }

  getRecipesForItem(item){
    let url = `${this.recipeUrl}&from=0&to=5&q=${item.name}`;
    return this.http.get(url);
  }

  getRecipesForFridge(itemList){
    // let url = `${this.recipeUrl}&from=0&to=5&q=${item.name}`;

    return this.http.get('recipeUrl')
  }

  getRecipesForExp(itemList){
    return this.http.get('recipeUrl')
  }

  getSavedRecipes(){
    if(localStorage.getItem('savedRecipes')){
      return JSON.parse(localStorage.getItem('savedRecipes'));
    }else{
      let sr = [];
      localStorage.setItem('savedRecipes', JSON.stringify(sr));
      return JSON.parse(localStorage.getItem('savedRecipes'));
    }
  }

  saveRecipe(recipe){
    if(localStorage.getItem('savedRecipes')){
      let temp = JSON.parse(localStorage.getItem('savedRecipes'));
      temp.push(recipe);
      localStorage.setItem('savedRecipes', JSON.stringify(temp));
    }else{
      let temp = [];
      temp.push(recipe);
      localStorage.setItem('savedRecipes', JSON.stringify(temp));
    }
  }

  deleteRecipe(id){

  }
}
