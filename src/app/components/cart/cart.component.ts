import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import PizzaDto from '../../_models/pizza.dto';
import { BaseComponent } from '../../_base/base.component';
import CartItemDto from '../../_models/cart-item.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent extends BaseComponent implements OnInit {

  cart: CartItemDto[];

  constructor(
    public modalController: ModalController,
  ) {
    super();
  }

  async ngOnInit() {
    this.loading = true;

    await this.load();

    this.loading = false;
  }

  load() {
    this.cart = this.getCart();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  removeFromCart(id: number) {
    this.cart.splice(this.cart.findIndex(x => x.pizza.id === id), 1);
    this.saveCart(this.cart);
  }

  addQuantity(cartItem: CartItemDto) {
    cartItem.quantity++;

    this.saveCart(this.cart);
  }

  removeQuantity(cartItem: CartItemDto) {
    if (cartItem.quantity === 1) {
      this.removeFromCart(cartItem.pizza.id);
    } else {
      cartItem.quantity--;
    }

    this.saveCart(this.cart);
  }
}
