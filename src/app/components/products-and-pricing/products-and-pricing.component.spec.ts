import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndPricingComponent } from './products-and-pricing.component';

describe('ProductsAndPricingComponent', () => {
  let component: ProductsAndPricingComponent;
  let fixture: ComponentFixture<ProductsAndPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsAndPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAndPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
