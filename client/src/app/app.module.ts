import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { TabsPage } from '../pages/tabs/tabs';
import { FridgeListPage } from "../pages/fridge-list/fridge-list";
import {ItemDetailPage} from "../pages/item-detail/item-detail";
import {RecipesPage} from "../pages/recipes/recipes";
import {RecipeResultsPage} from "../pages/recipe-results/recipe-results";
import {RecipeDetailPage} from "../pages/recipe-detail/recipe-detail";
import { FridgeProvider } from '../providers/fridge/fridge';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipeProvider } from '../providers/recipe/recipe';
import { NutritionProvider } from '../providers/nutrition/nutrition';
import { UtilityProvider } from '../providers/utility/utility';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FridgeListPage,
    ItemDetailPage,
    RecipesPage,
    RecipeResultsPage,
    RecipeDetailPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FridgeListPage,
    ItemDetailPage,
    RecipesPage,
    RecipeResultsPage,
    RecipeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FridgeProvider,
    RecipeProvider,
    NutritionProvider,
    UtilityProvider
  ]
})
export class AppModule {}
