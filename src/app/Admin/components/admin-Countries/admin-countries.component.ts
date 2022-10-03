import { Router } from '@angular/router';
import { ProductService } from 'app/shared/services/product.service';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { map, Observable, Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { cardItems } from '../../../shared/services/cardItems';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-Countries',
  templateUrl: './admin-countries.component.html',
  styleUrls: ['./admin-countries.component.css'],
})
export class AdminCountriesComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  countryList: AngularFireList<any>;

  dataSource;

  displayedColumns = ['title', 'category', 'edit'];

  constructor(private firebase: AngularFireDatabase, private router: Router) {}

  async ngOnInit() {
    var packageCountryList = [];

    this.countryList = await this.firebase.list('/countries');

    this.countryList.query.orderByChild('/countries').limitToFirst(10);

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
  navigate() {
    this.router.navigate(['/admin/country']); //we can send product object as route param
  }
}
