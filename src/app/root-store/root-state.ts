import { ItemsStoreState } from "./items-store"
import { OrdersStoreState } from "./orders-store"

export interface State {
    items: ItemsStoreState.State
    orders: OrdersStoreState.State
}
