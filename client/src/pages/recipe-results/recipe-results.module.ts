import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeResultsPage } from './recipe-results';

@NgModule({
  declarations: [
    RecipeResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeResultsPage),
  ],
})
export class RecipeResultsPageModule {}
