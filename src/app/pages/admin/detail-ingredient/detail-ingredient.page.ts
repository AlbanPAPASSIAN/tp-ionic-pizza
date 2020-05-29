import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../_base/base.component';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../../../_services/ingredients.service';
import IngredientDto from '../../../_models/ingredient.dto';
import { DeleteConfirmComponent } from '../../../components/delete-confirm/delete-confirm.component';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail-ingredient',
  templateUrl: './detail-ingredient.page.html',
  styleUrls: ['./detail-ingredient.page.scss'],
})
export class DetailIngredientPage extends BaseComponent implements OnInit {

  ingredientId;
  ingredient: IngredientDto;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService,
    private toastController: ToastController,
    public modalController: ModalController,
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.ingredientId = params.id;
      this.load();
    });
  }

  async load() {
    this.loading = true;

    if (this.ingredientId === 'new') {
      this.title = 'Ajout d\'un ingrédient';
      this.ingredient = { nom: undefined };
    } else {
      this.ingredient = await this.ingredientsService.getOne(this.ingredientId).toPromise();
      this.title = 'Modification - ' + this.ingredient.nom;
    }

    this.loading = false;
  }

  async delete() {
    const modal = await this.modalController.create({
      component: DeleteConfirmComponent,
      cssClass: 'cart-modal',
      swipeToClose: true,
      componentProps: {
        item: this.ingredient,
        isIngredient: true,
      }
    });
    modal.present();

    await modal.onWillDismiss();
    this.load();
  }

  async save() {
    this.loading = true;

    if (!this.ingredient.nom) {
      console.log('Veuillez saisir un nom');
    }

    if (this.ingredientId === 'new') {
      await this.ingredientsService.create(this.ingredient).toPromise();
    } else {
      await this.ingredientsService.update(this.ingredient).toPromise();
    }

    const toast = await this.toastController.create({
      message: 'Ingrédient sauvegardé',
      duration: 2000
    });
    toast.present();

    location.assign('/admin/list-ingredients');

    this.loading = false;
  }

}
