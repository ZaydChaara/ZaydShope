import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  constructor(private db: AngularFireDatabase) { }
  create(product: unknown) { 
    return this.db.list('/publishes').push(product);
  }

  getAll() {
    return this.db.list('/publishes').snapshotChanges();
  }
  
  get(productId: string) { 
    return this.db.object('/publishes/' + productId).valueChanges();
  }

  update(productId: string, product: Partial<unknown>) { 
    return this.db.object('/publishes/' + productId).update(product);
  }

  delete(productId: string | null) { 
    return this.db.object('/publishes/' + productId).remove();
  }
}
