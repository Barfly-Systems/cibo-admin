import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
//RXJS
import { Observable } from 'rxjs';
//Components
import { AddProductCategoryComponent } from './../components/dialogs/add-product-category/add-product-category.component';
import { ImageSelectorComponent } from '../components/dialogs/image-selector/image-selector.component';
//Models
import { GetProductCategories_Result } from '../models/get-product-categories-result.model';
import { GetAllProducts_Result } from '../models/get-all-products-result.model';
import { AddProductComponent } from '../components/dialogs/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog = (editMode: boolean, categoryData: GetProductCategories_Result): Observable<any> => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      editMode: editMode,
      categoryData: categoryData
    }
    let output: string;
    const dialogRef = this.dialog.open(AddProductCategoryComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

  openImageSelectorDialog = (): Observable<any> => {
    const dialogRef = this.dialog.open(ImageSelectorComponent);
    return dialogRef.afterClosed();
  }

  openProductAddEditDialog = (editMode: boolean, productData: GetAllProducts_Result): Observable<any> => {
    const dialogConfig = new MatDialogConfig();
    let OutData = {
      editMode: editMode,
      productData: productData
    }
    dialogConfig.width = "80%";
    dialogConfig.minHeight = "calc(100vh - 90px)"
    dialogConfig.height = "auto";
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}
