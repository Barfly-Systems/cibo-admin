import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';
import { DialogService } from './../../services/dialog.service';

import { GetProductCategories_Result } from '../../models/get-product-categories-result.model';
import { UpsertProductCategoryViewModel } from '../../models/upsert-product-category.view-model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  
  categoryList: GetProductCategories_Result[] = [];
  displayedColumns: string[] = ['id', 'categoryName', 'imagePath'];
  dataSource;

  newCategoryName: string;

  constructor(private api: ApiService, private state: StateService, private dialogs: DialogService) { }
  
  ngOnInit(): void {
    this.getProductCategories();
  }

  getProductCategories = () => {
    this.api.getProductCategories(this.state.getOrganisationId).subscribe((data: GetProductCategories_Result[]) => {
      this.dataSource = data;
      this.categoryList = data;
      console.log(this.categoryList);
    })
  }

  editImage = (imageName: string) => {
    
  }

  addProductCategory = () => {
    let newCategory: UpsertProductCategoryViewModel;
    this.dialogs.openDialog(false, null).subscribe(data => {
      newCategory = {
        ProductCategory: data,
        EditMode: false
      }
      this.api.upsertProductCategory(newCategory).subscribe(innerData => {
        this.getProductCategories();
      })
    })
  }

  editProductCategory = (productCategory: GetProductCategories_Result) => {
    let editedCategory: UpsertProductCategoryViewModel;
    this.dialogs.openDialog(true, productCategory).subscribe(data => {
      editedCategory = {
        ProductCategory: data,
        EditMode: true
        // CurrentImageId:
      }
      this.api.upsertProductCategory(editedCategory).subscribe(innerData => {
        this.getProductCategories();
      })
    })
  }

}
