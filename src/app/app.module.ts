import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { LoginComponent } from './views/login/login.view';
import { ProductSetupView } from './views/product-setup/product-setup.view';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { AddProductCategoryComponent } from './components/dialogs/add-product-category/add-product-category.component';
import { ImageSelectorComponent } from './components/dialogs/image-selector/image-selector.component';
import { ProductsAndPricingComponent } from './components/products-and-pricing/products-and-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductSetupView,
    ProductCategoryComponent,
    AddProductCategoryComponent,
    ImageSelectorComponent,
    ProductsAndPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatButtonToggleModule    
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
