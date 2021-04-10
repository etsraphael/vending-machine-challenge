import { Action } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/items.models';

export enum ActionTypes {

  GET_ITEM = '@items/get',
  PULL_BACK = '@items/pull-back',
  REMOVE_ONE_ITEM_BY_ID = '@items/remove_one_by_id',
  ITEMS_RESET = '@items/reset'

}

export class removeOneItemById implements Action {
  readonly type = ActionTypes.REMOVE_ONE_ITEM_BY_ID
  constructor(public id: string) { }
}

export class getItem implements Action {
  readonly type = ActionTypes.GET_ITEM
  constructor(public payload: ItemModel) { }
}

export class pullBackItem implements Action {
  readonly type = ActionTypes.PULL_BACK
}

export class resetItem implements Action {
  readonly type = ActionTypes.ITEMS_RESET
}


export type ActionsItems =
| getItem
| pullBackItem
| resetItem
| removeOneItemById

