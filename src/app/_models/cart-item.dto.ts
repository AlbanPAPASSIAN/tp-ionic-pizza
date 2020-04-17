import PizzaDto from './pizza.dto';

export default interface CartItemDto {
    pizza: PizzaDto;
    quantity: number;
}
