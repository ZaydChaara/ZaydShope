import { MatButtonModule } from '@angular/material/button';
import { CoreRoutingModule } from './core-routing.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from 'app/shared/shared.module';
import { ShortNamePipe } from './core/components/navbar/shortName.pipe';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ShortNamePipe],
  imports: [
    SharedModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatMenuModule,
  ],

  exports: [DashboardComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CoreModule {}
