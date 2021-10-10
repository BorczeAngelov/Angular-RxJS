import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
      .pipe(
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        })
      );
  }

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
