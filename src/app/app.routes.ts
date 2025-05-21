import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
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
            {
                path: 'products',
                loadComponent: ()=>import('./panel/products/products.component').then(c => c.ProductsComponent)
            },{
                path: 'products/add',
                loadComponent: ()=>import('./panel/add-products/add-products.component').then(c => c.AddProductsComponent)
            },
            {
                path: 'products/edit/:id',
                loadComponent: ()=>import('./panel/edit-product/edit-product.component').then(c => c.EditProductsComponent)
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
    {
        path:'register',
        component: RegisterComponent
    },
];
