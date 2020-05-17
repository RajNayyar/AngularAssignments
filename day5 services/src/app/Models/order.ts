export class Order {
    constructor(
      public Id: number,
      public Name: string,
      public Date: string,
      public CustomerId: number,
      public Quantity: number,
      public Amount: number
    ){}
  }