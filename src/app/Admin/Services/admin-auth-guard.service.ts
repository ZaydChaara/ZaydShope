import { AppUser } from './../../shared/services/app-user';
import { UserService } from 'app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap((user: any) =>
        this.userService.get(user.uid).pipe(map((appUser) => appUser.isAdmin))
      )
    );
  }
}
