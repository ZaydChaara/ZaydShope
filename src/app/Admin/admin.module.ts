import { AdminRoutingModule } from './admin-routing.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { AdminCountriesComponent } from './components/admin-Countries/admin-countries.component';
import { LoginComponent } from './components/login/login.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'app/shared/services/user.service';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import { SharedModule } from 'app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedRoutingModule } from 'app/shared/shared-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminCountriesComponent, LoginComponent, AdminFormComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    SharedRoutingModule,
    NgbModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [
    AdminCountriesComponent,
    LoginComponent,
    AdminFormComponent,
    AdminRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
