import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';
import { GetAllImages_Result } from 'src/app/models/get-all-images-result.model';
import { ProductCategory } from 'src/app/models/product-category.model';
import { StateService } from 'src/app/services/state.service';
import { GetProductCategories_Result } from 'src/app/models/get-product-categories-result.model';


@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent implements OnInit {

  selectedImage: GetAllImages_Result = null;
  formStep: number = 1;
   @Output() newCategoryNameAdded: EventEmitter<string> = new EventEmitter<string>();
  newCategoryName:string;
  editMode: boolean;
  categoryData: GetProductCategories_Result;
  
  newCategory: ProductCategory = {
    organisation_ID: this.state.getOrganisationId,
    categoryName: null,
    isActive: true,
    backgroundImage_ID: null,
    textColour: '#ffffff',
    createdOn: null,
    editedOn: null
  }

  constructor(public dialogRef: MatDialogRef<AddProductCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data, public dialogs: DialogService, private state: StateService){
    this.editMode = data.editMode;
    this.categoryData = data.categoryData;
   }

  ngOnInit(): void {
    if(this.editMode){
      this.newCategory.categoryName = this.categoryData.categoryName;
      this.selectedImage.imagePath = this.categoryData.imagePath;
    }
  }

  addProductCategory = () => {
    console.log(this.newCategory);
    this.dialogRef.close(this.newCategory);
    //this.newCategoryNameAdded.emit(this.newCategoryName);
  }

  openImageSelector = () => {
    this.dialogs.openImageSelectorDialog().subscribe((data: GetAllImages_Result) => {
      let createDate = new Date();
      this.newCategory.backgroundImage_ID = data.id;
      this.newCategory.createdOn = createDate;
      this.newCategory.editedOn = createDate;
      this.selectedImage = data;
    })
  }

}
