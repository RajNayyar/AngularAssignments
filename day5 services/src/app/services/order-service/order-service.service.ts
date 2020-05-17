import { Injectable } from '@angular/core';
import { Order } from 'src/app/Models/order'
import { Customers, Orders } from 'src/app/Models/constants'
import { Customer } from 'src/app/Models/customer';
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  orders: Array<Order>
  constructor() { 
    this.orders = Orders
  }
  GetOrders()
  {
    return this.orders
  }
  GetOrdersForCustomers(customers: Array<Customer>)
  {
    return this.orders.filter(order => customers.find( cus => cus.Id==order.CustomerId))
  }
}
