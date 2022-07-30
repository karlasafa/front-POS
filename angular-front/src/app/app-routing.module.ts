import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { KonsumenComponent } from './components/konsumen/konsumen.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RekeningComponent } from './components/rekening/rekening.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path: 'product',component:ProductComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'konsumen',component:KonsumenComponent},
  {path: 'rekening',component:RekeningComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
