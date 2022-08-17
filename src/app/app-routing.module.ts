import { PublishedPagesComponent } from './shared/components/published-pages/published-pages.component';
import { PublishFormComponent } from './shared/components/publish-form/publish-form.component';
import { AdminFormComponent } from './Admin/components/admin-form/admin-form.component';
import { AdminProductsComponent } from './Admin/components/admin-products/admin-products.component';
import { HomeComponent } from './core/core/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/core/components/dashboard/dashboard.component';
import { LoginComponent } from './Admin/components/login/login.component';
import { AuthGuardService } from './Admin/Services/auth-guard.service';
import { AdminAuthGuardService } from './Admin/Services/admin-auth-guard.service';
import { PublishComponent } from './shared/components/publish/publish.component';

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
    path: 'admin/published/:id',
    component: PublishedPagesComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
