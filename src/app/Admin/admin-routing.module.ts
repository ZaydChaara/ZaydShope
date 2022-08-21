import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminCountriesComponent } from './components/admin-Countries/admin-countries.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'admin/countries',
    component: AdminCountriesComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/country/new',
    component: AdminFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: 'admin/country/:id',
    component: AdminFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
