import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FridgeListPage } from './fridge-list';

@NgModule({
  declarations: [
    FridgeListPage,
  ],
  imports: [
    IonicPageModule.forChild(FridgeListPage),
  ],
})
export class FridgeListPageModule {}
