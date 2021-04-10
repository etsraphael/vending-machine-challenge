import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { ItemsStoreActions, OrdersStoreActions, RootStoreState } from 'src/app/root-store';
import { ItemModel } from '../../models/items.models';

@Component({
  selector: 'app-confirmation-payment',
  templateUrl: './confirmation-payment.component.html',
  styleUrls: ['./confirmation-payment.component.scss']
})

export class ConfirmationPaymentComponent implements OnInit {

  loading = false

  constructor(
    private dialogRef: MatDialogRef<ConfirmationPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemModel,
    private store$: Store<RootStoreState.State>,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  processPayment(paymentMode: string): void {
    this.loading = true

    setTimeout(() => {

      if(paymentMode == 'cash'){
        this.store$.dispatch(new OrdersStoreActions.addOrderWithCash({
          id: '_' + Math.random().toString(36).substr(2, 9),
          createdAt: new Date(Date.now()),
          item: this.data
        }))
      } else {
        this.store$.dispatch(new OrdersStoreActions.addOrderWithCard({
          id: '_' + Math.random().toString(36).substr(2, 9),
          createdAt: new Date(Date.now()),
          item: this.data
        }))
      }

      // update the store of the items in the vending machine
      this.store$.dispatch(new ItemsStoreActions.removeOneItemById(this.data.id))

      // show an alert
      this._snackBar.open(
        'Order confirmed', null,
        { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 5000 }
      )

      // close the modal and the animation
      this.dialogRef.close()
      this.loading = false

    }, 2000)
    
  }





}
