import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../../../shared/components/services/cardItems';
import { ProductService } from '../../../shared/components/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: Partial<cardItems>[] = [];
  filteredProducts: any[] = [];
  subscription: Subscription | undefined;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe((actions) => {
      this.products = [];

      actions.forEach((action) => {
        const val: any = action.payload.val();
        this.products.push({
          $key: action.key ? action.key : '',
          ...(<Object>action.payload.val()),
        });
      });

      this.filteredProducts = this.products;
    });
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products?.filter((p) =>
          p && p.title
            ? p.title.toLowerCase().includes(query.toLowerCase())
            : null
        )
      : this.products;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
