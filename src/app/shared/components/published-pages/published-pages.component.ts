import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../../services/cardItems';
import { PublishedService } from '../../services/published.service';

@Component({
  selector: 'app-published-pages',
  templateUrl: './published-pages.component.html',
  styleUrls: ['./published-pages.component.css'],
})
export class PublishedPagesComponent implements OnInit {
  countries: Partial<cardItems>[] = [];

  filteredCountires: any[] = [];
  subscription: Subscription | undefined;

  constructor(private publishService: PublishedService) {
    this.subscription = this.publishService
      .get('')
      .subscribe((actions: any) => {
        this.countries = [];
        actions.forEach((action) => {
          const val: any = action.payload.val();
          if (action.payload.val().country == 'Morocco') {
            this.countries.push({
              $key: action.key ? action.key : '',
              ...(<Object>action.payload.val()),
            });
          }
        });
        this.filteredCountires = this.countries;
      });
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

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
