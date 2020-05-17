import { Customer } from './customer';
import {Order} from './order'
// export const customer = [
//     {"id":123, "name":"raj", "city": "chandigarh","email": "rnayyar@affinionds.com", "phoneNo": 9779748042},
//     {"id":123, "name":"raj", "city": "chandigarh","email": "rnayyar@affinionds.com", "phoneNo": 9779748042},
//     {"id":123, "name":"raj", "city": "chandigarh","email": "rnayyar@affinionds.com", "phoneNo": 9779748042}
//   ];
  
//   export const order =[
//     {"id":123, "name":"raj", "date": "chandigarh","customerId": "rnayyar@affinionds.com", "Quantity": 1, "Amount": 500},
//     {"id":123, "name":"raj", "date": "chandigarh","customerId": "rnayyar@affinionds.com", "Quantity": 1, "Amount": 500},
//     {"id":123, "name":"raj", "date": "chandigarh","customerId": "rnayyar@affinionds.com", "Quantity": 1, "Amount": 500}
//   ];

  export const Customers: Array<Customer> = new Array<Customer>();
    Customers.push(new Customer(123,"raj","chandigarh","rnayyar@affinionds.com",9779748042));
    Customers.push(new Customer(456,"shrijeet","Pune","rnayyar@affinionds.com",9779748042));
    Customers.push(new Customer(789,"paarth","Delhi","rnayyar@affinionds.com",9779748042));
  export const Orders: Array<Order> = new Array<Order>();
    Orders.push(new Order(123,"raj","chandigarh",123,1,700));
    Orders.push(new Order(345,"shrijeet","chandigarh",456,2,1000));
    Orders.push(new Order(234,"paarth","chandigarh",789,3,1500));