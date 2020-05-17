import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { CustomerComponentComponent } from './components/customer-component/customer-component.component';
import { OrderComponentComponent } from './components/order-component/order-component.component';
import { TableDirectiveComponent } from './directives/table-directive/table-directive/table-directive.component';
import { CustomerOrderDetailComponentComponent } from './components/customer-order-detail-component/customer-order-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    CustomerComponentComponent,
    OrderComponentComponent,
    TableDirectiveComponent,
    CustomerOrderDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, CustomerComponentComponent]
})
export class AppModule { }
