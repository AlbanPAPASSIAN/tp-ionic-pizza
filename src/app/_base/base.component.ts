import PizzaDto from '../_models/pizza.dto';
import CartItemDto from '../_models/cart-item.dto';

export abstract class BaseComponent {

    loading: boolean;

    constructor() { }

    abstract load();

    addToCart(pizza: PizzaDto) {
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

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    async doRefresh(event: any) {
        await this.load();
        event.target.complete();
    }

    getCart() {
        return JSON.parse(localStorage.getItem('cart'));
    }

    saveCart(cart: CartItemDto[]) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
