import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../../../shared/components/services/cardItems';
import { ProductService } from '../../../shared/components/services/product.service';

@Component({
  selector: 'app-admin-Countries',
  templateUrl: './admin-countries.component.html',
  styleUrls: ['./admin-countries.component.css'],
})
export class AdminCountriesComponent implements OnInit {
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
