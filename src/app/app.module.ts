import { cardItems } from './shared/components/services/cardItems';
import { CategoriesService } from './shared/components/services/categories.service';
import {
  AdminAuthGuardService as AdminAuthGuard,
  AdminAuthGuardService,
} from './Admin/Services/admin-auth-guard.service';
import { UserService } from './shared/components/services/user.service';
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/core/components/navbar/navbar.component';
import { LoginComponent } from './Admin/components/login/login.component';
import { HomeComponent } from './core/core/components/home/home.component';
import { AuthService } from './Admin/Services/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './core/core/components/dashboard/dashboard.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import {
  AuthGuardService as AuthGuard,
  AuthGuardService,
} from './Admin/Services/auth-guard.service';
import { AdminCountriesComponent } from './Admin/components/admin-Countries/admin-countries.component';
import { AdminFormComponent } from './Admin/components/admin-form/admin-form.component';
import { ProductService } from './shared/components/services/product.service';
import { FilterComponent } from './shared/components/filter/filter.component';
import { CardComponent } from './card/card.component';
import { PublishComponent } from './shared/components/publish/publish.component';
import { PublishFormComponent } from './shared/components/publish-form/publish-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PublishedPagesComponent } from './shared/components/published-pages/published-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AdminCountriesComponent,
    AdminFormComponent,
    FilterComponent,
    CardComponent,
    PublishComponent,
    PublishFormComponent,
    PublishedPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoriesService,
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
