import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../../../_services/pizza.service';
import PizzaDto from '../../../_models/pizza.dto';
import { BaseComponent } from '../../../_base/base.component';
import IngredientDto from '../../../_models/ingredient.dto';
import { IngredientsService } from '../../../_services/ingredients.service';
import { ToastController, ModalController } from '@ionic/angular';
import { DeleteConfirmComponent } from '../../../components/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.page.html',
  styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage extends BaseComponent implements OnInit {

  pizzaId;
  pizza: PizzaDto;
  title: string;
  ingredientsWrapper: { ingredient: IngredientDto, checked: boolean }[];
  photoUrl: string;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private ingredientsService: IngredientsService,
    private toastController: ToastController,
    public modalController: ModalController,
    public router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pizzaId = params.id;
      this.load();
    });
  }

  async load() {
    this.loading = true;

    if (this.pizzaId === 'new') {
      this.title = 'Ajout d\'une pizza';
      this.pizza = { nom: undefined, photo: undefined, prix: undefined, ingredients: [] };
    } else {
      this.pizza = await this.pizzaService.getOne(this.pizzaId).toPromise();
      this.title = 'Modification - ' + this.pizza.nom;
    }

    const ingredients = await this.ingredientsService.getAll().toPromise();

    this.ingredientsWrapper = [];
    for (const ingredient of ingredients) {
      this.ingredientsWrapper.push({ ingredient, checked: this.pizza.ingredients.findIndex(x => x === ingredient.id) !== -1 ? true : false });
    }

    this.loading = false;
  }

  async delete() {
    const modal = await this.modalController.create({
      component: DeleteConfirmComponent,
      cssClass: 'cart-modal',
      swipeToClose: true,
      componentProps: {
        item: this.pizza,
        isIngredient: false,
      }
    });
    modal.present();

    await modal.onWillDismiss();
    this.load();
  }

  async save() {
    this.loading = true;

    this.pizza.ingredients = [];
    for (const item of this.ingredientsWrapper) {
      if (item.checked) {
        this.pizza.ingredients.push(item.ingredient.id);
      }
    }

    if (this.pizzaId === 'new') {
      await this.pizzaService.create(this.pizza).toPromise();
    } else {
      await this.pizzaService.update(this.pizza).toPromise();
    }

    const toast = await this.toastController.create({
      message: 'Pizza sauvegardé',
      duration: 2000
    });
    toast.present();

    location.assign('/admin/list-pizza');

    this.loading = false;
  }
}
