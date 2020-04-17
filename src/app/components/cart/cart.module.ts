import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [CartComponent],
    exports: [CartComponent],
    entryComponents: [CartComponent],
    providers: [ModalController],
})
export class CartModule { }
