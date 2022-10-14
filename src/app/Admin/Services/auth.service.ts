import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Observable, of } from 'rxjs';
import { AppUser } from '../../shared/services/app-user';
import { UserService } from '../../shared/services/user.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<firebase.User>;

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    public auth: AngularFireAuth,
    private userService: UserService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) {
    this.user$ = auth.authState;
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/varify-email']);
        }
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  get appUser$(): Observable<AppUser | unknown> {
    return this.user$.pipe(
      switchMap((user: any) => {
        if (user) return this.userService.get(user.uid);

        return of(null);
      })
    );
  }

  get(uid: string): Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Successful');
        this.sendEmailForVarification(res.user);
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  // sign out
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  // forgot password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/varify-email']);
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then(
      (res: any) => {
        this.router.navigate(['/varify-email']);
      },
      (err: any) => {
        alert('Something went wrong. Not able to send mail to your email.');
      }
    );
  }

  // signInWithGoogle() {

  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( () => {
  //     this.router.navigate(['home']);

  //   })

  signInWithGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['home']);
  }
}
