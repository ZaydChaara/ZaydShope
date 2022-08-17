import { PublishService } from '../services/publish.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../services/cardItems';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  countries: Partial<cardItems>[] = [];

  filteredCountires: any[] = [];
  subscription: Subscription | undefined;

  constructor(private publishService: PublishService) {
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
