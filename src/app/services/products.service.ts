import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/products';

const data: IProduct[] = [
  new Product(
    1,
    'Calculator',
    'ORPAT OT-512GT',
    'https://m.media-amazon.com/images/I/81-d0FG6XXL._SL1500_.jpg',
    15,
    4.5,
    'ORPAT'
  ),
  new Product(
    2,
    'Calculator',
    'CASIO JS-20WK 12 Digits',
    'https://upload.wikimedia.org/wikipedia/commons/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg',
    10,
    4.5,
    'CASIO'
  ),
  new Product(
    3,
    'Calculator',
    'CASIO fx-82MS',
    'https://www.casio-intl.com/product/image/1425458799170/',
    20,
    5,
    'CASIO'
  ),
  new Product(
    4,
    'Bread',
    '100% Wheat',
    'https://worldblaze.in/wp-content/uploads/2016/12/Britannia-100-whole-wheat-bread.jpg',
    5,
    4.5,
    'BRITANNIA'
  ),
  new Product(
    5,
    'Bread',
    'Country White bread',
    'https://cdn.apartmenttherapy.info/image/upload/v1559145806/k/archive/da1984f6c88345e2461e2c49bafc7be633676d91.jpg',
    3,
    3.5,
    'ARNOLD'
  ),
  new Product(
    6,
    'Bread',
    '100% Wheat',
    'https://www.jiomart.com/images/product/original/491127282/britannia-100-whole-wheat-bread-450-g-0-20210702.jpg',
    15,
    4.5,
    'BRITANNIA'
  ),
  new Product(
    7,
    'Mobile',
    'Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor',
    'https://m.media-amazon.com/images/I/41sGASjc4-L.jpg',
    2500,
    4,
    'REDMI'
  ),
  new Product(
    8,
    'Mobile',
    'Redmi 10 Prime (Phantom Black 4GB RAM 64GB | Helio G88 with extendable RAM Upto 2GB | FHD+ 90Hz Adaptive Sync Display)',
    'https://images-eu.ssl-images-amazon.com/images/I/41NNWAx-XQL._SX300_SY300_QL70_FMwebp_.jpg',
    3000,
    3.7,
    'REDMI'
  ),
  new Product(
    9,
    'Mobile',
    'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
    'https://m.media-amazon.com/images/I/71r69Y7BSeL._SX522_.jpg',
    3500,
    1,
    'SAMSUNG'
  ),
];

const priceRange = [
  {
    productName: 'Calculator',
    range: ['5 - 10', '10 - 15', '15 - 20', '20 - 25'],
  },
  {
    productName: 'Bread',
    range: ['1 - 2', '3 - 4', '4 - 5'],
  },
  {
    productName: 'Mobile',
    range: [
      '1000 - 2000',
      '2001 - 3000',
      '3001 - 4000',
      '4001 - 5000',
      '5001 - 6000',
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProductList(): Observable<IProduct[]> {
    return of(data);
  }

  getPriceRangeByProductName(productName: string): Observable<any[]> {
    const ranges = priceRange.filter((p) => p.productName === productName);
    return of(ranges);
  }
}
