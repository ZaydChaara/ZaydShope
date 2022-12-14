import { CategoriesService } from '../../../shared/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Observable, take, Subscription } from 'rxjs';
import { ICategories } from 'app/shared/services/categories.model';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  categories$: Observable<ICategories[]> | undefined;
  country: any = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoriesService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id)
      this.productService
        .get(this.id)
        .pipe(take(1))
        .subscribe((p: any) => (this.country = p));
    this.productService.get('').subscribe((data) => console.log(data));
  }

  save(product: any) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/countries']);
    console.log(this.id + product);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/countries']);
  }

  ngOnInit() {}
}
