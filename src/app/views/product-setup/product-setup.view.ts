import { Component, OnInit } from '@angular/core';
import { StateService } from './../../services/state.service';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.view.html',
  styleUrls: ['./product-setup.view.scss']
})
export class ProductSetupView implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

}
