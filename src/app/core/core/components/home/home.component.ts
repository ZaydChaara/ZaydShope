import { ProductService } from '../../../../shared/components/services/product.service';
import { Component, OnInit } from '@angular/core';
import { cardItems } from '../../../../shared/components/services/cardItems';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: Partial<cardItems>[] = [];
  products: Partial<cardItems>[] = [];
  filteredProducts: any[] = [];
  subscription: Subscription | undefined;
  category: string | undefined;

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
  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
