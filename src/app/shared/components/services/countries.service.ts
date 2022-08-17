import { map, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { ICategories } from './categories.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private db: AngularFireDatabase) {}
  countries$;

  getAll(): Observable<ICategories[]> | undefined {
    const data: any = this.db
      .list('/countries', (ref) => ref.orderByChild('title'))
      .valueChanges();

    return data || undefined;
  }
}
