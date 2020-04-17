import PizzaDto from '../../_models/pizza.dto';

export class BasePageComponent {

    loading: boolean;

    constructor() { }

    addToCart(pizza: PizzaDto) {
        let cart: PizzaDto[] = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = [];
        }

        cart.push(pizza);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
