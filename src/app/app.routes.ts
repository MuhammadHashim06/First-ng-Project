import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{
    path:'',
    component:HomeComponent
},{
    path:'add-product',
    component:AddproductComponent
},{
    path:'about',
    component:AboutComponent
}];
