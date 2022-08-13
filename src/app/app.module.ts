import { cardItems } from './cardItems';
import { CategoriesService } from './categories.service';
import { AdminAuthGuardService as AdminAuthGuard, AdminAuthGuardService } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { AuthGuardService as AuthGuard, AuthGuardService } from './auth-guard.service';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { ProductService } from './product.service';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { PublishComponent } from './publish/publish.component';
import { PublishFormComponent } from './publish-form/publish-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { PublishedPagesComponent } from './published-pages/published-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    AdminProductsComponent,
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
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoriesService,
    ProductService,  
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
