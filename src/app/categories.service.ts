import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { ICategories } from './categories.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFireDatabase) { }

  
  getAll(): Observable<ICategories[]> | undefined {
    const data: any = this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges();
    
    return data || undefined;
  }
  
}
