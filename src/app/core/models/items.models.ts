export class ItemModel {
    id: string
    price: number
    quantity: number
    name: string


    constructor(id: string, price: number, quantity: number, name: string) {
        this.id = id
        this.price = price
        this.quantity = quantity
        this.name = name
    }
}
