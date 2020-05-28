import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BaseComponent } from '../../../_base/base.component';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.page.html',
  styleUrls: ['./list-pizza.page.scss'],
})
export class ListPizzaPage extends BaseComponent implements OnInit {

  pizza: PizzaDto[];

  constructor(
    private pizzaService: PizzaService,
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
    this.loading = true;

    await this.pizzaService.delete(pizza.id).toPromise();
    this.load();

    this.loading = false;
  }
}
