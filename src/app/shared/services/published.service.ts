import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { cardItems } from './cardItems';
import { getDatabase, ref, onValue } from 'firebase/database';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublishedService {
  countries: Partial<cardItems>[] = [];
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    console.log();

    return this.db.list('/publishes').snapshotChanges();
  }

  get(productId: string) {
    return this.db.list('/publishes').snapshotChanges();
  }
}
