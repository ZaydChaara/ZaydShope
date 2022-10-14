import { PublishService } from '../../services/publish.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { cardItems } from '../../services/cardItems';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  countryList: AngularFireList<any>;

  dataSource;

  displayedColumns = ['title', 'category', 'edit'];

  constructor(private firebase: AngularFireDatabase, private router: Router) {}

  async ngOnInit() {
    var packageCountryList = [];

    this.countryList = await this.firebase.list('/publishes');

    this.countryList.query.orderByChild('/publishes').limitToFirst(10);

    await this.countryList.snapshotChanges().subscribe((item) => {
      item.forEach((element) => {
        var y = element.payload.toJSON();
        var x = element.key;
        packageCountryList.push({ ...y, key: x });
        console.log(element.key);
      });

      this.dataSource = new MatTableDataSource(packageCountryList.reverse());
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  // countries: Partial<cardItems>[] = [];

  // filteredCountires: any[] = [];
  // subscription: Subscription | undefined;

  // constructor(private publishService: PublishService) {
  //   this.subscription = this.publishService.getAll().subscribe((actions) => {
  //     this.countries = [];

  //     actions.forEach((action) => {
  //       const val: any = action.payload.val();
  //       this.countries.push({
  //         $key: action.key ? action.key : '',
  //         ...(<Object>action.payload.val()),
  //       });
  //     });

  //     this.filteredCountires = this.countries;
  //   });
  // }
  // filter(query: string) {
  //   this.filteredCountires = query
  //     ? this.countries?.filter((p) =>
  //         p && p.title
  //           ? p.title.toLowerCase().includes(query.toLowerCase())
  //           : null
  //       )
  //     : this.countries;
  // }

  // ngOnInit(): void {}
  // ngOnDestroy() {
  //   this.subscription?.unsubscribe();
  // }
}
