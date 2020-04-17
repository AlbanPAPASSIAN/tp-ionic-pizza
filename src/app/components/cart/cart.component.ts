import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }
}
