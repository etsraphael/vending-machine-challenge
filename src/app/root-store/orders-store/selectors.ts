import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { OrderModel } from 'src/app/core/models/order.models'
import { featureAdapter, State } from './state'

export const getList = (state: State): string[] => state.list

export const getCashMoneyValue = (state: State): number => state.cashMoney

export const getVirtualMoneyValue = (state: State): number => state.virtualMoney

export const selectState: MemoizedSelector<object, State>
    = createFeatureSelector<State>('orders')

export const selectAllItems: (state: object)
    => OrderModel[] = featureAdapter.getSelectors(selectState).selectAll;

export const selectList: MemoizedSelector<object, string[]>
    = createSelector(selectState, getList)

export const selectCashMoneyValue = createSelector(
    selectState,
    getCashMoneyValue
)

export const selectVirtualMoneyValue = createSelector(
    selectState,
    getVirtualMoneyValue
)