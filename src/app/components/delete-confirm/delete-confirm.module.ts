import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeleteConfirmComponent } from './delete-confirm.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule,
    ],
    declarations: [DeleteConfirmComponent],
    exports: [DeleteConfirmComponent],
    entryComponents: [DeleteConfirmComponent],
    providers: [],
})
export class DeleteConfirmModule { }
