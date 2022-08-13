import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../cardItems';
import { PublishService } from '../publish.service';
import { PublishedService } from '../published.service';

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
    this.subscription = this.publishService.getAll().subscribe((actions) => {
      this.countries = [];

      actions.forEach((action) => {
        const val: any = action.payload.val();
        this.countries.push({
          $key: action.key ? action.key : '',
          ...(<Object>action.payload.val()),
        });
      });

      this.filteredCountires = this.countries;
    });
  }
  filter(query: string) {
    this.filteredCountires = query
      ? this.countries?.filter((p) =>
          p && p.title
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
