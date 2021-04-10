import { StoreModule } from '@ngrx/store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { environment } from './../../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { OrdersStoreModule } from './orders-store'
import { ItemsStoreModule } from './items-store'

@NgModule({
  declarations: [],
  providers: [ ],
  imports: [
    CommonModule, OrdersStoreModule, ItemsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ]
})
export class RootStoreModule { }