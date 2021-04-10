import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('items', featureReducer),
    EffectsModule.forFeature([ItemsEffects])
  ],
  providers: [
    ItemsEffects
  ]
})
export class ItemsStoreModule { }
