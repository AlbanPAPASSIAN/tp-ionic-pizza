import PizzaDto from '../_models/pizza.dto';
import CartItemDto from '../_models/cart-item.dto';

export abstract class BaseComponent {

    loading: boolean;

    constructor() { }

    abstract load();

    async doRefresh(event: any) {
        await this.load();
        event.target.complete();
    }
}
