import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class PublishService {
  constructor(private db: AngularFireDatabase) {}
  create(country: unknown) {
    return this.db.list('/publishes').push(country);
  }

  getAll() {
    return this.db.list('/publishes').snapshotChanges();
  }

  get(countryID: string) {
    return this.db.object('/publishes/' + countryID).valueChanges();
  }

  update(countryID: string, country: Partial<unknown>) {
    return this.db.object('/publishes/' + countryID).update(country);
  }

  delete(countryID: string | null) {
    return this.db.object('/publishes/' + countryID).remove();
  }
}
