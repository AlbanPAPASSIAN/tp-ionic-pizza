import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '../../_base/base.component';
import { PizzaService } from '../../_services/pizza.service';
import { IngredientsService } from '../../_services/ingredients.service';
import PizzaDto from '../../_models/pizza.dto';
import IngredientDto from '../../_models/ingredient.dto';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss'],
})
export class DeleteConfirmComponent extends BaseComponent implements OnInit {

  @Input() isIngredient: boolean;
  @Input() item: PizzaDto | IngredientDto;

  constructor(
    public modalController: ModalController,
    private pizzaService: PizzaService,
    private ingredientsService: IngredientsService,
  ) {
    super();
  }

  ngOnInit() {
    console.log('\n\n: DeleteConfirmComponent -> item', this.item);
  }

  load() { }

  closeModal() {
    this.modalController.dismiss();
  }

  async delete() {
    this.loading = true;

    let url: string;
    if (this.isIngredient) {
      await this.ingredientsService.delete(this.item.id).toPromise();
      url = '/admin/list-ingredients';
    } else {
      await this.pizzaService.delete(this.item.id).toPromise();
      url = '/admin/list-pizza';
    }

    this.closeModal();
    location.assign(url);

    this.loading = false;
  }
}
