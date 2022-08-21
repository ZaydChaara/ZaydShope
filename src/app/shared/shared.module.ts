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

@NgModule({
  declarations: [
    PublishComponent,
    PublishFormComponent,
    PublishedPagesComponent,
    FilterComponent,
    CardComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, NgbModule],
  exports: [FilterComponent, CardComponent],
  providers: [
    UserService,
    PublishedService,
    CountriesService,
    CategoriesService,
    ProductService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
