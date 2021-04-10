import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from './state';
import { ItemModel } from 'src/app/core/models/items.models';

export const getItemChose = (state: State): ItemModel => state.choice;

export const getStocks = (state: State): ItemModel[] => state.itemsAvailable;

export const selectAdminsFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('items');

export const selectItemChose = createSelector(
  selectAdminsFeatureState,
  getItemChose
)

export const selectStocks = createSelector(
  selectAdminsFeatureState,
  getStocks
)