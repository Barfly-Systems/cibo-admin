import { Component, OnInit, ɵConsole } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';
import { GetAllProducts_Result } from 'src/app/models/get-all-products-result.model';
import { StatusUpdate } from 'src/app/models/status-update.model';

@Component({
  selector: 'app-products-and-pricing',
  templateUrl: './products-and-pricing.component.html',
  styleUrls: ['./products-and-pricing.component.scss']
})
export class ProductsAndPricingComponent implements OnInit {

  dataSource: GetAllProducts_Result[] = [];
  displayedColumns: string[] = ['id', 'productName', 'productTypeName', 'actions'];

  constructor(private api: ApiService, private state: StateService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts = () => {
    console.log("I AM HERE");
    this.api.getAllProducts(this.state.getOrganisationId).subscribe((data: any) => {
      this.dataSource = data;
      console.log(this.dataSource);
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

}
