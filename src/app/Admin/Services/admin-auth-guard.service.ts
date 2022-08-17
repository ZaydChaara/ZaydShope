import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserService } from '../../shared/components/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(map((appUser: any) => appUser.isAdmin));
  }
}
