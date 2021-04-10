import { Action } from '@ngrx/store';
import { OrderModel } from 'src/app/core/models/order.models';

export enum ActionTypes {
  
  ADD_ORDER_WITH_CASH = '@order/add_with_cash',
  ADD_ORDER_WITH_CARD = '@order/add_with_card',
  RESET_ORDERS = '@order/reset'
}

export class addOrderWithCard implements Action {
  readonly type = ActionTypes.ADD_ORDER_WITH_CARD
  constructor(public payload: OrderModel) { }
}

export class addOrderWithCash implements Action {
  readonly type = ActionTypes.ADD_ORDER_WITH_CASH
  constructor(public payload: OrderModel) { }
}

export class resetOrders implements Action {
  readonly type = ActionTypes.RESET_ORDERS
}


export type ActionsOrder =
  | addOrderWithCard
  | addOrderWithCash
  | resetOrders

