import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './views/login/login.view';
import { ProductSetupView } from './views/product-setup/product-setup.view';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'productsetup', component: ProductSetupView}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
