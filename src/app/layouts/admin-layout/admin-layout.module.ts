import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule } from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../customer/tables.component';
import { TypographyComponent } from '../../laundrystore/typography.component';
import { IconsComponent } from '../../staff/icons.component';
import { MapsComponent } from '../../building/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { StoreDetailComponent } from '../../laundrystore/store-detail/store-detail.component';
import { OrderComponent } from '../../order/order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    TableModule,
    MatTableModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    StoreDetailComponent,
    OrderComponent
  ]
})

export class AdminLayoutModule { }
