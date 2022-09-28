import { SharedRoutingModule } from './shared-routing.module';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishFormComponent } from './components/publish-form/publish-form.component';
import { PublishComponent } from './components/publish/publish.component';
import { PublishedPagesComponent } from './components/published-pages/published-pages.component';
import { CategoriesService } from './services/categories.service';
import { CountriesService } from './services/countries.service';
import { PublishedService } from './services/published.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { ArticlesService } from './components/articles.service';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PublishComponent,
    PublishFormComponent,
    PublishedPagesComponent,
    FilterComponent,
    CardComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  exports: [
    FilterComponent,
    CardComponent,
    FormsModule,
    NgbModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [
    UserService,
    PublishedService,
    CountriesService,
    CategoriesService,
    ProductService,
    ArticlesService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
