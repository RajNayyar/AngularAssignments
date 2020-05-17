import { Injectable } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { Order } from 'src/app/Models/order'
import { Customers, Orders } from 'src/app/Models/constants'
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  customers: Array<Customer>
  
  constructor() {
    this.customers = Customers
   }
  GetCustomers()
  {
    return this.customers
  }
  GetCustomersForNameAndCity(param: string)
  {
   return this.customers.filter(x => x.City.toLowerCase().includes(param.toLowerCase()) || x.Name.toLowerCase().includes(param.toLowerCase())) 
  }
 
}
