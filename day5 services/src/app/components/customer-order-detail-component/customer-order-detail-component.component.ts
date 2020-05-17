import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { Order } from 'src/app/Models/order';
import { CustomerServiceService } from 'src/app/services/customer-service/customer-service.service';
import {ISearchAttributes} from 'src/app/Models/ISearchAttributes'
import { OrderServiceService } from 'src/app/services/order-service/order-service.service';
@Component({
  selector: 'app-customer-order-detail-component',
  templateUrl: './customer-order-detail-component.component.html',
  styleUrls: ['./customer-order-detail-component.component.scss']
})
export class CustomerOrderDetailComponentComponent implements OnInit {
  customers: Array<Customer>
  orders: Array<Order>
  constructor(private customerService: CustomerServiceService, private orderService: OrderServiceService) { 
    this.customers = new Array<Customer>()
    this.orders = new Array<Order>()
  }

  ngOnInit() {
    debugger
    this.customers = this.customerService.GetCustomers()
    this.orders = this.orderService.GetOrders()
  }
  onSearchTextChange(eventArgs: ISearchAttributes){
    this.customers =  this.customerService.GetCustomersForNameAndCity(eventArgs.newSearchText)
    this.orders = this.orderService.GetOrdersForCustomers(this.customers)
  }

}
