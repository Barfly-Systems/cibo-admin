import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';
import { GetAllProducts_Result } from 'src/app/models/get-all-products-result.model';
import { StatusUpdate } from 'src/app/models/status-update.model';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-products-and-pricing',
  templateUrl: './products-and-pricing.component.html',
  styleUrls: ['./products-and-pricing.component.scss']
})
export class ProductsAndPricingComponent implements OnInit {

  dataSource: GetAllProducts_Result[] = [];
  displayedColumns: string[] = ['id', 'productName', 'productTypeName', 'actions'];

  constructor(private api: ApiService, private state: StateService, private dialogs: DialogService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts = () => {
    this.api.getAllProducts(this.state.getOrganisationId, null).subscribe((data: any) => {
      this.dataSource = data;
    })
  }

  changeProductActivationStatus = (product: GetAllProducts_Result) => {
    let update: StatusUpdate = {
      id: product.id,
      status: !product.isActive
    }

    this.api.updateProductStatus(update).subscribe(data => {
      this.getAllProducts();
    })
  }

  addProduct = () => {
    this.dialogs.openProductAddEditDialog(false, null).subscribe(data => {
      console.log(data);
    })
  }

}
