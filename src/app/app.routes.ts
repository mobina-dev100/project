import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './front/home/home.component';
import { MasterComponent } from './layouts/front/master/master.component';
import { MasterComponent as panelMaster } from './layouts/panel/master/master.component';

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
            },
            {
                path:'contact',
                component:HomeComponent
            }
        ]
        
    },
    {
        path: 'panel',
        component: panelMaster,
        children:[
            {
                path: '',
                loadComponent: ()=>import('./panel/dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
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
];
