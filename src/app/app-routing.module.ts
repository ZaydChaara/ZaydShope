import { PublishedPagesComponent } from './published-pages/published-pages.component';
import { PublishFormComponent } from './publish-form/publish-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { PublishComponent } from './publish/publish.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/products/new',
    component: AdminFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/products/:id',
    component: AdminFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/publish',
    component: PublishComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/publish/new',
    component: PublishFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/publish/:id',
    component: PublishFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/published/:id',
    component: PublishedPagesComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
