import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
        
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'logout',
        component: LogoutComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];
