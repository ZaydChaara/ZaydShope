import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService } from 'app/Admin/Services/admin-auth-guard.service';
import { AuthGuardService } from 'app/Admin/Services/auth-guard.service';
import { PublishFormComponent } from './components/publish-form/publish-form.component';
import { PublishComponent } from './components/publish/publish.component';
import { PublishedPagesComponent } from './components/published-pages/published-pages.component';

const routes: Routes = [
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
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
