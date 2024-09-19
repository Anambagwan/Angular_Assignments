export class Order {
    name: string;
    address: string;
    date: string;
    orderNumber: string;
  
    constructor(name: string, address: string, date: string, orderNumber: string) {
      this.name = name;
      this.address = address;
      this.date = date;
      this.orderNumber = orderNumber;
    }
  }
  