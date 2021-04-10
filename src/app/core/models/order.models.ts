import { DatePipe } from "@angular/common"
import { ItemModel } from "./items.models"

export class OrderModel {
    id: string
    createdAt: Date
    item: ItemModel

    constructor(id: string, createdAt: Date, item: ItemModel) {
        this.id = id
        this.createdAt = createdAt
        this.item = item
    }
}
