import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class PublishedService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/publishes').snapshotChanges();
  }

  get(productId: string) {
    return this.db.object('/publishes/' + productId).valueChanges();
  }
}
