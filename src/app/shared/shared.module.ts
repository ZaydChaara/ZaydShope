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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatMenuModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  exports: [
    FilterComponent,
    CardComponent,
    FormsModule,
    NgbModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatMenuModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatPaginatorModule,
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
