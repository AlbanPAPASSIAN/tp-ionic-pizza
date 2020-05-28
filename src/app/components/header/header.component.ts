import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BaseComponent } from '../../_base/base.component';
import { CartComponent } from '../cart/cart.component';
import CartItemDto from '../../_models/cart-item.dto';
import { CartService } from '../../_services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {

  @Input() title: string;
  @Input() showBackBtn: boolean;
  @Input() isAdmin: boolean;
  cart: CartItemDto[];

  constructor(
    public modalController: ModalController,
    private cartService: CartService,
  ) {
    super();
  }

  ngOnInit() { }

  load() {
    this.cart = this.cartService.getCart();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartComponent,
      swipeToClose: true,
    });
    modal.present();

    await modal.onWillDismiss();
    this.load();
  }
}
