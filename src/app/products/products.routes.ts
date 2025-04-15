import { Routes } from '@angular/router';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';


export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'new', component: ProductFormComponent },
  {
    path: ':id',
    component: ProductsDetailComponent
  },
  {
    path: 'category/:category',
    component: ProductsListComponent
  },
]
