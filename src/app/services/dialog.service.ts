import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

import { take, map } from 'rxjs/operators';

import { AddProductCategoryComponent } from './../components/dialogs/add-product-category/add-product-category.component';
import { Observable } from 'rxjs';
import { ImageSelectorComponent } from '../components/dialogs/image-selector/image-selector.component';
import { GetProductCategories_Result } from '../models/get-product-categories-result.model';

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
    console.log(dialogConfig.data);
    const dialogRef = this.dialog.open(AddProductCategoryComponent, dialogConfig);
    return dialogRef.afterClosed();
  }

  openImageSelectorDialog = (): Observable<any> => {
    const dialogRef = this.dialog.open(ImageSelectorComponent);
    return dialogRef.afterClosed();
  }
}
