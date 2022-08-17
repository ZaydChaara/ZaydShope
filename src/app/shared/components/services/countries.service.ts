import { map, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { ICategories } from './categories.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private db: AngularFireDatabase) {}
  products$;

  getAll(): Observable<ICategories[]> | undefined {
    const data: any = this.db
      .list('/products', (ref) => ref.orderByChild('title'))
      .valueChanges();

    return data || undefined;
  }
}
