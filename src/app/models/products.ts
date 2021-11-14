export interface IProduct {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
}

export class Product implements IProduct {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
  constructor(
    id: number,
    name: string,
    title: string,
    image: string,
    price: number,
    rating: number,
    brand: string
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.brand = brand;
    this.price = price;
    this.name = name;
    this.rating = rating;
  }
}
