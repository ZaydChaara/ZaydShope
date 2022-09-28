import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ICategories } from '../services/categories.model';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private db: AngularFireDatabase) {}
  create(product: unknown) {
    return this.db.list('/publishes').push(product);
  }

  getAll() {
    return this.db.list('/publishes').snapshotChanges();
  }

  get(productId: string) {
    return this.db.object('/publishes/' + productId).valueChanges();
  }
}
