import { vendingMachineItems } from 'src/app/core/data/vending-machine-data'
import { ItemModel } from 'src/app/core/models/items.models'

export interface State {
  choice: ItemModel,
  itemsAvailable: ItemModel[]
}

export const initialState: State = {
  choice: null,
  itemsAvailable: vendingMachineItems
}
