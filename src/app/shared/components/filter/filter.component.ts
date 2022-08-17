import { CountriesService } from '../services/countries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../services/categories.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  categories$: Observable<ICategories[]> | undefined;
  countries$: Observable<ICategories[]> | undefined;

  @Input('category') category!: any;
  @Input('country') country!: any;

  constructor(
    route: ActivatedRoute,
    countriesService: CountriesService,
    categoryService: CategoriesService
  ) {
    this.categories$ = categoryService.getAll();
    this.countries$ = countriesService.getAll();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
