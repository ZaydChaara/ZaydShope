import { ProductService } from '../../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { cardItems } from '../../../../shared/services/cardItems';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: Partial<cardItems>[] = [];
  filteredCountries: any[] = [];
  subscription: Subscription | undefined;
  category: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .pipe(
        switchMap((actions) => {
          this.countries = [];

          actions.forEach((action) => {
            const val: any = action.payload.val();

            this.countries.push({
              $key: <string>action.key,
              title: <string>val.title,
              category: <string>val.category,
              imageUrl: <string>val.imageUrl,
            });
          });

          return this.route.queryParamMap;
        })
      )
      .subscribe((params: any) => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filteredCountries = this.category
      ? this.countries.filter((p) => p.category === this.category)
      : this.countries;
  }
}
