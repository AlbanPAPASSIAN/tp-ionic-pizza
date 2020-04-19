import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CartModule } from '../cart/cart.module';
import { CartService } from '../../_services/cart.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
        CartModule,
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    providers: [CartService],
})
export class HeaderModule { }
