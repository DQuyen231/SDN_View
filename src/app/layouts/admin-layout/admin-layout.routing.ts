import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../customer/tables.component';
import { TypographyComponent } from '../../laundrystore/typography.component';
import { IconsComponent } from '../../staff/icons.component';
import { MapsComponent } from '../../building/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { OrderComponent } from '../../order/order.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { StoreDetailComponent } from 'app/laundrystore/store-detail/store-detail.component';
import { AuthGuardService } from 'app/service/auth-guard.service';

import path = require('path');

export const AdminLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'user', component: UserComponent },
    { path: 'customer', component: TablesComponent },
    {
        path: 'laundrystore', component: TypographyComponent,
        pathMatch: 'full',
        // children: [{
        //     path: '/:id',
        //     component: StoreDetailComponent,
        // }]
    },
    { path: 'laundrystore/:id', component: StoreDetailComponent },
    { path: 'staff', component: IconsComponent },
    { path: 'building', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'upgrade', component: UpgradeComponent },

];
