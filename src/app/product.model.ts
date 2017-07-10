/**
  * Product Model
  */
export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public available?: boolean
  ) {
    //this.id = null;
    //this.name = '';
    //this.price = 0;
    //this.available = false;
  }
}
