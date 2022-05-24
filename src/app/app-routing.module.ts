import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
    {path:"header", component: HeaderComponent},
    {path:"proudcts", component: ProductsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }