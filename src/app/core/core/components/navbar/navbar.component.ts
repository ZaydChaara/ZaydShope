import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'app/Admin/Services/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AppUser } from '../../../../shared/services/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  appUser: AppUser | undefined;

  constructor(private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.auth.appUser$.subscribe((appUser: any) => {
      this.appUser = appUser;
    });
  }

  logout(): void {
    this.auth.logout();
  }

  getShortName(fullName) {
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('');
  }
}
