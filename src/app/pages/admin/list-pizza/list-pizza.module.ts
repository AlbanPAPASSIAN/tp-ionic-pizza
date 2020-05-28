import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPizzaPage } from './list-pizza.page';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPizzaPage,
      }
    ]),
    HeaderModule,
  ],
  declarations: [ListPizzaPage]
})
export class ListPizzaPageModule { }
