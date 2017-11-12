import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from '../services/product.service';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', 
        component: ProductDetailComponent,
        canActivate: [ProductGuardService] },
      {path: '*', redirectTo: 'products', pathMatch: 'full'}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  providers: [ProductService, ProductGuardService],
})
export class ProductModule { }
