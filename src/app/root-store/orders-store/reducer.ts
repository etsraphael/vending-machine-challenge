import { ActionsOrder, ActionTypes } from './actions'
import { featureAdapter, initialState, State } from './state'

export function featureReducer(state = initialState, action: ActionsOrder): State {
  switch (action.type) {
    case ActionTypes.ADD_ORDER_WITH_CARD: {
      return featureAdapter.addOne(action.payload, { 
        ...state,
        virtualMoney: state.virtualMoney + action.payload.item.price
      })
    }
    case ActionTypes.ADD_ORDER_WITH_CASH: {
      return featureAdapter.addOne(action.payload, { 
        ...state,
        cashMoney: state.cashMoney + action.payload.item.price
      })
    }
    case ActionTypes.RESET_ORDERS: return initialState
    default: return { ...state }
  }
}
