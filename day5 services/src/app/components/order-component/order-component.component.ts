import { Component, OnInit, Input } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';
import {Order} from 'src/app/Models/order'
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.scss']
})
export class OrderComponentComponent implements OnInit {

  private _orders: Array<Order>
  constructor(private orderService: OrderServiceService) {
    this._orders = new Array<Order>()
   }
   @Input()
  set OrderDataSource(val: Array<Order>) {
    debugger
     if(val.length > 0) {
       this._orders = val;
     } else {
      this._orders = new Array<any>();
     }
  }

  get OrderDataSource(): Array<Order> {
    return this._orders;
  }
  ngOnInit() {
  
  }

}
