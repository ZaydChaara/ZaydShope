import { AuthService } from '../../Services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    public auth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  logout() {
    this.auth.signOut();
  }

  login() {
    this.authService.login;
  }
}
