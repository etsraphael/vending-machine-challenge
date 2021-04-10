import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { ItemModel } from '../core/models/items.models'
import { OrdersStoreActions, OrdersStoreSelectors, RootStoreState } from '../root-store'
import { filter, skipWhile, take } from 'rxjs/operators'
import { ItemsStoreActions, ItemsStoreSelectors } from '../root-store/items-store'
import { OrderModel } from '../core/models/order.models'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ConfirmationPaymentComponent } from '../core/modal/confirmation-payment/confirmation-payment.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items$: Observable<ItemModel[]>
  itemChose$: Observable<ItemModel>
  ordersHistory$: Observable<OrderModel[]>
  historyDisplay = false
  cashValue$: Observable<number>
  virtualValue$: Observable<number>

  constructor(
    private store$: Store<RootStoreState.State>,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    // to select all the items in the vending machine
    this.items$ = this.store$.pipe(
      select(ItemsStoreSelectors.selectStocks),
      filter(value => value !== undefined),
    )

    // to select the item chose
    this.itemChose$ = this.store$.pipe(
      select(ItemsStoreSelectors.selectItemChose),
      filter(value => value !== undefined),
    )

    // to select the order history
    this.ordersHistory$ = this.store$.pipe(
      select(OrdersStoreSelectors.selectAllItems),
      filter(value => value !== undefined),
      skipWhile(val => val == null)
    )

    // to select the cash value in the machine
    this.cashValue$ = this.store$.pipe(
      select(OrdersStoreSelectors.selectCashMoneyValue),
    )

    // to select the virtual value in the machine
    this.virtualValue$ = this.store$.pipe(
      select(OrdersStoreSelectors.selectVirtualMoneyValue),
    )


  }

  addItem(item: ItemModel): Subscription {
    // to check if we already have an item
    return this.itemChose$.pipe(take(1)).subscribe((data: ItemModel) => {
      if (data == null) {
        return this.store$.dispatch(new ItemsStoreActions.getItem(item))
      } else {
        this._snackBar.open(
          'You cannot order more than 1 item', null,
          { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5000 }
        )
      }
    })
  }

  resetVendingMachine(): void {

    if (confirm("Are you sure to reset the machine ? ")) {
      // to show an alert 
      this._snackBar.open(
        'The vending machine was reset', null,
        { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5000 }
      )

      // to reset all the stores
      this.store$.dispatch(new ItemsStoreActions.resetItem)
      return this.store$.dispatch(new OrdersStoreActions.resetOrders)
    } else return null

  }

  cancelOrder(): void {
    // to show an alert
    this._snackBar.open(
      'Your order is cancelled', null,
      { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5000 }
    )
    // to pull back that item in the store
    return this.store$.dispatch(new ItemsStoreActions.pullBackItem)
  }

  toggleHistory() {
    // to show or hide the history
    this.historyDisplay = !this.historyDisplay
  }

  openConfirmationModal(): Subscription {

    return this.itemChose$.pipe(take(1)).subscribe((data: ItemModel) => {

      // to check if something was selected
      if (data == null) {
        alert('Nothing was selected')
      } 

      // to pick this item
      else {

        // to check if we have enough
        if(data.quantity == 0 ){
          return this._snackBar.open(
            'Sold out', null,
            { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5000 }
          )
        }

        // to open the confirmation modal
        this.dialog.open(ConfirmationPaymentComponent, {
          panelClass: ['col-9'], data
        })

      }
    })

  }

}
