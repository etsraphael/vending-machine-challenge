import { ActionsItems, ActionTypes } from './actions'
import { State, initialState } from './state'

export function featureReducer(state: State = initialState, action: ActionsItems) {
  switch (action.type) {
    case ActionTypes.GET_ITEM: {
      return {
        ...state,
        choice: action.payload
      }
    }
    case ActionTypes.PULL_BACK: {
      return {
        ...state,
        choice: null
      }
    }
    case ActionTypes.REMOVE_ONE_ITEM_BY_ID: {
      const found = state.itemsAvailable.map(x => x.id).indexOf(action.id)

      if (found !== -1) {
        let newTable = [...state.itemsAvailable]
        newTable[found] = { ...newTable[found], quantity: newTable[found].quantity - 1 }
        return {
          ...state,
          itemsAvailable: newTable,
          choice: null
        }
      }

      return {
        ...state
      }

    }
    case ActionTypes.ITEMS_RESET: return initialState
    default: return { ...state }
  }
}
