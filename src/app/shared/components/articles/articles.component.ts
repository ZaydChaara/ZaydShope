import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cardItems } from 'app/shared/services/cardItems';
import { ICategories } from 'app/shared/services/categories.model';
import { CategoriesService } from 'app/shared/services/categories.service';
import { ProductService } from 'app/shared/services/product.service';
import { Observable, take } from 'rxjs';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  countries$: Partial<cardItems>[] = [];
  countries: Partial<cardItems>[] = [];
  article: any = {};
  id;
  filteredCountires: any[] = [];
  subscription: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private articlesService: ArticlesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.articlesService
        .get(this.id)
        .pipe(take(1))
        .subscribe((a: any) => (this.article = a));
    this.articlesService.get('').subscribe((data) => console.log(data));
  }

  filter(query: string) {
    this.filteredCountires = query
      ? this.countries?.filter((p) =>
          p && p.category
            ? p.title.toLowerCase().includes(query.toLowerCase())
            : null
        )
      : this.countries;
  }
}
