import {
  Component,
  OnInit
} from '@angular/core';
import {
  IProduct
} from './product'
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[];
  errorMessage: string;

  constructor(private _productService: ProductService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filter(this.listFilter) : this.products;
  }

  filter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Page title:' + message;
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      }, error => this.errorMessage = <any>error);

    
  }
}
