import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Admin/Services/auth.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ZaydShope';

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.user$.subscribe((user: any) => {
      if (!user) return;

      this.userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
    });
  }
}
