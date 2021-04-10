import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { OrderModel } from 'src/app/core/models/order.models'

export const featureAdapter: EntityAdapter<OrderModel> = createEntityAdapter<OrderModel>({
  selectId: model => model.id,
})

export interface State extends EntityState<OrderModel> {
  list: string[],
  cashMoney: number,
  virtualMoney: number
}

export const initialState: State = featureAdapter.getInitialState(
  { 
    list: [],
    cashMoney: 0,
    virtualMoney: 0
  }
)
