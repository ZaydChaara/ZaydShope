import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product: unknown) {
    return this.db.list('/countries').push(product);
  }

  getAll() {
    return this.db.list('/countries').snapshotChanges();
  }

  get(productId: string) {
    return this.db.object('/countries/' + productId).valueChanges();
  }

  update(productId: string, product: Partial<unknown>) {
    return this.db.object('/countries/' + productId).update(product);
  }

  delete(productId: string | null) {
    return this.db.object('/countries/' + productId).remove();
  }
}
