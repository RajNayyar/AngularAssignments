import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { SearchComponentComponent } from '../search-component/search-component.component';
import { ISearchAttributes } from 'src/app/Models/ISearchAttributes';
import { CustomerServiceService } from 'src/app/services/customer-service/customer-service.service';
import { Customer } from 'src/app/Models/customer';
@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.scss']
})
export class CustomerComponentComponent implements OnInit {
   private _customers: Array<Customer>
  constructor(private customerService: CustomerServiceService) {
    this._customers = new Array<Customer>()
   }
   @Input()
  set CustomerDataSource(val: Array<Customer>) {
    debugger
     if(val.length > 0) {
       this._customers =  val;
     } else {
      this._customers = new Array<any>();
     }
  }

  get CustomerDataSource(): Array<Customer> {
    return this._customers;
  }
  ngOnInit() {
  }
}
