import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { BaseComponent } from '../../../_base/base.component';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { DeleteConfirmComponent } from '../../../components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.page.html',
  styleUrls: ['./list-pizza.page.scss'],
})
export class ListPizzaPage extends BaseComponent implements OnInit {

  pizza: PizzaDto[];

  constructor(
    private pizzaService: PizzaService,
    public modalController: ModalController,
  ) {
    super();
  }

  ngOnInit() {
    this.load();
  }

  async load() {
    this.loading = true;

    this.pizza = await this.pizzaService.getAll().toPromise();

    this.loading = false;
  }

  loadData(event) {
    setTimeout((data) => {
      event.target.complete();
      event.target.disabled = true;
    }, 500);
  }

  async delete(pizza: PizzaDto) {
    const modal = await this.modalController.create({
      component: DeleteConfirmComponent,
      cssClass: 'cart-modal',
      swipeToClose: true,
      componentProps: {
        item: pizza,
        isIngredient: false,
      }
    });
    modal.present();

    await modal.onWillDismiss();
    this.load();
  }
}
