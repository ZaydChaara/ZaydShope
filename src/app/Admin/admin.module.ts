import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdminCountriesComponent } from './components/admin-Countries/admin-countries.component';
import { LoginComponent } from './components/login/login.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { UserService } from 'app/shared/services/user.service';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [AdminCountriesComponent, LoginComponent, AdminFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [AdminCountriesComponent, LoginComponent, AdminFormComponent],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
