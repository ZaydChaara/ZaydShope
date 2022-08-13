import { PublishService } from './../publish.service';
import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ProductService } from '../product.service';
import { ICategories } from '../categories.model';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css'],
})
export class PublishFormComponent implements OnInit {
  categories$: Observable<ICategories[]> | undefined;
  product: any = {};
  countries: any = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countriesService: CountriesService,
    private publishService: PublishService
  ) {
    this.categories$ = countriesService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.publishService
        .get(this.id)
        .pipe(take(1))
        .subscribe((p: any) => (this.product = p));
  }

  save(countries: any) {
    if (this.id) this.publishService.update(this.id, countries);
    else this.publishService.create(countries);

    this.router.navigate(['/admin/publish']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this Article?')) return;

    this.publishService.delete(this.id);
    this.router.navigate(['/admin/publish']);
  }

  ngOnInit() {}
}
