import { Component } from '@angular/core';
import { IProduct } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: IProduct[] = [];
  filteredData: IProduct[] = [];
  filteredBrands: any[] = [];
  priceRange: any[] = [
    { name: '0 - 1001', value: '' },
    { name: '1000 - 2000', value: '' },
    { name: '2001 - 3000', value: '' },
    { name: '3001 - 4000', value: '' },
    { name: '4001 - 5000', value: '' },
    { name: '5001 - 6000', value: '' },
  ];
  brands: any[] = [];

  constructor(private productService: ProductsService) {
    this.productService.getProductList().subscribe((res) => {
      this.productList = res;
      this.filteredData = res;
      this.brands = Array.from(new Set(res.map((s) => s.brand))).map(item => {
        return {
          name: item,
          value: ''
        }
      });
      this.filteredBrands = this.brands;
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onFilter(e: any) {
    if (e.field === 'price' ) {
      if(e.isChecked) {
        this.filteredData = this.productList.filter(
          (p) => p.price >= e.value[0] && p.price <= e.value[1]
        );
        this.filteredBrands = Array.from(new Set(this.productList.map((s) => s.brand))).map(item => {
          return {
            name: item,
            value: ''
          }
        });
      } else {
        this.filteredData = this.productList;
        this.filteredBrands = this.brands;
      }
    } else {
      console.log("EVNT ", e)
      if(e.isChecked) {
        this.filteredData = this.productList.filter(
          (p) => p.brand === e.value
        );
        // this.priceRange = this.filteredData.filter(s => s.price).map(s => {
        //   return {
        //     name: s,
        //     value: ''
        //   }
        // })
        // this.filteredBrands = Array.from(new Set(this.productList.map((s) => s.brand))).map(item => {
        //   return {
        //     name: item,
        //     value: ''
        //   }
        // });
      } else {
        this.filteredBrands = this.productList;
        this.filteredBrands = this.brands;
      }
    }
  }
}
