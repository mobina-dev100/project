import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { MasterComponent } from './layouts/front/master/master.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterComponent,
        children:[
            {
                path: '',
                loadComponent: ()=>import('./front/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'products',
                loadComponent: ()=>import('./front/products/products.component').then(c => c.ProductsComponent)
            },
            {
                path: 'about-us',
                loadComponent: ()=>import('./front/about-us/about-us.component').then(c => c.AboutUsComponent)
            }
        ]
        
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
