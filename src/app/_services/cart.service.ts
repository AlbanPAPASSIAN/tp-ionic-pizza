import { Injectable } from '@angular/core';
import PizzaDto from '../_models/pizza.dto';
import CartItemDto from '../_models/cart-item.dto';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private toastController: ToastController,
  ) { }

  async addToCart(pizza: PizzaDto) {
    let cart: CartItemDto[] = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }

    const index = cart.findIndex(x => x.pizza.id === pizza.id);
    if (index === -1) {
      cart.push({ pizza, quantity: 1 });
    } else {
      cart[index].quantity++;
    }

    const toast = await this.toastController.create({
      message: 'Pizza ajoutée au panier',
      duration: 2000
    });
    toast.present();

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  saveCart(cart: CartItemDto[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
