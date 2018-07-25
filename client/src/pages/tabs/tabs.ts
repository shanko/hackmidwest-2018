import { Component } from '@angular/core';

import { FridgeListPage } from "../fridge-list/fridge-list";
import { RecipesPage } from "../recipes/recipes";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  fridgeRoot = FridgeListPage;
  recipeRoot = RecipesPage;

  constructor() {

  }
}
